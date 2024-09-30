import {
  DownStatus,
  PcSupport,
  PtsZone,
  ServerPcPtsSlug,
  ServerType,
  UpStatus,
} from '@eso-status/types';
import { ForumMessagePTSURL } from '../../src/const';
import { PatternItem } from '../interface/patternItem.interface';

const pattern20240827: PatternItem[] = [
  {
    date: '2024-08-27T14_02_11',
    url: ForumMessagePTSURL,
    file: '2024-08-27T14_02_11.html',
    rawList: ['The PTS is currently unavailable while we perform maintenance.'],
    expected: [
      {
        source: ForumMessagePTSURL,
        raw: 'The PTS is currently unavailable while we perform maintenance.',
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
    url: ForumMessagePTSURL,
    file: '2024-08-27T14_44_44.html',
    rawList: ['The maintenance is complete, and the PTS is now available.'],
    expected: [
      {
        source: ForumMessagePTSURL,
        raw: 'The maintenance is complete, and the PTS is now available.',
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
