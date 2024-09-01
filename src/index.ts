import { RawEsoStatus } from '@eso-status/types';
import { ForumMessageURL } from './const';
import { SourceUrl } from './type/sourceUrl.type';
import Connector from './connector';

/**
 * Class permettant de récupérer les informations des annonces de maintenance
 */
export default class ForumMessage {
  /**
   * Méthode permettant de récupérer les informations des annonces de maintenance
   */
  public static async getData(): Promise<RawEsoStatus[]>;

  /**
   * Méthode permettant de récupérer les informations des annonces de maintenance depuis une URL specific
   */
  public static async getData(url: SourceUrl): Promise<RawEsoStatus[]>;

  /**
   * Méthode permettant de récupérer les informations des annonces de maintenance
   * Dans le cas où l'on ne passe pas d'URL en paramètre, la méthode va retourner les informations des annonces pour https://forums.elderscrollsonline.com
   * @param url Url servant de source pour récupérer les annonces de maintenance
   */
  public static async getData(url?: SourceUrl): Promise<RawEsoStatus[]> {
    return (await Connector.init(url ?? ForumMessageURL)).rawEsoStatus;
  }
}
