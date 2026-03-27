import {
  DownStatus,
  EuZone,
  PcSupport,
  PlannedStatus,
  PtsZone,
  ServerPcPtsSlug,
  ServerType,
  ServerXboxEuSlug,
  UpStatus,
  XboxSupport,
} from '@eso-status/types';
import { PatternItem } from '../interface/patternItem.interface';
import ForumMessagePtsUrl from '../../src/const/ForumMessagePtsUrl.const';

const pattern20241007: PatternItem[] = [
  {
    date: '2024-10-07T14_04_25',
    url: ForumMessagePtsUrl,
    file: '2024-10-07T14_04_25.html',
    rawList: [
      'Xbox: EU megaserver for maintenance - October 9, 2:00 UTC (October 8, 10:00PM EDT) - 16:00 UTC (12:00PM EDT)',
      'The PTS is now offline for the patch 10.2.3 maintenance and is currently unavailable',
    ],
    patternList: [
      'The PTS is currently unavailable while we perform maintenance',
      'Xbox: EU megaserver for maintenance - [month] [day number], [hour]:[minute] [timezone] ([month] [day number], [hour]:[minute][meridiem] [timezone]) - [hour]:[minute] [timezone] ([hour]:[minute][meridiem] [timezone])',
    ],
    expected: [
      {
        source: ForumMessagePtsUrl,
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
        source: ForumMessagePtsUrl,
        raw: 'The PTS is now offline for the patch 10.2.3 maintenance and is currently unavailable',
        pattern:
          'The PTS is currently unavailable while we perform maintenance',
        slug: ServerPcPtsSlug,
        type: ServerType,
        support: PcSupport,
        zone: PtsZone,
        status: DownStatus,
        rawStatus: 'unavailable',
        rawSlug: 'PTS',
      },
    ],
  },
  {
    date: '2024-10-07T18_00_27',
    url: ForumMessagePtsUrl,
    file: '2024-10-07T18_00_27.html',
    rawList: [
      'Xbox: EU megaserver for maintenance - October 9, 2:00 UTC (October 8, 10:00PM EDT) - 16:00 UTC (12:00PM EDT)',
      'The maintenance is complete, and the PTS is now back online and patch 10.2.3 is available',
    ],
    patternList: [
      'The maintenance is complete, and the PTS is now available',
      'Xbox: EU megaserver for maintenance - [month] [day number], [hour]:[minute] [timezone] ([month] [day number], [hour]:[minute][meridiem] [timezone]) - [hour]:[minute] [timezone] ([hour]:[minute][meridiem] [timezone])',
    ],
    expected: [
      {
        source: ForumMessagePtsUrl,
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
        source: ForumMessagePtsUrl,
        raw: 'The maintenance is complete, and the PTS is now back online and patch 10.2.3 is available',
        pattern: 'The maintenance is complete, and the PTS is now available',
        slug: ServerPcPtsSlug,
        type: ServerType,
        support: PcSupport,
        zone: PtsZone,
        status: UpStatus,
        rawStatus: 'complete',
        rawSlug: 'PTS',
      },
    ],
  },
];

export default pattern20241007;
