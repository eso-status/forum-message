import {
  DownStatus,
  EuZone,
  NaZone,
  PcSupport,
  PlannedStatus,
  PtsZone,
  ServerPcEuSlug,
  ServerPcNaSlug,
  ServerPcPtsSlug,
  ServerType,
  UpStatus,
} from '@eso-status/types';
import { PatternItem } from '../interface/patternItem.interface';
import { ForumMessagePTSURL, ForumMessageURL } from '../../src/const';

const pattern20241101: PatternItem[] = [
  {
    date: '2024-11-01T08_05_36',
    url: ForumMessageURL,
    file: '2024-11-01T08_05_36.html',
    rawList: [
      '• [IN PROGRESS] PC/Mac: NA and EU megaservers for maintenance – November 1, 4:00AM EDT (8:00 UTC) - 9:00AM EDT (13:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: '• [IN PROGRESS] PC/Mac: NA and EU megaservers for maintenance – November 1, 4:00AM EDT (8:00 UTC) - 9:00AM EDT (13:00 UTC)',
        slug: ServerPcEuSlug,
        type: ServerType,
        support: PcSupport,
        zone: EuZone,
        status: DownStatus,
        rawStatus: '[IN PROGRESS]',
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate: 'November 1, 4:00AM EDT (8:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: ['2024-11-01T08:00:00.000Z', '2024-11-01T13:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '• [IN PROGRESS] PC/Mac: NA and EU megaservers for maintenance – November 1, 4:00AM EDT (8:00 UTC) - 9:00AM EDT (13:00 UTC)',
        slug: ServerPcNaSlug,
        type: ServerType,
        support: PcSupport,
        zone: NaZone,
        status: DownStatus,
        rawStatus: '[IN PROGRESS]',
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate: 'November 1, 4:00AM EDT (8:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: ['2024-11-01T08:00:00.000Z', '2024-11-01T13:00:00.000Z'],
      },
    ],
  },
  {
    date: '2024-11-01T11_11_04',
    url: ForumMessageURL,
    file: '2024-11-01T11_11_04.html',
    rawList: [
      '• [COMPLETE] PC/Mac: NA and EU megaservers for maintenance – November 1, 4:00AM EDT (8:00 UTC) - 9:00AM EDT (13:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: '• [COMPLETE] PC/Mac: NA and EU megaservers for maintenance – November 1, 4:00AM EDT (8:00 UTC) - 9:00AM EDT (13:00 UTC)',
        slug: ServerPcEuSlug,
        type: ServerType,
        support: PcSupport,
        zone: EuZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate: 'November 1, 4:00AM EDT (8:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: ['2024-11-01T08:00:00.000Z', '2024-11-01T13:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '• [COMPLETE] PC/Mac: NA and EU megaservers for maintenance – November 1, 4:00AM EDT (8:00 UTC) - 9:00AM EDT (13:00 UTC)',
        slug: ServerPcNaSlug,
        type: ServerType,
        support: PcSupport,
        zone: NaZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate: 'November 1, 4:00AM EDT (8:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: ['2024-11-01T08:00:00.000Z', '2024-11-01T13:00:00.000Z'],
      },
    ],
  },
  {
    date: '2024-11-01T18_44_06',
    url: ForumMessagePTSURL,
    file: '2024-11-01T18_44_06.html',
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
    date: '2024-11-01T18_44_36',
    url: ForumMessageURL,
    file: '2024-11-01T18_44_36.html',
    rawList: [],
    expected: [],
  },
];

export default pattern20241101;