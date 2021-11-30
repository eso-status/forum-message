import axios, { AxiosResponse } from 'axios';
import {
  RawEsoStatus,
  Slug,
} from '@eso-status/types-dev';
import ForumMessageElement from '../classes/ForumMessageElement';

/**
 * Connector used to get data from https://forums.elderscrollsonline.com/ and https://forums.elderscrollsonline.com/en/categories/pts
 */
export default class ForumMessageConnector {
  /**
   * URLs to get remote content
   *
   * @public
   * @static
   *
   * @return string[] URLs to get remote content
   */
  public static urls = [
    'https://forums.elderscrollsonline.com/',
    'https://forums.elderscrollsonline.com/en/categories/pts',
  ];

  /**
   * Methode used to get the list of raw element from remote website
   *
   * @public
   * @static
   *
   * @return Promise<RawEsoStatus[]> List of raw element from remote website
   */
  public static async getRemoteContent(): Promise<RawEsoStatus[]> {
    const list: RawEsoStatus[] = [];

    let remoteContent: RawEsoStatus[] = await ForumMessageConnector.getRemoteContentByUrl(ForumMessageConnector.urls[0]);
    list.push(...remoteContent);

    remoteContent = await ForumMessageConnector.getRemoteContentByUrl(ForumMessageConnector.urls[1]);
    list.push(...remoteContent);

    return ForumMessageConnector.removeDuplicate(list);
  }

  /**
   * Methode used to get the list of raw element from remote specific url
   *
   * @public
   * @static
   *
   * @param url string Url to use to get list of raw element from remote specific url
   * @return Promise<RawEsoStatus[]> List of raw element from remote specific url
   */
  public static async getRemoteContentByUrl(url: string): Promise<RawEsoStatus[]> {
    const rawRemoteContent: string = await ForumMessageConnector.getRawRemoteContent(url);
    const rawWarningMessage: string = ForumMessageConnector.getRawWarningMessage(rawRemoteContent);
    const rawAlertMessage: string = ForumMessageConnector.getRawAlertMessage(rawRemoteContent);
    const mergedRawMessage: string = ForumMessageConnector.mergeRawMessage(rawWarningMessage, rawAlertMessage);
    const rawMessageSplit: string[] = ForumMessageConnector.splitRawMessage(mergedRawMessage);
    const sortedRawMessageList: string[] = ForumMessageConnector.sortRawMessageList(rawMessageSplit);

    return sortedRawMessageList.map((item: string): RawEsoStatus => ({
      sources: [url],
      raw: [item],
      slugs: [],
    }));
  }

  /**
   * Methode used to get raw content from remote specific url
   *
   * @public
   * @static
   *
   * @param url string Url to use to get list of raw element from remote specific url
   * @return Promise<string> Raw content from remote specific url
   */
  public static async getRawRemoteContent(url: string): Promise<string> {
    const response: AxiosResponse<string> = await axios.get<string>(url);

    return response?.status === 200 && !(!response?.data) ? String(response?.data) : '';
  }

  /**
   * Methode used to get raw warning message from raw content
   *
   * @public
   * @static
   *
   * @param rawRemoteContent string Raw content from remote specific url
   * @return string Raw warning message from raw content
   */
  public static getRawWarningMessage(rawRemoteContent: string): string {
    return rawRemoteContent.split('<div class="DismissMessage WarningMessage">')
      .filter((item: string, index: number): boolean => index !== 0)
      .map((item: string): string => {
        const resultRemoveAfter: string[] = item.split('</div>');

        if (resultRemoveAfter.length >= 2) {
          return resultRemoveAfter[0];
        }

        return '';
      })
      .join('<br />');
  }

  /**
   * Methode used to get raw alert message from raw content
   *
   * @public
   * @static
   *
   * @param rawRemoteContent string Raw content from remote specific url
   * @return string Raw alert message from raw content
   */
  public static getRawAlertMessage(rawRemoteContent: string): string {
    return rawRemoteContent.split('<div class="DismissMessage AlertMessage">')
      .filter((item: string, index: number): boolean => index !== 0)
      .map((item: string): string => {
        const resultRemoveAfter: string[] = item.split('</div>');

        if (resultRemoveAfter.length >= 2) {
          return resultRemoveAfter[0];
        }

        return '';
      })
      .join('<br />');
  }

  /**
   * Methode used to get merge off all message
   *
   * @public
   * @static
   *
   * @param rawMessages string[] All message
   * @return string Merge off all message
   */
  public static mergeRawMessage(...rawMessages: string[]): string {
    return rawMessages.join('<br />');
  }

  /**
   * Methode used to split raw content
   *
   * @public
   * @static
   *
   * @param mergedRawMessage string All message merged
   * @return string[] Split raw content
   */
  public static splitRawMessage(mergedRawMessage: string): string[] {
    const list: string[] = [];
    mergedRawMessage.split('<br />').forEach((item: string): void => {
      list.push(...item.split('<br>'));
    });

    return list;
  }

  /**
   * Methode used to sort raw content list
   *
   * @public
   * @static
   *
   * @param rawMessageSplit string Split raw content
   * @return string[] Sort raw content list
   */
  public static sortRawMessageList(rawMessageSplit: string[]): string[] {
    return rawMessageSplit
      .filter((item: string): boolean => item !== ''
      && !item.includes('Maintenance for the week')
      && !item.includes('No maintenance'))
      .map((item: string): string => {
        let line: string = item;
        line = line.replace('\n', '');
        return line;
      })
      .filter((item: string): boolean => item !== '' && item !== ' ');
  }

  /**
   * Methode used to remove duplicate of raw content
   *
   * @public
   * @static
   *
   * @param remoteContent RawEsoStatus[] List of raw element from remote website
   * @return RawEsoStatus[] Raw content list without duplicate
   */
  public static removeDuplicate(remoteContent: RawEsoStatus[]): RawEsoStatus[] {
    const list: RawEsoStatus[] = [];

    remoteContent.forEach((item: RawEsoStatus): void => {
      if (list[item.raw[0]] === undefined) {
        list[item.raw[0]] = item;
      } else {
        list[item.raw[0]].sources.push(item.sources[0]);
      }
    });

    return Object.values(<any>list);
  }

  /**
   * Methode used to get slug for raw content list
   *
   * @public
   * @static
   *
   * @param remoteContent RawEsoStatus[] Raw content list without duplicate
   * @return RawEsoStatus[] Raw content list with slug list
   */
  public static getRawContentWithSlug(remoteContent: RawEsoStatus[]): RawEsoStatus[] {
    return remoteContent.map((item: RawEsoStatus): RawEsoStatus => ({
      sources: item.sources,
      raw: item.raw,
      slugs: ForumMessageElement.getSlug(item.raw[0]),
    }));
  }

  /**
   * Methode used to split list by slug
   *
   * @public
   * @static
   *
   * @param slugOfRawContent RawEsoStatus[] Raw content list with slug list
   * @return RawEsoStatus[] Raw content list foreach slug
   */
  public static splitRawContentBySlug(slugOfRawContent: RawEsoStatus[]): RawEsoStatus[] {
    const list: RawEsoStatus[] = [];
    slugOfRawContent.forEach((item: RawEsoStatus): void => {
      item.slugs?.forEach((slug: Slug): void => {
        list.push({
          sources: item.sources,
          raw: item.raw,
          slugs: [slug],
        });
      });
    });

    return list;
  }

  /**
   * Methode used to get raw date for raw content list
   *
   * @public
   * @static
   *
   * @param rawContentBySlug RawEsoStatus[] Raw content list foreach slug
   * @return RawEsoStatus[] Raw content list with raw date
   */
  public static getRawContentWithRawDate(rawContentBySlug: RawEsoStatus[]): RawEsoStatus[] {
    return rawContentBySlug.map((item: RawEsoStatus): RawEsoStatus => ({
      sources: item.sources,
      raw: item.raw,
      slugs: item.slugs,
      rawDate: ForumMessageElement.getRawDate(item.raw[0]),
    }));
  }

  /**
   * Methode used to get data for each raw element
   *
   * @public
   * @static
   *
   * @param rawContentWithRawDate RawEsoStatus[] Raw content list with raw date
   * @return RawEsoStatus[] Raw content list with data
   */
  public static getData(rawContentWithRawDate: RawEsoStatus[]): RawEsoStatus[] {
    return rawContentWithRawDate.map((item: RawEsoStatus): RawEsoStatus => ({
      sources: item.sources,
      raw: item.raw,
      slugs: item.slugs,
      rawDate: item.rawDate,
      dates: ForumMessageElement.getDate(item.rawDate ?? ''),
      type: ForumMessageElement.getType(item.slugs ? item.slugs[0] : 'undefined'),
      support: ForumMessageElement.getSupport(item.slugs ? item.slugs[0] : 'undefined'),
      zone: ForumMessageElement.getZone(item.slugs ? item.slugs[0] : 'undefined'),
      status: ForumMessageElement.getStatus(item.raw[0]),
    }));
  }

  /**
   * Methode used to get data sort by status
   *
   * @public
   * @static
   *
   * @param data RawEsoStatus[] Raw content list with data
   * @return RawEsoStatus[] Data sorted by status
   */
  public static sortData(data: RawEsoStatus[]): RawEsoStatus[] {
    return data.filter((item: RawEsoStatus): boolean => {
      if (data.filter((i: RawEsoStatus): boolean => JSON.stringify(i.slugs) === JSON.stringify(item.slugs)).length !== 1) {
        if (item.raw.includes('will be taken offline for maintenance') && data.filter((i: RawEsoStatus): boolean => JSON.stringify(i.slugs) === JSON.stringify(item.slugs) && i.raw.includes('is currently unavailable')).length !== 0) {
          return false;
        }

        if (item.raw.includes('[IN PROGRESS]') && data.filter((i: RawEsoStatus): boolean => JSON.stringify(i.slugs) === JSON.stringify(item.slugs) && i.raw.includes('[COMPLETE]')).length !== 0) {
          return false;
        }

        if (item.status === 'planned' && data.filter((i: RawEsoStatus): boolean => JSON.stringify(i.slugs) === JSON.stringify(item.slugs) && i.raw.includes('[IN PROGRESS]')).length !== 0) {
          return false;
        }

        if (item.raw.includes('resolved at this time') && data.filter((i: RawEsoStatus): boolean => JSON.stringify(i.slugs) === JSON.stringify(item.slugs) && i.raw.includes('[IN PROGRESS]')).length !== 0) {
          return false;
        }
      }

      if (item.raw.includes('<a')) {
        return false;
      }

      return true;
    });
  }
}
