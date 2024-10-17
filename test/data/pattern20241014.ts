import {
  PcSupport,
  PlannedStatus,
  PtsZone,
  ServerPcPtsSlug,
  ServerType,
} from '@eso-status/types';
import { PatternItem } from '../interface/patternItem.interface';
import { ForumMessagePTSURL } from '../../src/const';

const pattern20241014: PatternItem[] = [
  {
    date: '2024-10-14T10_29_34',
    url: ForumMessagePTSURL,
    file: '2024-10-14T10_29_34.html',
    rawList: [
      'We will be performing maintenance for patch 10.2.5 on the PTS on Monday at 10:00AM EDT (14:00 UTC).',
    ],
    expected: [
      {
        source: ForumMessagePTSURL,
        raw: 'We will be performing maintenance for patch 10.2.5 on the PTS on Monday at 10:00AM EDT (14:00 UTC).',
        slug: ServerPcPtsSlug,
        type: ServerType,
        support: PcSupport,
        zone: PtsZone,
        status: PlannedStatus,
        rawStatus: 'We will be performing maintenance',
        rawSlug: 'PTS',
        rawDate: 'Monday at 10:00AM EDT (14:00 UTC)',
        dates: ['2024-10-14T14:00:00.000Z'],
      },
    ],
  },
  // {
  //   date: '2024-10-14T10_32_27',
  //   url: ForumMessageURL,
  //   file: '2024-10-14T10_32_27.html',
  //   rawList: [
  //     '• [IN PROGRESS] ESO Store and Account System for maintenance – October 14, 6:00AM EDT (10:00 UTC) - 4:00PM EDT (20:00 UTC)', // Down et maintenance en même temps
  //     '• NA megaservers for maintenance – October 16, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
  //     '• EU megaservers for maintenance – October 16, 8:00 UTC (4:00AM EDT) - 16:00 UTC (12:00PM EDT)',
  //     '• ESO Store and Account System for maintenance – October 16, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)', // Down et maintenance en même temps
  //   ],
  //   expected: [],
  // },
  // {
  //   date: '2024-10-14T10_33_38',
  //   url: ForumMessagePTSURL,
  //   file: '2024-10-14T10_33_38.html',
  //   rawList: [
  //     'We will be performing maintenance for patch 10.2.5 on the PTS on Monday at 10:00AM EDT (14:00 UTC).',
  //     '• [IN PROGRESS] ESO Store and Account System for maintenance – October 14, 6:00AM EDT (10:00 UTC) - 4:00PM EDT (20:00 UTC)', // Down et maintenance en même temps
  //     '• NA megaservers for maintenance – October 16, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
  //     '• EU megaservers for maintenance – October 16, 8:00 UTC (4:00AM EDT) - 16:00 UTC (12:00PM EDT)',
  //     '• ESO Store and Account System for maintenance – October 16, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)', // Down et maintenance en même temps
  //   ],
  //   expected: [],
  // },
  // {
  //   date: '2024-10-14T14_01_44',
  //   url: ForumMessagePTSURL,
  //   file: '2024-10-14T14_01_44.html',
  //   rawList: [
  //     '• [IN PROGRESS] ESO Store and Account System for maintenance – October 14, 6:00AM EDT (10:00 UTC) - 4:00PM EDT (20:00 UTC)', // Down et maintenance en même temps
  //     '• NA megaservers for maintenance – October 16, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
  //     '• EU megaservers for maintenance – October 16, 8:00 UTC (4:00AM EDT) - 16:00 UTC (12:00PM EDT)',
  //     '• ESO Store and Account System for maintenance – October 16, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)', // Down et maintenance en même temps
  //     'The PTS is now offline for the patch 10.2.5 maintenance and is currently unavailable.',
  //   ],
  //   expected: [],
  // },
  // {
  //   date: '2024-10-14T18_25_48',
  //   url: ForumMessagePTSURL,
  //   file: '2024-10-14T18_25_48.html',
  //   rawList: [
  //     'We will be performing maintenance on the PTS on Wednesday at 4:00AM EDT (8:00 UTC).', // Up et maintenance en même temps
  //     '• [IN PROGRESS] ESO Store and Account System for maintenance – October 14, 6:00AM EDT (10:00 UTC) - 4:00PM EDT (20:00 UTC)', // Down et maintenance en même temps
  //     '• NA megaservers for maintenance – October 16, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
  //     '• EU megaservers for maintenance – October 16, 8:00 UTC (4:00AM EDT) - 16:00 UTC (12:00PM EDT)',
  //     '• ESO Store and Account System for maintenance – October 16, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)', // Down et maintenance en même temps
  //     'The maintenance is complete, and the PTS is now back online and patch 10.2.5 is available.', // Up et maintenance en même temps
  //   ],
  //   expected: [],
  // },
  // {
  //   date: '2024-10-14T19_57_29',
  //   url: ForumMessagePTSURL,
  //   file: '2024-10-14T19_57_29.html',
  //   rawList: [
  //     'We will be performing maintenance on the PTS on Wednesday at 4:00AM EDT (8:00 UTC).', // Up et maintenance en même temps
  //     '• [EXTENDED] ESO Store and Account System for maintenance – October 14, 6:00AM EDT (10:00 UTC) - 6:00PM EDT (22:00 UTC)', // Down et maintenance en même temps
  //     '• NA megaservers for maintenance – October 16, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
  //     '• EU megaservers for maintenance – October 16, 8:00 UTC (4:00AM EDT) - 16:00 UTC (12:00PM EDT)',
  //     '• ESO Store and Account System for maintenance – October 16, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)', // Down et maintenance en même temps
  //     'The maintenance is complete, and the PTS is now back online and patch 10.2.5 is available.', // Up et maintenance en même temps
  //   ],
  //   expected: [],
  // },
  // {
  //   date: '2024-10-14T19_59_12',
  //   url: ForumMessageURL,
  //   file: '2024-10-14T19_59_12.html',
  //   rawList: [
  //     '• [EXTENDED] ESO Store and Account System for maintenance – October 14, 6:00AM EDT (10:00 UTC) - 6:00PM EDT (22:00 UTC)', // Down et maintenance en même temps
  //     '• NA megaservers for maintenance – October 16, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
  //     '• EU megaservers for maintenance – October 16, 8:00 UTC (4:00AM EDT) - 16:00 UTC (12:00PM EDT)',
  //     '• ESO Store and Account System for maintenance – October 16, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)', // Down et maintenance en même temps
  //   ],
  //   expected: [],
  // },
  // {
  //   date: '2024-10-14T21_45_42',
  //   url: ForumMessagePTSURL,
  //   file: '2024-10-14T21_45_42.html',
  //   rawList: [
  //     'We will be performing maintenance on the PTS on Wednesday at 4:00AM EDT (8:00 UTC).', // Up et maintenance en même temps
  //     'The maintenance is complete, and the PTS is now back online and patch 10.2.5 is available.', // Up et maintenance en même temps
  //     '• [COMPLETE] ESO Store and Account System for maintenance – October 14, 6:00AM EDT (10:00 UTC) - 6:00PM EDT (22:00 UTC)', // Up et maintenance en même temps
  //     '• NA megaservers for maintenance – October 16, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
  //     '• EU megaservers for maintenance – October 16, 8:00 UTC (4:00AM EDT) - 16:00 UTC (12:00PM EDT)',
  //     '• ESO Store and Account System for maintenance – October 16, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)', // Up et maintenance en même temps
  //   ],
  //   expected: [],
  // },
  // {
  //   date: '2024-10-14T21_46_45',
  //   url: ForumMessageURL,
  //   file: '2024-10-14T21_46_45.html',
  //   rawList: [
  //     '• [COMPLETE] ESO Store and Account System for maintenance – October 14, 6:00AM EDT (10:00 UTC) - 6:00PM EDT (22:00 UTC)', // Up et maintenance en même temps
  //     '• NA megaservers for maintenance – October 16, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
  //     '• EU megaservers for maintenance – October 16, 8:00 UTC (4:00AM EDT) - 16:00 UTC (12:00PM EDT)',
  //     '• ESO Store and Account System for maintenance – October 16, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)', // Up et maintenance en même temps
  //   ],
  //   expected: [],
  // },
];

export default pattern20241014;
