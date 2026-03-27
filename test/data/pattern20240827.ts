import {
  DownStatus,
  PcSupport,
  PtsZone,
  ServerPcPtsSlug,
  ServerType,
  UpStatus,
} from '@eso-status/types';
import { PatternItem } from '../interface/patternItem.interface';
import ForumMessagePtsUrl from '../../src/const/ForumMessagePtsUrl.const';

const pattern20240827: PatternItem[] = [
  {
    date: '2024-08-27T14_02_11',
    url: ForumMessagePtsUrl,
    file: '2024-08-27T14_02_11.html',
    rawList: ['The PTS is currently unavailable while we perform maintenance'],
    patternList: [
      'The PTS is currently unavailable while we perform maintenance',
    ],
    expected: [
      {
        source: ForumMessagePtsUrl,
        raw: 'The PTS is currently unavailable while we perform maintenance',
        pattern:
          'The PTS is currently unavailable while we perform maintenance',
        slug: ServerPcPtsSlug,
        type: ServerType,
        support: PcSupport,
        zone: PtsZone,
        status: DownStatus,
        rawSlug: 'PTS',
        rawStatus: 'unavailable',
      },
    ],
  },
  {
    date: '2024-08-27T14_44_44',
    url: ForumMessagePtsUrl,
    file: '2024-08-27T14_44_44.html',
    rawList: ['The maintenance is complete, and the PTS is now available'],
    patternList: ['The maintenance is complete, and the PTS is now available'],
    expected: [
      {
        source: ForumMessagePtsUrl,
        raw: 'The maintenance is complete, and the PTS is now available',
        pattern: 'The maintenance is complete, and the PTS is now available',
        slug: ServerPcPtsSlug,
        type: ServerType,
        support: PcSupport,
        zone: PtsZone,
        status: UpStatus,
        rawSlug: 'PTS',
        rawStatus: 'now available',
      },
    ],
  },
];

export default pattern20240827;
