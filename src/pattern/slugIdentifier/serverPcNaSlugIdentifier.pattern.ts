import { RemoteServerPcNaRawSlug } from '../../type/remoteServerPcNaRawSlug.type';

const ServerPcNaSlugIdentifierPattern: [
  RegExp,
  RemoteServerPcNaRawSlug | RemoteServerPcNaRawSlug[],
][] = [
  [/\b(PC\/Mac:.*\bNA\b.*megaservers?)\b/i, ['PC/Mac: NA and EU megaservers']],
  [/\b(PC\/Mac:.*\bNA\b.*megaserver?)\b/i, ['PC/Mac: NA megaserver']],
  [
    /^(\[.*?\]\s*)?NA megaservers?\b/i,
    [
      'NA megaservers',
      '[IN PROGRESS] NA megaservers',
      '[COMPLETE] NA megaservers',
    ],
  ],
  [/\bNorth American PC\/Mac megaserver\b/, 'North American PC/Mac megaserver'],
  [
    /North American and European PC\/Mac megaservers/,
    'North American and European PC/Mac megaservers',
  ],
];
export default ServerPcNaSlugIdentifierPattern;
