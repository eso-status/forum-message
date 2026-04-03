import { PatternItem } from '../interface/patternItem.interface';
import {
  ServerPcEuSlug,
  ServerType,
  PcSupport,
  EuZone,
  NaZone,
  ServerPcNaSlug,
  PlannedStatus,
  ServerPsNaSlug,
  PsSupport,
  ServerXboxNaSlug,
  XboxSupport,
  ServerPsEuSlug,
  ServerXboxEuSlug,
} from '@eso-status/types';
import ForumMessagePtsUrl from '../../src/const/ForumMessagePtsUrl.const';

const pattern20260327: PatternItem[] = [
  {
    date: '2026-03-27T19_07_40',
    url: ForumMessagePtsUrl,
    file: '2026-03-27T19_07_40.html',
    rawList: [
      'NA megaservers for patch maintenance - March 30, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
      'EU megaservers for patch maintenance - March 30, 8:00 UTC (4:00AM EDT) - 16:00 UTC (12:00PM EDT)',
    ],
    patternList: [
      'EU megaservers for maintenance - [month] [day number], [hour]:[minute] [timezone] ([hour]:[minute][meridiem] [timezone]) - [hour]:[minute] [timezone] ([hour]:[minute][meridiem] [timezone])',
      'NA megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
    ],
    expected: [
      {
        source: ForumMessagePtsUrl,
        raw: 'NA megaservers for patch maintenance - March 30, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
        pattern:
          'NA megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServerPcNaSlug,
        type: ServerType,
        support: PcSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'NA megaservers',
        rawDate: 'March 30, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2026-03-30T08:00:00.000Z', '2026-03-30T16:00:00.000Z'],
      },
      {
        source: ForumMessagePtsUrl,
        raw: 'NA megaservers for patch maintenance - March 30, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
        pattern:
          'NA megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'NA megaservers',
        rawDate: 'March 30, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2026-03-30T08:00:00.000Z', '2026-03-30T16:00:00.000Z'],
      },
      {
        source: ForumMessagePtsUrl,
        raw: 'NA megaservers for patch maintenance - March 30, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
        pattern:
          'NA megaservers for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServerXboxNaSlug,
        type: ServerType,
        support: XboxSupport,
        zone: NaZone,
        status: PlannedStatus,
        rawSlug: 'NA megaservers',
        rawDate: 'March 30, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2026-03-30T08:00:00.000Z', '2026-03-30T16:00:00.000Z'],
      },
      {
        source: ForumMessagePtsUrl,
        raw: 'EU megaservers for patch maintenance - March 30, 8:00 UTC (4:00AM EDT) - 16:00 UTC (12:00PM EDT)',
        pattern:
          'EU megaservers for maintenance - [month] [day number], [hour]:[minute] [timezone] ([hour]:[minute][meridiem] [timezone]) - [hour]:[minute] [timezone] ([hour]:[minute][meridiem] [timezone])',
        slug: ServerPcEuSlug,
        type: ServerType,
        support: PcSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'EU megaservers',
        rawDate: 'March 30, 8:00 UTC (4:00AM EDT) - 16:00 UTC (12:00PM EDT)',
        dates: ['2026-03-30T08:00:00.000Z', '2026-03-30T16:00:00.000Z'],
      },
      {
        source: ForumMessagePtsUrl,
        raw: 'EU megaservers for patch maintenance - March 30, 8:00 UTC (4:00AM EDT) - 16:00 UTC (12:00PM EDT)',
        pattern:
          'EU megaservers for maintenance - [month] [day number], [hour]:[minute] [timezone] ([hour]:[minute][meridiem] [timezone]) - [hour]:[minute] [timezone] ([hour]:[minute][meridiem] [timezone])',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'EU megaservers',
        rawDate: 'March 30, 8:00 UTC (4:00AM EDT) - 16:00 UTC (12:00PM EDT)',
        dates: ['2026-03-30T08:00:00.000Z', '2026-03-30T16:00:00.000Z'],
      },
      {
        source: ForumMessagePtsUrl,
        raw: 'EU megaservers for patch maintenance - March 30, 8:00 UTC (4:00AM EDT) - 16:00 UTC (12:00PM EDT)',
        pattern:
          'EU megaservers for maintenance - [month] [day number], [hour]:[minute] [timezone] ([hour]:[minute][meridiem] [timezone]) - [hour]:[minute] [timezone] ([hour]:[minute][meridiem] [timezone])',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'EU megaservers',
        rawDate: 'March 30, 8:00 UTC (4:00AM EDT) - 16:00 UTC (12:00PM EDT)',
        dates: ['2026-03-30T08:00:00.000Z', '2026-03-30T16:00:00.000Z'],
      },
    ],
  },
];

export default pattern20260327;
