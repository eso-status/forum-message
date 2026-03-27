import { RemoteServerPcEuRawSlug } from '../../type/remoteServerPcEuRawSlug.type';

const ServerPcEuSlugIdentifierPattern: [
  RegExp,
  RemoteServerPcEuRawSlug | RemoteServerPcEuRawSlug[],
][] = [
  [/\b(PC\/Mac:.*\bEU\b.*megaservers?)\b/i, ['PC/Mac: NA and EU megaservers']],
  [/\b(PC\/Mac:.*\bEU\b.*megaserver?)\b/i, ['PC/Mac: EU megaserver']],
  [
    /^(\[.*?\]\s*)?EU megaservers?\b/i,
    [
      'EU megaservers',
      '[IN PROGRESS] EU megaservers',
      '[COMPLETE] EU megaservers',
    ],
  ],
  [
    /North American and European PC\/Mac megaservers/,
    'North American and European PC/Mac megaservers',
  ],
];
export default ServerPcEuSlugIdentifierPattern;
