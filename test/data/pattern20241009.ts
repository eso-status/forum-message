import {
  DownStatus,
  EuZone,
  NaZone,
  PlannedStatus,
  PsSupport,
  ServerPsEuSlug,
  ServerPsNaSlug,
  ServerType,
  ServerXboxEuSlug,
  UpStatus,
  XboxSupport,
} from '@eso-status/types';
import { PatternItem } from '../interface/patternItem.interface';
import { ForumMessageURL } from '../../src/const';

const pattern20241009: PatternItem[] = [
  {
    date: '2024-10-09T02_04_01',
    url: ForumMessageURL,
    file: '2024-10-09T02_04_01.html',
    rawList: [
      '· [IN PROGRESS] Xbox: EU megaserver for maintenance – October 9, 2:00 UTC (October 8, 10:00PM EDT) - 16:00 UTC (12:00PM EDT)',
      '· PlayStation®: NA and EU megaservers for patch maintenance – October 9, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: '· [IN PROGRESS] Xbox: EU megaserver for maintenance – October 9, 2:00 UTC (October 8, 10:00PM EDT) - 16:00 UTC (12:00PM EDT)',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: DownStatus,
        rawStatus: '[IN PROGRESS]',
        rawSlug: 'Xbox: EU megaserver for',
        rawDate:
          'October 9, 2:00 UTC (October 8, 10:00PM EDT) - 16:00 UTC (12:00PM EDT)',
        dates: ['2024-10-09T02:00:00.000Z', '2024-10-09T16:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '· PlayStation®: NA and EU megaservers for patch maintenance – October 9, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 9, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-10-09T10:00:00.000Z', '2024-10-09T16:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '· PlayStation®: NA and EU megaservers for patch maintenance – October 9, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 9, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-10-09T10:00:00.000Z', '2024-10-09T16:00:00.000Z'],
      },
    ],
  },
  {
    date: '2024-10-09T10_04_56',
    url: ForumMessageURL,
    file: '2024-10-09T10_04_56.html',
    rawList: [
      '• [IN PROGRESS] Xbox: EU megaserver for maintenance – October 9, 2:00 UTC (October 8, 10:00PM EDT) - 16:00 UTC (12:00PM EDT)',
      '• [IN PROGRESS] PlayStation®: NA and EU megaservers for patch maintenance – October 9, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: '• [IN PROGRESS] Xbox: EU megaserver for maintenance – October 9, 2:00 UTC (October 8, 10:00PM EDT) - 16:00 UTC (12:00PM EDT)',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: DownStatus,
        rawStatus: '[IN PROGRESS]',
        rawSlug: 'Xbox: EU megaserver for',
        rawDate:
          'October 9, 2:00 UTC (October 8, 10:00PM EDT) - 16:00 UTC (12:00PM EDT)',
        dates: ['2024-10-09T02:00:00.000Z', '2024-10-09T16:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '• [IN PROGRESS] PlayStation®: NA and EU megaservers for patch maintenance – October 9, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: DownStatus,
        rawStatus: '[IN PROGRESS]',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 9, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-10-09T10:00:00.000Z', '2024-10-09T16:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '• [IN PROGRESS] PlayStation®: NA and EU megaservers for patch maintenance – October 9, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: DownStatus,
        rawStatus: '[IN PROGRESS]',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 9, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-10-09T10:00:00.000Z', '2024-10-09T16:00:00.000Z'],
      },
    ],
  },
  {
    date: '2024-10-09T12_45_22',
    url: ForumMessageURL,
    file: '2024-10-09T12_45_22.html',
    rawList: [
      '• [IN PROGRESS] Xbox: EU megaserver for maintenance – October 9, 2:00 UTC (October 8, 10:00PM EDT) - 16:00 UTC (12:00PM EDT)',
      '•[COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – October 9, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: '• [IN PROGRESS] Xbox: EU megaserver for maintenance – October 9, 2:00 UTC (October 8, 10:00PM EDT) - 16:00 UTC (12:00PM EDT)',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: DownStatus,
        rawStatus: '[IN PROGRESS]',
        rawSlug: 'Xbox: EU megaserver for',
        rawDate:
          'October 9, 2:00 UTC (October 8, 10:00PM EDT) - 16:00 UTC (12:00PM EDT)',
        dates: ['2024-10-09T02:00:00.000Z', '2024-10-09T16:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '•[COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – October 9, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 9, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-10-09T10:00:00.000Z', '2024-10-09T16:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '•[COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – October 9, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 9, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-10-09T10:00:00.000Z', '2024-10-09T16:00:00.000Z'],
      },
    ],
  },
  {
    date: '2024-10-09T15_57_51',
    url: ForumMessageURL,
    file: '2024-10-09T15_57_51.html',
    rawList: [
      '· [COMPLETE] Xbox: EU megaserver for maintenance – October 9, 2:00 UTC (October 8, 10:00PM EDT) - 16:00 UTC (12:00PM EDT)',
      '· [COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – October 9, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: '· [COMPLETE] Xbox: EU megaserver for maintenance – October 9, 2:00 UTC (October 8, 10:00PM EDT) - 16:00 UTC (12:00PM EDT)',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
        rawSlug: 'Xbox: EU megaserver for',
        rawDate:
          'October 9, 2:00 UTC (October 8, 10:00PM EDT) - 16:00 UTC (12:00PM EDT)',
        dates: ['2024-10-09T02:00:00.000Z', '2024-10-09T16:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '· [COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – October 9, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 9, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-10-09T10:00:00.000Z', '2024-10-09T16:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '· [COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – October 9, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 9, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-10-09T10:00:00.000Z', '2024-10-09T16:00:00.000Z'],
      },
    ],
  },
  {
    date: '2024-10-09T15_59_54',
    url: ForumMessageURL,
    file: '2024-10-09T15_59_54.html',
    rawList: [
      '· [EXTENDED] Xbox: EU megaserver for maintenance – October 9, 2:00 UTC (October 8, 10:00PM EDT) - 22:00 UTC (6:00PM EDT)',
      '· [COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – October 9, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: '· [EXTENDED] Xbox: EU megaserver for maintenance – October 9, 2:00 UTC (October 8, 10:00PM EDT) - 22:00 UTC (6:00PM EDT)',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: DownStatus,
        rawStatus: '[EXTENDED]',
        rawSlug: 'Xbox: EU megaserver for',
        rawDate:
          'October 9, 2:00 UTC (October 8, 10:00PM EDT) - 22:00 UTC (6:00PM EDT)',
        dates: ['2024-10-09T02:00:00.000Z', '2024-10-09T22:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '· [COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – October 9, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 9, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-10-09T10:00:00.000Z', '2024-10-09T16:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '· [COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – October 9, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 9, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-10-09T10:00:00.000Z', '2024-10-09T16:00:00.000Z'],
      },
    ],
  },
  {
    date: '2024-10-09T16_01_55',
    url: ForumMessageURL,
    file: '2024-10-09T16_01_55.html',
    rawList: [
      '· [EXTENDED] Xbox: EU megaserver for maintenance – October 9, 2:00 UTC (October 8, 10:00PM EDT) - 22:00 UTC (6:00PM EDT)',
      '· [COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – October 9, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: '· [EXTENDED] Xbox: EU megaserver for maintenance – October 9, 2:00 UTC (October 8, 10:00PM EDT) - 22:00 UTC (6:00PM EDT)',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: DownStatus,
        rawStatus: '[EXTENDED]',
        rawSlug: 'Xbox: EU megaserver for',
        rawDate:
          'October 9, 2:00 UTC (October 8, 10:00PM EDT) - 22:00 UTC (6:00PM EDT)',
        dates: ['2024-10-09T02:00:00.000Z', '2024-10-09T22:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '· [COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – October 9, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 9, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-10-09T10:00:00.000Z', '2024-10-09T16:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '· [COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – October 9, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 9, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-10-09T10:00:00.000Z', '2024-10-09T16:00:00.000Z'],
      },
    ],
  },
  {
    date: '2024-10-09T20_31_25',
    url: ForumMessageURL,
    file: '2024-10-09T20_31_25.html',
    rawList: [
      '· [COMPLETE] Xbox: EU megaserver for maintenance – October 9, 2:00 UTC (October 8, 10:00PM EDT) - 22:00 UTC (6:00PM EDT)',
      '· [COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – October 9, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: '· [COMPLETE] Xbox: EU megaserver for maintenance – October 9, 2:00 UTC (October 8, 10:00PM EDT) - 22:00 UTC (6:00PM EDT)',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
        rawSlug: 'Xbox: EU megaserver for',
        rawDate:
          'October 9, 2:00 UTC (October 8, 10:00PM EDT) - 22:00 UTC (6:00PM EDT)',
        dates: ['2024-10-09T02:00:00.000Z', '2024-10-09T22:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '· [COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – October 9, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 9, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-10-09T10:00:00.000Z', '2024-10-09T16:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '· [COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – October 9, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 9, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-10-09T10:00:00.000Z', '2024-10-09T16:00:00.000Z'],
      },
    ],
  },
];

export default pattern20241009;