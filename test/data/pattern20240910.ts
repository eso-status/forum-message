import {
  PcSupport,
  PlannedStatus,
  PtsZone,
  ServerPcPtsSlug,
  ServerType,
} from '@eso-status/types';
import { ForumMessagePTSURL } from '../../src/const';
import { PatternItem } from '../interface/patternItem.interface';

const pattern20240910: PatternItem[] = [
  {
    date: '2024-09-10T19_19_16',
    url: ForumMessagePTSURL,
    file: '2024-09-10T19_19_16.html',
    rawList: [
      'We will be performing maintenance on the PTS on Wednesday at 9:00AM EDT (13:00 UTC).',
    ],
    expected: [
      {
        source: ForumMessagePTSURL,
        raw: 'We will be performing maintenance on the PTS on Wednesday at 9:00AM EDT (13:00 UTC).',
        slug: ServerPcPtsSlug,
        type: ServerType,
        support: PcSupport,
        zone: PtsZone,
        status: PlannedStatus,
        rawSlug: 'PTS',
        rawStatus: 'We will be performing maintenance',
        rawDate: 'Wednesday at 9:00AM EDT (13:00 UTC)',
        dates: ['2024-09-11T13:00:00.000Z'],
      },
    ],
  },
  {
    date: '2024-09-10T19_23_21',
    url: ForumMessagePTSURL,
    file: '2024-09-10T19_23_21.html',
    rawList: [
      'We will be performing maintenance on the PTS on Wednesday at 9:00AM EDT (13:00 UTC).',
    ],
    expected: [
      {
        source: ForumMessagePTSURL,
        raw: 'We will be performing maintenance on the PTS on Wednesday at 9:00AM EDT (13:00 UTC).',
        slug: ServerPcPtsSlug,
        type: ServerType,
        support: PcSupport,
        zone: PtsZone,
        status: PlannedStatus,
        rawSlug: 'PTS',
        rawStatus: 'We will be performing maintenance',
        rawDate: 'Wednesday at 9:00AM EDT (13:00 UTC)',
        dates: ['2024-09-11T13:00:00.000Z'],
      },
    ],
  },
];

export default pattern20240910;
