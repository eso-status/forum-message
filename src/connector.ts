import axios, { AxiosResponse } from 'axios';
import { RawEsoStatus } from '@eso-status/types';
import { SourceUrl } from './type/sourceUrl.type';
import { MessageType } from './type/messageType.type';
import Match from './match';
import Raw from './raw';

/**
 * Class permettant de récupérer les informations des annonces du forum ESO
 */
export default class Connector {
  /**
   * Liste des données brutes des annonces du forum ESO
   * @private
   */
  private raw: string[];

  /**
   * Liste des informations des annonces du forum ESO
   */
  public rawEsoStatus: RawEsoStatus[];

  /**
   * @param url Url servant de source pour récupérer les annonces de maintenance
   * @param remoteContent Contenu de la source récupéré via url
   */
  constructor(
    private readonly url: SourceUrl,
    private readonly remoteContent: string,
  ) {
    this.raw = [];
    this.rawEsoStatus = [];

    this.getMessages();
    this.replace();
    this.split();
    this.filter();
    this.fetch();
  }

  /**
   * Méthode permettant de créer une instance du connecteur via une URL
   * @param url Url servant de source pour récupérer les annonces de maintenance
   */
  public static async init(url: SourceUrl): Promise<Connector> {
    return new Connector(url, await Connector.getRemoteContent(url));
  }

  /**
   * Méthode permettant de récupérer le contenu distant via une URL
   * @param url Url servant de source pour récupérer les annonces de maintenance
   * @private
   */
  private static async getRemoteContent(url: string): Promise<string> {
    const response: AxiosResponse<string> = await axios.get<string>(url);

    return response?.status === 200 && !!response?.data
      ? String(response?.data)
      : '';
  }

  /**
   * Méthode permettant de récupérer les annonces brutes de tous les niveaux d'annonces
   * @private
   */
  private getMessages(): void {
    ['WarningMessage', 'AlertMessage'].forEach((type: MessageType): void =>
      this.getMessagesByType(type),
    );
  }

  /**
   * Méthode permettant de récupérer les annonces brutes en fonction du niveau de l'annonce
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
   * Méthode permettant de formater les données brutes des annonces récupérer
   * @private
   */
  private replace(): void {
    this.raw = this.raw.map((raw: string): string =>
      raw.replace(/<br\/>\n/g, '<br>'),
    );
  }

  /**
   * Méthode permettant de séparer chaque message d'annonce
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
   * Methode permettant de supprimer les annonces inutiles
   * @private
   */
  private filter(): void {
    this.raw = this.raw.filter((raw: string): boolean => {
      return (
        !raw.includes('Maintenance for the week of ') &&
        !raw.includes('• PC/Mac: No maintenance – ')
      );
    });
  }

  /**
   * Méthode permettant de vérifier la présence d'information dans chaque annonce
   * @private
   */
  private fetch(): void {
    this.raw.forEach((raw: string): void => this.fetchEach(raw));
  }

  /**
   * Méthode permettant de vérifier la présence d'information dans une annonce
   * @param raw Donnée brute de l'annonce du forum ESO
   * @private
   */
  private fetchEach(raw: string): void {
    new Raw(this.url, raw).matches.forEach((match: Match): void =>
      this.populateRawEsoStatus(match),
    );
  }

  /**
   * Méthode permettant de compléter la liste des données à renvoyer contenant les informations des annonces du forum ESO
   * @param match Class contenant les informations d'une annonce du forum ESO
   * @private
   */
  private populateRawEsoStatus(match: Match): void {
    this.rawEsoStatus.push(match.getRawEsoStatus());
  }
}
