import {
  DownStatus,
  EuZone,
  NaZone,
  PsSupport,
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

const pattern20241002: PatternItem[] = [
  {
    date: '2024-10-02T16_07_37',
    url: ForumMessageURL,
    file: '2024-10-02T16_07_37.html',
    rawList: [
      '• [COMPLETE] Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• [EXTENDED] PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 4:00PM EDT (20:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: '• [COMPLETE] Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
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
        raw: '• [COMPLETE] Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxNaSlug,
        type: ServerType,
        support: XboxSupport,
        zone: NaZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
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
        raw: '• [EXTENDED] PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 4:00PM EDT (20:00 UTC)',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: DownStatus,
        rawStatus: '[EXTENDED]',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 4:00PM EDT (20:00 UTC)',
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
            .set('hours', 20)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessageURL,
        raw: '• [EXTENDED] PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 4:00PM EDT (20:00 UTC)',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: DownStatus,
        rawStatus: '[EXTENDED]',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 4:00PM EDT (20:00 UTC)',
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
            .set('hours', 20)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
    ],
  },
  {
    date: '2024-10-02T16_08_19',
    url: ForumMessagePTSURL,
    file: '2024-10-02T16_08_19.html',
    rawList: [
      '• [COMPLETE] Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• [EXTENDED] PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 4:00PM EDT (20:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessagePTSURL,
        raw: '• [COMPLETE] Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
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
        raw: '• [COMPLETE] Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxNaSlug,
        type: ServerType,
        support: XboxSupport,
        zone: NaZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
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
        raw: '• [EXTENDED] PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 4:00PM EDT (20:00 UTC)',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: DownStatus,
        rawStatus: '[EXTENDED]',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 4:00PM EDT (20:00 UTC)',
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
            .set('hours', 20)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• [EXTENDED] PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 4:00PM EDT (20:00 UTC)',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: DownStatus,
        rawStatus: '[EXTENDED]',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 4:00PM EDT (20:00 UTC)',
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
            .set('hours', 20)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
    ],
  },
  {
    date: '2024-10-02T19_38_14',
    url: ForumMessageURL,
    file: '2024-10-02T19_38_14.html',
    rawList: [
      '• [COMPLETE] Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• [COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: '• [COMPLETE] Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
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
        raw: '• [COMPLETE] Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxNaSlug,
        type: ServerType,
        support: XboxSupport,
        zone: NaZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
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
        raw: '• [COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
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
        raw: '• [COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
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
    date: '2024-10-02T19_39_47',
    url: ForumMessagePTSURL,
    file: '2024-10-02T19_39_47.html',
    rawList: [
      '• [COMPLETE] Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• [COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessagePTSURL,
        raw: '• [COMPLETE] Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
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
        raw: '• [COMPLETE] Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxNaSlug,
        type: ServerType,
        support: XboxSupport,
        zone: NaZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
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
        raw: '• [COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
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
        raw: '• [COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
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
];

export default pattern20241002;
