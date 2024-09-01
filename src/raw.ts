import StatusIdentifier from './identifier/status.identifier';
import DateFormatter from './formatter/date.formatter';
import SlugIdentifier from './identifier/slug.identifier';
import Match from './match';
import SlugMatch from './identifier/slug.match';
import { SourceUrl } from './type/sourceUrl.type';

export default class Raw {
  public statusIdentifier: StatusIdentifier;

  public dateFormatter: DateFormatter;

  public slugsIdentifier: SlugIdentifier;

  public matches: Match[] = [];

  constructor(
    private url: SourceUrl,
    private raw: string,
  ) {
    this.statusIdentifier = new StatusIdentifier(this.raw);
    this.dateFormatter = new DateFormatter(this.raw);
    this.slugsIdentifier = new SlugIdentifier(this.raw);

    this.split();
  }

  private split(): void {
    this.matches = this.slugsIdentifier.slugMatches.map(
      (slugMatch: SlugMatch): Match => this.getMatch(slugMatch),
    );
  }

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
