import {
  AccountZone,
  DownStatus,
  EsoZone,
  EuZone,
  NaZone,
  PcSupport,
  PlannedStatus,
  PsSupport,
  PtsZone,
  ServerPcPtsSlug,
  ServerPsEuSlug,
  ServerPsNaSlug,
  ServerType,
  ServerXboxEuSlug,
  ServerXboxNaSlug,
  ServiceStoreEsoSlug,
  ServiceSystemAccountSlug,
  ServiceType,
  StoreSupport,
  SystemSupport,
  UpStatus,
  XboxSupport,
} from '@eso-status/types';
import * as moment from 'moment';
import { ForumMessagePTSURL, ForumMessageURL } from '../../src/const';
import { PatternItem } from '../interface/patternItem.interface';

const pattern20240904: PatternItem[] = [
  {
    date: '2024-09-04T10_01_08',
    url: ForumMessagePTSURL,
    file: '2024-09-04T10_01_08.html',
    rawList: [
      'We will be performing maintenance on the PTS on Thursday at 9:00AM EDT (13:00 UTC).',
    ],
    expected: [
      {
        source: ForumMessagePTSURL,
        raw: 'We will be performing maintenance on the PTS on Thursday at 9:00AM EDT (13:00 UTC).',
        slug: ServerPcPtsSlug,
        type: ServerType,
        support: PcSupport,
        zone: PtsZone,
        status: PlannedStatus,
        rawSlug: 'PTS',
        rawDate: 'Thursday at 9:00AM EDT (13:00 UTC)',
        rawStatus: 'We will be performing maintenance',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 5)
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
    date: '2024-09-04T10_02_12',
    url: ForumMessageURL,
    file: '2024-09-04T10_02_12.html',
    rawList: [
      '• [IN PROGRESS] Xbox: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• [IN PROGRESS] PlayStation®: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      'ESO Store and Account System for maintenance – September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: '• [IN PROGRESS] Xbox: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: DownStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessageURL,
        raw: '• [IN PROGRESS] Xbox: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxNaSlug,
        type: ServerType,
        support: XboxSupport,
        zone: NaZone,
        status: DownStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessageURL,
        raw: '• [IN PROGRESS] PlayStation®: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: DownStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessageURL,
        raw: '• [IN PROGRESS] PlayStation®: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: DownStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessageURL,
        raw: 'ESO Store and Account System for maintenance – September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServiceStoreEsoSlug,
        type: ServiceType,
        support: StoreSupport,
        zone: EsoZone,
        status: PlannedStatus,
        rawSlug: 'ESO Store and Account System for',
        rawDate:
          'September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessageURL,
        raw: 'ESO Store and Account System for maintenance – September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServiceSystemAccountSlug,
        type: ServiceType,
        support: SystemSupport,
        zone: AccountZone,
        status: PlannedStatus,
        rawSlug: 'ESO Store and Account System for',
        rawDate:
          'September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
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
    date: '2024-09-04T10_08_15',
    url: ForumMessageURL,
    file: '2024-09-04T10_08_15.html',
    rawList: [
      '• [IN PROGRESS] Xbox: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• [IN PROGRESS] PlayStation®: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• ESO Store and Account System for maintenance – September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: '• [IN PROGRESS] Xbox: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: DownStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessageURL,
        raw: '• [IN PROGRESS] Xbox: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxNaSlug,
        type: ServerType,
        support: XboxSupport,
        zone: NaZone,
        status: DownStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessageURL,
        raw: '• [IN PROGRESS] PlayStation®: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: DownStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessageURL,
        raw: '• [IN PROGRESS] PlayStation®: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: DownStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessageURL,
        raw: '• ESO Store and Account System for maintenance – September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServiceStoreEsoSlug,
        type: ServiceType,
        support: StoreSupport,
        zone: EsoZone,
        status: PlannedStatus,
        rawSlug: 'ESO Store and Account System for',
        rawDate:
          'September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessageURL,
        raw: '• ESO Store and Account System for maintenance – September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServiceSystemAccountSlug,
        type: ServiceType,
        support: SystemSupport,
        zone: AccountZone,
        status: PlannedStatus,
        rawSlug: 'ESO Store and Account System for',
        rawDate:
          'September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
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
    date: '2024-09-04T10_03_11',
    url: ForumMessagePTSURL,
    file: '2024-09-04T10_03_11.html',
    rawList: [
      'We will be performing maintenance on the PTS on Thursday at 9:00AM EDT (13:00 UTC).',
      '• [IN PROGRESS] Xbox: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• [IN PROGRESS] PlayStation®: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      'ESO Store and Account System for maintenance – September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessagePTSURL,
        raw: 'We will be performing maintenance on the PTS on Thursday at 9:00AM EDT (13:00 UTC).',
        slug: ServerPcPtsSlug,
        type: ServerType,
        support: PcSupport,
        zone: PtsZone,
        status: PlannedStatus,
        rawSlug: 'PTS',
        rawDate: 'Thursday at 9:00AM EDT (13:00 UTC)',
        rawStatus: 'We will be performing maintenance',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 5)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• [IN PROGRESS] Xbox: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: DownStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• [IN PROGRESS] Xbox: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxNaSlug,
        type: ServerType,
        support: XboxSupport,
        zone: NaZone,
        status: DownStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• [IN PROGRESS] PlayStation®: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: DownStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• [IN PROGRESS] PlayStation®: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: DownStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: 'ESO Store and Account System for maintenance – September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServiceStoreEsoSlug,
        type: ServiceType,
        support: StoreSupport,
        zone: EsoZone,
        status: PlannedStatus,
        rawSlug: 'ESO Store and Account System for',
        rawDate:
          'September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: 'ESO Store and Account System for maintenance – September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServiceSystemAccountSlug,
        type: ServiceType,
        support: SystemSupport,
        zone: AccountZone,
        status: PlannedStatus,
        rawSlug: 'ESO Store and Account System for',
        rawDate:
          'September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
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
    date: '2024-09-04T10_07_15',
    url: ForumMessagePTSURL,
    file: '2024-09-04T10_07_15.html',
    rawList: [
      'We will be performing maintenance on the PTS on Thursday at 9:00AM EDT (13:00 UTC).',
      '• [IN PROGRESS] Xbox: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• [IN PROGRESS] PlayStation®: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• ESO Store and Account System for maintenance – September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessagePTSURL,
        raw: 'We will be performing maintenance on the PTS on Thursday at 9:00AM EDT (13:00 UTC).',
        slug: ServerPcPtsSlug,
        type: ServerType,
        support: PcSupport,
        zone: PtsZone,
        status: PlannedStatus,
        rawSlug: 'PTS',
        rawDate: 'Thursday at 9:00AM EDT (13:00 UTC)',
        rawStatus: 'We will be performing maintenance',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 5)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• [IN PROGRESS] Xbox: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: DownStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• [IN PROGRESS] Xbox: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxNaSlug,
        type: ServerType,
        support: XboxSupport,
        zone: NaZone,
        status: DownStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• [IN PROGRESS] PlayStation®: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: DownStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• [IN PROGRESS] PlayStation®: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: DownStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• ESO Store and Account System for maintenance – September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServiceStoreEsoSlug,
        type: ServiceType,
        support: StoreSupport,
        zone: EsoZone,
        status: PlannedStatus,
        rawSlug: 'ESO Store and Account System for',
        rawDate:
          'September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• ESO Store and Account System for maintenance – September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServiceSystemAccountSlug,
        type: ServiceType,
        support: SystemSupport,
        zone: AccountZone,
        status: PlannedStatus,
        rawSlug: 'ESO Store and Account System for',
        rawDate:
          'September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
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
    date: '2024-09-04T14_01_31',
    url: ForumMessagePTSURL,
    file: '2024-09-04T14_01_31.html',
    rawList: [
      'We will be performing maintenance on the PTS on Thursday at 9:00AM EDT (13:00 UTC).',
      '• [IN PROGRESS] Xbox: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• [IN PROGRESS] PlayStation®: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• [IN PROGRESS] ESO Store and Account System for maintenance – September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessagePTSURL,
        raw: 'We will be performing maintenance on the PTS on Thursday at 9:00AM EDT (13:00 UTC).',
        slug: ServerPcPtsSlug,
        type: ServerType,
        support: PcSupport,
        zone: PtsZone,
        status: PlannedStatus,
        rawSlug: 'PTS',
        rawDate: 'Thursday at 9:00AM EDT (13:00 UTC)',
        rawStatus: 'We will be performing maintenance',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 5)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• [IN PROGRESS] Xbox: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: DownStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• [IN PROGRESS] Xbox: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxNaSlug,
        type: ServerType,
        support: XboxSupport,
        zone: NaZone,
        status: DownStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• [IN PROGRESS] PlayStation®: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: DownStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• [IN PROGRESS] PlayStation®: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: DownStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• [IN PROGRESS] ESO Store and Account System for maintenance – September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServiceStoreEsoSlug,
        type: ServiceType,
        support: StoreSupport,
        zone: EsoZone,
        status: DownStatus,
        rawSlug: 'ESO Store and Account System for',
        rawDate:
          'September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• [IN PROGRESS] ESO Store and Account System for maintenance – September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServiceSystemAccountSlug,
        type: ServiceType,
        support: SystemSupport,
        zone: AccountZone,
        status: DownStatus,
        rawSlug: 'ESO Store and Account System for',
        rawDate:
          'September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
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
    date: '2024-09-04T14_02_25',
    url: ForumMessageURL,
    file: '2024-09-04T14_02_25.html',
    rawList: [
      '• [IN PROGRESS] Xbox: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• [IN PROGRESS] PlayStation®: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• [IN PROGRESS] ESO Store and Account System for maintenance – September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: '• [IN PROGRESS] Xbox: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: DownStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessageURL,
        raw: '• [IN PROGRESS] Xbox: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxNaSlug,
        type: ServerType,
        support: XboxSupport,
        zone: NaZone,
        status: DownStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessageURL,
        raw: '• [IN PROGRESS] PlayStation®: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: DownStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessageURL,
        raw: '• [IN PROGRESS] PlayStation®: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: DownStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessageURL,
        raw: '• [IN PROGRESS] ESO Store and Account System for maintenance – September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServiceStoreEsoSlug,
        type: ServiceType,
        support: StoreSupport,
        zone: EsoZone,
        status: DownStatus,
        rawSlug: 'ESO Store and Account System for',
        rawDate:
          'September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessageURL,
        raw: '• [IN PROGRESS] ESO Store and Account System for maintenance – September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServiceSystemAccountSlug,
        type: ServiceType,
        support: SystemSupport,
        zone: AccountZone,
        status: DownStatus,
        rawSlug: 'ESO Store and Account System for',
        rawDate:
          'September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
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
    date: '2024-09-04T14_50_29',
    url: ForumMessagePTSURL,
    file: '2024-09-04T14_50_29.html',
    rawList: [
      'We will be performing maintenance on the PTS on Thursday at 9:00AM EDT (13:00 UTC).',
      '• [COMPLETE] Xbox: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• [COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• [COMPLETE] ESO Store and Account System for maintenance – September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessagePTSURL,
        raw: 'We will be performing maintenance on the PTS on Thursday at 9:00AM EDT (13:00 UTC).',
        slug: ServerPcPtsSlug,
        type: ServerType,
        support: PcSupport,
        zone: PtsZone,
        status: PlannedStatus,
        rawSlug: 'PTS',
        rawDate: 'Thursday at 9:00AM EDT (13:00 UTC)',
        rawStatus: 'We will be performing maintenance',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 5)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• [COMPLETE] Xbox: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: UpStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[COMPLETE]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• [COMPLETE] Xbox: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxNaSlug,
        type: ServerType,
        support: XboxSupport,
        zone: NaZone,
        status: UpStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[COMPLETE]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• [COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: UpStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[COMPLETE]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• [COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: UpStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[COMPLETE]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• [COMPLETE] ESO Store and Account System for maintenance – September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServiceStoreEsoSlug,
        type: ServiceType,
        support: StoreSupport,
        zone: EsoZone,
        status: UpStatus,
        rawSlug: 'ESO Store and Account System for',
        rawDate:
          'September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[COMPLETE]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• [COMPLETE] ESO Store and Account System for maintenance – September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServiceSystemAccountSlug,
        type: ServiceType,
        support: SystemSupport,
        zone: AccountZone,
        status: UpStatus,
        rawSlug: 'ESO Store and Account System for',
        rawDate:
          'September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[COMPLETE]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
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
    date: '2024-09-04T14_51_09',
    url: ForumMessageURL,
    file: '2024-09-04T14_51_09.html',
    rawList: [
      '• [COMPLETE] Xbox: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• [COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• [COMPLETE] ESO Store and Account System for maintenance – September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: '• [COMPLETE] Xbox: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: UpStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[COMPLETE]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessageURL,
        raw: '• [COMPLETE] Xbox: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxNaSlug,
        type: ServerType,
        support: XboxSupport,
        zone: NaZone,
        status: UpStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[COMPLETE]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessageURL,
        raw: '• [COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: UpStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[COMPLETE]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessageURL,
        raw: '• [COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: UpStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[COMPLETE]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessageURL,
        raw: '• [COMPLETE] ESO Store and Account System for maintenance – September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServiceStoreEsoSlug,
        type: ServiceType,
        support: StoreSupport,
        zone: EsoZone,
        status: UpStatus,
        rawSlug: 'ESO Store and Account System for',
        rawDate:
          'September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[COMPLETE]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessageURL,
        raw: '• [COMPLETE] ESO Store and Account System for maintenance – September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServiceSystemAccountSlug,
        type: ServiceType,
        support: SystemSupport,
        zone: AccountZone,
        status: UpStatus,
        rawSlug: 'ESO Store and Account System for',
        rawDate:
          'September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[COMPLETE]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
    ],
  },
];

export default pattern20240904;
