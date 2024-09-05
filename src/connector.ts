import axios, { AxiosResponse } from 'axios';
import { RawEsoStatus } from '@eso-status/types';
import { SourceUrl } from './type/sourceUrl.type';
import { MessageType } from './type/messageType.type';
import Raw from './raw';

/**
 * Class for retrieving information from announcements
 */
export default class Connector {
  /**
   * List of raw data from announcements
   */
  public raw: string[] = [];

  /**
   * List of information from announcements
   */
  public rawEsoStatus: RawEsoStatus[] = [];

  /**
   * @param url URL used as the source to retrieve announcements
   * @param remoteContent Content of the source retrieved via URL
   */
  constructor(
    private readonly url: SourceUrl,
    private readonly remoteContent: string,
  ) {
    this.getMessages();
    this.replace();
    this.split();
    this.filter();
    this.fetch();
  }

  /**
   * Method for creating an instance of the connector via a URL
   * @param url URL used as the source to retrieve announcements
   */
  public static async init(url: SourceUrl): Promise<Connector> {
    return new Connector(url, await Connector.getRemoteContent(url));
  }

  /**
   * Method for retrieving remote content via a URL
   * @param url URL serving as the source for retrieving announcements
   * @private
   */
  private static async getRemoteContent(url: string): Promise<string> {
    const response: AxiosResponse<string> = await axios.get<string>(url);

    return response?.status === 200 && !!response?.data
      ? String(response?.data)
      : '';
  }

  /**
   * Method for retrieving raw announcements for all announcement levels
   * @private
   */
  private getMessages(): void {
    ['WarningMessage', 'AlertMessage'].forEach((type: MessageType): void =>
      this.getMessagesByType(type),
    );
  }

  /**
   * Method for retrieving raw announcements based on the announcement level
   * @private
   */
  private getMessagesByType(type: MessageType): void {
    const split: string[] = this.remoteContent.split(
      `<div class="DismissMessage ${type}">`,
    );
    split.shift();
    split.forEach((item: string): void => {
      const result: string[] = item.split('</div>');

      if (result.length >= 2) {
        this.raw.push(result[0]);
      }
    });
  }

  /**
   * Method for formatting the raw data of retrieved announcements
   * @private
   */
  private replace(): void {
    this.raw = this.raw.map((raw: string): string => {
      let initialRaw: string = raw;
      initialRaw = initialRaw.replace(/<br\/>\n/g, '<br>');
      return initialRaw.replace('. ', '.');
    });
  }

  /**
   * Method for separating each announcement message
   */
  private split(): void {
    const rawList: string[] = this.raw;
    this.raw = [];

    rawList.forEach((raw: string): void => {
      raw.split('<br>').forEach((split: string): void => {
        this.raw.push(split);
      });
    });
  }

  /**
   * Method for removing unnecessary announcements
   * @private
   */
  private filter(): void {
    this.raw = this.raw.filter((raw: string): boolean => {
      return (
        !raw.includes('Maintenance for the week of ') &&
        !raw.includes('• PC/Mac: No maintenance – ') &&
        raw !== ''
      );
    });
  }

  /**
   * Method for analyzing each announcement
   * @private
   */
  private fetch(): void {
    this.raw.forEach((raw: string): void => this.fetchEach(raw));
  }

  /**
   * Method for retrieving the information contained in an announcement
   * @param raw Raw data of the announcement
   * @private
   */
  private fetchEach(raw: string): void {
    new Raw(this.url, raw).matches.forEach((match: RawEsoStatus): void => {
      this.rawEsoStatus.push(match);
    });
  }
}
