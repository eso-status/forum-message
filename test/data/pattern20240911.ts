import {
  DownStatus,
  PcSupport,
  PtsZone,
  ServerPcPtsSlug,
  ServerType,
} from '@eso-status/types';
import { ForumMessagePTSURL } from '../../src/const';
import { PatternItem } from '../interface/patternItem.interface';

const pattern20240911: PatternItem[] = [
  {
    date: '2024-09-11T13_04_59',
    url: ForumMessagePTSURL,
    file: '2024-09-11T13_04_59.html',
    rawList: ['The PTS is currently unavailable while we perform maintenance.'],
    expected: [
      {
        source: ForumMessagePTSURL,
        raw: 'The PTS is currently unavailable while we perform maintenance.',
        slug: ServerPcPtsSlug,
        type: ServerType,
        support: PcSupport,
        zone: PtsZone,
        status: DownStatus,
        rawSlug: 'PTS',
        rawStatus: 'unavailable',
      },
    ],
  },
];

export default pattern20240911;
