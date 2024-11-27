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
import { PatternItem } from '../interface/patternItem.interface';
import { ForumMessageURL } from '../../src/const';

const pattern20241108: PatternItem[] = [
  {
    date: '2024-11-08T20_02_49',
    url: ForumMessageURL,
    file: '2024-11-08T20_02_49.html',
    rawList: [
      '• PC/Mac: NA and EU megaservers for patch maintenance – November 11, 4:00AM EST (9:00 UTC) - 9:00AM EST (14:00 UTC)',
      '• Xbox: NA and EU megaservers for patch maintenance – November 13, 4:00AM EST (9:00 UTC) - 12:00PM EST (17:00 UTC)',
      '• PlayStation®: NA and EU megaservers for patch maintenance – November 13, 4:00AM EST (9:00 UTC) - 12:00PM EST (17:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: '• PC/Mac: NA and EU megaservers for patch maintenance – November 11, 4:00AM EST (9:00 UTC) - 9:00AM EST (14:00 UTC)',
        slug: ServerPcEuSlug,
        type: ServerType,
        support: PcSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate: 'November 11, 4:00AM EST (9:00 UTC) - 9:00AM EST (14:00 UTC)',
        dates: ['2024-11-11T09:00:00.000Z', '2024-11-11T14:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '• PC/Mac: NA and EU megaservers for patch maintenance – November 11, 4:00AM EST (9:00 UTC) - 9:00AM EST (14:00 UTC)',
        slug: ServerPcNaSlug,
        type: ServerType,
        support: PcSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate: 'November 11, 4:00AM EST (9:00 UTC) - 9:00AM EST (14:00 UTC)',
        dates: ['2024-11-11T09:00:00.000Z', '2024-11-11T14:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '• Xbox: NA and EU megaservers for patch maintenance – November 13, 4:00AM EST (9:00 UTC) - 12:00PM EST (17:00 UTC)',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'November 13, 4:00AM EST (9:00 UTC) - 12:00PM EST (17:00 UTC)',
        dates: ['2024-11-13T09:00:00.000Z', '2024-11-13T17:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '• Xbox: NA and EU megaservers for patch maintenance – November 13, 4:00AM EST (9:00 UTC) - 12:00PM EST (17:00 UTC)',
        slug: ServerXboxNaSlug,
        type: ServerType,
        support: XboxSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'November 13, 4:00AM EST (9:00 UTC) - 12:00PM EST (17:00 UTC)',
        dates: ['2024-11-13T09:00:00.000Z', '2024-11-13T17:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '• PlayStation®: NA and EU megaservers for patch maintenance – November 13, 4:00AM EST (9:00 UTC) - 12:00PM EST (17:00 UTC)',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'November 13, 4:00AM EST (9:00 UTC) - 12:00PM EST (17:00 UTC)',
        dates: ['2024-11-13T09:00:00.000Z', '2024-11-13T17:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '• PlayStation®: NA and EU megaservers for patch maintenance – November 13, 4:00AM EST (9:00 UTC) - 12:00PM EST (17:00 UTC)',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'November 13, 4:00AM EST (9:00 UTC) - 12:00PM EST (17:00 UTC)',
        dates: ['2024-11-13T09:00:00.000Z', '2024-11-13T17:00:00.000Z'],
      },
    ],
  },
];

export default pattern20241108;