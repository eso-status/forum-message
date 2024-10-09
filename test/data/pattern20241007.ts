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
import { ForumMessagePTSURL } from '../../src/const';

const pattern20241007: PatternItem[] = [
  {
    date: '2024-10-07T14_04_25',
    url: ForumMessagePTSURL,
    file: '2024-10-07T14_04_25.html',
    rawList: [
      '• Xbox: EU megaserver for maintenance – October 9, 2:00 UTC (October 8, 10:00PM EDT) - 16:00 UTC (12:00PM EDT)',
      'The PTS is now offline for the patch 10.2.3 maintenance and is currently unavailable.',
    ],
    expected: [
      {
        source: ForumMessagePTSURL,
        raw: '• Xbox: EU megaserver for maintenance – October 9, 2:00 UTC (October 8, 10:00PM EDT) - 16:00 UTC (12:00PM EDT)',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'Xbox: EU megaserver for',
        rawDate:
          'October 9, 2:00 UTC (October 8, 10:00PM EDT) - 16:00 UTC (12:00PM EDT)',
        dates: ['2024-10-09T02:00:00.000Z', '2024-10-09T16:00:00.000Z'],
      },
      {
        source: ForumMessagePTSURL,
        raw: 'The PTS is now offline for the patch 10.2.3 maintenance and is currently unavailable.',
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
    url: ForumMessagePTSURL,
    file: '2024-10-07T18_00_27.html',
    rawList: [
      '• Xbox: EU megaserver for maintenance – October 9, 2:00 UTC (October 8, 10:00PM EDT) - 16:00 UTC (12:00PM EDT)',
      'The maintenance is complete, and the PTS is now back online and patch 10.2.3 is available.',
    ],
    expected: [
      {
        source: ForumMessagePTSURL,
        raw: '• Xbox: EU megaserver for maintenance – October 9, 2:00 UTC (October 8, 10:00PM EDT) - 16:00 UTC (12:00PM EDT)',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: PlannedStatus,
        rawSlug: 'Xbox: EU megaserver for',
        rawDate:
          'October 9, 2:00 UTC (October 8, 10:00PM EDT) - 16:00 UTC (12:00PM EDT)',
        dates: ['2024-10-09T02:00:00.000Z', '2024-10-09T16:00:00.000Z'],
      },
      {
        source: ForumMessagePTSURL,
        raw: 'The maintenance is complete, and the PTS is now back online and patch 10.2.3 is available.',
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
