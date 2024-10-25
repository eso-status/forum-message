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
  private readonly ServerPcEuMatchesList: RemoteServerPcEuRawSlug[] = [
    'PC/Mac: EU megaserver for',
    'PC/Mac: NA and EU megaservers for',
    '] EU megaservers for',
    '• EU megaservers for',
  ];

  /**
   * List of indicators proving that the announcement pertains to the slug server_pc_na
   * @private
   */
  private readonly ServerPcNaMatchesList: RemoteServerPcNaRawSlug[] = [
    'PC/Mac: NA megaserver for',
    'PC/Mac: NA and EU megaservers for',
    '] NA megaservers for',
    '• NA megaservers for',
    'North American PC/Mac megaserver',
  ];

  /**
   * List of indicators proving that the announcement pertains to the slug server_pc_pts
   * @private
   */
  private readonly ServerPcPtsMatchesList: RemoteServerPcPtsRawSlug[] = ['PTS'];

  /**
   * List of indicators proving that the announcement pertains to the slug server_ps_eu
   * @private
   */
  private readonly ServerPsEuMatchesList: RemoteServerPsEuRawSlug[] = [
    'PlayStation®: NA and EU megaservers for',
    'The PlayStation™ Network',
    '] EU megaservers for',
    '• EU megaservers for',
  ];

  /**
   * List of indicators proving that the announcement pertains to the slug server_ps_na
   * @private
   */
  private readonly ServerPsNaMatchesList: RemoteServerPsNaRawSlug[] = [
    'PlayStation®: NA and EU megaservers for',
    'The PlayStation™ Network',
    '] NA megaservers for',
    '• NA megaservers for',
  ];

  /**
   * List of indicators proving that the announcement pertains to the slug server_xbox_eu
   * @private
   */
  private readonly ServerXboxEuMatchesList: RemoteServerXboxEuRawSlug[] = [
    'Xbox: NA and EU megaservers for',
    'Xbox: EU megaserver for',
    '] EU megaservers for',
    '• EU megaservers for',
  ];

  /**
   * List of indicators proving that the announcement pertains to the slug server_xbox_na
   * @private
   */
  private readonly ServerXboxNaMatchesList: RemoteServerXboxNaRawSlug[] = [
    'Xbox: NA and EU megaservers for',
    '] NA megaservers for',
    '• NA megaservers for',
  ];

  /**
   * List of indicators proving that the announcement pertains to the slug service_store_eso
   * @private
   */
  private readonly ServiceStoreEsoMatchesList: RemoteServiceStoreEsoRawSlug[] =
    ['ESO Store and Account System for'];

  /**
   * List of indicators proving that the announcement pertains to the slug service_system_account
   * @private
   */
  private readonly ServiceSystemAccountMatchesList: RemoteServiceSystemAccountRawSlug[] =
    ['ESO Store and Account System for'];

  /**
   * List of indicators proving that the announcement pertains to the slug service_web_site
   * @private
   */
  private readonly ServiceWebSiteMatchesList: RemoteServiceWebSiteRawSlug[] = [
    'ESO Website for',
  ];

  /**
   * @param raw Raw data of the announcement
   */
  constructor(private readonly raw: string) {
    this.slugMatches = [];

    this.slugList.forEach((slug: Slug): void => this.identify(slug));
  }

  /**
   * Method for retrieving the list of indicators for a slug to test
   * @param slug Slug to test
   * @private
   */
  private getMatchList(slug: Slug): RemoteRawSlug[] {
    return <RemoteRawSlug[]>this[SlugIdentifier.getMatchListName(slug)];
  }

  /**
   * Method for retrieving the name of the list of indicators for a slug to test
   * @param slug Slug to test
   * @private
   */
  private static getMatchListName(slug: Slug): string {
    return `${slug
      .split('_')
      .map(
        (item: Type | Support | Zone): string =>
          item.charAt(0).toUpperCase() + item.slice(1),
      )
      .join('')}MatchesList`;
  }

  /**
   * Method for retrieving the indicators of a slug present in the announcement
   * @param slug Slug to test
   * @private
   */
  private getMatches(slug: Slug): RemoteRawSlug[] {
    return this.getMatchList(slug).filter(
      (identifier: RemoteRawSlug): boolean => this.raw.includes(identifier),
    );
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
