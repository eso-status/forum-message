import { RemoteServiceStoreEsoRawSlug } from '../../type/remoteServiceStoreEsoRawSlug.type';

const ServiceStoreEsoSlugIdentifierPattern: [
  RegExp,
  RemoteServiceStoreEsoRawSlug | RemoteServiceStoreEsoRawSlug[],
][] = [[/\b(ESO Store)\b/, 'ESO Store']];
export default ServiceStoreEsoSlugIdentifierPattern;
