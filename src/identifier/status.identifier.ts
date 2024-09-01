import { Status } from '@eso-status/types';
import { RemoteRawStatus } from '../type/remoteRawStatus.type';
import { RemoteUpRawStatus } from '../type/remoteUpRawStatus.type';
import { RemoteDownRawStatus } from '../type/remoteDownRawStatus.type';
import { RemotePlannedRawStatus } from '../type/remotePlannedRawStatus.type';

/**
 * Class permettant d'identifier le status contenu dans une annonce
 */
export default class StatusIdentifier {
  /**
   * Donnée ayant permis d'identifier la présence du status dans l'annonce
   */
  public rawStatus: RemoteRawStatus;

  /**
   * Status trouvé dans l'annonce
   */
  public status: Status;

  /**
   * Liste des status dont on doit tester la présence dans l'annonce
   * @private
   */
  private readonly statusList: Status[] = ['up', 'down', 'planned'];

  /**
   * Liste des indicateurs permettant de prouver que l'annonce concerne le status up
   * @private
   */
  private readonly upMatchesList: RemoteUpRawStatus[] = [
    '[COMPLETE]',
    'now available',
    'complete',
  ];

  /**
   * Liste des indicateurs permettant de prouver que l'annonce concerne le status down
   * @private
   */
  private readonly downMatchesList: RemoteDownRawStatus[] = [
    '[EXTENDED]',
    '[IN PROGRESS]',
    'unavailable',
  ];

  /**
   * Liste des indicateurs permettant de prouver que l'annonce concerne le status planned
   * @private
   */
  private readonly plannedMatchesList: RemotePlannedRawStatus[] = [
    'We will be performing maintenance',
  ];

  /**
   * @param raw Donnée brute de l'annonce
   */
  constructor(private readonly raw: string) {
    this.statusList.forEach((status: Status): void => this.identify(status));

    this.default();
  }

  /**
   * Methode permettant de récupérer la liste des indicateurs pour un statut donnée
   * @param status Status à tester
   * @private
   */
  private getMatchList(status: Status): RemoteRawStatus[] {
    return <RemoteRawStatus[]>this[`${status}MatchesList`];
  }

  /**
   * Méthode permettant de tester l'ensemble des statuts
   * @param status Status à tester
   * @private
   */
  private getMatches(status: Status): RemoteRawStatus[] {
    return this.getMatchList(status).filter(
      (identifier: RemoteRawStatus): boolean => this.raw.includes(identifier),
    );
  }

  /**
   * Méthode permettant de tester un statut avec les indicateurs pour un statut donnée
   * @param status Status à tester
   * @private
   */
  private identify(status: Status): void {
    const matches: RemoteRawStatus[] = this.getMatches(status);
    if (matches.length > 0) {
      this.rawStatus = matches.shift();
      this.status = status;
    }
  }

  private default(): void {
    if (!this.status) {
      this.status = 'planned';
    }
  }
}
