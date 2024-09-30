import {
  DownStatus,
  PcSupport,
  PtsZone,
  ServerPcPtsSlug,
  ServerType,
} from '@eso-status/types';
import { ForumMessagePTSURL } from '../../src/const';
import { PatternItem } from '../interface/patternItem.interface';

const pattern20240905: PatternItem[] = [
  {
    date: '2024-09-05T13_03_25',
    url: ForumMessagePTSURL,
    file: '2024-09-05T13_03_25.html',
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
  {
    date: '2024-09-05T18_43_47',
    url: ForumMessagePTSURL,
    file: '2024-09-05T18_43_47.html',
    rawList: [
      'The PTS is currently unavailable while we perform maintenance. <a href="https://forums.elderscrollsonline.com/en/discussion/665106" rel="nofollow">https://forums.elderscrollsonline.com/en/discussion/665106</a>',
    ],
    expected: [
      {
        source: ForumMessagePTSURL,
        raw: 'The PTS is currently unavailable while we perform maintenance. <a href="https://forums.elderscrollsonline.com/en/discussion/665106" rel="nofollow">https://forums.elderscrollsonline.com/en/discussion/665106</a>',
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

export default pattern20240905;
