import * as moment from 'moment/moment';

import {
  PcSupport,
  PlannedStatus,
  PtsZone,
  ServerPcPtsSlug,
  ServerType,
} from '@eso-status/types';
import { ForumMessagePTSURL, ForumMessageURL } from '../../src/const';
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
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 23)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
    ],
  },
  {
    date: '2024-09-20T18_51_44',
    url: ForumMessageURL,
    file: '2024-09-20T18_51_44.html',
    rawList: [],
    expected: [],
  },
];

export default pattern20240920;
