import {
  EuZone,
  NaZone,
  PcSupport,
  PlannedStatus,
  PsSupport,
  ServerPcEuSlug,
  ServerPcNaSlug,
  ServerPsEuSlug,
  ServerPsNaSlug,
  ServerType,
  ServerXboxEuSlug,
  ServerXboxNaSlug,
  XboxSupport,
} from '@eso-status/types';
import * as moment from 'moment';
import { ForumMessageURL } from '../../src/const';
import { PatternItem } from '../interface/patternItem.interface';

const pattern20240816: PatternItem[] = [
  {
    date: '2024-08-16T19_06_56',
    url: ForumMessageURL,
    file: '2024-08-16T19_06_56.html',
    rawList: [
      '• PC/Mac: NA and EU megaservers for patch maintenance – August 19, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
      '• Xbox: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
      '• PlayStation®: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: '• PC/Mac: NA and EU megaservers for patch maintenance – August 19, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        slug: ServerPcEuSlug,
        type: ServerType,
        support: PcSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate: 'August 19, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 19)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 19)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessageURL,
        raw: '• PC/Mac: NA and EU megaservers for patch maintenance – August 19, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        slug: ServerPcNaSlug,
        type: ServerType,
        support: PcSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate: 'August 19, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 19)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 19)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessageURL,
        raw: '• Xbox: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessageURL,
        raw: '• Xbox: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        slug: ServerXboxNaSlug,
        type: ServerType,
        support: XboxSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessageURL,
        raw: '• PlayStation®: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessageURL,
        raw: '• PlayStation®: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
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

export default pattern20240816;
