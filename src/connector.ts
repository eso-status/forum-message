import axios, { AxiosResponse } from 'axios';
import { RawEsoStatus } from '@eso-status/types';
import { SourceUrl } from './type/sourceUrl.type';
import { MessageType } from './type/messageType.type';
import Raw from './raw';

/**
 * Class permettant de récupérer les informations des annonces
 */
export default class Connector {
  /**
   * Liste des données brutes des annonces
   * @private
   */
  public raw: string[];

  /**
   * Liste des informations des annonces
   */
  public rawEsoStatus: RawEsoStatus[];

  /**
   * @param url Url servant de source pour récupérer les annonces
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
   * @param url Url servant de source pour récupérer les annonces
   */
  public static async init(url: SourceUrl): Promise<Connector> {
    return new Connector(url, await Connector.getRemoteContent(url));
  }

  /**
   * Méthode permettant de récupérer le contenu distant via une URL
   * @param url Url servant de source pour récupérer les annonces
   * @private
   */
  private static async getRemoteContent(url: string): Promise<string> {
    const response: AxiosResponse<string> = await axios.get<string>(url);

    return response?.status === 200 && !!response?.data
      ? String(response?.data)
      : '';
  }

  /**
   * Méthode permettant de récupérer les annonces brutes pour tous les niveaux d'annonces
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
    this.raw = this.raw.map((raw: string): string => {
      let initialRaw: string = raw;
      initialRaw = initialRaw.replace(/<br\/>\n/g, '<br>');
      return initialRaw.replace('. ', '.');
    });
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
        !raw.includes('• PC/Mac: No maintenance – ') &&
        raw !== ''
      );
    });
  }

  /**
   * Méthode permettant d'analyser chaque annonce
   * @private
   */
  private fetch(): void {
    this.raw.forEach((raw: string): void => this.fetchEach(raw));
  }

  /**
   * Méthode permettant de récupérer les informations contenue dans une annonce
   * @param raw Donnée brute de l'annonce
   * @private
   */
  private fetchEach(raw: string): void {
    new Raw(this.url, raw).matches.forEach((match: RawEsoStatus): void => {
      this.rawEsoStatus.push(match);
    });
  }
}
