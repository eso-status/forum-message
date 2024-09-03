import * as moment from 'moment/moment';
import { ForumMessagePTSURL, ForumMessageURL } from 'src/const';
import { PatternItem } from '../interface/patternItem.interface';

const pattern: PatternItem[] = [
  {
    date: '2024-08-14T17_45_47',
    url: ForumMessageURL,
    file: '2024-08-14T17_45_47.html',
    rawList: [],
    expected: [],
  },
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
        sources: [ForumMessageURL],
        raw: [
          '• ESO Website for maintenance – August 15, 4:30PM EDT (20:30 UTC) - 7:30PM EDT (23:30 UTC)',
        ],
        slugs: ['service_web_site'],
        type: 'service',
        support: 'web',
        zone: 'site',
        status: 'planned',
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
        sources: [ForumMessageURL],
        raw: [
          '• [IN PROGRESS] ESO Website for maintenance – August 15, 4:30PM EDT (20:30 UTC) - 7:30PM EDT (23:30 UTC)',
        ],
        slugs: ['service_web_site'],
        type: 'service',
        support: 'web',
        zone: 'site',
        status: 'down',
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
        sources: [ForumMessageURL],
        raw: [
          '• [COMPLETE] ESO Website for maintenance – August 15, 4:30PM EDT (20:30 UTC) - 7:30PM EDT (23:30 UTC)',
        ],
        slugs: ['service_web_site'],
        type: 'service',
        support: 'web',
        zone: 'site',
        status: 'up',
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
  {
    date: '2024-08-16T19_06_56',
    url: ForumMessageURL,
    file: '2024-08-16T19_06_56.html',
    rawList: [
      '• PC/Mac: NA and EU megaservers for patch maintenance – August 19, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
      '• Xbox: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
      '• PlayStation®: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
    ],
    expected: [
      {
        sources: [ForumMessageURL],
        raw: [
          '• PC/Mac: NA and EU megaservers for patch maintenance – August 19, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        ],
        slugs: ['server_pc_eu'],
        type: 'server',
        support: 'pc',
        zone: 'eu',
        status: 'planned',
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate: 'August 19, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 19)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 19)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• PC/Mac: NA and EU megaservers for patch maintenance – August 19, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        ],
        slugs: ['server_pc_na'],
        type: 'server',
        support: 'pc',
        zone: 'na',
        status: 'planned',
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate: 'August 19, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 19)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 19)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• Xbox: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        ],
        slugs: ['server_xbox_eu'],
        type: 'server',
        support: 'xbox',
        zone: 'eu',
        status: 'planned',
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• Xbox: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        ],
        slugs: ['server_xbox_na'],
        type: 'server',
        support: 'xbox',
        zone: 'na',
        status: 'planned',
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• PlayStation®: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        ],
        slugs: ['server_ps_eu'],
        type: 'server',
        support: 'ps',
        zone: 'eu',
        status: 'planned',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• PlayStation®: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        ],
        slugs: ['server_ps_na'],
        type: 'server',
        support: 'ps',
        zone: 'na',
        status: 'planned',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
    ],
  },
  {
    date: '2024-08-19T08_05_59',
    url: ForumMessageURL,
    file: '2024-08-19T08_05_59.html',
    rawList: [
      '• [IN PROGRESS] PC/Mac: NA and EU megaservers for patch maintenance – August 19, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
      '• Xbox: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
      '• PlayStation®: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
    ],
    expected: [
      {
        sources: [ForumMessageURL],
        raw: [
          '• [IN PROGRESS] PC/Mac: NA and EU megaservers for patch maintenance – August 19, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        ],
        slugs: ['server_pc_eu'],
        type: 'server',
        support: 'pc',
        zone: 'eu',
        status: 'down',
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate: 'August 19, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 19)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 19)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• [IN PROGRESS] PC/Mac: NA and EU megaservers for patch maintenance – August 19, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        ],
        slugs: ['server_pc_na'],
        type: 'server',
        support: 'pc',
        zone: 'na',
        status: 'down',
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate: 'August 19, 4:00AM EDT (8:00 UTC) - 10:00AM EDT (14:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 19)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 19)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• Xbox: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        ],
        slugs: ['server_xbox_eu'],
        type: 'server',
        support: 'xbox',
        zone: 'eu',
        status: 'planned',
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• Xbox: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        ],
        slugs: ['server_xbox_na'],
        type: 'server',
        support: 'xbox',
        zone: 'na',
        status: 'planned',
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• PlayStation®: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        ],
        slugs: ['server_ps_eu'],
        type: 'server',
        support: 'ps',
        zone: 'eu',
        status: 'planned',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• PlayStation®: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        ],
        slugs: ['server_ps_na'],
        type: 'server',
        support: 'ps',
        zone: 'na',
        status: 'planned',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
    ],
  },
  {
    date: '2024-08-19T14_04_04',
    url: ForumMessageURL,
    file: '2024-08-19T14_04_04.html',
    rawList: [
      '• [EXTENDED] PC/Mac: NA and EU megaservers for patch maintenance – August 19, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• Xbox: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
      '• PlayStation®: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
    ],
    expected: [
      {
        sources: [ForumMessageURL],
        raw: [
          '• [EXTENDED] PC/Mac: NA and EU megaservers for patch maintenance – August 19, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['server_pc_eu'],
        type: 'server',
        support: 'pc',
        zone: 'eu',
        status: 'down',
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate: 'August 19, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[EXTENDED]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 19)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 19)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• [EXTENDED] PC/Mac: NA and EU megaservers for patch maintenance – August 19, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['server_pc_na'],
        type: 'server',
        support: 'pc',
        zone: 'na',
        status: 'down',
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate: 'August 19, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[EXTENDED]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 19)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 19)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• Xbox: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        ],
        slugs: ['server_xbox_eu'],
        type: 'server',
        support: 'xbox',
        zone: 'eu',
        status: 'planned',
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• Xbox: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        ],
        slugs: ['server_xbox_na'],
        type: 'server',
        support: 'xbox',
        zone: 'na',
        status: 'planned',
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• PlayStation®: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        ],
        slugs: ['server_ps_eu'],
        type: 'server',
        support: 'ps',
        zone: 'eu',
        status: 'planned',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• PlayStation®: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        ],
        slugs: ['server_ps_na'],
        type: 'server',
        support: 'ps',
        zone: 'na',
        status: 'planned',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
    ],
  },
  {
    date: '2024-08-19T16_09_32',
    url: ForumMessageURL,
    file: '2024-08-19T16_09_32.html',
    rawList: [
      '• [COMPLETE] PC/Mac: EU megaserver for patch maintenance – August 19, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• [EXTENDED] PC/Mac: NA megaserver for patch maintenance – August 19, 4:00AM EDT (8:00 UTC) - 14:00PM EDT (18:00 UTC)',
      '• Xbox: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
      '• PlayStation®: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
    ],
    expected: [
      {
        sources: [ForumMessageURL],
        raw: [
          '• [COMPLETE] PC/Mac: EU megaserver for patch maintenance – August 19, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['server_pc_eu'],
        type: 'server',
        support: 'pc',
        zone: 'eu',
        status: 'up',
        rawSlug: 'PC/Mac: EU megaserver for',
        rawDate: 'August 19, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[COMPLETE]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 19)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 19)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• [EXTENDED] PC/Mac: NA megaserver for patch maintenance – August 19, 4:00AM EDT (8:00 UTC) - 14:00PM EDT (18:00 UTC)',
        ],
        slugs: ['server_pc_na'],
        type: 'server',
        support: 'pc',
        zone: 'na',
        status: 'down',
        rawSlug: 'PC/Mac: NA megaserver for',
        rawDate: 'August 19, 4:00AM EDT (8:00 UTC) - 14:00PM EDT (18:00 UTC)',
        rawStatus: '[EXTENDED]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 19)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 19)
            .set('hours', 18)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• Xbox: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        ],
        slugs: ['server_xbox_eu'],
        type: 'server',
        support: 'xbox',
        zone: 'eu',
        status: 'planned',
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• Xbox: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        ],
        slugs: ['server_xbox_na'],
        type: 'server',
        support: 'xbox',
        zone: 'na',
        status: 'planned',
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• PlayStation®: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        ],
        slugs: ['server_ps_eu'],
        type: 'server',
        support: 'ps',
        zone: 'eu',
        status: 'planned',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• PlayStation®: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        ],
        slugs: ['server_ps_na'],
        type: 'server',
        support: 'ps',
        zone: 'na',
        status: 'planned',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
    ],
  },
  {
    date: '2024-08-19T17_12_16',
    url: ForumMessageURL,
    file: '2024-08-19T17_12_16.html',
    rawList: [
      '• [COMPLETE] PC/Mac: EU megaserver for patch maintenance – August 19, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• [COMPLETE] PC/Mac: NA megaserver for patch maintenance – August 19, 4:00AM EDT (8:00 UTC) - 14:00PM EDT (18:00 UTC)',
      '• Xbox: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
      '• PlayStation®: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
    ],
    expected: [
      {
        sources: [ForumMessageURL],
        raw: [
          '• [COMPLETE] PC/Mac: EU megaserver for patch maintenance – August 19, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['server_pc_eu'],
        type: 'server',
        support: 'pc',
        zone: 'eu',
        status: 'up',
        rawSlug: 'PC/Mac: EU megaserver for',
        rawDate: 'August 19, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[COMPLETE]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 19)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 19)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• [COMPLETE] PC/Mac: NA megaserver for patch maintenance – August 19, 4:00AM EDT (8:00 UTC) - 14:00PM EDT (18:00 UTC)',
        ],
        slugs: ['server_pc_na'],
        type: 'server',
        support: 'pc',
        zone: 'na',
        status: 'up',
        rawSlug: 'PC/Mac: NA megaserver for',
        rawDate: 'August 19, 4:00AM EDT (8:00 UTC) - 14:00PM EDT (18:00 UTC)',
        rawStatus: '[COMPLETE]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 19)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 19)
            .set('hours', 18)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• Xbox: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        ],
        slugs: ['server_xbox_eu'],
        type: 'server',
        support: 'xbox',
        zone: 'eu',
        status: 'planned',
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• Xbox: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        ],
        slugs: ['server_xbox_na'],
        type: 'server',
        support: 'xbox',
        zone: 'na',
        status: 'planned',
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• PlayStation®: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        ],
        slugs: ['server_ps_eu'],
        type: 'server',
        support: 'ps',
        zone: 'eu',
        status: 'planned',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• PlayStation®: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        ],
        slugs: ['server_ps_na'],
        type: 'server',
        support: 'ps',
        zone: 'na',
        status: 'planned',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
    ],
  },
  {
    date: '2024-08-21T10_03_17',
    url: ForumMessageURL,
    file: '2024-08-21T10_03_17.html',
    rawList: [
      '· [IN PROGRESS] Xbox: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
      '· [IN PROGRESS] PlayStation®: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
    ],
    expected: [
      {
        sources: [ForumMessageURL],
        raw: [
          '· [IN PROGRESS] Xbox: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        ],
        slugs: ['server_xbox_eu'],
        type: 'server',
        support: 'xbox',
        zone: 'eu',
        status: 'down',
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '· [IN PROGRESS] Xbox: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        ],
        slugs: ['server_xbox_na'],
        type: 'server',
        support: 'xbox',
        zone: 'na',
        status: 'down',
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '· [IN PROGRESS] PlayStation®: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        ],
        slugs: ['server_ps_eu'],
        type: 'server',
        support: 'ps',
        zone: 'eu',
        status: 'down',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '· [IN PROGRESS] PlayStation®: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        ],
        slugs: ['server_ps_na'],
        type: 'server',
        support: 'ps',
        zone: 'na',
        status: 'down',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
    ],
  },
  {
    date: '2024-08-21T11_50_35',
    url: ForumMessageURL,
    file: '2024-08-21T11_50_35.html',
    rawList: [
      '· [COMPLETE] Xbox: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
      '· [COMPLETE] PlayStation®: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
    ],
    expected: [
      {
        sources: [ForumMessageURL],
        raw: [
          '· [COMPLETE] Xbox: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        ],
        slugs: ['server_xbox_eu'],
        type: 'server',
        support: 'xbox',
        zone: 'eu',
        status: 'up',
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        rawStatus: '[COMPLETE]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '· [COMPLETE] Xbox: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        ],
        slugs: ['server_xbox_na'],
        type: 'server',
        support: 'xbox',
        zone: 'na',
        status: 'up',
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate: 'August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        rawStatus: '[COMPLETE]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '· [COMPLETE] PlayStation®: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        ],
        slugs: ['server_ps_eu'],
        type: 'server',
        support: 'ps',
        zone: 'eu',
        status: 'up',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        rawStatus: '[COMPLETE]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '· [COMPLETE] PlayStation®: NA and EU megaservers for maintenance – August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        ],
        slugs: ['server_ps_na'],
        type: 'server',
        support: 'ps',
        zone: 'na',
        status: 'up',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate: 'August 21, 6:00AM EDT (10:00 UTC) - 9:00AM EDT (13:00 UTC)',
        rawStatus: '[COMPLETE]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 21)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
    ],
  },
  {
    date: '2024-08-22T02_05_25',
    url: ForumMessageURL,
    file: '2024-08-22T02_05_25.html',
    rawList: [
      '• ESO Store and Account System for maintenance – August 22, 9:00AM EDT (13:00 UTC) - 12:00PM EDT (16:00 UTC)',
    ],
    expected: [
      {
        sources: [ForumMessageURL],
        raw: [
          '• ESO Store and Account System for maintenance – August 22, 9:00AM EDT (13:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['service_store_eso'],
        type: 'service',
        support: 'store',
        zone: 'eso',
        status: 'planned',
        rawSlug: 'ESO Store and Account System for',
        rawDate: 'August 22, 9:00AM EDT (13:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 22)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 22)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• ESO Store and Account System for maintenance – August 22, 9:00AM EDT (13:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['service_system_account'],
        type: 'service',
        support: 'system',
        zone: 'account',
        status: 'planned',
        rawSlug: 'ESO Store and Account System for',
        rawDate: 'August 22, 9:00AM EDT (13:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 22)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 22)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
    ],
  },
  {
    date: '2024-08-22T13_02_03',
    url: ForumMessageURL,
    file: '2024-08-22T13_02_03.html',
    rawList: [
      '• [IN PROGRESS] ESO Store and Account System for maintenance – August 22, 9:00AM EDT (13:00 UTC) - 12:00PM EDT (16:00 UTC)',
    ],
    expected: [
      {
        sources: [ForumMessageURL],
        raw: [
          '• [IN PROGRESS] ESO Store and Account System for maintenance – August 22, 9:00AM EDT (13:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['service_store_eso'],
        type: 'service',
        support: 'store',
        zone: 'eso',
        status: 'down',
        rawSlug: 'ESO Store and Account System for',
        rawDate: 'August 22, 9:00AM EDT (13:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 22)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 22)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• [IN PROGRESS] ESO Store and Account System for maintenance – August 22, 9:00AM EDT (13:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['service_system_account'],
        type: 'service',
        support: 'system',
        zone: 'account',
        status: 'down',
        rawSlug: 'ESO Store and Account System for',
        rawDate: 'August 22, 9:00AM EDT (13:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 22)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 22)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
    ],
  },
  {
    date: '2024-08-22T14_39_15',
    url: ForumMessageURL,
    file: '2024-08-22T14_39_15.html',
    rawList: [
      '• [COMPLETE] ESO Store and Account System for maintenance – August 22, 9:00AM EDT (13:00 UTC) - 12:00PM EDT (16:00 UTC)',
    ],
    expected: [
      {
        sources: [ForumMessageURL],
        raw: [
          '• [COMPLETE] ESO Store and Account System for maintenance – August 22, 9:00AM EDT (13:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['service_store_eso'],
        type: 'service',
        support: 'store',
        zone: 'eso',
        status: 'up',
        rawSlug: 'ESO Store and Account System for',
        rawDate: 'August 22, 9:00AM EDT (13:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[COMPLETE]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 22)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 22)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• [COMPLETE] ESO Store and Account System for maintenance – August 22, 9:00AM EDT (13:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['service_system_account'],
        type: 'service',
        support: 'system',
        zone: 'account',
        status: 'up',
        rawSlug: 'ESO Store and Account System for',
        rawDate: 'August 22, 9:00AM EDT (13:00 UTC) - 12:00PM EDT (16:00 UTC)',
        rawStatus: '[COMPLETE]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 22)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 22)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
    ],
  },
  {
    date: '2024-08-23T19_17_52',
    url: ForumMessagePTSURL,
    file: '2024-08-23T19_17_52.html',
    rawList: [
      'We will be performing maintenance on the PTS on Tuesday at 10:00AM EDT (14:00 UTC).',
    ],
    expected: [
      {
        sources: [ForumMessagePTSURL],
        raw: [
          'We will be performing maintenance on the PTS on Tuesday at 10:00AM EDT (14:00 UTC).',
        ],
        slugs: ['server_pc_pts'],
        type: 'server',
        support: 'pc',
        zone: 'pts',
        status: 'planned',
        rawSlug: 'PTS',
        rawDate: 'Tuesday at 10:00AM EDT (14:00 UTC).',
        rawStatus: 'We will be performing maintenance',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 8 - 1)
            .set('date', 27)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
    ],
  },
  {
    date: '2024-08-27T14_02_11',
    url: ForumMessagePTSURL,
    file: '2024-08-27T14_02_11.html',
    rawList: ['The PTS is currently unavailable while we perform maintenance.'],
    expected: [
      {
        sources: [ForumMessagePTSURL],
        raw: ['The PTS is currently unavailable while we perform maintenance.'],
        slugs: ['server_pc_pts'],
        type: 'server',
        support: 'pc',
        zone: 'pts',
        status: 'down',
        rawSlug: 'PTS',
        rawStatus: 'unavailable',
      },
    ],
  },
  {
    date: '2024-08-27T14_44_44',
    url: ForumMessagePTSURL,
    file: '2024-08-27T14_44_44.html',
    rawList: ['The maintenance is complete, and the PTS is now available.'],
    expected: [
      {
        sources: [ForumMessagePTSURL],
        raw: ['The maintenance is complete, and the PTS is now available.'],
        slugs: ['server_pc_pts'],
        type: 'server',
        support: 'pc',
        zone: 'pts',
        status: 'up',
        rawSlug: 'PTS',
        rawStatus: 'now available',
      },
    ],
  },
  {
    date: '2024-08-30T17_26_58',
    url: ForumMessagePTSURL,
    file: '2024-08-30T17_26_58.html',
    rawList: [
      '• PC/Mac: NA and EU megaservers for patch maintenance – September 3, 4:00AM EDT (8:00 UTC) – 9:00AM EDT (13:00 UTC)',
      '• Xbox: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• PlayStation®: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• ESO Store and Account System for maintenance – September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
      'We will be performing maintenance on the PTS on Thursday at 9:00AM EDT (13:00 UTC).',
    ],
    expected: [
      {
        sources: [ForumMessagePTSURL],
        raw: [
          '• PC/Mac: NA and EU megaservers for patch maintenance – September 3, 4:00AM EDT (8:00 UTC) – 9:00AM EDT (13:00 UTC)',
        ],
        slugs: ['server_pc_eu'],
        type: 'server',
        support: 'pc',
        zone: 'eu',
        status: 'planned',
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate: 'September 3, 4:00AM EDT (8:00 UTC) – 9:00AM EDT (13:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 3)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 3)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessagePTSURL],
        raw: [
          '• PC/Mac: NA and EU megaservers for patch maintenance – September 3, 4:00AM EDT (8:00 UTC) – 9:00AM EDT (13:00 UTC)',
        ],
        slugs: ['server_pc_na'],
        type: 'server',
        support: 'pc',
        zone: 'na',
        status: 'planned',
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate: 'September 3, 4:00AM EDT (8:00 UTC) – 9:00AM EDT (13:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 3)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 3)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessagePTSURL],
        raw: [
          '• Xbox: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['server_xbox_eu'],
        type: 'server',
        support: 'xbox',
        zone: 'eu',
        status: 'planned',
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessagePTSURL],
        raw: [
          '• Xbox: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['server_xbox_na'],
        type: 'server',
        support: 'xbox',
        zone: 'na',
        status: 'planned',
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessagePTSURL],
        raw: [
          '• PlayStation®: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['server_ps_eu'],
        type: 'server',
        support: 'ps',
        zone: 'eu',
        status: 'planned',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessagePTSURL],
        raw: [
          '• PlayStation®: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['server_ps_na'],
        type: 'server',
        support: 'ps',
        zone: 'na',
        status: 'planned',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessagePTSURL],
        raw: [
          '• ESO Store and Account System for maintenance – September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['service_store_eso'],
        type: 'service',
        support: 'store',
        zone: 'eso',
        status: 'planned',
        rawSlug: 'ESO Store and Account System for',
        rawDate:
          'September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessagePTSURL],
        raw: [
          '• ESO Store and Account System for maintenance – September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['service_system_account'],
        type: 'service',
        support: 'system',
        zone: 'account',
        status: 'planned',
        rawSlug: 'ESO Store and Account System for',
        rawDate:
          'September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessagePTSURL],
        raw: [
          'We will be performing maintenance on the PTS on Thursday at 9:00AM EDT (13:00 UTC).',
        ],
        slugs: ['server_pc_pts'],
        type: 'server',
        support: 'pc',
        zone: 'pts',
        status: 'planned',
        rawSlug: 'PTS',
        rawDate: 'Thursday at 9:00AM EDT (13:00 UTC).',
        rawStatus: 'We will be performing maintenance',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 5)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
    ],
  },
  {
    date: '2024-09-03T08_06_18',
    url: ForumMessageURL,
    file: '2024-09-03T08_06_18.html',
    rawList: [
      '• [IN PROGRESS] PC/Mac: NA and EU megaservers for patch maintenance – September 3, 4:00AM EDT (8:00 UTC) – 9:00AM EDT (13:00 UTC)',
      '• Xbox: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• PlayStation®: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• ESO Store and Account System for maintenance – September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
    ],
    expected: [
      {
        sources: [ForumMessageURL],
        raw: [
          '• [IN PROGRESS] PC/Mac: NA and EU megaservers for patch maintenance – September 3, 4:00AM EDT (8:00 UTC) – 9:00AM EDT (13:00 UTC)',
        ],
        slugs: ['server_pc_eu'],
        type: 'server',
        support: 'pc',
        zone: 'eu',
        status: 'down',
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate: 'September 3, 4:00AM EDT (8:00 UTC) – 9:00AM EDT (13:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 3)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 3)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• [IN PROGRESS] PC/Mac: NA and EU megaservers for patch maintenance – September 3, 4:00AM EDT (8:00 UTC) – 9:00AM EDT (13:00 UTC)',
        ],
        slugs: ['server_pc_na'],
        type: 'server',
        support: 'pc',
        zone: 'na',
        status: 'down',
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate: 'September 3, 4:00AM EDT (8:00 UTC) – 9:00AM EDT (13:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 3)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 3)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• Xbox: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['server_xbox_eu'],
        type: 'server',
        support: 'xbox',
        zone: 'eu',
        status: 'planned',
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• Xbox: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['server_xbox_na'],
        type: 'server',
        support: 'xbox',
        zone: 'na',
        status: 'planned',
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• PlayStation®: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['server_ps_eu'],
        type: 'server',
        support: 'ps',
        zone: 'eu',
        status: 'planned',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• PlayStation®: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['server_ps_na'],
        type: 'server',
        support: 'ps',
        zone: 'na',
        status: 'planned',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• ESO Store and Account System for maintenance – September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['service_store_eso'],
        type: 'service',
        support: 'store',
        zone: 'eso',
        status: 'planned',
        rawSlug: 'ESO Store and Account System for',
        rawDate:
          'September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• ESO Store and Account System for maintenance – September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['service_system_account'],
        type: 'service',
        support: 'system',
        zone: 'account',
        status: 'planned',
        rawSlug: 'ESO Store and Account System for',
        rawDate:
          'September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
    ],
  },
  {
    date: '2024-09-03T08_06_29',
    url: ForumMessagePTSURL,
    file: '2024-09-03T08_06_29.html',
    rawList: [
      'We will be performing maintenance on the PTS on Thursday at 9:00AM EDT (13:00 UTC).',
      '• [IN PROGRESS] PC/Mac: NA and EU megaservers for patch maintenance – September 3, 4:00AM EDT (8:00 UTC) – 9:00AM EDT (13:00 UTC)',
      '• Xbox: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• PlayStation®: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• ESO Store and Account System for maintenance – September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
    ],
    expected: [
      {
        sources: [ForumMessagePTSURL],
        raw: [
          'We will be performing maintenance on the PTS on Thursday at 9:00AM EDT (13:00 UTC).',
        ],
        slugs: ['server_pc_pts'],
        type: 'server',
        support: 'pc',
        zone: 'pts',
        status: 'planned',
        rawSlug: 'PTS',
        rawDate: 'Thursday at 9:00AM EDT (13:00 UTC).',
        rawStatus: 'We will be performing maintenance',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 5)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessagePTSURL],
        raw: [
          '• [IN PROGRESS] PC/Mac: NA and EU megaservers for patch maintenance – September 3, 4:00AM EDT (8:00 UTC) – 9:00AM EDT (13:00 UTC)',
        ],
        slugs: ['server_pc_eu'],
        type: 'server',
        support: 'pc',
        zone: 'eu',
        status: 'down',
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate: 'September 3, 4:00AM EDT (8:00 UTC) – 9:00AM EDT (13:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 3)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 3)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessagePTSURL],
        raw: [
          '• [IN PROGRESS] PC/Mac: NA and EU megaservers for patch maintenance – September 3, 4:00AM EDT (8:00 UTC) – 9:00AM EDT (13:00 UTC)',
        ],
        slugs: ['server_pc_na'],
        type: 'server',
        support: 'pc',
        zone: 'na',
        status: 'down',
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate: 'September 3, 4:00AM EDT (8:00 UTC) – 9:00AM EDT (13:00 UTC)',
        rawStatus: '[IN PROGRESS]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 3)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 3)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessagePTSURL],
        raw: [
          '• Xbox: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['server_xbox_eu'],
        type: 'server',
        support: 'xbox',
        zone: 'eu',
        status: 'planned',
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessagePTSURL],
        raw: [
          '• Xbox: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['server_xbox_na'],
        type: 'server',
        support: 'xbox',
        zone: 'na',
        status: 'planned',
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessagePTSURL],
        raw: [
          '• PlayStation®: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['server_ps_eu'],
        type: 'server',
        support: 'ps',
        zone: 'eu',
        status: 'planned',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessagePTSURL],
        raw: [
          '• PlayStation®: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['server_ps_na'],
        type: 'server',
        support: 'ps',
        zone: 'na',
        status: 'planned',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessagePTSURL],
        raw: [
          '• ESO Store and Account System for maintenance – September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['service_store_eso'],
        type: 'service',
        support: 'store',
        zone: 'eso',
        status: 'planned',
        rawSlug: 'ESO Store and Account System for',
        rawDate:
          'September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessagePTSURL],
        raw: [
          '• ESO Store and Account System for maintenance – September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['service_system_account'],
        type: 'service',
        support: 'system',
        zone: 'account',
        status: 'planned',
        rawSlug: 'ESO Store and Account System for',
        rawDate:
          'September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
    ],
  },
  {
    date: '2024-09-03T10_56_59',
    url: ForumMessageURL,
    file: '2024-09-03T10_56_59.html',
    rawList: [
      '• [COMPLETE] PC/Mac: NA and EU megaservers for patch maintenance – September 3, 4:00AM EDT (8:00 UTC) – 9:00AM EDT (13:00 UTC)',
      '• Xbox: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• PlayStation®: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• ESO Store and Account System for maintenance – September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
    ],
    expected: [
      {
        sources: [ForumMessageURL],
        raw: [
          '• [COMPLETE] PC/Mac: NA and EU megaservers for patch maintenance – September 3, 4:00AM EDT (8:00 UTC) – 9:00AM EDT (13:00 UTC)',
        ],
        slugs: ['server_pc_eu'],
        type: 'server',
        support: 'pc',
        zone: 'eu',
        status: 'up',
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate: 'September 3, 4:00AM EDT (8:00 UTC) – 9:00AM EDT (13:00 UTC)',
        rawStatus: '[COMPLETE]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 3)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 3)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• [COMPLETE] PC/Mac: NA and EU megaservers for patch maintenance – September 3, 4:00AM EDT (8:00 UTC) – 9:00AM EDT (13:00 UTC)',
        ],
        slugs: ['server_pc_na'],
        type: 'server',
        support: 'pc',
        zone: 'na',
        status: 'up',
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate: 'September 3, 4:00AM EDT (8:00 UTC) – 9:00AM EDT (13:00 UTC)',
        rawStatus: '[COMPLETE]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 3)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 3)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• Xbox: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['server_xbox_eu'],
        type: 'server',
        support: 'xbox',
        zone: 'eu',
        status: 'planned',
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• Xbox: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['server_xbox_na'],
        type: 'server',
        support: 'xbox',
        zone: 'na',
        status: 'planned',
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• PlayStation®: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['server_ps_eu'],
        type: 'server',
        support: 'ps',
        zone: 'eu',
        status: 'planned',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• PlayStation®: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['server_ps_na'],
        type: 'server',
        support: 'ps',
        zone: 'na',
        status: 'planned',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• ESO Store and Account System for maintenance – September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['service_store_eso'],
        type: 'service',
        support: 'store',
        zone: 'eso',
        status: 'planned',
        rawSlug: 'ESO Store and Account System for',
        rawDate:
          'September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessageURL],
        raw: [
          '• ESO Store and Account System for maintenance – September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['service_system_account'],
        type: 'service',
        support: 'system',
        zone: 'account',
        status: 'planned',
        rawSlug: 'ESO Store and Account System for',
        rawDate:
          'September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
    ],
  },
  {
    date: '2024-09-03T10_57_42',
    url: ForumMessagePTSURL,
    file: '2024-09-03T10_57_42.html',
    rawList: [
      'We will be performing maintenance on the PTS on Thursday at 9:00AM EDT (13:00 UTC).',
      '• [COMPLETE] PC/Mac: NA and EU megaservers for patch maintenance – September 3, 4:00AM EDT (8:00 UTC) – 9:00AM EDT (13:00 UTC)',
      '• Xbox: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• PlayStation®: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
      '• ESO Store and Account System for maintenance – September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
    ],
    expected: [
      {
        sources: [ForumMessagePTSURL],
        raw: [
          'We will be performing maintenance on the PTS on Thursday at 9:00AM EDT (13:00 UTC).',
        ],
        slugs: ['server_pc_pts'],
        type: 'server',
        support: 'pc',
        zone: 'pts',
        status: 'planned',
        rawSlug: 'PTS',
        rawDate: 'Thursday at 9:00AM EDT (13:00 UTC).',
        rawStatus: 'We will be performing maintenance',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 5)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessagePTSURL],
        raw: [
          '• [COMPLETE] PC/Mac: NA and EU megaservers for patch maintenance – September 3, 4:00AM EDT (8:00 UTC) – 9:00AM EDT (13:00 UTC)',
        ],
        slugs: ['server_pc_eu'],
        type: 'server',
        support: 'pc',
        zone: 'eu',
        status: 'up',
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate: 'September 3, 4:00AM EDT (8:00 UTC) – 9:00AM EDT (13:00 UTC)',
        rawStatus: '[COMPLETE]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 3)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 3)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessagePTSURL],
        raw: [
          '• [COMPLETE] PC/Mac: NA and EU megaservers for patch maintenance – September 3, 4:00AM EDT (8:00 UTC) – 9:00AM EDT (13:00 UTC)',
        ],
        slugs: ['server_pc_na'],
        type: 'server',
        support: 'pc',
        zone: 'na',
        status: 'up',
        rawSlug: 'PC/Mac: NA and EU megaservers for',
        rawDate: 'September 3, 4:00AM EDT (8:00 UTC) – 9:00AM EDT (13:00 UTC)',
        rawStatus: '[COMPLETE]',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 3)
            .set('hours', 8)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 3)
            .set('hours', 13)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessagePTSURL],
        raw: [
          '• Xbox: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['server_xbox_eu'],
        type: 'server',
        support: 'xbox',
        zone: 'eu',
        status: 'planned',
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessagePTSURL],
        raw: [
          '• Xbox: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['server_xbox_na'],
        type: 'server',
        support: 'xbox',
        zone: 'na',
        status: 'planned',
        rawSlug: 'Xbox: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessagePTSURL],
        raw: [
          '• PlayStation®: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['server_ps_eu'],
        type: 'server',
        support: 'ps',
        zone: 'eu',
        status: 'planned',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessagePTSURL],
        raw: [
          '• PlayStation®: NA and EU megaservers for patch maintenance – September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['server_ps_na'],
        type: 'server',
        support: 'ps',
        zone: 'na',
        status: 'planned',
        rawSlug: 'PlayStation®: NA and EU megaservers for',
        rawDate:
          'September 4, 6:00AM EDT (10:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 10)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessagePTSURL],
        raw: [
          '• ESO Store and Account System for maintenance – September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['service_store_eso'],
        type: 'service',
        support: 'store',
        zone: 'eso',
        status: 'planned',
        rawSlug: 'ESO Store and Account System for',
        rawDate:
          'September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
      {
        sources: [ForumMessagePTSURL],
        raw: [
          '• ESO Store and Account System for maintenance – September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        ],
        slugs: ['service_system_account'],
        type: 'service',
        support: 'system',
        zone: 'account',
        status: 'planned',
        rawSlug: 'ESO Store and Account System for',
        rawDate:
          'September 4, 10:00AM EDT (14:00 UTC) - 12:00PM EDT (16:00 UTC)',
        dates: [
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 14)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
          moment()
            .utc()
            .set('years', 2024)
            .set('months', 9 - 1)
            .set('date', 4)
            .set('hours', 16)
            .set('minutes', 0)
            .set('seconds', 0)
            .set('milliseconds', 0)
            .utcOffset(0),
        ],
      },
    ],
  },
];

export default pattern;
