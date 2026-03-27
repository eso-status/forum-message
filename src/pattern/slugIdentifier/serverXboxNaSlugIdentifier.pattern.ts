import { RemoteServerXboxNaRawSlug } from '../../type/remoteServerXboxNaRawSlug.type';

const ServerXboxNaSlugIdentifierPattern: [
  RegExp,
  RemoteServerXboxNaRawSlug | RemoteServerXboxNaRawSlug[],
][] = [
  [/\b(Xbox:.*\bNA\b.*megaservers?)\b/i, ['Xbox: NA and EU megaservers']],
  [
    /^(\[.*?]\s*)?NA megaservers?\b/i,
    [
      'NA megaservers',
      '[IN PROGRESS] NA megaservers',
      '[COMPLETE] NA megaservers',
    ],
  ],
  [/Xbox Live™/, 'Xbox Live™'],
];
export default ServerXboxNaSlugIdentifierPattern;
