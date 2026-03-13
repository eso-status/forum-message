import { PatternItem } from '../interface/patternItem.interface';
import { ForumMessageURL } from '../../src/const';
import {
  ServerPcEuSlug,
  ServerType,
  PcSupport,
  EuZone,
  IssuesStatus,
  NaZone,
  ServerPcNaSlug,
} from '@eso-status/types';

const pattern20260313: PatternItem[] = [
  {
    date: '2026-03-13T14_48_18',
    url: ForumMessageURL,
    file: '2026-03-13T14_48_18.html',
    rawList: [
      'We are currently investigating issues some players are having on the North American and European PC/Mac megaservers.',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: 'We are currently investigating issues some players are having on the North American and European PC/Mac megaservers.',
        slug: ServerPcEuSlug,
        type: ServerType,
        support: PcSupport,
        zone: EuZone,
        status: IssuesStatus,
        rawStatus: 'currently investigating',
        rawSlug: 'North American and European PC/Mac megaservers',
      },
      {
        source: ForumMessageURL,
        raw: 'We are currently investigating issues some players are having on the North American and European PC/Mac megaservers.',
        slug: ServerPcNaSlug,
        type: ServerType,
        support: PcSupport,
        zone: NaZone,
        status: IssuesStatus,
        rawStatus: 'currently investigating',
        rawSlug: 'North American and European PC/Mac megaservers',
      },
    ],
  },
  {
    date: '2026-03-13T14_49_36',
    url: ForumMessageURL,
    file: '2026-03-13T14_49_36.html',
    rawList: [
      'We are currently investigating issues some players are having on the North American and European PC/Mac megaservers.',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: 'We are currently investigating issues some players are having on the North American and European PC/Mac megaservers.',
        slug: ServerPcEuSlug,
        type: ServerType,
        support: PcSupport,
        zone: EuZone,
        status: IssuesStatus,
        rawStatus: 'currently investigating',
        rawSlug: 'North American and European PC/Mac megaservers',
      },
      {
        source: ForumMessageURL,
        raw: 'We are currently investigating issues some players are having on the North American and European PC/Mac megaservers.',
        slug: ServerPcNaSlug,
        type: ServerType,
        support: PcSupport,
        zone: NaZone,
        status: IssuesStatus,
        rawStatus: 'currently investigating',
        rawSlug: 'North American and European PC/Mac megaservers',
      },
    ],
  },
];

export default pattern20260313;
