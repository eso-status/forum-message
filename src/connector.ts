import axios, { AxiosResponse } from 'axios';
import { RawEsoStatus } from '@eso-status/types';
import { SourceUrl } from './type/sourceUrl.type';
import { MessageType } from './type/messageType.type';
import Match from './match';
import Raw from './raw';

export default class Connector {
  private raw: string[];

  public rawEsoStatus: RawEsoStatus[];

  constructor(
    private readonly url: SourceUrl,
    private readonly remoteContent: string,
  ) {
    this.raw = [];
    this.rawEsoStatus = [];

    this.getMessages();
    this.clean();
    this.split();
    this.filter();
    this.get();
  }

  public static async init(url: SourceUrl): Promise<Connector> {
    return new Connector(url, await Connector.getRemoteContent(url));
  }

  private static async getRemoteContent(url: string): Promise<string> {
    const response: AxiosResponse<string> = await axios.get<string>(url);

    return response?.status === 200 && !!response?.data
      ? String(response?.data)
      : '';
  }

  private split(): void {
    const rawList: string[] = this.raw;
    this.raw = [];

    rawList.forEach((raw: string): void => {
      raw.split('<br>').forEach((split: string): void => {
        this.raw.push(split);
      });
    });
  }

  private clean(): void {
    this.raw = this.raw.map((raw: string): string => {
      return raw.replace(/<br\/>\n/g, '<br>');
    });
  }

  private filter(): void {
    this.raw = this.raw.filter((raw: string): boolean => {
      return (
        !raw.includes('Maintenance for the week of ') &&
        !raw.includes('• PC/Mac: No maintenance – ')
      );
    });
  }

  private getMessages(): void {
    ['WarningMessage', 'AlertMessage'].forEach((type: MessageType): void =>
      this.getMessagesByType(type),
    );
  }

  private getMessagesByType(type: MessageType): void {
    this.remoteContent
      .split(`<div class="DismissMessage ${type}">`)
      .forEach((item: string): void => {
        const result: string[] = item.split('</div>');

        if (result.length >= 2) {
          this.raw.push(result[0]);
        }
      });
  }

  private get(): void {
    this.raw.forEach((raw: string): void => this.getEach(raw));
  }

  private getEach(raw: string): void {
    new Raw(this.url, raw).matches.forEach((match: Match): void =>
      this.populateRawEsoStatus(match),
    );
  }

  private populateRawEsoStatus(match: Match): void {
    this.rawEsoStatus.push(match.getRawEsoStatus());
  }
}
