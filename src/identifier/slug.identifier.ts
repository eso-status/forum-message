import {
  ServerPcEuSlug,
  ServerPcNaSlug,
  ServerPcPtsSlug,
  ServerPsEuSlug,
  ServerPsNaSlug,
  ServerXboxEuSlug,
  ServerXboxNaSlug,
  ServiceStoreEsoSlug,
  ServiceSystemAccountSlug,
  ServiceWebSiteSlug,
  Slug,
  Support,
  Type,
  Zone,
} from '@eso-status/types';
import { RemoteRawSlug } from '../type/remoteRawSlug.type';
import { RemoteServerPcNaRawSlug } from '../type/remoteServerPcNaRawSlug.type';
import { RemoteServerPcEuRawSlug } from '../type/remoteServerPcEuRawSlug.type';
import { RemoteServerPcPtsRawSlug } from '../type/remoteServerPcPtsRawSlug.type';
import { RemoteServerPsEuRawSlug } from '../type/remoteServerPsEuRawSlug.type';
import { RemoteServerPsNaRawSlug } from '../type/remoteServerPsNaRawSlug.type';
import { RemoteServerXboxEuRawSlug } from '../type/remoteServerXboxEuRawSlug.type';
import { RemoteServerXboxNaRawSlug } from '../type/remoteServerXboxNaRawSlug.type';
import { RemoteServiceStoreEsoRawSlug } from '../type/remoteServiceStoreEsoRawSlug.type';
import { RemoteServiceSystemAccountRawSlug } from '../type/remoteServiceSystemAccountRawSlug.type';
import { RemoteServiceWebSiteRawSlug } from '../type/remoteServiceWebSiteRawSlug.type';
import SlugMatch from './slug.match';
import { MatchesList } from '../type/matchesList.type';
import ServerPcEuSlugIdentifierPattern from '../pattern/slugIdentifier/serverPcEuSlugIdentifier.pattern';
import ServerPcNaSlugIdentifierPattern from '../pattern/slugIdentifier/serverPcNaSlugIdentifier.pattern';
import ServerPcPtsSlugIdentifierPattern from '../pattern/slugIdentifier/serverPcPtsSlugIdentifier.pattern';
import ServerPsEuSlugIdentifierPattern from '../pattern/slugIdentifier/serverPsEuSlugIdentifier.pattern';
import ServerPsNaSlugIdentifierPattern from '../pattern/slugIdentifier/serverPsNaSlugIdentifier.pattern';
import ServerXboxEuSlugIdentifierPattern from '../pattern/slugIdentifier/serverXboxEuSlugIdentifier.pattern';
import ServerXboxNaSlugIdentifierPattern from '../pattern/slugIdentifier/serverXboxNaSlugIdentifier.pattern';
import ServiceStoreEsoSlugIdentifierPattern from '../pattern/slugIdentifier/serviceStoreEsoSlugIdentifier.pattern';
import ServiceSystemAccountSlugIdentifierPattern from '../pattern/slugIdentifier/serviceSystemAccountSlugIdentifier.pattern';
import ServiceWebSiteSlugIdentifierPattern from '../pattern/slugIdentifier/serviceWebSiteSlugIdentifier.pattern';

/**
 * Class for identifying the list of slugs contained in an announcement
 */
export default class SlugIdentifier {
  /**
   * List of slug information found in the announcement
   */
  public slugMatches: SlugMatch[];

  /**
   * List of slugs to check for presence in the announcement
   * @private
   */
  private readonly slugList: Slug[] = [
    ServerPcEuSlug,
    ServerPcNaSlug,
    ServerPcPtsSlug,
    ServerPsEuSlug,
    ServerPsNaSlug,
    ServerXboxEuSlug,
    ServerXboxNaSlug,
    ServiceStoreEsoSlug,
    ServiceSystemAccountSlug,
    ServiceWebSiteSlug,
  ];

  /**
   * List of indicators proving that the announcement pertains to the slug server_pc_eu
   * @private
   */
  private readonly ServerPcEuMatchesList: [
    RegExp,
    RemoteServerPcEuRawSlug | RemoteServerPcEuRawSlug[],
  ][] = ServerPcEuSlugIdentifierPattern;

  /**
   * List of indicators proving that the announcement pertains to the slug server_pc_na
   * @private
   */
  private readonly ServerPcNaMatchesList: [
    RegExp,
    RemoteServerPcNaRawSlug | RemoteServerPcNaRawSlug[],
  ][] = ServerPcNaSlugIdentifierPattern;

  /**
   * List of indicators proving that the announcement pertains to the slug server_pc_pts
   * @private
   */
  private readonly ServerPcPtsMatchesList: [
    RegExp,
    RemoteServerPcPtsRawSlug | RemoteServerPcPtsRawSlug[],
  ][] = ServerPcPtsSlugIdentifierPattern;

  /**
   * List of indicators proving that the announcement pertains to the slug server_ps_eu
   * @private
   */
  private readonly ServerPsEuMatchesList: [
    RegExp,
    RemoteServerPsEuRawSlug | RemoteServerPsEuRawSlug[],
  ][] = ServerPsEuSlugIdentifierPattern;

  /**
   * List of indicators proving that the announcement pertains to the slug server_ps_na
   * @private
   */
  private readonly ServerPsNaMatchesList: [
    RegExp,
    RemoteServerPsNaRawSlug | RemoteServerPsNaRawSlug[],
  ][] = ServerPsNaSlugIdentifierPattern;

  /**
   * List of indicators proving that the announcement pertains to the slug server_xbox_eu
   * @private
   */
  private readonly ServerXboxEuMatchesList: [
    RegExp,
    RemoteServerXboxEuRawSlug | RemoteServerXboxEuRawSlug[],
  ][] = ServerXboxEuSlugIdentifierPattern;

  /**
   * List of indicators proving that the announcement pertains to the slug server_xbox_na
   * @private
   */
  private readonly ServerXboxNaMatchesList: [
    RegExp,
    RemoteServerXboxNaRawSlug | RemoteServerXboxNaRawSlug[],
  ][] = ServerXboxNaSlugIdentifierPattern;

  /**
   * List of indicators proving that the announcement pertains to the slug service_store_eso
   * @private
   */
  private readonly ServiceStoreEsoMatchesList: [
    RegExp,
    RemoteServiceStoreEsoRawSlug | RemoteServiceStoreEsoRawSlug[],
  ][] = ServiceStoreEsoSlugIdentifierPattern;

  /**
   * List of indicators proving that the announcement pertains to the slug service_system_account
   * @private
   */
  private readonly ServiceSystemAccountMatchesList: [
    RegExp,
    RemoteServiceSystemAccountRawSlug | RemoteServiceSystemAccountRawSlug[],
  ][] = ServiceSystemAccountSlugIdentifierPattern;

  /**
   * List of indicators proving that the announcement pertains to the slug service_web_site
   * @private
   */
  private readonly ServiceWebSiteMatchesList: [
    RegExp,
    RemoteServiceWebSiteRawSlug | RemoteServiceWebSiteRawSlug[],
  ][] = ServiceWebSiteSlugIdentifierPattern;

  /**
   * @param raw Raw data of the announcement
   */
  constructor(private readonly raw: string) {
    this.slugMatches = [];

    this.slugList.forEach((slug: Slug): void => {
      this.identify(slug);
    });
  }

  /**
   * Method for retrieving the list of indicators for a slug to test
   * @param slug Slug to test
   * @private
   */
  private getMatchList(
    slug: Slug,
  ): [RegExp, RemoteRawSlug | RemoteRawSlug[]][] {
    const key = SlugIdentifier.getMatchListName(slug) as keyof this;
    return this[key] as [RegExp, RemoteRawSlug | RemoteRawSlug[]][];
  }

  /**
   * Method for retrieving the name of the list of indicators for a slug to test
   * @param slug Slug to test
   * @private
   */
  private static getMatchListName(slug: Slug): MatchesList {
    return `${slug
      .split('_')
      .map(
        (item: Type | Support | Zone): string =>
          item.charAt(0).toUpperCase() + item.slice(1),
      )
      .join('')}MatchesList` as MatchesList;
  }

  /**
   * Method for retrieving the indicators of a slug present in the announcement
   * @param slug Slug to test
   * @private
   */
  private getMatches(slug: Slug): RemoteRawSlug[] {
    return this.getMatchList(slug)
      .map(
        (
          identifier: [RegExp, RemoteRawSlug | RemoteRawSlug[]],
        ): RemoteRawSlug | null => {
          if (identifier[0].test(this.raw)) {
            return identifier[0].exec(this.raw)[0] as RemoteRawSlug;
          }

          return null;
        },
      )
      .filter((match: RemoteRawSlug | null): boolean => match !== null);
  }

  /**
   * Method for testing if the announcement contains indicators of a given slug
   * @param slug Slug to test
   * @private
   */
  private identify(slug: Slug): void {
    const matches: RemoteRawSlug[] = this.getMatches(slug);

    if (!matches.length) {
      return;
    }

    this.slugMatches.push(new SlugMatch(matches[0], slug));
  }
}
