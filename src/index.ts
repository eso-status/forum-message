import { RawEsoStatus } from '@eso-status/types';
import { ForumMessageURL } from './const';
import { SourceUrl } from './type/sourceUrl.type';
import Connector from './connector';

export default class ForumMessage {
  public static async getData(): Promise<RawEsoStatus[]>;
  public static async getData(url: SourceUrl): Promise<RawEsoStatus[]>;

  public static async getData(url?: SourceUrl): Promise<RawEsoStatus[]> {
    let urlToUsed: SourceUrl = url;
    if (!url) {
      urlToUsed = ForumMessageURL;
    }

    return (await Connector.init(urlToUsed)).rawEsoStatus;
  }
}
