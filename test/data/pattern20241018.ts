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
import { PatternItem } from '../interface/patternItem.interface';
import { ForumMessageURL } from '../../src/const';

const pattern20241018: PatternItem[] = [
  {
    date: '2024-10-18T19_04_59',
    url: ForumMessageURL,
    file: '2024-10-18T19_04_59.html',
    rawList: [
      '• ESO Store and Account System for maintenance – October 21, 9:00AM EDT (13:00 UTC) - 12:00PM EDT (16:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: '• ESO Store and Account System for maintenance – October 21, 9:00AM EDT (13:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServiceStoreEsoSlug,
        type: ServiceType,
        support: StoreSupport,
        zone: EsoZone,
        status: PlannedStatus,
        rawSlug: 'ESO Store and Account System for',
        rawDate: 'October 21, 9:00AM EDT (13:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-10-21T13:00:00.000Z', '2024-10-21T16:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '• ESO Store and Account System for maintenance – October 21, 9:00AM EDT (13:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServiceSystemAccountSlug,
        type: ServiceType,
        support: SystemSupport,
        zone: AccountZone,
        status: PlannedStatus,
        rawSlug: 'ESO Store and Account System for',
        rawDate: 'October 21, 9:00AM EDT (13:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-10-21T13:00:00.000Z', '2024-10-21T16:00:00.000Z'],
      },
    ],
  },
];

export default pattern20241018;
