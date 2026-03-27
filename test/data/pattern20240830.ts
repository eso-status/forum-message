import {
  AccountZone,
  EsoZone,
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
  ServiceStoreEsoSlug,
  ServiceSystemAccountSlug,
  ServiceType,
  StoreSupport,
  SystemSupport,
  XboxSupport,
} from '@eso-status/types';
import { PatternItem } from '../interface/patternItem.interface';
import ForumMessagePtsUrl from '../../src/const/ForumMessagePtsUrl.const';
import ForumMessageUrl from '../../src/const/ForumMessageUrl.const';

const pattern20240830: PatternItem[] = [
  {
    date: '2024-08-30T17_26_58',
    url: ForumMessagePtsUrl,
    file: '2024-08-30T17_26_58.html',
    rawList: [
      'PC/Mac: NA and EU megaservers for patch maintenance - September 3, 4:00AM EDT (8:00 UTC) - 9:00AM EDT (13:00 UTC)',
      'Xbox: NA and EU megaservers for patch maintenance - September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      'PlayStation®: NA and EU megaservers for patch maintenance - September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      'ESO Store and Account System for maintenance - September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
      'We will be performing maintenance on the PTS on Thursday at 9:00AM EDT (13:00 UTC)',
    ],
    patternList: [
      'PC/Mac: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
      'We will be performing maintenance on the PTS on D at [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
      'PlayStation®: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
      'Xbox: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
      'ESO Store and Account System for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
    ],
    expected: [
      {
        source: ForumMessagePtsUrl,
        raw: 'PC/Mac: NA and EU megaservers for patch maintenance - September 3, 4:00AM EDT (8:00 UTC) - 9:00AM EDT (13:00 UTC)',
        pattern:
          'PC/Mac: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServerPcEuSlug,
        type: ServerType,
        support: PcSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'PC/Mac: NA and EU megaservers',
        rawDate: 'September 3, 4:00AM EDT (8:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: ['2024-09-03T08:00:00.000Z', '2024-09-03T13:00:00.000Z'],
      },
      {
        source: ForumMessagePtsUrl,
        raw: 'PC/Mac: NA and EU megaservers for patch maintenance - September 3, 4:00AM EDT (8:00 UTC) - 9:00AM EDT (13:00 UTC)',
        pattern:
          'PC/Mac: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServerPcNaSlug,
        type: ServerType,
        support: PcSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'PC/Mac: NA and EU megaservers',
        rawDate: 'September 3, 4:00AM EDT (8:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: ['2024-09-03T08:00:00.000Z', '2024-09-03T13:00:00.000Z'],
      },
      {
        source: ForumMessagePtsUrl,
        raw: 'Xbox: NA and EU megaservers for patch maintenance - September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        pattern:
          'Xbox: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'Xbox: NA and EU megaservers',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-09-04T10:00:00.000Z', '2024-09-04T16:00:00.000Z'],
      },
      {
        source: ForumMessagePtsUrl,
        raw: 'Xbox: NA and EU megaservers for patch maintenance - September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        pattern:
          'Xbox: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServerXboxNaSlug,
        type: ServerType,
        support: XboxSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'Xbox: NA and EU megaservers',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-09-04T10:00:00.000Z', '2024-09-04T16:00:00.000Z'],
      },
      {
        source: ForumMessagePtsUrl,
        raw: 'PlayStation®: NA and EU megaservers for patch maintenance - September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        pattern:
          'PlayStation®: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-09-04T10:00:00.000Z', '2024-09-04T16:00:00.000Z'],
      },
      {
        source: ForumMessagePtsUrl,
        raw: 'PlayStation®: NA and EU megaservers for patch maintenance - September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        pattern:
          'PlayStation®: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-09-04T10:00:00.000Z', '2024-09-04T16:00:00.000Z'],
      },
      {
        source: ForumMessagePtsUrl,
        raw: 'ESO Store and Account System for maintenance - September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        pattern:
          'ESO Store and Account System for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServiceStoreEsoSlug,
        type: ServiceType,
        support: StoreSupport,
        zone: EsoZone,
        status: PlannedStatus,
        rawSlug: 'ESO Store',
        rawDate:
          'September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-09-04T14:00:00.000Z', '2024-09-04T16:00:00.000Z'],
      },
      {
        source: ForumMessagePtsUrl,
        raw: 'ESO Store and Account System for maintenance - September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        pattern:
          'ESO Store and Account System for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServiceSystemAccountSlug,
        type: ServiceType,
        support: SystemSupport,
        zone: AccountZone,
        status: PlannedStatus,
        rawSlug: 'Account System',
        rawDate:
          'September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-09-04T14:00:00.000Z', '2024-09-04T16:00:00.000Z'],
      },
      {
        source: ForumMessagePtsUrl,
        raw: 'We will be performing maintenance on the PTS on Thursday at 9:00AM EDT (13:00 UTC)',
        pattern:
          'We will be performing maintenance on the PTS on D at [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServerPcPtsSlug,
        type: ServerType,
        support: PcSupport,
        zone: PtsZone,
        status: PlannedStatus,
        rawSlug: 'PTS',
        rawDate: 'Thursday at 9:00AM EDT (13:00 UTC)',
        rawStatus: 'We will be performing maintenance',
        dates: ['2024-09-05T13:00:00.000Z'],
      },
    ],
  },
  {
    date: '2024-08-30T17_28_10',
    url: ForumMessageUrl,
    file: '2024-08-30T17_28_10.html',
    rawList: [
      'PC/Mac: NA and EU megaservers for patch maintenance - September 3, 4:00AM EDT (8:00 UTC) - 9:00AM EDT (13:00 UTC)',
      'Xbox: NA and EU megaservers for patch maintenance - September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      'PlayStation®: NA and EU megaservers for patch maintenance - September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      'ESO Store and Account System for maintenance - September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
    ],
    patternList: [
      'PC/Mac: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
      'PlayStation®: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
      'Xbox: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
      'ESO Store and Account System for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
    ],
    expected: [
      {
        source: ForumMessageUrl,
        raw: 'PC/Mac: NA and EU megaservers for patch maintenance - September 3, 4:00AM EDT (8:00 UTC) - 9:00AM EDT (13:00 UTC)',
        pattern:
          'PC/Mac: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServerPcEuSlug,
        type: ServerType,
        support: PcSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'PC/Mac: NA and EU megaservers',
        rawDate: 'September 3, 4:00AM EDT (8:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: ['2024-09-03T08:00:00.000Z', '2024-09-03T13:00:00.000Z'],
      },
      {
        source: ForumMessageUrl,
        raw: 'PC/Mac: NA and EU megaservers for patch maintenance - September 3, 4:00AM EDT (8:00 UTC) - 9:00AM EDT (13:00 UTC)',
        pattern:
          'PC/Mac: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServerPcNaSlug,
        type: ServerType,
        support: PcSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'PC/Mac: NA and EU megaservers',
        rawDate: 'September 3, 4:00AM EDT (8:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: ['2024-09-03T08:00:00.000Z', '2024-09-03T13:00:00.000Z'],
      },
      {
        source: ForumMessageUrl,
        raw: 'Xbox: NA and EU megaservers for patch maintenance - September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        pattern:
          'Xbox: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'Xbox: NA and EU megaservers',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-09-04T10:00:00.000Z', '2024-09-04T16:00:00.000Z'],
      },
      {
        source: ForumMessageUrl,
        raw: 'Xbox: NA and EU megaservers for patch maintenance - September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        pattern:
          'Xbox: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServerXboxNaSlug,
        type: ServerType,
        support: XboxSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'Xbox: NA and EU megaservers',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-09-04T10:00:00.000Z', '2024-09-04T16:00:00.000Z'],
      },
      {
        source: ForumMessageUrl,
        raw: 'PlayStation®: NA and EU megaservers for patch maintenance - September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        pattern:
          'PlayStation®: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-09-04T10:00:00.000Z', '2024-09-04T16:00:00.000Z'],
      },
      {
        source: ForumMessageUrl,
        raw: 'PlayStation®: NA and EU megaservers for patch maintenance - September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        pattern:
          'PlayStation®: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-09-04T10:00:00.000Z', '2024-09-04T16:00:00.000Z'],
      },
      {
        source: ForumMessageUrl,
        raw: 'ESO Store and Account System for maintenance - September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        pattern:
          'ESO Store and Account System for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServiceStoreEsoSlug,
        type: ServiceType,
        support: StoreSupport,
        zone: EsoZone,
        status: PlannedStatus,
        rawSlug: 'ESO Store',
        rawDate:
          'September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-09-04T14:00:00.000Z', '2024-09-04T16:00:00.000Z'],
      },
      {
        source: ForumMessageUrl,
        raw: 'ESO Store and Account System for maintenance - September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        pattern:
          'ESO Store and Account System for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServiceSystemAccountSlug,
        type: ServiceType,
        support: SystemSupport,
        zone: AccountZone,
        status: PlannedStatus,
        rawSlug: 'Account System',
        rawDate:
          'September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-09-04T14:00:00.000Z', '2024-09-04T16:00:00.000Z'],
      },
    ],
  },
];

export default pattern20240830;
