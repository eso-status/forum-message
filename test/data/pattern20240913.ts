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
import ForumMessagePtsUrl from '../../src/const/ForumMessagePtsUrl.const';

const pattern20240913: PatternItem[] = [
  {
    date: '2024-09-13T19_03_49',
    url: ForumMessagePtsUrl,
    file: '2024-09-13T19_03_49.html',
    rawList: [
      'PC/Mac: NA and EU megaservers for patch maintenance - September 16, 4:00AM EDT (8:00 UTC) - 9:00AM EDT (13:00 UTC)',
      'Xbox: NA and EU megaservers for patch maintenance - September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      'PlayStation®: NA and EU megaservers for patch maintenance - September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      'We will be performing maintenance for patch 10.2.0 on the PTS on Monday at 8:00AM EDT (12:00 UTC)',
    ],
    patternList: [
      'PC/Mac: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
      'We will be performing maintenance on the PTS on D at [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
      'PlayStation®: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
      'Xbox: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
    ],
    expected: [
      {
        source: ForumMessagePtsUrl,
        raw: 'PC/Mac: NA and EU megaservers for patch maintenance - September 16, 4:00AM EDT (8:00 UTC) - 9:00AM EDT (13:00 UTC)',
        pattern:
          'PC/Mac: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServerPcEuSlug,
        type: ServerType,
        support: PcSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'PC/Mac: NA and EU megaservers',
        rawDate: 'September 16, 4:00AM EDT (8:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: ['2024-09-16T08:00:00.000Z', '2024-09-16T13:00:00.000Z'],
      },
      {
        source: ForumMessagePtsUrl,
        raw: 'PC/Mac: NA and EU megaservers for patch maintenance - September 16, 4:00AM EDT (8:00 UTC) - 9:00AM EDT (13:00 UTC)',
        pattern:
          'PC/Mac: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServerPcNaSlug,
        type: ServerType,
        support: PcSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'PC/Mac: NA and EU megaservers',
        rawDate: 'September 16, 4:00AM EDT (8:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: ['2024-09-16T08:00:00.000Z', '2024-09-16T13:00:00.000Z'],
      },

      {
        source: ForumMessagePtsUrl,
        raw: 'Xbox: NA and EU megaservers for patch maintenance - September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        pattern:
          'Xbox: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'Xbox: NA and EU megaservers',
        rawDate:
          'September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-09-18T10:00:00.000Z', '2024-09-18T16:00:00.000Z'],
      },
      {
        source: ForumMessagePtsUrl,
        raw: 'Xbox: NA and EU megaservers for patch maintenance - September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        pattern:
          'Xbox: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServerXboxNaSlug,
        type: ServerType,
        support: XboxSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'Xbox: NA and EU megaservers',
        rawDate:
          'September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-09-18T10:00:00.000Z', '2024-09-18T16:00:00.000Z'],
      },
      {
        source: ForumMessagePtsUrl,
        raw: 'PlayStation®: NA and EU megaservers for patch maintenance - September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        pattern:
          'PlayStation®: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers',
        rawDate:
          'September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-09-18T10:00:00.000Z', '2024-09-18T16:00:00.000Z'],
      },
      {
        source: ForumMessagePtsUrl,
        raw: 'PlayStation®: NA and EU megaservers for patch maintenance - September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        pattern:
          'PlayStation®: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers',
        rawDate:
          'September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-09-18T10:00:00.000Z', '2024-09-18T16:00:00.000Z'],
      },
      {
        source: ForumMessagePtsUrl,
        raw: 'We will be performing maintenance for patch 10.2.0 on the PTS on Monday at 8:00AM EDT (12:00 UTC)',
        pattern:
          'We will be performing maintenance on the PTS on D at [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServerPcPtsSlug,
        type: ServerType,
        support: PcSupport,
        zone: PtsZone,
        status: PlannedStatus,
        rawSlug: 'PTS',
        rawStatus: 'We will be performing maintenance',
        rawDate: 'Monday at 8:00AM EDT (12:00 UTC)',
        dates: ['2024-09-16T12:00:00.000Z'],
      },
    ],
  },
];

export default pattern20240913;
