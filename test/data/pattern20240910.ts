import * as moment from 'moment/moment';

import {
  PcSupport,
  PlannedStatus,
  PtsZone,
  ServerPcPtsSlug,
  ServerType,
} from '@eso-status/types';
import { ForumMessagePTSURL } from '../../src/const';
import { PatternItem } from '../interface/patternItem.interface';

const pattern20240910: PatternItem[] = [
  {
    date: '2024-09-10T19_19_16',
    url: ForumMessagePTSURL,
    file: '2024-09-10T19_19_16.html',
    rawList: [
      'We will be performing maintenance on the PTS on Wednesday at 9:00AM EDT (13:00 UTC). <a href="https://forums.elderscrollsonline.com/en/discussion/665106/pts-maintenance-sept-5-through-sept-6#latest" rel="nofollow">https://forums.elderscrollsonline.com/en/discussion/665106/pts-maintenance-sept-5-through-sept-6#latest</a>',
    ],
    expected: [
      {
        source: ForumMessagePTSURL,
        raw: 'We will be performing maintenance on the PTS on Wednesday at 9:00AM EDT (13:00 UTC). <a href="https://forums.elderscrollsonline.com/en/discussion/665106/pts-maintenance-sept-5-through-sept-6#latest" rel="nofollow">https://forums.elderscrollsonline.com/en/discussion/665106/pts-maintenance-sept-5-through-sept-6#latest</a>',
        slug: ServerPcPtsSlug,
        type: ServerType,
        support: PcSupport,
        zone: PtsZone,
        status: PlannedStatus,
        rawSlug: 'PTS',
        rawStatus: 'We will be performing maintenance',
        rawDate: 'Wednesday at 9:00AM EDT (13:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 11)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
    ],
  },
  {
    date: '2024-09-10T19_23_21',
    url: ForumMessagePTSURL,
    file: '2024-09-10T19_23_21.html',
    rawList: [
      'We will be performing maintenance on the PTS on Wednesday at 9:00AM EDT (13:00 UTC). <a href="https://forums.elderscrollsonline.com/en/discussion/665349" rel="nofollow">https://forums.elderscrollsonline.com/en/discussion/665349</a>',
    ],
    expected: [
      {
        source: ForumMessagePTSURL,
        raw: 'We will be performing maintenance on the PTS on Wednesday at 9:00AM EDT (13:00 UTC). <a href="https://forums.elderscrollsonline.com/en/discussion/665349" rel="nofollow">https://forums.elderscrollsonline.com/en/discussion/665349</a>',
        slug: ServerPcPtsSlug,
        type: ServerType,
        support: PcSupport,
        zone: PtsZone,
        status: PlannedStatus,
        rawSlug: 'PTS',
        rawStatus: 'We will be performing maintenance',
        rawDate: 'Wednesday at 9:00AM EDT (13:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 11)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
    ],
  },
];

export default pattern20240910;
