import { RemoteServerPsEuRawSlug } from '../../type/remoteServerPsEuRawSlug.type';

const ServerPsEuSlugIdentifierPattern: [
  RegExp,
  RemoteServerPsEuRawSlug | RemoteServerPsEuRawSlug[],
][] = [
  [
    /\b(PlayStation®:.*\bEU\b.*megaservers?)\b/i,
    ['PlayStation®: NA and EU megaservers'],
  ],
  [
    /^(\[.*?]\s*)?EU megaservers?\b/i,
    [
      'EU megaservers',
      '[IN PROGRESS] EU megaservers',
      '[COMPLETE] EU megaservers',
    ],
  ],
  [/\b(PlayStation™ Network)\b/, 'PlayStation™ Network'],
];
export default ServerPsEuSlugIdentifierPattern;
