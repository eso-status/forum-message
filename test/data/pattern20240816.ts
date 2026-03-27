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
import ForumMessageUrl from '../../src/const/ForumMessageUrl.const';

const pattern20240816: PatternItem[] = [
  {
    date: '2024-08-16T19_06_56',
    url: ForumMessageUrl,
    file: '2024-08-16T19_06_56.html',
    rawList: [
      'PC/Mac: NA and EU megaservers for patch maintenance - August 19, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
      'Xbox: NA and EU megaservers for maintenance - August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
      'PlayStation®: NA and EU megaservers for maintenance - August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
    ],
    patternList: [
      'PC/Mac: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
      'PlayStation®: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
      'Xbox: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
    ],
    expected: [
      {
        source: ForumMessageUrl,
        raw: 'PC/Mac: NA and EU megaservers for patch maintenance - August 19, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        pattern:
          'PC/Mac: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServerPcEuSlug,
        type: ServerType,
        support: PcSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'PC/Mac: NA and EU megaservers',
        rawDate: 'August 19, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        dates: ['2024-08-19T08:00:00.000Z', '2024-08-19T14:00:00.000Z'],
      },
      {
        source: ForumMessageUrl,
        raw: 'PC/Mac: NA and EU megaservers for patch maintenance - August 19, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        pattern:
          'PC/Mac: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServerPcNaSlug,
        type: ServerType,
        support: PcSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'PC/Mac: NA and EU megaservers',
        rawDate: 'August 19, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        dates: ['2024-08-19T08:00:00.000Z', '2024-08-19T14:00:00.000Z'],
      },
      {
        source: ForumMessageUrl,
        raw: 'Xbox: NA and EU megaservers for maintenance - August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        pattern:
          'Xbox: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'Xbox: NA and EU megaservers',
        rawDate: 'August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: ['2024-08-21T10:00:00.000Z', '2024-08-21T13:00:00.000Z'],
      },
      {
        source: ForumMessageUrl,
        raw: 'Xbox: NA and EU megaservers for maintenance - August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        pattern:
          'Xbox: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServerXboxNaSlug,
        type: ServerType,
        support: XboxSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'Xbox: NA and EU megaservers',
        rawDate: 'August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: ['2024-08-21T10:00:00.000Z', '2024-08-21T13:00:00.000Z'],
      },
      {
        source: ForumMessageUrl,
        raw: 'PlayStation®: NA and EU megaservers for maintenance - August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        pattern:
          'PlayStation®: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers',
        rawDate: 'August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: ['2024-08-21T10:00:00.000Z', '2024-08-21T13:00:00.000Z'],
      },
      {
        source: ForumMessageUrl,
        raw: 'PlayStation®: NA and EU megaservers for maintenance - August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        pattern:
          'PlayStation®: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers',
        rawDate: 'August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: ['2024-08-21T10:00:00.000Z', '2024-08-21T13:00:00.000Z'],
      },
    ],
  },
];

export default pattern20240816;
