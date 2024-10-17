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
import { PatternItem } from '../interface/patternItem.interface';
import { ForumMessageURL } from '../../src/const';

const pattern20241002: PatternItem[] = [
  {
    date: '2024-10-02T10_06_47',
    url: ForumMessageURL,
    file: '2024-10-02T10_06_47.html',
    rawList: [
      '• [IN PROGRESS] Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• [IN PROGRESS] PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: '• [IN PROGRESS] Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: DownStatus,
        rawStatus: '[IN PROGRESS]',
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-10-02T10:00:00.000Z', '2024-10-02T16:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '• [IN PROGRESS] Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxNaSlug,
        type: ServerType,
        support: XboxSupport,
        zone: NaZone,
        status: DownStatus,
        rawStatus: '[IN PROGRESS]',
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-10-02T10:00:00.000Z', '2024-10-02T16:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '• [IN PROGRESS] PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: DownStatus,
        rawStatus: '[IN PROGRESS]',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-10-02T10:00:00.000Z', '2024-10-02T16:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '• [IN PROGRESS] PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: DownStatus,
        rawStatus: '[IN PROGRESS]',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-10-02T10:00:00.000Z', '2024-10-02T16:00:00.000Z'],
      },
    ],
  },
  {
    date: '2024-10-02T16_07_37',
    url: ForumMessageURL,
    file: '2024-10-02T16_07_37.html',
    rawList: [
      '• [COMPLETE] Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• [EXTENDED] PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 4:00PM EDT (20:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: '• [COMPLETE] Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-10-02T10:00:00.000Z', '2024-10-02T16:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '• [COMPLETE] Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxNaSlug,
        type: ServerType,
        support: XboxSupport,
        zone: NaZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-10-02T10:00:00.000Z', '2024-10-02T16:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '• [EXTENDED] PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 4:00PM EDT (20:00 UTC)',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: DownStatus,
        rawStatus: '[EXTENDED]',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 4:00PM EDT (20:00 UTC)',
        dates: ['2024-10-02T10:00:00.000Z', '2024-10-02T20:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '• [EXTENDED] PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 4:00PM EDT (20:00 UTC)',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: DownStatus,
        rawStatus: '[EXTENDED]',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 4:00PM EDT (20:00 UTC)',
        dates: ['2024-10-02T10:00:00.000Z', '2024-10-02T20:00:00.000Z'],
      },
    ],
  },
  {
    date: '2024-10-02T19_38_14',
    url: ForumMessageURL,
    file: '2024-10-02T19_38_14.html',
    rawList: [
      '• [COMPLETE] Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• [COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: '• [COMPLETE] Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxEuSlug,
        type: ServerType,
        support: XboxSupport,
        zone: EuZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-10-02T10:00:00.000Z', '2024-10-02T16:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '• [COMPLETE] Xbox: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerXboxNaSlug,
        type: ServerType,
        support: XboxSupport,
        zone: NaZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-10-02T10:00:00.000Z', '2024-10-02T16:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '• [COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsEuSlug,
        type: ServerType,
        support: PsSupport,
        zone: EuZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-10-02T10:00:00.000Z', '2024-10-02T16:00:00.000Z'],
      },
      {
        source: ForumMessageURL,
        raw: '• [COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        slug: ServerPsNaSlug,
        type: ServerType,
        support: PsSupport,
        zone: NaZone,
        status: UpStatus,
        rawStatus: '[COMPLETE]',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'October 2, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: ['2024-10-02T10:00:00.000Z', '2024-10-02T16:00:00.000Z'],
      },
    ],
  },
];

export default pattern20241002;
