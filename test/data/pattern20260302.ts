import { PatternItem } from '../interface/patternItem.interface';
import { ForumMessagePTSURL, ForumMessageURL } from '../../src/const';
import {
  AccountZone,
  EsoZone,
  PlannedStatus,
  ServiceStoreEsoSlug,
  ServiceSystemAccountSlug,
  ServiceType,
  StoreSupport,
  SystemSupport,
} from '@eso-status/types';

const pattern20260302: PatternItem[] = [
  {
    date: '2026-03-02T17_27_29',
    url: ForumMessageURL,
    file: '2026-03-02T17_27_29.html',
    rawList: [],
    expected: [],
  },
  {
    date: '2026-03-02T17_28_42',
    url: ForumMessagePTSURL,
    file: '2026-03-02T17_28_42.html',
    rawList: [
      '• ESO Store and Account System for maintenance – March 3, 9:00AM EST (14:00 UTC) - 12:00PM EST (17:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessagePTSURL,
        raw: '• ESO Store and Account System for maintenance – March 3, 9:00AM EST (14:00 UTC) - 12:00PM EST (17:00 UTC)',
        slug: ServiceStoreEsoSlug,
        type: ServiceType,
        support: StoreSupport,
        zone: EsoZone,
        status: PlannedStatus,
        rawSlug: 'ESO Store and Account System for',
        rawDate: 'March 3, 9:00AM EST (14:00 UTC) - 12:00PM EST (17:00 UTC)',
        dates: ['2026-03-03T14:00:00.000Z', '2026-03-03T17:00:00.000Z'],
      },
      {
        source: ForumMessagePTSURL,
        raw: '• ESO Store and Account System for maintenance – March 3, 9:00AM EST (14:00 UTC) - 12:00PM EST (17:00 UTC)',
        slug: ServiceSystemAccountSlug,
        type: ServiceType,
        support: SystemSupport,
        zone: AccountZone,
        status: PlannedStatus,
        rawSlug: 'ESO Store and Account System for',
        rawDate: 'March 3, 9:00AM EST (14:00 UTC) - 12:00PM EST (17:00 UTC)',
        dates: ['2026-03-03T14:00:00.000Z', '2026-03-03T17:00:00.000Z'],
      },
    ],
  },
  {
    date: '2026-03-02T17_29_31',
    url: ForumMessageURL,
    file: '2026-03-02T17_29_31.html',
    rawList: [
      '• ESO Store and Account System for maintenance – March 3, 9:00AM EST (14:00 UTC) - 12:00PM EST (17:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: '• ESO Store and Account System for maintenance – March 3, 9:00AM EST (14:00 UTC) - 12:00PM EST (17:00 UTC)',
        slug: ServiceStoreEsoSlug,
        type: ServiceType,
        support: StoreSupport,
        zone: EsoZone,
        status: PlannedStatus,
        rawSlug: 'ESO Store and Account System for',
        rawDate: 'March 3, 9:00AM EST (14:00 UTC) - 12:00PM EST (17:00 UTC)',
        dates: ['2026-03-03T14:00:00.000Z', '2026-03-03T17:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '• ESO Store and Account System for maintenance – March 3, 9:00AM EST (14:00 UTC) - 12:00PM EST (17:00 UTC)',
        slug: ServiceSystemAccountSlug,
        type: ServiceType,
        support: SystemSupport,
        zone: AccountZone,
        status: PlannedStatus,
        rawSlug: 'ESO Store and Account System for',
        rawDate: 'March 3, 9:00AM EST (14:00 UTC) - 12:00PM EST (17:00 UTC)',
        dates: ['2026-03-03T14:00:00.000Z', '2026-03-03T17:00:00.000Z'],
      },
    ],
  },
];

export default pattern20260302;
