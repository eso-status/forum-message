import {
  PcSupport,
  PlannedStatus,
  PtsZone,
  ServerPcPtsSlug,
  ServerType,
} from '@eso-status/types';
import * as moment from 'moment';
import { ForumMessagePTSURL } from '../../src/const';
import { PatternItem } from '../interface/patternItem.interface';

const pattern20240823: PatternItem[] = [
  {
    date: '2024-08-23T19_17_52',
    url: ForumMessagePTSURL,
    file: '2024-08-23T19_17_52.html',
    rawList: [
      'We will be performing maintenance on the PTS on Tuesday at 10:00AM EDT (14:00 UTC).',
    ],
    expected: [
      {
        source: ForumMessagePTSURL,
        raw: 'We will be performing maintenance on the PTS on Tuesday at 10:00AM EDT (14:00 UTC).',
        slug: ServerPcPtsSlug,
        type: ServerType,
        support: PcSupport,
        zone: PtsZone,
        status: PlannedStatus,
        rawSlug: 'PTS',
        rawDate: 'Tuesday at 10:00AM EDT (14:00 UTC)',
        rawStatus: 'We will be performing maintenance',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 27)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
    ],
  },
];

export default pattern20240823;
