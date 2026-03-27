import {
  EuZone,
  NaZone,
  PlannedStatus,
  PsSupport,
  ServerPsEuSlug,
  ServerPsNaSlug,
  ServerType,
  ServerXboxEuSlug,
  XboxSupport,
} from '@eso-status/types';
import { PatternItem } from '../interface/patternItem.interface';
import ForumMessageUrl from '../../src/const/ForumMessageUrl.const';

const pattern20241008: PatternItem[] = [
  {
    date: '2024-10-08T16_51_58',
    url: ForumMessageUrl,
    file: '2024-10-08T16_51_58.html',
    rawList: [
      'Xbox: EU megaserver for maintenance - October 9, 2:00 UTC (October 8, 10:00PM EDT) - 16:00 UTC (12:00PM EDT)',
      'PlayStation®: NA and EU megaservers for patch maintenance - October 9, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
    ],
    patternList: [
      'PlayStation®: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
      'Xbox: EU megaserver for maintenance - [month] [day number], [hour]:[minute] [timezone] ([month] [day number], [hour]:[minute][meridiem] [timezone]) - [hour]:[minute] [timezone] ([hour]:[minute][meridiem] [timezone])',
    ],
    expected: [
      {
        source: ForumMessageUrl,
        raw: 'Xbox: EU megaserver for maintenance - October 9, 2:00 UTC (October 8, 10:00PM EDT) - 16:00 UTC (12:00PM EDT)',
        pattern:
          'Xbox: EU megaserver for maintenance - [month] [day number], [hour]:[minute] [timezone] ([month] [day number], [hour]:[minute][meridiem] [timezone]) - [hour]:[minute] [timezone] ([hour]:[minute][meridiem] [timezone])',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'Xbox: EU megaserver',
        rawDate:
          'October 9, 2:00 UTC (October 8, 10:00PM EDT) - 16:00 UTC (12:00PM EDT)',
        dates: ['2024-10-09T02:00:00.000Z', '2024-10-09T16:00:00.000Z'],
      },
      {
        source: ForumMessageUrl,
        raw: 'PlayStation®: NA and EU megaservers for patch maintenance - October 9, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        pattern:
          'PlayStation®: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers',
        rawDate: 'October 9, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-10-09T10:00:00.000Z', '2024-10-09T16:00:00.000Z'],
      },
      {
        source: ForumMessageUrl,
        raw: 'PlayStation®: NA and EU megaservers for patch maintenance - October 9, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        pattern:
          'PlayStation®: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers',
        rawDate: 'October 9, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-10-09T10:00:00.000Z', '2024-10-09T16:00:00.000Z'],
      },
    ],
  },
];

export default pattern20241008;
