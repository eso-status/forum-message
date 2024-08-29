import axios, { AxiosResponse } from 'axios';
import { RawEsoStatus, Support, Type, Zone } from '@eso-status/types';
import { SourceUrl } from './type/sourceUrl.type';
import { SlugIdentify } from './interface/slugIdentify.interface';
import DateFormatter from './formatter/date.formatter';
import StatusIdentifier from './identifier/status.identifier';
import SlugIdentifier from './identifier/slug.identifier';

export default class Connector {
  private raw: string[];

  public rawEsoStatus: RawEsoStatus[];

  constructor(
    private readonly url: SourceUrl,
    private readonly remoteContent: string,
  ) {
    this.raw = [];
    this.rawEsoStatus = [];

    this.getWarningMessages();
    this.getAlertMessages();
    // this.getCasualMessages();
    this.cleanRaw();
    this.splitRaw();
    this.filterRaw();
    this.getData();
  }

  public static async init(url: SourceUrl): Promise<Connector> {
    return new Connector(url, await Connector.getRemoteContent(url));
  }

  public static async getRemoteContent(url: string): Promise<string> {
    const response: AxiosResponse<string> = await axios.get<string>(url);

    return response?.status === 200 && !!response?.data
      ? String(response?.data)
      : '';
  }

  public getData(): void {
    this.raw.forEach((raw: string): void => {
      const statusIdentifier: StatusIdentifier = new StatusIdentifier(raw);
      const slugIdentifier: SlugIdentifier = new SlugIdentifier(raw);
      const dateFormatter: DateFormatter = new DateFormatter(raw);

      slugIdentifier.slugIdentified.forEach(
        (slugIdentify: SlugIdentify): void => {
          const rawEsoStatus: RawEsoStatus = {
            sources: [this.url],
            raw: [raw],
            slugs: [slugIdentify.slug],
            type: <Type>slugIdentify.slug.split('_')[0],
            support: <Support>slugIdentify.slug.split('_')[1],
            zone: <Zone>slugIdentify.slug.split('_')[2],
            status: statusIdentifier.status,
            rawSlug: slugIdentify.rawSlug,
          };

          if (dateFormatter.rawDate !== undefined) {
            rawEsoStatus.rawDate = dateFormatter.rawDate;
            rawEsoStatus.dates = dateFormatter.dates;
          }
          if (statusIdentifier.rawStatus !== undefined) {
            rawEsoStatus.rawStatus = statusIdentifier.rawStatus;
          }
          this.rawEsoStatus.push(rawEsoStatus);
        },
      );
    });
  }

  public splitRaw(): void {
    const rawList: string[] = this.raw;
    this.raw = [];

    rawList.forEach((raw: string): void => {
      raw.split('<br>').forEach((split: string): void => {
        this.raw.push(split);
      });
    });
  }

  public cleanRaw(): void {
    this.raw = this.raw.map((raw: string): string => {
      return raw.replace(/<br\/>\n/g, '<br>');
    });
  }

  public filterRaw(): void {
    let rawList: string[] = this.raw;
    this.raw = [];

    rawList = rawList.filter((raw: string): boolean => {
      return (
        raw !== '' &&
        !raw.includes('Maintenance for the week of ') &&
        !raw.includes('• PC/Mac: No maintenance – ')
      );
    });

    this.raw = rawList;
  }

  public getWarningMessages(): void {
    this.remoteContent
      .split('<div class="DismissMessage WarningMessage">')
      .filter((item: string, index: number): boolean => index !== 0)
      .forEach((item: string): void => {
        const resultRemoveAfter: string[] = item.split('</div>');

        if (resultRemoveAfter.length >= 2) {
          this.raw.push(resultRemoveAfter[0]);
        }
      });
  }

  public getAlertMessages(): void {
    this.remoteContent
      .split('<div class="DismissMessage AlertMessage">')
      .filter((item: string, index: number): boolean => index !== 0)
      .forEach((item: string): void => {
        const resultRemoveAfter: string[] = item.split('</div>');

        if (resultRemoveAfter.length >= 2) {
          this.raw.push(resultRemoveAfter[0]);
        }
      });
  }

  // public getCasualMessages(): void {
  //   this.remoteContent
  //     .split('<div class="DismissMessage CasualMessage">')
  //     .filter((item: string, index: number): boolean => index !== 0)
  //     .forEach((item: string): void => {
  //       const resultRemoveAfter: string[] = item.split('</div>');
  //
  //       if (resultRemoveAfter.length >= 2) {
  //         this.raw.push(resultRemoveAfter[0]);
  //       }
  //     });
  // }
}
