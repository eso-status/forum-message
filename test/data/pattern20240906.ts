import {
  PcSupport,
  PtsZone,
  ServerPcPtsSlug,
  ServerType,
  UpStatus,
} from '@eso-status/types';
import { ForumMessagePTSURL } from '../../src/const';
import { PatternItem } from '../interface/patternItem.interface';

const pattern20240906: PatternItem[] = [
  {
    date: '2024-09-06T16_32_21',
    url: ForumMessagePTSURL,
    file: '2024-09-06T16_32_21.html',
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
  {
    date: '2024-09-06T19_00_34',
    url: ForumMessagePTSURL,
    file: '2024-09-06T19_00_34.html',
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

export default pattern20240906;
