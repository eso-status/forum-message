import {
  DownStatus,
  EuZone,
  NaZone,
  PcSupport,
  ServerPcEuSlug,
  ServerPcNaSlug,
  ServerType,
  UpStatus,
} from '@eso-status/types';
import { PatternItem } from '../interface/patternItem.interface';
import ForumMessageUrl from '../../src/const/ForumMessageUrl.const';

const pattern20241101: PatternItem[] = [
  {
    date: '2024-11-01T08_05_36',
    url: ForumMessageUrl,
    file: '2024-11-01T08_05_36.html',
    rawList: [
      '[IN PROGRESS] PC/Mac: NA and EU megaservers for maintenance - November 1, 4:00AM EDT (8:00 UTC) - 9:00AM EDT (13:00 UTC)',
    ],
    patternList: [
      '[IN PROGRESS] PC/Mac: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
    ],
    expected: [
      {
        source: ForumMessageUrl,
        raw: '[IN PROGRESS] PC/Mac: NA and EU megaservers for maintenance - November 1, 4:00AM EDT (8:00 UTC) - 9:00AM EDT (13:00 UTC)',
        pattern:
          '[IN PROGRESS] PC/Mac: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServerPcEuSlug,
        type: ServerType,
        support: PcSupport,
        zone: EuZone,
        status: DownStatus,
        rawStatus: '[IN PROGRESS]',
        rawSlug: 'PC/Mac: NA and EU megaservers',
        rawDate: 'November 1, 4:00AM EDT (8:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: ['2024-11-01T08:00:00.000Z', '2024-11-01T13:00:00.000Z'],
      },
      {
        source: ForumMessageUrl,
        raw: '[IN PROGRESS] PC/Mac: NA and EU megaservers for maintenance - November 1, 4:00AM EDT (8:00 UTC) - 9:00AM EDT (13:00 UTC)',
        pattern:
          '[IN PROGRESS] PC/Mac: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServerPcNaSlug,
        type: ServerType,
        support: PcSupport,
        zone: NaZone,
        status: DownStatus,
        rawStatus: '[IN PROGRESS]',
        rawSlug: 'PC/Mac: NA and EU megaservers',
        rawDate: 'November 1, 4:00AM EDT (8:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: ['2024-11-01T08:00:00.000Z', '2024-11-01T13:00:00.000Z'],
      },
    ],
  },
  {
    date: '2024-11-01T11_11_04',
    url: ForumMessageUrl,
    file: '2024-11-01T11_11_04.html',
    rawList: [
      '[COMPLETE] PC/Mac: NA and EU megaservers for maintenance - November 1, 4:00AM EDT (8:00 UTC) - 9:00AM EDT (13:00 UTC)',
    ],
    patternList: [
      '[COMPLETE] PC/Mac: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
    ],
    expected: [
      {
        source: ForumMessageUrl,
        raw: '[COMPLETE] PC/Mac: NA and EU megaservers for maintenance - November 1, 4:00AM EDT (8:00 UTC) - 9:00AM EDT (13:00 UTC)',
        pattern:
          '[COMPLETE] PC/Mac: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServerPcEuSlug,
        type: ServerType,
        support: PcSupport,
        zone: EuZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
        rawSlug: 'PC/Mac: NA and EU megaservers',
        rawDate: 'November 1, 4:00AM EDT (8:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: ['2024-11-01T08:00:00.000Z', '2024-11-01T13:00:00.000Z'],
      },
      {
        source: ForumMessageUrl,
        raw: '[COMPLETE] PC/Mac: NA and EU megaservers for maintenance - November 1, 4:00AM EDT (8:00 UTC) - 9:00AM EDT (13:00 UTC)',
        pattern:
          '[COMPLETE] PC/Mac: NA and EU megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServerPcNaSlug,
        type: ServerType,
        support: PcSupport,
        zone: NaZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
        rawSlug: 'PC/Mac: NA and EU megaservers',
        rawDate: 'November 1, 4:00AM EDT (8:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: ['2024-11-01T08:00:00.000Z', '2024-11-01T13:00:00.000Z'],
      },
    ],
  },
];

export default pattern20241101;
