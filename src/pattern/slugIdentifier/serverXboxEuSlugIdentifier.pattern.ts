import { RemoteServerXboxEuRawSlug } from '../../type/remoteServerXboxEuRawSlug.type';

const ServerXboxEuSlugIdentifierPattern: [
  RegExp,
  RemoteServerXboxEuRawSlug | RemoteServerXboxEuRawSlug[],
][] = [
  [/\b(Xbox:.*\bEU\b.*megaservers?)\b/i, ['Xbox: NA and EU megaservers']],
  [/\b(Xbox:.*\bEU\b.*megaserver?)\b/i, ['Xbox: EU megaserver']],
  [
    /^(\[.*?\]\s*)?EU megaservers?\b/i,
    [
      'EU megaservers',
      '[IN PROGRESS] EU megaservers',
      '[COMPLETE] EU megaservers',
    ],
  ],
  [/Xbox Live™/, 'Xbox Live™'],
];
export default ServerXboxEuSlugIdentifierPattern;
