import { PatternItem } from '../interface/patternItem.interface';
import {
  ServerPcEuSlug,
  ServerType,
  PcSupport,
  EuZone,
  IssuesStatus,
  NaZone,
  ServerPcNaSlug,
  UpStatus,
  ServiceStoreEsoSlug,
  ServiceType,
  StoreSupport,
  EsoZone,
  PlannedStatus,
  ServiceSystemAccountSlug,
  SystemSupport,
  AccountZone,
} from '@eso-status/types';
import ForumMessageUrl from '../../src/const/ForumMessageUrl.const';
import ForumMessagePtsUrl from '../../src/const/ForumMessagePtsUrl.const';

const pattern20260313: PatternItem[] = [
  {
    date: '2026-03-13T14_48_18',
    url: ForumMessageUrl,
    file: '2026-03-13T14_48_18.html',
    rawList: [
      'We are currently investigating issues some players are having on the North American and European PC/Mac megaservers',
    ],
    patternList: [
      'We are currently investigating issues some players are having on the North American and European PC/Mac megaservers',
    ],
    expected: [
      {
        source: ForumMessageUrl,
        raw: 'We are currently investigating issues some players are having on the North American and European PC/Mac megaservers',
        pattern:
          'We are currently investigating issues some players are having on the North American and European PC/Mac megaservers',
        slug: ServerPcEuSlug,
        type: ServerType,
        support: PcSupport,
        zone: EuZone,
        status: IssuesStatus,
        rawStatus: 'currently investigating',
        rawSlug: 'North American and European PC/Mac megaservers',
      },
      {
        source: ForumMessageUrl,
        raw: 'We are currently investigating issues some players are having on the North American and European PC/Mac megaservers',
        pattern:
          'We are currently investigating issues some players are having on the North American and European PC/Mac megaservers',
        slug: ServerPcNaSlug,
        type: ServerType,
        support: PcSupport,
        zone: NaZone,
        status: IssuesStatus,
        rawStatus: 'currently investigating',
        rawSlug: 'North American and European PC/Mac megaservers',
      },
    ],
  },
  {
    date: '2026-03-13T15_40_00',
    url: ForumMessagePtsUrl,
    file: '2026-03-13T15_40_00.html',
    rawList: [
      'The issues on the North American and European PC/Mac megaservers have been resolved at this time',
    ],
    patternList: [
      'The issues on the North American and European PC/Mac megaservers have been resolved at this time',
    ],
    expected: [
      {
        source: ForumMessagePtsUrl,
        raw: 'The issues on the North American and European PC/Mac megaservers have been resolved at this time',
        pattern:
          'The issues on the North American and European PC/Mac megaservers have been resolved at this time',
        slug: ServerPcEuSlug,
        type: ServerType,
        support: PcSupport,
        zone: EuZone,
        status: UpStatus,
        rawStatus: 'been resolved',
        rawSlug: 'North American and European PC/Mac megaservers',
      },
      {
        source: ForumMessagePtsUrl,
        raw: 'The issues on the North American and European PC/Mac megaservers have been resolved at this time',
        pattern:
          'The issues on the North American and European PC/Mac megaservers have been resolved at this time',
        slug: ServerPcNaSlug,
        type: ServerType,
        support: PcSupport,
        zone: NaZone,
        status: UpStatus,
        rawStatus: 'been resolved',
        rawSlug: 'North American and European PC/Mac megaservers',
      },
    ],
  },
  {
    date: '2026-03-13T19_03_28',
    url: ForumMessageUrl,
    file: '2026-03-13T19_03_28.html',
    rawList: [
      'The issues on the North American and European PC/Mac megaservers have been resolved at this time',
      'ESO Store and Account System for maintenance - March 18, 6:00AM EDT (10:00 UTC) - 4:00PM EDT (20:00 UTC)',
    ],
    patternList: [
      'The issues on the North American and European PC/Mac megaservers have been resolved at this time',
      'ESO Store and Account System for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
    ],
    expected: [
      {
        source: ForumMessageUrl,
        raw: 'The issues on the North American and European PC/Mac megaservers have been resolved at this time',
        pattern:
          'The issues on the North American and European PC/Mac megaservers have been resolved at this time',
        slug: ServerPcEuSlug,
        type: ServerType,
        support: PcSupport,
        zone: EuZone,
        status: UpStatus,
        rawStatus: 'been resolved',
        rawSlug: 'North American and European PC/Mac megaservers',
      },
      {
        source: ForumMessageUrl,
        raw: 'The issues on the North American and European PC/Mac megaservers have been resolved at this time',
        pattern:
          'The issues on the North American and European PC/Mac megaservers have been resolved at this time',
        slug: ServerPcNaSlug,
        type: ServerType,
        support: PcSupport,
        zone: NaZone,
        status: UpStatus,
        rawStatus: 'been resolved',
        rawSlug: 'North American and European PC/Mac megaservers',
      },
      {
        source: ForumMessageUrl,
        raw: 'ESO Store and Account System for maintenance - March 18, 6:00AM EDT (10:00 UTC) - 4:00PM EDT (20:00 UTC)',
        pattern:
          'ESO Store and Account System for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServiceStoreEsoSlug,
        type: ServiceType,
        support: StoreSupport,
        zone: EsoZone,
        status: PlannedStatus,
        rawSlug: 'ESO Store',
        rawDate: 'March 18, 6:00AM EDT (10:00 UTC) - 4:00PM EDT (20:00 UTC)',
        dates: ['2026-03-18T10:00:00.000Z', '2026-03-18T20:00:00.000Z'],
      },
      {
        source: ForumMessageUrl,
        raw: 'ESO Store and Account System for maintenance - March 18, 6:00AM EDT (10:00 UTC) - 4:00PM EDT (20:00 UTC)',
        pattern:
          'ESO Store and Account System for maintenance - [month] [day number], [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone]) - [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServiceSystemAccountSlug,
        type: ServiceType,
        support: SystemSupport,
        zone: AccountZone,
        status: PlannedStatus,
        rawSlug: 'Account System',
        rawDate: 'March 18, 6:00AM EDT (10:00 UTC) - 4:00PM EDT (20:00 UTC)',
        dates: ['2026-03-18T10:00:00.000Z', '2026-03-18T20:00:00.000Z'],
      },
    ],
  },
];

export default pattern20260313;
