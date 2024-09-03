import { RawEsoStatus } from '@eso-status/types';
import StatusIdentifier from './identifier/status.identifier';
import DateFormatter from './formatter/date.formatter';
import SlugIdentifier from './identifier/slug.identifier';
import SlugMatch from './identifier/slug.match';
import { SourceUrl } from './type/sourceUrl.type';

/**
 * Méthode de récupération des informations pour une annonce
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
   * Liste des informations sur les slugs trouvé dans l'annonce
   */
  public matches: RawEsoStatus[] = [];

  /**
   * @param url Url servant de source pour récupérer les annonces
   * @param raw Donnée brute de l'annonce
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
   * Méthode de mise au format RawEsoStatus pour chaque slug trouvé dans l'annonce
   * @private
   */
  private split(): void {
    this.matches = this.slugsIdentifier.slugMatches.map(
      (slugMatch: SlugMatch): RawEsoStatus => this.getRawEsoStatus(slugMatch),
    );
  }

  /**
   * Méthode de génération de l'objet RawEsoStatus
   */
  private getRawEsoStatus(slugMatch: SlugMatch): RawEsoStatus {
    const rawEsoStatus: RawEsoStatus = {
      sources: [this.url],
      raw: [this.raw],
      slugs: [slugMatch.slug],
      type: slugMatch.getType(),
      support: slugMatch.getSupport(),
      zone: slugMatch.getZone(),
      status: this.statusIdentifier.status,
      rawSlug: slugMatch.rawSlug,
    };

    if (this.dateFormatter.rawDate) {
      rawEsoStatus.rawDate = this.dateFormatter.rawDate;
      rawEsoStatus.dates = this.dateFormatter.dates;
    }

    if (this.statusIdentifier.rawStatus) {
      rawEsoStatus.rawStatus = this.statusIdentifier.rawStatus;
    }

    return rawEsoStatus;
  }
}
