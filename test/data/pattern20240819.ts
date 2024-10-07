import {
  DownStatus,
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
  UpStatus,
  XboxSupport,
} from '@eso-status/types';
import { ForumMessageURL } from '../../src/const';
import { PatternItem } from '../interface/patternItem.interface';

const pattern20240819: PatternItem[] = [
  {
    date: '2024-08-19T08_05_59',
    url: ForumMessageURL,
    file: '2024-08-19T08_05_59.html',
    rawList: [
      '• [IN PROGRESS] PC/Mac: NA and EU megaservers for patch maintenance – August 19, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
      '• Xbox: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
      '• PlayStation®: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: '• [IN PROGRESS] PC/Mac: NA and EU megaservers for patch maintenance – August 19, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        slug: ServerPcEuSlug,
        type: ServerType,
        support: PcSupport,
        zone: EuZone,
        status: DownStatus,
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate: 'August 19, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: ['2024-08-19T08:00:00.000Z', '2024-08-19T14:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '• [IN PROGRESS] PC/Mac: NA and EU megaservers for patch maintenance – August 19, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        slug: ServerPcNaSlug,
        type: ServerType,
        support: PcSupport,
        zone: NaZone,
        status: DownStatus,
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate: 'August 19, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: ['2024-08-19T08:00:00.000Z', '2024-08-19T14:00:00.000Z'],
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
        dates: ['2024-08-21T10:00:00.000Z', '2024-08-21T13:00:00.000Z'],
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
        dates: ['2024-08-21T10:00:00.000Z', '2024-08-21T13:00:00.000Z'],
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
        dates: ['2024-08-21T10:00:00.000Z', '2024-08-21T13:00:00.000Z'],
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
        dates: ['2024-08-21T10:00:00.000Z', '2024-08-21T13:00:00.000Z'],
      },
    ],
  },
  {
    date: '2024-08-19T14_04_04',
    url: ForumMessageURL,
    file: '2024-08-19T14_04_04.html',
    rawList: [
      '• [EXTENDED] PC/Mac: NA and EU megaservers for patch maintenance – August 19, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• Xbox: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
      '• PlayStation®: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: '• [EXTENDED] PC/Mac: NA and EU megaservers for patch maintenance – August 19, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPcEuSlug,
        type: ServerType,
        support: PcSupport,
        zone: EuZone,
        status: DownStatus,
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate: 'August 19, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[EXTENDED]',
        dates: ['2024-08-19T08:00:00.000Z', '2024-08-19T16:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '• [EXTENDED] PC/Mac: NA and EU megaservers for patch maintenance – August 19, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPcNaSlug,
        type: ServerType,
        support: PcSupport,
        zone: NaZone,
        status: DownStatus,
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate: 'August 19, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[EXTENDED]',
        dates: ['2024-08-19T08:00:00.000Z', '2024-08-19T16:00:00.000Z'],
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
        dates: ['2024-08-21T10:00:00.000Z', '2024-08-21T13:00:00.000Z'],
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
        dates: ['2024-08-21T10:00:00.000Z', '2024-08-21T13:00:00.000Z'],
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
        dates: ['2024-08-21T10:00:00.000Z', '2024-08-21T13:00:00.000Z'],
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
        dates: ['2024-08-21T10:00:00.000Z', '2024-08-21T13:00:00.000Z'],
      },
    ],
  },
  {
    date: '2024-08-19T16_09_32',
    url: ForumMessageURL,
    file: '2024-08-19T16_09_32.html',
    rawList: [
      '• [COMPLETE] PC/Mac: EU megaserver for patch maintenance – August 19, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• [EXTENDED] PC/Mac: NA megaserver for patch maintenance – August 19, 4:00AM EDT (8:00 UTC) - 14:00PM EDT (18:00 UTC)',
      '• Xbox: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
      '• PlayStation®: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: '• [COMPLETE] PC/Mac: EU megaserver for patch maintenance – August 19, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPcEuSlug,
        type: ServerType,
        support: PcSupport,
        zone: EuZone,
        status: UpStatus,
        rawSlug: 'PC/Mac: EU megaserver for',
        rawDate: 'August 19, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[COMPLETE]',
        dates: ['2024-08-19T08:00:00.000Z', '2024-08-19T16:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '• [EXTENDED] PC/Mac: NA megaserver for patch maintenance – August 19, 4:00AM EDT (8:00 UTC) - 14:00PM EDT (18:00 UTC)',
        slug: ServerPcNaSlug,
        type: ServerType,
        support: PcSupport,
        zone: NaZone,
        status: DownStatus,
        rawSlug: 'PC/Mac: NA megaserver for',
        rawDate: 'August 19, 4:00AM EDT (8:00 UTC) - 14:00PM EDT (18:00 UTC)',
        rawStatus: '[EXTENDED]',
        dates: ['2024-08-19T08:00:00.000Z', '2024-08-19T18:00:00.000Z'],
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
        dates: ['2024-08-21T10:00:00.000Z', '2024-08-21T13:00:00.000Z'],
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
        dates: ['2024-08-21T10:00:00.000Z', '2024-08-21T13:00:00.000Z'],
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
        dates: ['2024-08-21T10:00:00.000Z', '2024-08-21T13:00:00.000Z'],
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
        dates: ['2024-08-21T10:00:00.000Z', '2024-08-21T13:00:00.000Z'],
      },
    ],
  },
  {
    date: '2024-08-19T17_12_16',
    url: ForumMessageURL,
    file: '2024-08-19T17_12_16.html',
    rawList: [
      '• [COMPLETE] PC/Mac: EU megaserver for patch maintenance – August 19, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• [COMPLETE] PC/Mac: NA megaserver for patch maintenance – August 19, 4:00AM EDT (8:00 UTC) - 14:00PM EDT (18:00 UTC)',
      '• Xbox: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
      '• PlayStation®: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: '• [COMPLETE] PC/Mac: EU megaserver for patch maintenance – August 19, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPcEuSlug,
        type: ServerType,
        support: PcSupport,
        zone: EuZone,
        status: UpStatus,
        rawSlug: 'PC/Mac: EU megaserver for',
        rawDate: 'August 19, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[COMPLETE]',
        dates: ['2024-08-19T08:00:00.000Z', '2024-08-19T16:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '• [COMPLETE] PC/Mac: NA megaserver for patch maintenance – August 19, 4:00AM EDT (8:00 UTC) - 14:00PM EDT (18:00 UTC)',
        slug: ServerPcNaSlug,
        type: ServerType,
        support: PcSupport,
        zone: NaZone,
        status: UpStatus,
        rawSlug: 'PC/Mac: NA megaserver for',
        rawDate: 'August 19, 4:00AM EDT (8:00 UTC) - 14:00PM EDT (18:00 UTC)',
        rawStatus: '[COMPLETE]',
        dates: ['2024-08-19T08:00:00.000Z', '2024-08-19T18:00:00.000Z'],
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
        dates: ['2024-08-21T10:00:00.000Z', '2024-08-21T13:00:00.000Z'],
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
        dates: ['2024-08-21T10:00:00.000Z', '2024-08-21T13:00:00.000Z'],
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
        dates: ['2024-08-21T10:00:00.000Z', '2024-08-21T13:00:00.000Z'],
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
        dates: ['2024-08-21T10:00:00.000Z', '2024-08-21T13:00:00.000Z'],
      },
    ],
  },
];

export default pattern20240819;
