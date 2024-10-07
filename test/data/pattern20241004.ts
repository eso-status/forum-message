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
import { ForumMessagePTSURL, ForumMessageURL } from '../../src/const';

const pattern20241004: PatternItem[] = [
  {
    date: '2024-10-04T18_59_15',
    url: ForumMessagePTSURL,
    file: '2024-10-04T18_59_15.html',
    rawList: [
      '• Xbox: EU megaserver for maintenance – October 9, 2:00 UTC (October 8, 10:00PM EDT) - 16:00 UTC (12:00PM EDT)',
      'We will be performing maintenance for patch 10.2.3 on the PTS on Monday at 10:00AM EDT (14:00 UTC).',
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
        raw: 'We will be performing maintenance for patch 10.2.3 on the PTS on Monday at 10:00AM EDT (14:00 UTC).',
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
    url: ForumMessageURL,
    file: '2024-10-04T18_59_47.html',
    rawList: [
      '• Xbox: EU megaserver for maintenance – October 9, 2:00 UTC (October 8, 10:00PM EDT) - 16:00 UTC (12:00PM EDT)',
    ],
    expected: [
      {
        source: ForumMessageURL,
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
    ],
  },
];

export default pattern20241004;
