import StatusIdentifier from './identifier/status.identifier';
import DateFormatter from './formatter/date.formatter';
import SlugIdentifier from './identifier/slug.identifier';
import SlugMatch from './identifier/slug.match';
import { SourceUrl } from './type/sourceUrl.type';
import { RawEsoStatus } from './interface/rawEsoStatus.interface';

/**
 * Class containing announcement information
 */
export default class Raw {
  /**
   * Status identification class
   * @private
   */
  private readonly statusIdentifier: StatusIdentifier;

  /**
   * Class for identifying and formatting the date(s)
   * @private
   */
  private readonly dateFormatter: DateFormatter;

  /**
   * Class for identifying the list of slugs
   * @private
   */
  private slugsIdentifier: SlugIdentifier;

  /**
   * List of information about slugs found in the announcement
   */
  public matches: RawEsoStatus[] = [];

  /**
   * @param url URL used as the source to retrieve announcements
   * @param raw Raw data of the announcement
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
   * Method for formatting each slug found in the announcement to RawEsoStatus
   * @private
   */
  private split(): void {
    this.matches = this.slugsIdentifier.slugMatches.map(
      (slugMatch: SlugMatch): RawEsoStatus => this.getRawEsoStatus(slugMatch),
    );
  }

  /**
   * Method for generating the RawEsoStatus object
   */
  private getRawEsoStatus(slugMatch: SlugMatch): RawEsoStatus {
    const rawEsoStatus: RawEsoStatus = {
      source: this.url,
      raw: this.raw,
      slug: slugMatch.slug,
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
