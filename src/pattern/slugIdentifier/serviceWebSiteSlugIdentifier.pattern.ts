import { RemoteServiceWebSiteRawSlug } from '../../type/remoteServiceWebSiteRawSlug.type';

const ServiceWebSiteSlugIdentifierPattern: [
  RegExp,
  RemoteServiceWebSiteRawSlug | RemoteServiceWebSiteRawSlug[],
][] = [[/\b(ESO Website)\b/, 'ESO Website']];
export default ServiceWebSiteSlugIdentifierPattern;
