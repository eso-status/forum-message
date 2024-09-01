import * as moment from 'moment/moment';
import { ForumMessageURL } from 'src/const';
import { PatternItem } from '../interface/patternItem.interface';

const pattern: PatternItem[] = [
  {
    date: '2024-08-14T17_45_47',
    url: ForumMessageURL,
    file: '2024-08-14T17_45_47.html',
    expected: [],
  },
  {
    date: '2024-08-15T14_03_38',
    url: ForumMessageURL,
    file: '2024-08-15T14_03_38.html',
    expected: [],
  },
  {
    date: '2024-08-15T20_44_20',
    url: ForumMessageURL,
    file: '2024-08-15T20_44_20.html',
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
];

export default pattern;
