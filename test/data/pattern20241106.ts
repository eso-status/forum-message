import {
  AccountZone,
  DownStatus,
  EsoZone,
  ServiceStoreEsoSlug,
  ServiceSystemAccountSlug,
  ServiceType,
  StoreSupport,
  SystemSupport,
} from '@eso-status/types';
import { PatternItem } from '../interface/patternItem.interface';
import { ForumMessageURL } from '../../src/const';

const pattern20241106: PatternItem[] = [
  {
    date: '2024-11-06T14_02_43',
    url: ForumMessageURL,
    file: '2024-11-06T14_02_43.html',
    rawList: [
      '• [IN PROGRESS] ESO Store and Account System for maintenance – November 6, 9:00AM EST (14:00 UTC) - 6:00PM EST (23:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: '• [IN PROGRESS] ESO Store and Account System for maintenance – November 6, 9:00AM EST (14:00 UTC) - 6:00PM EST (23:00 UTC)',
        slug: ServiceStoreEsoSlug,
        type: ServiceType,
        support: StoreSupport,
        zone: EsoZone,
        status: DownStatus,
        rawStatus: '[IN PROGRESS]',
        rawSlug: 'ESO Store and Account System for',
        rawDate: 'November 6, 9:00AM EST (14:00 UTC) - 6:00PM EST (23:00 UTC)',
        dates: ['2024-11-06T14:00:00.000Z', '2024-11-06T23:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '• [IN PROGRESS] ESO Store and Account System for maintenance – November 6, 9:00AM EST (14:00 UTC) - 6:00PM EST (23:00 UTC)',
        slug: ServiceSystemAccountSlug,
        type: ServiceType,
        support: SystemSupport,
        zone: AccountZone,
        status: DownStatus,
        rawStatus: '[IN PROGRESS]',
        rawSlug: 'ESO Store and Account System for',
        rawDate: 'November 6, 9:00AM EST (14:00 UTC) - 6:00PM EST (23:00 UTC)',
        dates: ['2024-11-06T14:00:00.000Z', '2024-11-06T23:00:00.000Z'],
      },
    ],
  },
];

export default pattern20241106;
