import {
  IssuesStatus,
  NaZone,
  PcSupport,
  ServerPcNaSlug,
  ServerType,
  UpStatus,
} from '@eso-status/types';
import { PatternItem } from '../interface/patternItem.interface';
import { ForumMessageURL } from '../../src/const';

const pattern20241024: PatternItem[] = [
  {
    date: '2024-10-24T16_48_39',
    url: ForumMessageURL,
    file: '2024-10-24T16_48_39.html',
    rawList: [
      'We are currently investigating connection issues some players are having on the North American PC/Mac megaserver.',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: 'We are currently investigating connection issues some players are having on the North American PC/Mac megaserver.',
        slug: ServerPcNaSlug,
        type: ServerType,
        support: PcSupport,
        zone: NaZone,
        status: IssuesStatus,
        rawStatus: 'currently investigating',
        rawSlug: 'North American PC/Mac megaserver',
      },
    ],
  },
  {
    date: '2024-10-24T17_43_21',
    url: ForumMessageURL,
    file: '2024-10-24T17_43_21.html',
    rawList: [
      'The connection issues for the North American PC/Mac megaserver have been resolved at this time.',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: 'The connection issues for the North American PC/Mac megaserver have been resolved at this time.',
        slug: ServerPcNaSlug,
        type: ServerType,
        support: PcSupport,
        zone: NaZone,
        status: UpStatus,
        rawStatus: 'been resolved',
        rawSlug: 'North American PC/Mac megaserver',
      },
    ],
  },
];

export default pattern20241024;
