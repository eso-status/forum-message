import { RawEsoStatus, Slug } from '@eso-status/types';
import StatusIdentifier from './identifier/status.identifier';
import DateFormatter from './formatter/date.formatter';
import SlugMatch from './identifier/slug.match';
import { SourceUrl } from './type/sourceUrl.type';

export default class Match {
  public slug: Slug;

  constructor(
    private readonly url: SourceUrl,
    private readonly raw: string,
    private readonly statusIdentifier: StatusIdentifier,
    private readonly dateFormatter: DateFormatter,
    private readonly slugMatch: SlugMatch,
  ) {
    this.slug = slugMatch.slug;
  }

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
