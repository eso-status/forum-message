import { Slug, Support, Type, Zone } from '@eso-status/types';
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
 * Class permettant d'identifier la liste des slugs contenu dans une annonce
 */
export default class SlugIdentifier {
  /**
   * Liste des informations de slugs trouvé dans l'annonce
   */
  public slugMatches: SlugMatch[];

  /**
   * Liste des slugs dont on doit tester la présence dans l'annonce
   * @private
   */
  private readonly slugList: Slug[] = [
    'server_pc_eu',
    'server_pc_na',
    'server_pc_pts',
    'server_ps_eu',
    'server_ps_na',
    'server_xbox_eu',
    'server_xbox_na',
    'service_store_eso',
    'service_system_account',
    'service_web_site',
  ];

  /**
   * Liste des indicateurs permettant de prouver que l'annonce concerne le slug server_pc_eu
   * @private
   */
  private readonly ServerPcEuMatchesList: RemoteServerPcEuRawSlug[] = [
    'PC/Mac: EU megaserver for',
    'PC/Mac: NA and EU megaservers for',
  ];

  /**
   * Liste des indicateurs permettant de prouver que l'annonce concerne le slug server_pc_na
   * @private
   */
  private readonly ServerPcNaMatchesList: RemoteServerPcNaRawSlug[] = [
    'PC/Mac: NA megaserver for',
    'PC/Mac: NA and EU megaservers for',
  ];

  /**
   * Liste des indicateurs permettant de prouver que l'annonce concerne le slug server_pc_pts
   * @private
   */
  private readonly ServerPcPtsMatchesList: RemoteServerPcPtsRawSlug[] = ['PTS'];

  /**
   * Liste des indicateurs permettant de prouver que l'annonce concerne le slug server_ps_eu
   * @private
   */
  private readonly ServerPsEuMatchesList: RemoteServerPsEuRawSlug[] = [
    'PlayStation®: NA and EU megaservers for',
  ];

  /**
   * Liste des indicateurs permettant de prouver que l'annonce concerne le slug server_ps_na
   * @private
   */
  private readonly ServerPsNaMatchesList: RemoteServerPsNaRawSlug[] = [
    'PlayStation®: NA and EU megaservers for',
  ];

  /**
   * Liste des indicateurs permettant de prouver que l'annonce concerne le slug server_xbox_eu
   * @private
   */
  private readonly ServerXboxEuMatchesList: RemoteServerXboxEuRawSlug[] = [
    'Xbox: NA and EU megaservers for',
  ];

  /**
   * Liste des indicateurs permettant de prouver que l'annonce concerne le slug server_xbox_na
   * @private
   */
  private readonly ServerXboxNaMatchesList: RemoteServerXboxNaRawSlug[] = [
    'Xbox: NA and EU megaservers for',
  ];

  /**
   * Liste des indicateurs permettant de prouver que l'annonce concerne le slug service_store_eso
   * @private
   */
  private readonly ServiceStoreEsoMatchesList: RemoteServiceStoreEsoRawSlug[] =
    ['ESO Store and Account System for'];

  /**
   * Liste des indicateurs permettant de prouver que l'annonce concerne le slug service_system_account
   * @private
   */
  private readonly ServiceSystemAccountMatchesList: RemoteServiceSystemAccountRawSlug[] =
    ['ESO Store and Account System for'];

  /**
   * Liste des indicateurs permettant de prouver que l'annonce concerne le slug service_web_site
   * @private
   */
  private readonly ServiceWebSiteMatchesList: RemoteServiceWebSiteRawSlug[] = [
    'ESO Website for',
  ];

  /**
   * @param raw Donnée brute de l'annonce
   */
  constructor(private readonly raw: string) {
    this.slugMatches = [];

    this.slugList.forEach((slug: Slug): void => this.identify(slug));
  }

  /**
   * Methode permettant de récupérer la liste des indicateurs pour un slug donnée
   * @param slug Slug à tester
   * @private
   */
  private getMatchList(slug: Slug): RemoteRawSlug[] {
    return <RemoteRawSlug[]>this[SlugIdentifier.getMatchListName(slug)];
  }

  /**
   * Methode permettant de récupérer le nom de la liste des indicateurs pour un slug donnée
   * @param slug Slug à tester
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
   * Méthode permettant de tester l'ensemble des slugs
   * @param slug Slug à tester
   * @private
   */
  private getMatches(slug: Slug): RemoteRawSlug[] {
    return this.getMatchList(slug).filter(
      (identifier: RemoteRawSlug): boolean => this.raw.includes(identifier),
    );
  }

  /**
   * Méthode permettant de tester un slug avec les indicateurs pour un slug donnée
   * @param slug Slug à tester
   * @private
   */
  private identify(slug: Slug): void {
    const matches: RemoteRawSlug[] = this.getMatches(slug);

    if (matches.length > 0) {
      this.slugMatches.push(new SlugMatch(matches[0], slug));
    }
  }
}
