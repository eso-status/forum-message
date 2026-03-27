import { RemoteServerPcPtsRawSlug } from '../../type/remoteServerPcPtsRawSlug.type';

const ServerPcPtsSlugIdentifierPattern: [
  RegExp,
  RemoteServerPcPtsRawSlug | RemoteServerPcPtsRawSlug[],
][] = [[/\b(PTS)\b/, 'PTS']];
export default ServerPcPtsSlugIdentifierPattern;
