import {
  DownStatus,
  EuZone,
  NaZone,
  PsSupport,
  ServerPsEuSlug,
  ServerPsNaSlug,
  ServerType,
  ServerXboxEuSlug,
  ServerXboxNaSlug,
  UpStatus,
  XboxSupport,
} from '@eso-status/types';
import { PatternItem } from '../interface/patternItem.interface';
import ForumMessageUrl from '../../src/const/ForumMessageUrl.const';

const pattern20241002: PatternItem[] = [
  {
    date: '2024-10-02T16_07_37',
    url: ForumMessageUrl,
    file: '2024-10-02T16_07_37.html',
    rawList: [
      '[COMPLETE] Xbox: NA and EU megaservers for patch maintenance - October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '[EXTENDED] PlayStation®: NA and EU megaservers for patch maintenance - October 2, 6:00AM EDT (10:00 UTC) - 4:00PM EDT (20:00 UTC)',
    ],
    patternList: [
      '[EXTENDED] PlayStation®: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
      '[COMPLETE] Xbox: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
    ],
    expected: [
      {
        source: ForumMessageUrl,
        raw: '[COMPLETE] Xbox: NA and EU megaservers for patch maintenance - October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        pattern:
          '[COMPLETE] Xbox: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
        rawSlug: 'Xbox: NA and EU megaservers',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-10-02T10:00:00.000Z', '2024-10-02T16:00:00.000Z'],
      },
      {
        source: ForumMessageUrl,
        raw: '[COMPLETE] Xbox: NA and EU megaservers for patch maintenance - October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        pattern:
          '[COMPLETE] Xbox: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServerXboxNaSlug,
        type: ServerType,
        support: XboxSupport,
        zone: NaZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
        rawSlug: 'Xbox: NA and EU megaservers',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-10-02T10:00:00.000Z', '2024-10-02T16:00:00.000Z'],
      },
      {
        source: ForumMessageUrl,
        raw: '[EXTENDED] PlayStation®: NA and EU megaservers for patch maintenance - October 2, 6:00AM EDT (10:00 UTC) - 4:00PM EDT (20:00 UTC)',
        pattern:
          '[EXTENDED] PlayStation®: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: DownStatus,
        rawStatus: '[EXTENDED]',
        rawSlug: 'PlayStation®: NA and EU megaservers',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 4:00PM EDT (20:00 UTC)',
        dates: ['2024-10-02T10:00:00.000Z', '2024-10-02T20:00:00.000Z'],
      },
      {
        source: ForumMessageUrl,
        raw: '[EXTENDED] PlayStation®: NA and EU megaservers for patch maintenance - October 2, 6:00AM EDT (10:00 UTC) - 4:00PM EDT (20:00 UTC)',
        pattern:
          '[EXTENDED] PlayStation®: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: DownStatus,
        rawStatus: '[EXTENDED]',
        rawSlug: 'PlayStation®: NA and EU megaservers',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 4:00PM EDT (20:00 UTC)',
        dates: ['2024-10-02T10:00:00.000Z', '2024-10-02T20:00:00.000Z'],
      },
    ],
  },
];

export default pattern20241002;
