import {
  EuZone,
  PcSupport,
  PlannedStatus,
  PtsZone,
  ServerPcPtsSlug,
  ServerType,
  ServerXboxEuSlug,
  XboxSupport,
} from '@eso-status/types';
import { PatternItem } from '../interface/patternItem.interface';
import ForumMessagePtsUrl from '../../src/const/ForumMessagePtsUrl.const';
import ForumMessageUrl from '../../src/const/ForumMessageUrl.const';

const pattern20241004: PatternItem[] = [
  {
    date: '2024-10-04T18_59_15',
    url: ForumMessagePtsUrl,
    file: '2024-10-04T18_59_15.html',
    rawList: [
      'Xbox: EU megaserver for maintenance - October 9, 2:00 UTC (October 8, 10:00PM EDT) - 16:00 UTC (12:00PM EDT)',
      'We will be performing maintenance for patch 10.2.3 on the PTS on Monday at 10:00AM EDT (14:00 UTC)',
    ],
    patternList: [
      'We will be performing maintenance on the PTS on D at [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
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
        raw: 'We will be performing maintenance for patch 10.2.3 on the PTS on Monday at 10:00AM EDT (14:00 UTC)',
        pattern:
          'We will be performing maintenance on the PTS on D at [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServerPcPtsSlug,
        type: ServerType,
        support: PcSupport,
        zone: PtsZone,
        status: PlannedStatus,
        rawStatus: 'We will be performing maintenance',
        rawSlug: 'PTS',
        rawDate: 'Monday at 10:00AM EDT (14:00 UTC)',
        dates: ['2024-10-07T14:00:00.000Z'],
      },
    ],
  },
  {
    date: '2024-10-04T18_59_47',
    url: ForumMessageUrl,
    file: '2024-10-04T18_59_47.html',
    rawList: [
      'Xbox: EU megaserver for maintenance - October 9, 2:00 UTC (October 8, 10:00PM EDT) - 16:00 UTC (12:00PM EDT)',
    ],
    patternList: [
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
    ],
  },
];

export default pattern20241004;
