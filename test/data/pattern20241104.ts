import {
  PcSupport,
  PlannedStatus,
  PtsZone,
  ServerPcPtsSlug,
  ServerType,
  UpStatus,
} from '@eso-status/types';
import { PatternItem } from '../interface/patternItem.interface';
import { ForumMessagePTSURL } from '../../src/const';

const pattern20241104: PatternItem[] = [
  {
    date: '2024-11-04T14_21_13',
    url: ForumMessagePTSURL,
    file: '2024-11-04T14_21_13.html',
    rawList: [
      'We will be performing maintenance on the PTS on Monday at 10:00AM EST (15:00 UTC).',
    ],
    expected: [
      {
        source: ForumMessagePTSURL,
        raw: 'We will be performing maintenance on the PTS on Monday at 10:00AM EST (15:00 UTC).',
        slug: ServerPcPtsSlug,
        type: ServerType,
        support: PcSupport,
        zone: PtsZone,
        status: PlannedStatus,
        rawStatus: 'We will be performing maintenance',
        rawSlug: 'PTS',
        rawDate: 'Monday at 10:00AM EST (15:00 UTC)',
        dates: ['2024-11-04T15:00:00.000Z'],
      },
    ],
  },
  {
    date: '2024-11-04T16_03_03',
    url: ForumMessagePTSURL,
    file: '2024-11-04T16_03_03.html',
    rawList: ['The maintenance is complete, and the PTS is now available.'],
    expected: [
      {
        source: ForumMessagePTSURL,
        raw: 'The maintenance is complete, and the PTS is now available.',
        slug: ServerPcPtsSlug,
        type: ServerType,
        support: PcSupport,
        zone: PtsZone,
        status: UpStatus,
        rawStatus: 'now available',
        rawSlug: 'PTS',
      },
    ],
  },
];

export default pattern20241104;
