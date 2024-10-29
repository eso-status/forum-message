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
import { PatternItem } from '../interface/patternItem.interface';
import { ForumMessageURL } from '../../src/const';

const pattern20241028: PatternItem[] = [
  {
    date: '2024-10-28T08_05_34',
    url: ForumMessageURL,
    file: '2024-10-28T08_05_34.html',
    rawList: [
      '• [IN PROGRESS] PC/Mac: NA and EU megaservers for patch maintenance – October 28, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
      '· Xbox: NA and EU megaservers for maintenance – October 30, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
      '· PlayStation®: NA and EU megaservers for maintenance – October 30, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: '• [IN PROGRESS] PC/Mac: NA and EU megaservers for patch maintenance – October 28, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        slug: ServerPcEuSlug,
        type: ServerType,
        support: PcSupport,
        zone: EuZone,
        status: DownStatus,
        rawStatus: '[IN PROGRESS]',
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate: 'October 28, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        dates: ['2024-10-28T08:00:00.000Z', '2024-10-28T14:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '• [IN PROGRESS] PC/Mac: NA and EU megaservers for patch maintenance – October 28, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        slug: ServerPcNaSlug,
        type: ServerType,
        support: PcSupport,
        zone: NaZone,
        status: DownStatus,
        rawStatus: '[IN PROGRESS]',
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate: 'October 28, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        dates: ['2024-10-28T08:00:00.000Z', '2024-10-28T14:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '· Xbox: NA and EU megaservers for maintenance – October 30, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'October 30, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: ['2024-10-30T10:00:00.000Z', '2024-10-30T13:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '· Xbox: NA and EU megaservers for maintenance – October 30, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        slug: ServerXboxNaSlug,
        type: ServerType,
        support: XboxSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'October 30, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: ['2024-10-30T10:00:00.000Z', '2024-10-30T13:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '· PlayStation®: NA and EU megaservers for maintenance – October 30, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 30, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: ['2024-10-30T10:00:00.000Z', '2024-10-30T13:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '· PlayStation®: NA and EU megaservers for maintenance – October 30, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 30, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: ['2024-10-30T10:00:00.000Z', '2024-10-30T13:00:00.000Z'],
      },
    ],
  },
  {
    date: '2024-10-28T13_26_34',
    url: ForumMessageURL,
    file: '2024-10-28T13_26_34.html',
    rawList: [
      '• [COMPLETE] PC/Mac: NA and EU megaservers for patch maintenance – October 28, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
      '· Xbox: NA and EU megaservers for maintenance – October 30, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
      '· PlayStation®: NA and EU megaservers for maintenance – October 30, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: '• [COMPLETE] PC/Mac: NA and EU megaservers for patch maintenance – October 28, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        slug: ServerPcEuSlug,
        type: ServerType,
        support: PcSupport,
        zone: EuZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate: 'October 28, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        dates: ['2024-10-28T08:00:00.000Z', '2024-10-28T14:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '• [COMPLETE] PC/Mac: NA and EU megaservers for patch maintenance – October 28, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        slug: ServerPcNaSlug,
        type: ServerType,
        support: PcSupport,
        zone: NaZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate: 'October 28, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        dates: ['2024-10-28T08:00:00.000Z', '2024-10-28T14:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '· Xbox: NA and EU megaservers for maintenance – October 30, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'October 30, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: ['2024-10-30T10:00:00.000Z', '2024-10-30T13:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '· Xbox: NA and EU megaservers for maintenance – October 30, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        slug: ServerXboxNaSlug,
        type: ServerType,
        support: XboxSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'October 30, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: ['2024-10-30T10:00:00.000Z', '2024-10-30T13:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '· PlayStation®: NA and EU megaservers for maintenance – October 30, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 30, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: ['2024-10-30T10:00:00.000Z', '2024-10-30T13:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '· PlayStation®: NA and EU megaservers for maintenance – October 30, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 30, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: ['2024-10-30T10:00:00.000Z', '2024-10-30T13:00:00.000Z'],
      },
    ],
  },
];

export default pattern20241028;
