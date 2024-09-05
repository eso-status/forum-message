import { RawEsoStatus } from '@eso-status/types/lib/interface/RawEsoStatus.interface';
import { ForumMessageURL } from './const';
import { SourceUrl } from './type/sourceUrl.type';
import Connector from './connector';

/**
 * Class for retrieving announcement information
 */
export default class ForumMessage {
  /**
   * Method for retrieving announcement information
   */
  public static async getData(): Promise<RawEsoStatus[]>;

  /**
   * Method for retrieving announcement information from a specific URL
   */
  public static async getData(url: SourceUrl): Promise<RawEsoStatus[]>;

  /**
   * Method for retrieving announcement information
   * If no URL is provided as a parameter, the method will return announcement information for https://forums.elderscrollsonline.com
   * @param url URL serving as the source to retrieve announcements
   */
  public static async getData(url?: SourceUrl): Promise<RawEsoStatus[]> {
    return (await Connector.init(url ?? ForumMessageURL)).rawEsoStatus;
  }
}
