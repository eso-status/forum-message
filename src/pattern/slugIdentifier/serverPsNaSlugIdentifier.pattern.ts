import { RemoteServerPsNaRawSlug } from '../../type/remoteServerPsNaRawSlug.type';

const ServerPsNaSlugIdentifierPattern: [
  RegExp,
  RemoteServerPsNaRawSlug | RemoteServerPsNaRawSlug[],
][] = [
  [
    /\b(PlayStation®:.*\bNA\b.*megaservers?)\b/i,
    ['PlayStation®: NA and EU megaservers'],
  ],
  [
    /^(\[.*?\]\s*)?NA megaservers?\b/i,
    [
      'NA megaservers',
      '[IN PROGRESS] NA megaservers',
      '[COMPLETE] NA megaservers',
    ],
  ],
  [/\b(PlayStation™ Network)\b/, 'PlayStation™ Network'],
  [
    /\bNorth American PlayStation® megaserver\b/,
    'North American PlayStation® megaserver',
  ],
];
export default ServerPsNaSlugIdentifierPattern;
