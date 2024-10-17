import {
  DownStatus,
  EuZone,
  NaZone,
  PsSupport,
  ServerPsEuSlug,
  ServerPsNaSlug,
  ServerType,
  ServerXboxEuSlug,
  ServerXboxNaSlug,
  UpStatus,
  XboxSupport,
} from '@eso-status/types';
import { ForumMessageURL } from '../../src/const';
import { PatternItem } from '../interface/patternItem.interface';

const pattern20240918: PatternItem[] = [
  {
    date: '2024-09-18T09_59_45',
    url: ForumMessageURL,
    file: '2024-09-18T09_59_45.html',
    rawList: [],
    expected: [],
  },
  {
    date: '2024-09-18T10_01_47',
    url: ForumMessageURL,
    file: '2024-09-18T10_01_47.html',
    rawList: [
      '• [IN PROGRESS] Xbox: NA and EU megaservers for patch maintenance – September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• [IN PROGRESS] PlayStation®: NA and EU megaservers for patch maintenance – September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: '• [IN PROGRESS] Xbox: NA and EU megaservers for patch maintenance – September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: DownStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawStatus: '[IN PROGRESS]',
        rawDate:
          'September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-09-18T10:00:00.000Z', '2024-09-18T16:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '• [IN PROGRESS] Xbox: NA and EU megaservers for patch maintenance – September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxNaSlug,
        type: ServerType,
        support: XboxSupport,
        zone: NaZone,
        status: DownStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawStatus: '[IN PROGRESS]',
        rawDate:
          'September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-09-18T10:00:00.000Z', '2024-09-18T16:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '• [IN PROGRESS] PlayStation®: NA and EU megaservers for patch maintenance – September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: DownStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawStatus: '[IN PROGRESS]',
        rawDate:
          'September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-09-18T10:00:00.000Z', '2024-09-18T16:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '• [IN PROGRESS] PlayStation®: NA and EU megaservers for patch maintenance – September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: DownStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawStatus: '[IN PROGRESS]',
        rawDate:
          'September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-09-18T10:00:00.000Z', '2024-09-18T16:00:00.000Z'],
      },
    ],
  },
  {
    date: '2024-09-18T16_01_29',
    url: ForumMessageURL,
    file: '2024-09-18T16_01_29.html',
    rawList: [
      '· [COMPLETE] Xbox: NA and EU megaservers for patch maintenance – September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '· [COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: '· [COMPLETE] Xbox: NA and EU megaservers for patch maintenance – September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: UpStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawStatus: '[COMPLETE]',
        rawDate:
          'September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-09-18T10:00:00.000Z', '2024-09-18T16:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '· [COMPLETE] Xbox: NA and EU megaservers for patch maintenance – September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxNaSlug,
        type: ServerType,
        support: XboxSupport,
        zone: NaZone,
        status: UpStatus,
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawStatus: '[COMPLETE]',
        rawDate:
          'September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-09-18T10:00:00.000Z', '2024-09-18T16:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '· [COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: UpStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawStatus: '[COMPLETE]',
        rawDate:
          'September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-09-18T10:00:00.000Z', '2024-09-18T16:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '· [COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: UpStatus,
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawStatus: '[COMPLETE]',
        rawDate:
          'September 18, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-09-18T10:00:00.000Z', '2024-09-18T16:00:00.000Z'],
      },
    ],
  },
];

export default pattern20240918;
