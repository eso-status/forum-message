import {
  DownStatus,
  PcSupport,
  PtsZone,
  ServerPcPtsSlug,
  ServerType,
  UpStatus,
} from '@eso-status/types';
import { ForumMessagePTSURL } from '../../src/const';
import { PatternItem } from '../interface/patternItem.interface';

const pattern20240923: PatternItem[] = [
  {
    date: '2024-09-23T14_05_18',
    url: ForumMessagePTSURL,
    file: '2024-09-23T14_05_18.html',
    rawList: [
      'The PTS is now offline for the patch 10.2.1 maintenance and is currently unavailable.',
    ],
    expected: [
      {
        source: ForumMessagePTSURL,
        raw: 'The PTS is now offline for the patch 10.2.1 maintenance and is currently unavailable.',
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
  {
    date: '2024-09-23T20_11_11',
    url: ForumMessagePTSURL,
    file: '2024-09-23T20_11_11.html',
    rawList: [
      'The maintenance is complete, and the PTS is now back online and patch 10.2.1 is available.',
    ],
    expected: [
      {
        source: ForumMessagePTSURL,
        raw: 'The maintenance is complete, and the PTS is now back online and patch 10.2.1 is available.',
        slug: ServerPcPtsSlug,
        type: ServerType,
        support: PcSupport,
        zone: PtsZone,
        status: UpStatus,
        rawSlug: 'PTS',
        rawStatus: 'complete',
      },
    ],
  },
];

export default pattern20240923;
