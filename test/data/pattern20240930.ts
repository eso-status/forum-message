import {
  DownStatus,
  EuZone,
  NaZone,
  PcSupport,
  PlannedStatus,
  PsSupport,
  PtsZone,
  ServerPcEuSlug,
  ServerPcNaSlug,
  ServerPcPtsSlug,
  ServerPsEuSlug,
  ServerPsNaSlug,
  ServerType,
  ServerXboxEuSlug,
  ServerXboxNaSlug,
  UpStatus,
  XboxSupport,
} from '@eso-status/types';
import * as moment from 'moment';
import { PatternItem } from '../interface/patternItem.interface';
import { ForumMessagePTSURL, ForumMessageURL } from '../../src/const';

const pattern20240930: PatternItem[] = [
  {
    date: '2024-09-30T08_02_26',
    url: ForumMessagePTSURL,
    file: '2024-09-30T08_02_26.html',
    rawList: [
      'We will be performing maintenance for patch 10.2.2 on the PTS on Monday at 8:00AM EDT (12:00 UTC).',
      '• [IN PROGRESS] PC/Mac: NA and EU megaservers for maintenance – September 30, 4:00AM EDT (8:00 UTC) - 8:00AM EDT (12:00 UTC)',
      '• Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessagePTSURL,
        raw: 'We will be performing maintenance for patch 10.2.2 on the PTS on Monday at 8:00AM EDT (12:00 UTC).',
        slug: ServerPcPtsSlug,
        type: ServerType,
        support: PcSupport,
        zone: PtsZone,
        status: PlannedStatus,
        rawStatus: 'We will be performing maintenance',
        rawSlug: 'PTS',
        rawDate: 'Monday at 8:00AM EDT (12:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 30)
            .set('hours', 12)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• [IN PROGRESS] PC/Mac: NA and EU megaservers for maintenance – September 30, 4:00AM EDT (8:00 UTC) - 8:00AM EDT (12:00 UTC)',
        slug: ServerPcEuSlug,
        type: ServerType,
        support: PcSupport,
        zone: EuZone,
        status: DownStatus,
        rawStatus: '[IN PROGRESS]',
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate: 'September 30, 4:00AM EDT (8:00 UTC) - 8:00AM EDT (12:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 30)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 30)
            .set('hours', 12)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• [IN PROGRESS] PC/Mac: NA and EU megaservers for maintenance – September 30, 4:00AM EDT (8:00 UTC) - 8:00AM EDT (12:00 UTC)',
        slug: ServerPcNaSlug,
        type: ServerType,
        support: PcSupport,
        zone: NaZone,
        status: DownStatus,
        rawStatus: '[IN PROGRESS]',
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate: 'September 30, 4:00AM EDT (8:00 UTC) - 8:00AM EDT (12:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 30)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 30)
            .set('hours', 12)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxNaSlug,
        type: ServerType,
        support: XboxSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
    ],
  },
  {
    date: '2024-09-30T08_04_05',
    url: ForumMessageURL,
    file: '2024-09-30T08_04_05.html',
    rawList: [
      '• [IN PROGRESS] PC/Mac: NA and EU megaservers for maintenance – September 30, 4:00AM EDT (8:00 UTC) - 8:00AM EDT (12:00 UTC)',
      '• Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: '• [IN PROGRESS] PC/Mac: NA and EU megaservers for maintenance – September 30, 4:00AM EDT (8:00 UTC) - 8:00AM EDT (12:00 UTC)',
        slug: ServerPcEuSlug,
        type: ServerType,
        support: PcSupport,
        zone: EuZone,
        status: DownStatus,
        rawStatus: '[IN PROGRESS]',
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate: 'September 30, 4:00AM EDT (8:00 UTC) - 8:00AM EDT (12:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 30)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 30)
            .set('hours', 12)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessageURL,
        raw: '• [IN PROGRESS] PC/Mac: NA and EU megaservers for maintenance – September 30, 4:00AM EDT (8:00 UTC) - 8:00AM EDT (12:00 UTC)',
        slug: ServerPcNaSlug,
        type: ServerType,
        support: PcSupport,
        zone: NaZone,
        status: DownStatus,
        rawStatus: '[IN PROGRESS]',
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate: 'September 30, 4:00AM EDT (8:00 UTC) - 8:00AM EDT (12:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 30)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 30)
            .set('hours', 12)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessageURL,
        raw: '• Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessageURL,
        raw: '• Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxNaSlug,
        type: ServerType,
        support: XboxSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessageURL,
        raw: '• PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessageURL,
        raw: '• PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
    ],
  },
  {
    date: '2024-09-30T11_55_53',
    url: ForumMessageURL,
    file: '2024-09-30T11_55_53.html',
    rawList: [
      '• [EXTENDED] PC/Mac: NA and EU megaservers for maintenance – September 30, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
      '• Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: '• [EXTENDED] PC/Mac: NA and EU megaservers for maintenance – September 30, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        slug: ServerPcEuSlug,
        type: ServerType,
        support: PcSupport,
        zone: EuZone,
        status: DownStatus,
        rawStatus: '[EXTENDED]',
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate:
          'September 30, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 30)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 30)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessageURL,
        raw: '• [EXTENDED] PC/Mac: NA and EU megaservers for maintenance – September 30, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        slug: ServerPcNaSlug,
        type: ServerType,
        support: PcSupport,
        zone: NaZone,
        status: DownStatus,
        rawStatus: '[EXTENDED]',
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate:
          'September 30, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 30)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 30)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessageURL,
        raw: '• Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessageURL,
        raw: '• Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxNaSlug,
        type: ServerType,
        support: XboxSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessageURL,
        raw: '• PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessageURL,
        raw: '• PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
    ],
  },
  {
    date: '2024-09-30T11_56_28',
    url: ForumMessagePTSURL,
    file: '2024-09-30T11_56_28.html',
    rawList: [
      'We will be performing maintenance for patch 10.2.2 on the PTS on Monday at 8:00AM EDT (12:00 UTC).',
      '• [EXTENDED] PC/Mac: NA and EU megaservers for maintenance – September 30, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
      '• Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessagePTSURL,
        raw: 'We will be performing maintenance for patch 10.2.2 on the PTS on Monday at 8:00AM EDT (12:00 UTC).',
        slug: ServerPcPtsSlug,
        type: ServerType,
        support: PcSupport,
        zone: PtsZone,
        status: PlannedStatus,
        rawStatus: 'We will be performing maintenance',
        rawSlug: 'PTS',
        rawDate: 'Monday at 8:00AM EDT (12:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 30)
            .set('hours', 12)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• [EXTENDED] PC/Mac: NA and EU megaservers for maintenance – September 30, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        slug: ServerPcEuSlug,
        type: ServerType,
        support: PcSupport,
        zone: EuZone,
        status: DownStatus,
        rawStatus: '[EXTENDED]',
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate:
          'September 30, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 30)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 30)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• [EXTENDED] PC/Mac: NA and EU megaservers for maintenance – September 30, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        slug: ServerPcNaSlug,
        type: ServerType,
        support: PcSupport,
        zone: NaZone,
        status: DownStatus,
        rawStatus: '[EXTENDED]',
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate:
          'September 30, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 30)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 30)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxNaSlug,
        type: ServerType,
        support: XboxSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
    ],
  },
  {
    date: '2024-09-30T12_02_36',
    url: ForumMessagePTSURL,
    file: '2024-09-30T12_02_36.html',
    rawList: [
      'The PTS is now offline for the patch 10.2.2 maintenance and is currently unavailable.',
      '• [EXTENDED] PC/Mac: NA and EU megaservers for maintenance – September 30, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
      '• Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessagePTSURL,
        raw: 'The PTS is now offline for the patch 10.2.2 maintenance and is currently unavailable.',
        slug: ServerPcPtsSlug,
        type: ServerType,
        support: PcSupport,
        zone: PtsZone,
        status: DownStatus,
        rawStatus: 'unavailable',
        rawSlug: 'PTS',
      },
      {
        source: ForumMessagePTSURL,
        raw: '• [EXTENDED] PC/Mac: NA and EU megaservers for maintenance – September 30, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        slug: ServerPcEuSlug,
        type: ServerType,
        support: PcSupport,
        zone: EuZone,
        status: DownStatus,
        rawStatus: '[EXTENDED]',
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate:
          'September 30, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 30)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 30)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• [EXTENDED] PC/Mac: NA and EU megaservers for maintenance – September 30, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        slug: ServerPcNaSlug,
        type: ServerType,
        support: PcSupport,
        zone: NaZone,
        status: DownStatus,
        rawStatus: '[EXTENDED]',
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate:
          'September 30, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 30)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 30)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxNaSlug,
        type: ServerType,
        support: XboxSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
    ],
  },
  {
    date: '2024-09-30T13_12_55',
    url: ForumMessageURL,
    file: '2024-09-30T13_12_55.html',
    rawList: [
      '• [COMPLETE] PC/Mac: NA and EU megaservers for maintenance – September 30, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
      '• Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: '• [COMPLETE] PC/Mac: NA and EU megaservers for maintenance – September 30, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        slug: ServerPcEuSlug,
        type: ServerType,
        support: PcSupport,
        zone: EuZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate:
          'September 30, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 30)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 30)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessageURL,
        raw: '• [COMPLETE] PC/Mac: NA and EU megaservers for maintenance – September 30, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        slug: ServerPcNaSlug,
        type: ServerType,
        support: PcSupport,
        zone: NaZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate:
          'September 30, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 30)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 30)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessageURL,
        raw: '• Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessageURL,
        raw: '• Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxNaSlug,
        type: ServerType,
        support: XboxSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessageURL,
        raw: '• PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessageURL,
        raw: '• PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
    ],
  },
  {
    date: '2024-09-30T13_14_05',
    url: ForumMessagePTSURL,
    file: '2024-09-30T13_14_05.html',
    rawList: [
      '• [COMPLETE] PC/Mac: NA and EU megaservers for maintenance – September 30, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
      '• Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      'The PTS is now offline for the patch 10.2.2 maintenance and is currently unavailable.',
    ],
    expected: [
      {
        source: ForumMessagePTSURL,
        raw: '• [COMPLETE] PC/Mac: NA and EU megaservers for maintenance – September 30, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        slug: ServerPcEuSlug,
        type: ServerType,
        support: PcSupport,
        zone: EuZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate:
          'September 30, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 30)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 30)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• [COMPLETE] PC/Mac: NA and EU megaservers for maintenance – September 30, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        slug: ServerPcNaSlug,
        type: ServerType,
        support: PcSupport,
        zone: NaZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate:
          'September 30, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 30)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 30)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxNaSlug,
        type: ServerType,
        support: XboxSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 10 - 1)
            .set('date', 2)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: 'The PTS is now offline for the patch 10.2.2 maintenance and is currently unavailable.',
        slug: ServerPcPtsSlug,
        type: ServerType,
        support: PcSupport,
        zone: PtsZone,
        status: DownStatus,
        rawStatus: 'unavailable',
        rawSlug: 'PTS',
      },
    ],
  },
];

export default pattern20240930;
