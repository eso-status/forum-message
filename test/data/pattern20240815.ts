import {
  DownStatus,
  PlannedStatus,
  ServiceType,
  ServiceWebSiteSlug,
  SiteZone,
  UpStatus,
  WebSupport,
} from '@eso-status/types';
import * as moment from 'moment';
import { ForumMessageURL } from '../../src/const';
import { PatternItem } from '../interface/patternItem.interface';

const pattern20240815: PatternItem[] = [
  {
    date: '2024-08-15T14_03_38',
    url: ForumMessageURL,
    file: '2024-08-15T14_03_38.html',
    rawList: [],
    expected: [],
  },
  {
    date: '2024-08-15T20_44_20',
    url: ForumMessageURL,
    file: '2024-08-15T20_44_20.html',
    rawList: [
      '• ESO Website for maintenance – August 15, 4:30PM EDT (20:30 UTC) - 7:30PM EDT (23:30 UTC)',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: '• ESO Website for maintenance – August 15, 4:30PM EDT (20:30 UTC) - 7:30PM EDT (23:30 UTC)',
        slug: ServiceWebSiteSlug,
        type: ServiceType,
        support: WebSupport,
        zone: SiteZone,
        status: PlannedStatus,
        rawSlug: 'ESO Website for',
        rawDate: 'August 15, 4:30PM EDT (20:30 UTC) - 7:30PM EDT (23:30 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 15)
            .set('hours', 20)
            .set('minutes', 30)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 15)
            .set('hours', 23)
            .set('minutes', 30)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
    ],
  },
  {
    date: '2024-08-15T20_52_28',
    url: ForumMessageURL,
    file: '2024-08-15T20_52_28.html',
    rawList: [
      '• [IN PROGRESS] ESO Website for maintenance – August 15, 4:30PM EDT (20:30 UTC) - 7:30PM EDT (23:30 UTC)',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: '• [IN PROGRESS] ESO Website for maintenance – August 15, 4:30PM EDT (20:30 UTC) - 7:30PM EDT (23:30 UTC)',
        slug: ServiceWebSiteSlug,
        type: ServiceType,
        support: WebSupport,
        zone: SiteZone,
        status: DownStatus,
        rawSlug: 'ESO Website for',
        rawDate: 'August 15, 4:30PM EDT (20:30 UTC) - 7:30PM EDT (23:30 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 15)
            .set('hours', 20)
            .set('minutes', 30)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 15)
            .set('hours', 23)
            .set('minutes', 30)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
    ],
  },
  {
    date: '2024-08-15T22_07_19',
    url: ForumMessageURL,
    file: '2024-08-15T22_07_19.html',
    rawList: [
      '• [COMPLETE] ESO Website for maintenance – August 15, 4:30PM EDT (20:30 UTC) - 7:30PM EDT (23:30 UTC)',
    ],
    expected: [
      {
        source: ForumMessageURL,
        raw: '• [COMPLETE] ESO Website for maintenance – August 15, 4:30PM EDT (20:30 UTC) - 7:30PM EDT (23:30 UTC)',
        slug: ServiceWebSiteSlug,
        type: ServiceType,
        support: WebSupport,
        zone: SiteZone,
        status: UpStatus,
        rawSlug: 'ESO Website for',
        rawDate: 'August 15, 4:30PM EDT (20:30 UTC) - 7:30PM EDT (23:30 UTC)',
        rawStatus: '[COMPLETE]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 15)
            .set('hours', 20)
            .set('minutes', 30)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 15)
            .set('hours', 23)
            .set('minutes', 30)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
    ],
  },
];

export default pattern20240815;