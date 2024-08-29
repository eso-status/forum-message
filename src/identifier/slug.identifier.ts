import { Slug, Support, Type, Zone } from '@eso-status/types';
import { SlugIdentify } from '../interface/slugIdentify.interface';
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

export default class SlugIdentifier {
  public slugIdentified: SlugIdentify[];

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

  private readonly ServerPcEuMatchesList: RemoteServerPcEuRawSlug[] = [
    'PC/Mac: EU megaserver for',
    'PC/Mac: NA and EU megaservers for',
  ];

  private readonly ServerPcNaMatchesList: RemoteServerPcNaRawSlug[] = [
    'PC/Mac: NA megaserver for',
    'PC/Mac: NA and EU megaservers for',
  ];

  private readonly ServerPcPtsMatchesList: RemoteServerPcPtsRawSlug[] = ['PTS'];

  private readonly ServerPsEuMatchesList: RemoteServerPsEuRawSlug[] = [
    'PlayStation®: NA and EU megaservers for',
  ];

  private readonly ServerPsNaMatchesList: RemoteServerPsNaRawSlug[] = [
    'PlayStation®: NA and EU megaservers for',
  ];

  private readonly ServerXboxEuMatchesList: RemoteServerXboxEuRawSlug[] = [
    'Xbox: NA and EU megaservers for',
  ];

  private readonly ServerXboxNaMatchesList: RemoteServerXboxNaRawSlug[] = [
    'Xbox: NA and EU megaservers for',
  ];

  private readonly ServiceStoreEsoMatchesList: RemoteServiceStoreEsoRawSlug[] =
    ['ESO Store and Account System for'];

  private readonly ServiceSystemAccountMatchesList: RemoteServiceSystemAccountRawSlug[] =
    ['ESO Store and Account System for'];

  private readonly ServiceWebSiteMatchesList: RemoteServiceWebSiteRawSlug[] = [
    'ESO Website for',
  ];

  constructor(private readonly raw: string) {
    this.slugIdentified = [];

    this.slugList.forEach((slug: Slug): void => {
      const matchesList: RemoteRawSlug[] = <RemoteRawSlug[]>this[
        `${slug
          .split('_')
          .map(
            (item: Type | Support | Zone): string =>
              item.charAt(0).toUpperCase() + item.slice(1),
          )
          .join('')}MatchesList`
      ];

      const matches: RemoteRawSlug[] = matchesList.filter(
        (identifier: RemoteRawSlug): boolean => this.raw.includes(identifier),
      );
      if (matches.length > 0) {
        this.slugIdentified.push({
          rawSlug: matches[0],
          slug,
        });
      }
    });
  }
}
