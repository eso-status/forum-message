import {
  PcSupport,
  PlannedStatus,
  PtsZone,
  ServerPcPtsSlug,
  ServerType,
} from '@eso-status/types';
import { ForumMessagePTSURL } from '../../src/const';
import { PatternItem } from '../interface/patternItem.interface';

const pattern20240920: PatternItem[] = [
  {
    date: '2024-09-20T18_50_39',
    url: ForumMessagePTSURL,
    file: '2024-09-20T18_50_39.html',
    rawList: [
      'We will be performing maintenance for patch 10.2.1 on the PTS on Monday at 10:00AM EDT (14:00 UTC).',
    ],
    expected: [
      {
        source: ForumMessagePTSURL,
        raw: 'We will be performing maintenance for patch 10.2.1 on the PTS on Monday at 10:00AM EDT (14:00 UTC).',
        slug: ServerPcPtsSlug,
        type: ServerType,
        support: PcSupport,
        zone: PtsZone,
        status: PlannedStatus,
        rawSlug: 'PTS',
        rawStatus: 'We will be performing maintenance',
        rawDate: 'Monday at 10:00AM EDT (14:00 UTC)',
        dates: ['2024-09-23T14:00:00.000Z'],
      },
    ],
  },
];

export default pattern20240920;
