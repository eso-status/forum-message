import {
  AccountZone,
  DownStatus,
  EsoZone,
  PlannedStatus,
  ServiceStoreEsoSlug,
  ServiceSystemAccountSlug,
  ServiceType,
  StoreSupport,
  SystemSupport,
  UpStatus,
} from '@eso-status/types';
import { PatternItem } from '../interface/patternItem.interface';
import ForumMessageUrl from '../../src/const/ForumMessageUrl.const';

const pattern20240822: PatternItem[] = [
  {
    date: '2024-08-22T02_05_25',
    url: ForumMessageUrl,
    file: '2024-08-22T02_05_25.html',
    rawList: [
      'ESO Store and Account System for maintenance - August 22, 9:00AM EDT (13:00 UTC) - 12:00PM EDT (16:00 UTC)',
    ],
    patternList: [
      'ESO Store and Account System for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
    ],
    expected: [
      {
        source: ForumMessageUrl,
        raw: 'ESO Store and Account System for maintenance - August 22, 9:00AM EDT (13:00 UTC) - 12:00PM EDT (16:00 UTC)',
        pattern:
          'ESO Store and Account System for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServiceStoreEsoSlug,
        type: ServiceType,
        support: StoreSupport,
        zone: EsoZone,
        status: PlannedStatus,
        rawSlug: 'ESO Store',
        rawDate: 'August 22, 9:00AM EDT (13:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-08-22T13:00:00.000Z', '2024-08-22T16:00:00.000Z'],
      },
      {
        source: ForumMessageUrl,
        raw: 'ESO Store and Account System for maintenance - August 22, 9:00AM EDT (13:00 UTC) - 12:00PM EDT (16:00 UTC)',
        pattern:
          'ESO Store and Account System for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServiceSystemAccountSlug,
        type: ServiceType,
        support: SystemSupport,
        zone: AccountZone,
        status: PlannedStatus,
        rawSlug: 'Account System',
        rawDate: 'August 22, 9:00AM EDT (13:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-08-22T13:00:00.000Z', '2024-08-22T16:00:00.000Z'],
      },
    ],
  },
  {
    date: '2024-08-22T13_02_03',
    url: ForumMessageUrl,
    file: '2024-08-22T13_02_03.html',
    rawList: [
      '[IN PROGRESS] ESO Store and Account System for maintenance - August 22, 9:00AM EDT (13:00 UTC) - 12:00PM EDT (16:00 UTC)',
    ],
    patternList: [
      '[IN PROGRESS] ESO Store and Account System for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
    ],
    expected: [
      {
        source: ForumMessageUrl,
        raw: '[IN PROGRESS] ESO Store and Account System for maintenance - August 22, 9:00AM EDT (13:00 UTC) - 12:00PM EDT (16:00 UTC)',
        pattern:
          '[IN PROGRESS] ESO Store and Account System for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServiceStoreEsoSlug,
        type: ServiceType,
        support: StoreSupport,
        zone: EsoZone,
        status: DownStatus,
        rawSlug: 'ESO Store',
        rawDate: 'August 22, 9:00AM EDT (13:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: ['2024-08-22T13:00:00.000Z', '2024-08-22T16:00:00.000Z'],
      },
      {
        source: ForumMessageUrl,
        raw: '[IN PROGRESS] ESO Store and Account System for maintenance - August 22, 9:00AM EDT (13:00 UTC) - 12:00PM EDT (16:00 UTC)',
        pattern:
          '[IN PROGRESS] ESO Store and Account System for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServiceSystemAccountSlug,
        type: ServiceType,
        support: SystemSupport,
        zone: AccountZone,
        status: DownStatus,
        rawSlug: 'Account System',
        rawDate: 'August 22, 9:00AM EDT (13:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: ['2024-08-22T13:00:00.000Z', '2024-08-22T16:00:00.000Z'],
      },
    ],
  },
  {
    date: '2024-08-22T14_39_15',
    url: ForumMessageUrl,
    file: '2024-08-22T14_39_15.html',
    rawList: [
      '[COMPLETE] ESO Store and Account System for maintenance - August 22, 9:00AM EDT (13:00 UTC) - 12:00PM EDT (16:00 UTC)',
    ],
    patternList: [
      '[COMPLETE] ESO Store and Account System for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
    ],
    expected: [
      {
        source: ForumMessageUrl,
        raw: '[COMPLETE] ESO Store and Account System for maintenance - August 22, 9:00AM EDT (13:00 UTC) - 12:00PM EDT (16:00 UTC)',
        pattern:
          '[COMPLETE] ESO Store and Account System for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServiceStoreEsoSlug,
        type: ServiceType,
        support: StoreSupport,
        zone: EsoZone,
        status: UpStatus,
        rawSlug: 'ESO Store',
        rawDate: 'August 22, 9:00AM EDT (13:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[COMPLETE]',
        dates: ['2024-08-22T13:00:00.000Z', '2024-08-22T16:00:00.000Z'],
      },
      {
        source: ForumMessageUrl,
        raw: '[COMPLETE] ESO Store and Account System for maintenance - August 22, 9:00AM EDT (13:00 UTC) - 12:00PM EDT (16:00 UTC)',
        pattern:
          '[COMPLETE] ESO Store and Account System for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServiceSystemAccountSlug,
        type: ServiceType,
        support: SystemSupport,
        zone: AccountZone,
        status: UpStatus,
        rawSlug: 'Account System',
        rawDate: 'August 22, 9:00AM EDT (13:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[COMPLETE]',
        dates: ['2024-08-22T13:00:00.000Z', '2024-08-22T16:00:00.000Z'],
      },
    ],
  },
];

export default pattern20240822;
