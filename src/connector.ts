import axios, { AxiosResponse } from 'axios';
import { SourceUrl } from './type/sourceUrl.type';
import { MessageType } from './type/messageType.type';
import Raw from './raw';
import { EsoStatusRawData } from './interface/esoStatusRawData.interface';

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
  public rawEsoStatus: EsoStatusRawData[] = [];

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
    ['AlertMessage', 'WarningMessage'].forEach((type: MessageType): void =>
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
    const list: string[] = [];

    this.raw.forEach((raw: string): void => {
      raw.split('<br').forEach((line: string): void => {
        const split: string[] = line.split('/>');
        list.push(split.join(''));
      });
    });

    this.raw = list.map((raw: string): string => {
      let initialRaw: string = raw;
      initialRaw = initialRaw.replace(' 。', '');
      initialRaw = initialRaw.replace(/\n/g, '');
      initialRaw = initialRaw.replace(/<br\/>\n/g, '<br>');
      initialRaw = initialRaw.replace(' Thank you for your patience.', '');
      initialRaw = initialRaw.replace(
        ' We will update as new information becomes available.',
        '',
      );
      initialRaw = initialRaw.replace(
        ' If you continue to experience difficulties at login, please restart your client. Thank you for your patience!',
        '',
      );

      if (initialRaw.includes('\t')) {
        const split: string[] = initialRaw.split('\t');
        if (split[0] === ' ') {
          return split[1];
        }
        if (split[0].includes('•')) {
          return `• ${split[1]}`;
        }
      }

      if (initialRaw.endsWith(' ')) {
        initialRaw = initialRaw.substring(0, initialRaw.length - 1);
      }

      if (
        initialRaw.includes('. Please check here for status updates: <a href')
      ) {
        return initialRaw.split(
          ' Please check here for status updates: <a href',
        )[0];
      }

      if (initialRaw.includes(' <a href')) {
        return initialRaw.split(' <a href')[0];
      }

      return initialRaw;
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
        !raw.includes('Mantenimiento de la semana del ') &&
        !raw.includes('• PC/Mac: No maintenance – ') &&
        !raw.includes('hora peninsular') &&
        raw !== '' &&
        !raw.startsWith('<') &&
        !raw.endsWith('>')
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
    new Raw(this.url, raw).matches.forEach((match: EsoStatusRawData): void => {
      this.rawEsoStatus.push(match);
    });
  }
}
