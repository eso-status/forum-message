import { RawEsoStatus } from '@eso-status/types';
import ForumMessageConnector from './connectors/ForumMessageConnector';

export const ForumMessageURL = 'https://forums.elderscrollsonline.com/';
export const ForumMessagePTSURL = 'https://forums.elderscrollsonline.com/en/categories/pts';

/**
 * Class of Forum Message
 */
export class ForumMessage {
  /**
     * Methode used to get Forum Message data
     *
     * @public
     * @static
     *
     * @return Promise<RawEsoStatus[]> Forum Message elements
     */
  public static async getData(url: string = ForumMessageURL): Promise<RawEsoStatus[]> {
    const remoteContent: RawEsoStatus[] = await ForumMessageConnector.getRemoteContent(url);
    const slugOfRawContent: RawEsoStatus[] = ForumMessageConnector.getRawContentWithSlug(remoteContent);
    const rawContentBySlug: RawEsoStatus[] = ForumMessageConnector.splitRawContentBySlug(slugOfRawContent);
    const rawContentWithRawDate: RawEsoStatus[] = ForumMessageConnector.getRawContentWithRawDate(rawContentBySlug);
    const data: RawEsoStatus[] = ForumMessageConnector.getData(rawContentWithRawDate);
    return ForumMessageConnector.sortData(data);
  }
}
