import StatusIdentifier from './identifier/status.identifier';
import DateFormatter from './formatter/date.formatter';
import SlugIdentifier from './identifier/slug.identifier';
import Match from './match';
import SlugMatch from './identifier/slug.match';
import { SourceUrl } from './type/sourceUrl.type';

/**
 * Méthode de récupération des informations pour une annonce du forum ESO
 */
export default class Raw {
  /**
   * Classe d'identification du statut
   * @private
   */
  private readonly statusIdentifier: StatusIdentifier;

  /**
   * Classe d'identification et de mise au bon format de la/des dates
   * @private
   */
  private readonly dateFormatter: DateFormatter;

  /**
   * Classe d'identification de la liste des slugs
   * @private
   */
  private slugsIdentifier: SlugIdentifier;

  /**
   * Liste des correspondances contenue dans l'annonce du forum ESO
   */
  public matches: Match[] = [];

  /**
   * @param url Url servant de source pour récupérer les annonces de maintenance
   * @param raw Donnée brute de l'annonce du forum ESO
   */
  constructor(
    private url: SourceUrl,
    private raw: string,
  ) {
    this.statusIdentifier = new StatusIdentifier(this.raw);
    this.dateFormatter = new DateFormatter(this.raw);
    this.slugsIdentifier = new SlugIdentifier(this.raw);

    this.split();
  }

  /**
   * Méthode d'exploration des données des correspondances trouvée pour l'annonce du forum ESO
   * @private
   */
  private split(): void {
    this.matches = this.slugsIdentifier.slugMatches.map(
      (slugMatch: SlugMatch): Match => this.getMatch(slugMatch),
    );
  }

  /**
   * Méthode de création de la correspondance
   * @param slugMatch
   * @private
   */
  private getMatch(slugMatch: SlugMatch): Match {
    return new Match(
      this.url,
      this.raw,
      this.statusIdentifier,
      this.dateFormatter,
      slugMatch,
    );
  }
}
