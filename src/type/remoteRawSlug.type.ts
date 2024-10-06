import { RemoteServerPcEuRawSlug } from './remoteServerPcEuRawSlug.type';
import { RemoteServerPcNaRawSlug } from './remoteServerPcNaRawSlug.type';
import { RemoteServerPcPtsRawSlug } from './remoteServerPcPtsRawSlug.type';
import { RemoteServerPsEuRawSlug } from './remoteServerPsEuRawSlug.type';
import { RemoteServerXboxEuRawSlug } from './remoteServerXboxEuRawSlug.type';
import { RemoteServiceStoreEsoRawSlug } from './remoteServiceStoreEsoRawSlug.type';
import { RemoteServiceWebSiteRawSlug } from './remoteServiceWebSiteRawSlug.type';
import { RemoteServerXboxNaRawSlug } from './remoteServerXboxNaRawSlug.type';

/**
 * Different slugs of announcements
 */
export type RemoteRawSlug =
  | RemoteServerPcEuRawSlug
  | RemoteServerPcNaRawSlug
  | RemoteServerPcPtsRawSlug
  | RemoteServerPsEuRawSlug
  | RemoteServerXboxEuRawSlug
  | RemoteServerXboxNaRawSlug
  | RemoteServiceStoreEsoRawSlug
  | RemoteServiceWebSiteRawSlug;
