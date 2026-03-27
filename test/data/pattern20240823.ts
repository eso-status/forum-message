import {
  PcSupport,
  PlannedStatus,
  PtsZone,
  ServerPcPtsSlug,
  ServerType,
} from '@eso-status/types';
import { PatternItem } from '../interface/patternItem.interface';
import ForumMessagePtsUrl from '../../src/const/ForumMessagePtsUrl.const';

const pattern20240823: PatternItem[] = [
  {
    date: '2024-08-23T19_17_52',
    url: ForumMessagePtsUrl,
    file: '2024-08-23T19_17_52.html',
    rawList: [
      'We will be performing maintenance on the PTS on Tuesday at 10:00AM EDT (14:00 UTC)',
    ],
    patternList: [
      'We will be performing maintenance on the PTS on D at [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
    ],
    expected: [
      {
        source: ForumMessagePtsUrl,
        raw: 'We will be performing maintenance on the PTS on Tuesday at 10:00AM EDT (14:00 UTC)',
        pattern:
          'We will be performing maintenance on the PTS on D at [hour]:[minute][meridiem] [timezone] ([hour]:[minute] [timezone])',
        slug: ServerPcPtsSlug,
        type: ServerType,
        support: PcSupport,
        zone: PtsZone,
        status: PlannedStatus,
        rawSlug: 'PTS',
        rawDate: 'Tuesday at 10:00AM EDT (14:00 UTC)',
        rawStatus: 'We will be performing maintenance',
        dates: ['2024-08-27T14:00:00.000Z'],
      },
    ],
  },
];

export default pattern20240823;
