import { RawEsoStatus } from '@eso-status/types';
import StatusIdentifier from './identifier/status.identifier';
import DateFormatter from './formatter/date.formatter';
import SlugMatch from './identifier/slug.match';
import { SourceUrl } from './type/sourceUrl.type';

/**
 * Class permettant de génération l'objet contenant les informations d'une annonce du forum ESO
 */
export default class Match {
  /**
   * @param url Url servant de source pour récupérer les annonces de maintenance
   * @param raw Donnée brute de l'annonce du forum ESO
   * @param statusIdentifier Donnée concernant le status
   * @param dateFormatter Données pour les dates
   * @param slugMatch Données pour le slug
   */
  constructor(
    private readonly url: SourceUrl,
    private readonly raw: string,
    private readonly statusIdentifier: StatusIdentifier,
    private readonly dateFormatter: DateFormatter,
    private readonly slugMatch: SlugMatch,
  ) {}

  /**
   * Méthode de génération de l'objet RawEsoStatus
   */
  public getRawEsoStatus(): RawEsoStatus {
    const rawEsoStatus: RawEsoStatus = {
      sources: [this.url],
      raw: [this.raw],
      slugs: [this.slugMatch.slug],
      type: this.slugMatch.getType(),
      support: this.slugMatch.getSupport(),
      zone: this.slugMatch.getZone(),
      status: this.statusIdentifier.status,
      rawSlug: this.slugMatch.rawSlug,
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
