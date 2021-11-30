import { RawEsoStatus } from '@eso-status/types';
import ForumMessageConnector from './connectors/ForumMessageConnector';

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
  public static async getData(): Promise<RawEsoStatus[]> {
    const remoteContent: RawEsoStatus[] = await ForumMessageConnector.getRemoteContent();
    const slugOfRawContent: RawEsoStatus[] = ForumMessageConnector.getRawContentWithSlug(remoteContent);
    const rawContentBySlug: RawEsoStatus[] = ForumMessageConnector.splitRawContentBySlug(slugOfRawContent);
    const rawContentWithRawDate: RawEsoStatus[] = ForumMessageConnector.getRawContentWithRawDate(rawContentBySlug);
    const data: RawEsoStatus[] = ForumMessageConnector.getData(rawContentWithRawDate);
    return ForumMessageConnector.sortData(data);
  }
}
