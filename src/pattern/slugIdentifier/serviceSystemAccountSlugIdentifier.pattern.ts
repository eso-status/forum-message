import { RemoteServiceSystemAccountRawSlug } from '../../type/remoteServiceSystemAccountRawSlug.type';

const ServiceSystemAccountSlugIdentifierPattern: [
  RegExp,
  RemoteServiceSystemAccountRawSlug | RemoteServiceSystemAccountRawSlug[],
][] = [[/\b(Account System)\b/, 'Account System']];
export default ServiceSystemAccountSlugIdentifierPattern;
