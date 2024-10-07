import {
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
  XboxSupport,
} from '@eso-status/types';
import { PatternItem } from '../interface/patternItem.interface';
import { ForumMessagePTSURL, ForumMessageURL } from '../../src/const';

const pattern20240927: PatternItem[] = [
  {
    date: '2024-09-27T19_58_30',
    url: ForumMessageURL,
    file: '2024-09-27T19_58_30.html',
    rawList: [
      '• PC/Mac: NA and EU megaservers for maintenance – September 30, 4:00AM EDT (8:00 UTC) - 8:00AM EDT (12:00 UTC)',
      '• Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: '• PC/Mac: NA and EU megaservers for maintenance – September 30, 4:00AM EDT (8:00 UTC) - 8:00AM EDT (12:00 UTC)',
        slug: ServerPcEuSlug,
        type: ServerType,
        support: PcSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate: 'September 30, 4:00AM EDT (8:00 UTC) - 8:00AM EDT (12:00 UTC)',
        dates: ['2024-09-30T08:00:00.000Z', '2024-09-30T12:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '• PC/Mac: NA and EU megaservers for maintenance – September 30, 4:00AM EDT (8:00 UTC) - 8:00AM EDT (12:00 UTC)',
        slug: ServerPcNaSlug,
        type: ServerType,
        support: PcSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate: 'September 30, 4:00AM EDT (8:00 UTC) - 8:00AM EDT (12:00 UTC)',
        dates: ['2024-09-30T08:00:00.000Z', '2024-09-30T12:00:00.000Z'],
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
        dates: ['2024-10-02T10:00:00.000Z', '2024-10-02T16:00:00.000Z'],
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
        dates: ['2024-10-02T10:00:00.000Z', '2024-10-02T16:00:00.000Z'],
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
        dates: ['2024-10-02T10:00:00.000Z', '2024-10-02T16:00:00.000Z'],
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
        dates: ['2024-10-02T10:00:00.000Z', '2024-10-02T16:00:00.000Z'],
      },
    ],
  },
  {
    date: '2024-09-27T20_00_08',
    url: ForumMessagePTSURL,
    file: '2024-09-27T20_00_08.html',
    rawList: [
      '• PC/Mac: NA and EU megaservers for maintenance – September 30, 4:00AM EDT (8:00 UTC) - 8:00AM EDT (12:00 UTC)',
      '• Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      'We will be performing maintenance for patch 10.2.2 on the PTS on Monday at 8:00AM EDT (12:00 UTC).',
    ],
    expected: [
      {
        source: ForumMessagePTSURL,
        raw: '• PC/Mac: NA and EU megaservers for maintenance – September 30, 4:00AM EDT (8:00 UTC) - 8:00AM EDT (12:00 UTC)',
        slug: ServerPcEuSlug,
        type: ServerType,
        support: PcSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate: 'September 30, 4:00AM EDT (8:00 UTC) - 8:00AM EDT (12:00 UTC)',
        dates: ['2024-09-30T08:00:00.000Z', '2024-09-30T12:00:00.000Z'],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• PC/Mac: NA and EU megaservers for maintenance – September 30, 4:00AM EDT (8:00 UTC) - 8:00AM EDT (12:00 UTC)',
        slug: ServerPcNaSlug,
        type: ServerType,
        support: PcSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate: 'September 30, 4:00AM EDT (8:00 UTC) - 8:00AM EDT (12:00 UTC)',
        dates: ['2024-09-30T08:00:00.000Z', '2024-09-30T12:00:00.000Z'],
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
        dates: ['2024-10-02T10:00:00.000Z', '2024-10-02T16:00:00.000Z'],
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
        dates: ['2024-10-02T10:00:00.000Z', '2024-10-02T16:00:00.000Z'],
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
        dates: ['2024-10-02T10:00:00.000Z', '2024-10-02T16:00:00.000Z'],
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
        dates: ['2024-10-02T10:00:00.000Z', '2024-10-02T16:00:00.000Z'],
      },
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
        dates: ['2024-09-30T12:00:00.000Z'],
      },
    ],
  },
];

export default pattern20240927;
