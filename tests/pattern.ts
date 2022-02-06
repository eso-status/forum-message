import * as moment from 'moment';
import { Moment } from 'moment';
import {
  Support,
  Slug,
  Status,
  Type,
  Zone,
} from '@eso-status/types';

/**
 * Methode used to generate date test with day and month
 *
 * @param months number Month of date test
 * @param day number Day of date test
 * @param current Moment Date for test
 *
 * @return Moment Date test
 */
function getDateWithDayNumber(months: number, day: number, current: Moment = moment()): Moment {
  return (((months - 1) < current.utc().get('months') || day < current.utc().get('date')) ? current.add(1, 'year') : current)
    .utc()
    .set('months', months - 1)
    .set('date', day)
    .set('hours', 0)
    .set('minutes', 0)
    .set('seconds', 0)
    .set('milliseconds', 0)
    .utcOffset(0);
}

/**
 * Methode used to generate date test with index week day
 *
 * @param dayNumber number WeekDay index
 * @param current Moment Date for test
 *
 * @return Moment Date test
 */
function getDateWithDayIndex(dayNumber: number, current: Moment = moment()): Moment {
  return ((current.utc().isoWeekday() > dayNumber) ? current.isoWeekday(dayNumber).add(7, 'day') : current.isoWeekday(dayNumber))
    .utc()
    .set('hours', 0)
    .set('minutes', 0)
    .set('seconds', 0)
    .set('milliseconds', 0)
    .utcOffset(0);
}

/**
 * Methode used to generate date test with hour
 *
 * @param hours number Hours
 * @param minutes number Minutes
 * @param current Moment Date for test
 *
 * @return Moment Date test
 */
function getDateWithHours(hours: number, minutes: number, current: Moment = moment()): Moment {
  return ((current.utc().get('hours') > hours || (current.utc().get('hours') === hours && current.utc().get('minutes') > minutes)) ? current.add(1, 'day') : current)
    .utc()
    .set('hours', 0)
    .set('minutes', 0)
    .set('seconds', 0)
    .set('milliseconds', 0)
    .utcOffset(0);
}

/**
 * Pattern of Forum Message data
 *
 * @type {raw: string, result: {rawDate: string, slug: Slug[], status: Status}}[]
 */
export const forumMessagePattern: {raw: string, result: {rawDate: string, slug: Slug[], status: Status, dates: Moment[]}}[] = [
  {
    raw: '• [COMPLETE] ESO Store and Account System for maintenance – July 13, 8:00AM EDT (12:00 UTC) – 4:00PM EDT (20:00 UTC)',
    result: {
      rawDate: 'July 13, 8:00AM EDT (12:00 UTC) – 4:00PM EDT (20:00 UTC)',
      slug: [
        'service_store_eso',
        'service_system_account',
      ],
      status: 'up',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(7, 13).get('years'))
          .set('months', getDateWithDayNumber(7, 13).get('months'))
          .set('date', getDateWithDayNumber(7, 13).get('date'))
          .set('hours', 12)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(7, 13).get('years'))
          .set('months', getDateWithDayNumber(7, 13).get('months'))
          .set('date', getDateWithDayNumber(7, 13).get('date'))
          .set('hours', 20)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
    },
  },
  {
    raw: 'We are currently investigating issues some players are having on the European PC/Mac megaserver. We will update as new information becomes available.',
    result: {
      rawDate: '',
      slug: [
        'server_pc_eu',
      ],
      status: 'issues',
      dates: [],
    },
  },
  {
    raw: 'In response to the ongoing issue, the European PC/Mac megaserver will be taken offline for maintenance.',
    result: {
      rawDate: '',
      slug: [
        'server_pc_eu',
      ],
      status: 'issues',
      dates: [],
    },
  },
  {
    raw: 'The PTS is now offline for the patch 7.1.1 maintenance and is currently unavailable. ',
    result: {
      rawDate: '',
      slug: [
        'server_pc_pts',
      ],
      status: 'down',
      dates: [],
    },
  },
  {
    raw: 'Xbox: NA and EU megaservers for maintenance – July 21, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
    result: {
      rawDate: 'July 21, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
      slug: [
        'server_xbox_na',
        'server_xbox_eu',
      ],
      status: 'planned',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(7, 21).get('years'))
          .set('months', getDateWithDayNumber(7, 21).get('months'))
          .set('date', getDateWithDayNumber(7, 21).get('date'))
          .set('hours', 8)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(7, 21).get('years'))
          .set('months', getDateWithDayNumber(7, 21).get('months'))
          .set('date', getDateWithDayNumber(7, 21).get('date'))
          .set('hours', 12)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
    },
  },
  {
    raw: 'PlayStation®: NA and EU megaservers for maintenance – July 21, 4:00AM EDT (8:00 UTC) – 12:00PM EDT (16:00 UTC)',
    result: {
      rawDate: 'July 21, 4:00AM EDT (8:00 UTC) – 12:00PM EDT (16:00 UTC)',
      slug: [
        'server_ps_na',
        'server_ps_eu',
      ],
      status: 'planned',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(7, 21).get('years'))
          .set('months', getDateWithDayNumber(7, 21).get('months'))
          .set('date', getDateWithDayNumber(7, 21).get('date'))
          .set('hours', 8)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(7, 21).get('years'))
          .set('months', getDateWithDayNumber(7, 21).get('months'))
          .set('date', getDateWithDayNumber(7, 21).get('date'))
          .set('hours', 16)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
    },
  },
  {
    raw: 'The issue is resolved, and the European PC/Mac megaserver is now available. Thank you for your patience!',
    result: {
      rawDate: '',
      slug: [
        'server_pc_eu',
      ],
      status: 'up',
      dates: [],
    },
  },
  {
    raw: 'The maintenance is complete, and the PTS is now back online and patch 7.2.2 is available. You can find the latest patch notes here: <a href=\\"https://forums.elderscrollsonline.com/en/discussion/588184/\\" rel=\\"nofollow\\">https://forums.elderscrollsonline.com/en/discussion/588184/</a>',
    result: {
      rawDate: '',
      slug: [
        'server_pc_pts',
      ],
      status: 'up',
      dates: [],
    },
  },
  {
    raw: 'We are currently investigating issues some players are having logging into the European PC/Mac megaserver. We will update as new information becomes available.',
    result: {
      rawDate: '',
      slug: [
        'server_pc_eu',
      ],
      status: 'issues',
      dates: [],
    },
  },
  {
    raw: 'The issues related to logging in to the European PC/Mac megaserver have been resolved at this time. If you continue to experience difficulties at login, please restart your client. Thank you for your patience!',
    result: {
      rawDate: '',
      slug: [
        'server_pc_eu',
      ],
      status: 'up',
      dates: [],
    },
  },
  {
    raw: 'The PlayStation™ Network is currently experiencing a service interruption.',
    result: {
      rawDate: '',
      slug: [
        'server_ps_na',
        'server_ps_eu',
      ],
      status: 'issues',
      dates: [],
    },
  },
  {
    raw: 'The PlayStation™ Network is currently experiencing a service interruption.',
    result: {
      rawDate: '',
      slug: [
        'server_ps_na',
        'server_ps_eu',
      ],
      status: 'issues',
      dates: [],
    },
  },
  {
    raw: '• [IN PROGRESS] ESO Store and Account System for maintenance – July 23, 8:00AM EDT (12:00 UTC) – 12:00PM EDT (16:00 UTC)',
    result: {
      rawDate: 'July 23, 8:00AM EDT (12:00 UTC) – 12:00PM EDT (16:00 UTC)',
      slug: [
        'service_store_eso',
        'service_system_account',
      ],
      status: 'down',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(7, 23).get('years'))
          .set('months', getDateWithDayNumber(7, 23).get('months'))
          .set('date', getDateWithDayNumber(7, 23).get('date'))
          .set('hours', 12)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(7, 23).get('years'))
          .set('months', getDateWithDayNumber(7, 23).get('months'))
          .set('date', getDateWithDayNumber(7, 23).get('date'))
          .set('hours', 16)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
    },
  },
  {
    raw: 'We will be performing maintenance for patch 7.1.2 on the PTS on Monday at 2:00AM EDT (06:00 UTC). ',
    result: {
      rawDate: 'Monday at 2:00AM EDT (06:00 UTC). ',
      slug: [
        'server_pc_pts',
      ],
      status: 'planned',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayIndex(1).get('years'))
          .set('months', getDateWithDayIndex(1).get('months'))
          .set('date', getDateWithDayIndex(1).get('date'))
          .set('hours', 6)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
    },
  },
  {
    raw: '• PlayStation®: NA and EU megaservers for patch maintenance – July 28, 6:00AM EDT (10:00 UTC) – 10:00AM EDT (14:00 UTC)',
    result: {
      rawDate: 'July 28, 6:00AM EDT (10:00 UTC) – 10:00AM EDT (14:00 UTC)',
      slug: [
        'server_ps_na',
        'server_ps_eu',
      ],
      status: 'planned',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(7, 28).get('years'))
          .set('months', getDateWithDayNumber(7, 28).get('months'))
          .set('date', getDateWithDayNumber(7, 28).get('date'))
          .set('hours', 10)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(7, 28).get('years'))
          .set('months', getDateWithDayNumber(7, 28).get('months'))
          .set('date', getDateWithDayNumber(7, 28).get('date'))
          .set('hours', 14)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
    },
  },
  {
    raw: '• Xbox: NA and EU megaservers for patch maintenance – July 28, 6:00AM EDT (10:00 UTC) – 10:00AM EDT (14:00 UTC)',
    result: {
      rawDate: 'July 28, 6:00AM EDT (10:00 UTC) – 10:00AM EDT (14:00 UTC)',
      slug: [
        'server_xbox_na',
        'server_xbox_eu',
      ],
      status: 'planned',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(7, 28).get('years'))
          .set('months', getDateWithDayNumber(7, 28).get('months'))
          .set('date', getDateWithDayNumber(7, 28).get('date'))
          .set('hours', 10)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(7, 28).get('years'))
          .set('months', getDateWithDayNumber(7, 28).get('months'))
          .set('date', getDateWithDayNumber(7, 28).get('date'))
          .set('hours', 14)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
    },
  },
  {
    raw: '• PC/Mac: NA and EU megaservers for patch maintenance – July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
    result: {
      rawDate: 'July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
      slug: [
        'server_pc_na',
        'server_pc_eu',
      ],
      status: 'planned',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(7, 26).get('years'))
          .set('months', getDateWithDayNumber(7, 26).get('months'))
          .set('date', getDateWithDayNumber(7, 26).get('date'))
          .set('hours', 8)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(7, 26).get('years'))
          .set('months', getDateWithDayNumber(7, 26).get('months'))
          .set('date', getDateWithDayNumber(7, 26).get('date'))
          .set('hours', 12)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
    },
  },
  {
    raw: '• [IN PROGRESS] PC/Mac: NA and EU megaservers for patch maintenance – July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
    result: {
      rawDate: 'July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
      slug: [
        'server_pc_na',
        'server_pc_eu',
      ],
      status: 'down',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(7, 26).get('years'))
          .set('months', getDateWithDayNumber(7, 26).get('months'))
          .set('date', getDateWithDayNumber(7, 26).get('date'))
          .set('hours', 8)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(7, 26).get('years'))
          .set('months', getDateWithDayNumber(7, 26).get('months'))
          .set('date', getDateWithDayNumber(7, 26).get('date'))
          .set('hours', 12)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
    },
  },
  {
    raw: '• [COMPLETE] PC/Mac: NA and EU megaservers for patch maintenance – July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
    result: {
      rawDate: 'July 26, 4:00AM EDT (8:00 UTC) – 8:00AM EDT (12:00 UTC)',
      slug: [
        'server_pc_na',
        'server_pc_eu',
      ],
      status: 'up',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(7, 26).get('years'))
          .set('months', getDateWithDayNumber(7, 26).get('months'))
          .set('date', getDateWithDayNumber(7, 26).get('date'))
          .set('hours', 8)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(7, 26).get('years'))
          .set('months', getDateWithDayNumber(7, 26).get('months'))
          .set('date', getDateWithDayNumber(7, 26).get('date'))
          .set('hours', 12)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
    },
  },
  {
    raw: '• [IN PROGRESS] Xbox: NA and EU megaservers for patch maintenance – July 28, 6:00AM EDT (10:00 UTC) – 10:00AM EDT (14:00 UTC)',
    result: {
      rawDate: 'July 28, 6:00AM EDT (10:00 UTC) – 10:00AM EDT (14:00 UTC)',
      slug: [
        'server_xbox_na',
        'server_xbox_eu',
      ],
      status: 'down',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(7, 28).get('years'))
          .set('months', getDateWithDayNumber(7, 28).get('months'))
          .set('date', getDateWithDayNumber(7, 28).get('date'))
          .set('hours', 10)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(7, 28).get('years'))
          .set('months', getDateWithDayNumber(7, 28).get('months'))
          .set('date', getDateWithDayNumber(7, 28).get('date'))
          .set('hours', 14)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
    },
  },
  {
    raw: '• [IN PROGRESS] PlayStation®: NA and EU megaservers for patch maintenance – July 28, 6:00AM EDT (10:00 UTC) – 10:00AM EDT (14:00 UTC)',
    result: {
      rawDate: 'July 28, 6:00AM EDT (10:00 UTC) – 10:00AM EDT (14:00 UTC)',
      slug: [
        'server_ps_na',
        'server_ps_eu',
      ],
      status: 'down',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(7, 28).get('years'))
          .set('months', getDateWithDayNumber(7, 28).get('months'))
          .set('date', getDateWithDayNumber(7, 28).get('date'))
          .set('hours', 10)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(7, 28).get('years'))
          .set('months', getDateWithDayNumber(7, 28).get('months'))
          .set('date', getDateWithDayNumber(7, 28).get('date'))
          .set('hours', 14)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
    },
  },
  {
    raw: '• [COMPLETE] Xbox: NA and EU megaservers for patch maintenance – July 28, 6:00AM EDT (10:00 UTC) – 10:00AM EDT (14:00 UTC)',
    result: {
      rawDate: 'July 28, 6:00AM EDT (10:00 UTC) – 10:00AM EDT (14:00 UTC)',
      slug: [
        'server_xbox_na',
        'server_xbox_eu',
      ],
      status: 'up',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(7, 28).get('years'))
          .set('months', getDateWithDayNumber(7, 28).get('months'))
          .set('date', getDateWithDayNumber(7, 28).get('date'))
          .set('hours', 10)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(7, 28).get('years'))
          .set('months', getDateWithDayNumber(7, 28).get('months'))
          .set('date', getDateWithDayNumber(7, 28).get('date'))
          .set('hours', 14)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
    },
  },
  {
    raw: '• [COMPLETE] PlayStation®: NA and EU megaservers for patch maintenance – July 28, 6:00AM EDT (10:00 UTC) – 10:00AM EDT (14:00 UTC)',
    result: {
      rawDate: 'July 28, 6:00AM EDT (10:00 UTC) – 10:00AM EDT (14:00 UTC)',
      slug: [
        'server_ps_na',
        'server_ps_eu',
      ],
      status: 'up',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(7, 28).get('years'))
          .set('months', getDateWithDayNumber(7, 28).get('months'))
          .set('date', getDateWithDayNumber(7, 28).get('date'))
          .set('hours', 10)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(7, 28).get('years'))
          .set('months', getDateWithDayNumber(7, 28).get('months'))
          .set('date', getDateWithDayNumber(7, 28).get('date'))
          .set('hours', 14)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
    },
  },
  {
    raw: '• Xbox: NA megaserver for maintenance – August 3, 5:00PM EDT (21:00 UTC) - 7:00PM EDT (23:00 UTC)',
    result: {
      rawDate: 'August 3, 5:00PM EDT (21:00 UTC) - 7:00PM EDT (23:00 UTC)',
      slug: [
        'server_xbox_na',
      ],
      status: 'planned',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(8, 3).get('years'))
          .set('months', getDateWithDayNumber(8, 3).get('months'))
          .set('date', getDateWithDayNumber(8, 3).get('date'))
          .set('hours', 21)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(8, 3).get('years'))
          .set('months', getDateWithDayNumber(8, 3).get('months'))
          .set('date', getDateWithDayNumber(8, 3).get('date'))
          .set('hours', 23)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
    },
  },
  {
    raw: '• [IN PROGRESS] Xbox: NA megaserver for maintenance – August 3, 5:00PM EDT (21:00 UTC) - 7:00PM EDT (23:00 UTC)',
    result: {
      rawDate: 'August 3, 5:00PM EDT (21:00 UTC) - 7:00PM EDT (23:00 UTC)',
      slug: [
        'server_xbox_na',
      ],
      status: 'down',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(8, 3).get('years'))
          .set('months', getDateWithDayNumber(8, 3).get('months'))
          .set('date', getDateWithDayNumber(8, 3).get('date'))
          .set('hours', 21)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(8, 3).get('years'))
          .set('months', getDateWithDayNumber(8, 3).get('months'))
          .set('date', getDateWithDayNumber(8, 3).get('date'))
          .set('hours', 23)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
    },
  },
  {
    raw: '• [COMPLETE] Xbox: NA megaserver for maintenance – August 3, 5:00PM EDT (21:00 UTC) - 7:00PM EDT (23:00 UTC)',
    result: {
      rawDate: 'August 3, 5:00PM EDT (21:00 UTC) - 7:00PM EDT (23:00 UTC)',
      slug: [
        'server_xbox_na',
      ],
      status: 'up',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(8, 3).get('years'))
          .set('months', getDateWithDayNumber(8, 3).get('months'))
          .set('date', getDateWithDayNumber(8, 3).get('date'))
          .set('hours', 21)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(8, 3).get('years'))
          .set('months', getDateWithDayNumber(8, 3).get('months'))
          .set('date', getDateWithDayNumber(8, 3).get('date'))
          .set('hours', 23)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
    },
  },
  {
    raw: '• PC/Mac: NA and EU megaservers for maintenance – August 9, 4:00AM EDT (8:00 UTC) - 7:00AM EDT (11:00 UTC)',
    result: {
      rawDate: 'August 9, 4:00AM EDT (8:00 UTC) - 7:00AM EDT (11:00 UTC)',
      slug: [
        'server_pc_na',
        'server_pc_eu',
      ],
      status: 'planned',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(8, 9).get('years'))
          .set('months', getDateWithDayNumber(8, 9).get('months'))
          .set('date', getDateWithDayNumber(8, 9).get('date'))
          .set('hours', 8)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(8, 9).get('years'))
          .set('months', getDateWithDayNumber(8, 9).get('months'))
          .set('date', getDateWithDayNumber(8, 9).get('date'))
          .set('hours', 11)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
    },
  },
  {
    raw: '• Xbox: NA and EU megaservers for maintenance – August 11, 4:00AM EDT (8:00 UTC) - 8:00AM EDT (12:00 UTC)',
    result: {
      rawDate: 'August 11, 4:00AM EDT (8:00 UTC) - 8:00AM EDT (12:00 UTC)',
      slug: [
        'server_xbox_na',
        'server_xbox_eu',
      ],
      status: 'planned',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(8, 11).get('years'))
          .set('months', getDateWithDayNumber(8, 11).get('months'))
          .set('date', getDateWithDayNumber(8, 11).get('date'))
          .set('hours', 8)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(8, 11).get('years'))
          .set('months', getDateWithDayNumber(8, 11).get('months'))
          .set('date', getDateWithDayNumber(8, 11).get('date'))
          .set('hours', 12)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
    },
  },
  {
    raw: '• PlayStation®: NA and EU megaservers for maintenance – August 11, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
    result: {
      rawDate: 'August 11, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
      slug: [
        'server_ps_na',
        'server_ps_eu',
      ],
      status: 'planned',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(8, 11).get('years'))
          .set('months', getDateWithDayNumber(8, 11).get('months'))
          .set('date', getDateWithDayNumber(8, 11).get('date'))
          .set('hours', 8)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(8, 11).get('years'))
          .set('months', getDateWithDayNumber(8, 11).get('months'))
          .set('date', getDateWithDayNumber(8, 11).get('date'))
          .set('hours', 16)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
    },
  },
  {
    raw: 'We are currently investigating issues some players are having logging into the North American Xbox megaserver. We will update as new information becomes available.',
    result: {
      rawDate: '',
      slug: [
        'server_xbox_na',
      ],
      status: 'issues',
      dates: [],
    },
  },
  {
    raw: 'The issues related to logging in to the North American Xbox megaserver have been resolved at this time. If you continue to experience difficulties at login, please restart your client. Thank you for your patience!',
    result: {
      rawDate: '',
      slug: [
        'server_xbox_na',
      ],
      status: 'up',
      dates: [],
    },
  },
  {
    raw: '• [IN PROGRESS] PC/Mac: NA and EU megaservers for maintenance – August 9, 4:00AM EDT (8:00 UTC) - 7:00AM EDT (11:00 UTC)',
    result: {
      rawDate: 'August 9, 4:00AM EDT (8:00 UTC) - 7:00AM EDT (11:00 UTC)',
      slug: [
        'server_pc_na',
        'server_pc_eu',
      ],
      status: 'down',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(8, 9).get('years'))
          .set('months', getDateWithDayNumber(8, 9).get('months'))
          .set('date', getDateWithDayNumber(8, 9).get('date'))
          .set('hours', 8)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(8, 9).get('years'))
          .set('months', getDateWithDayNumber(8, 9).get('months'))
          .set('date', getDateWithDayNumber(8, 9).get('date'))
          .set('hours', 11)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
    },
  },
  {
    raw: '• [COMPLETE] PC/Mac: NA and EU megaservers for maintenance – August 9, 4:00AM EDT (8:00 UTC) - 7:00AM EDT (11:00 UTC)',
    result: {
      rawDate: 'August 9, 4:00AM EDT (8:00 UTC) - 7:00AM EDT (11:00 UTC)',
      slug: [
        'server_pc_na',
        'server_pc_eu',
      ],
      status: 'up',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(8, 9).get('years'))
          .set('months', getDateWithDayNumber(8, 9).get('months'))
          .set('date', getDateWithDayNumber(8, 9).get('date'))
          .set('hours', 8)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(8, 9).get('years'))
          .set('months', getDateWithDayNumber(8, 9).get('months'))
          .set('date', getDateWithDayNumber(8, 9).get('date'))
          .set('hours', 11)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
    },
  },
  {
    raw: '• [IN PROGRESS] Xbox: NA and EU megaservers for maintenance – August 11, 4:00AM EDT (8:00 UTC) - 8:00AM EDT (12:00 UTC)',
    result: {
      rawDate: 'August 11, 4:00AM EDT (8:00 UTC) - 8:00AM EDT (12:00 UTC)',
      slug: [
        'server_xbox_na',
        'server_xbox_eu',
      ],
      status: 'down',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(8, 11).get('years'))
          .set('months', getDateWithDayNumber(8, 11).get('months'))
          .set('date', getDateWithDayNumber(8, 11).get('date'))
          .set('hours', 8)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(8, 11).get('years'))
          .set('months', getDateWithDayNumber(8, 11).get('months'))
          .set('date', getDateWithDayNumber(8, 11).get('date'))
          .set('hours', 12)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
    },
  },
  {
    raw: '• [IN PROGRESS] PlayStation®: NA and EU megaservers for maintenance – August 11, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
    result: {
      rawDate: 'August 11, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
      slug: [
        'server_ps_na',
        'server_ps_eu',
      ],
      status: 'down',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(8, 11).get('years'))
          .set('months', getDateWithDayNumber(8, 11).get('months'))
          .set('date', getDateWithDayNumber(8, 11).get('date'))
          .set('hours', 8)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(8, 11).get('years'))
          .set('months', getDateWithDayNumber(8, 11).get('months'))
          .set('date', getDateWithDayNumber(8, 11).get('date'))
          .set('hours', 16)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
    },
  },
  {
    raw: '• [COMPLETE] Xbox: NA and EU megaservers for maintenance – August 11, 4:00AM EDT (8:00 UTC) - 8:00AM EDT (12:00 UTC)',
    result: {
      rawDate: 'August 11, 4:00AM EDT (8:00 UTC) - 8:00AM EDT (12:00 UTC)',
      slug: [
        'server_xbox_na',
        'server_xbox_eu',
      ],
      status: 'up',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(8, 11).get('years'))
          .set('months', getDateWithDayNumber(8, 11).get('months'))
          .set('date', getDateWithDayNumber(8, 11).get('date'))
          .set('hours', 8)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(8, 11).get('years'))
          .set('months', getDateWithDayNumber(8, 11).get('months'))
          .set('date', getDateWithDayNumber(8, 11).get('date'))
          .set('hours', 12)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
    },
  },
  {
    raw: '• [COMPLETE] PlayStation®: NA and EU megaservers for maintenance – August 11, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
    result: {
      rawDate: 'August 11, 4:00AM EDT (8:00 UTC) - 12:00PM EDT (16:00 UTC)',
      slug: [
        'server_ps_na',
        'server_ps_eu',
      ],
      status: 'up',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(8, 11).get('years'))
          .set('months', getDateWithDayNumber(8, 11).get('months'))
          .set('date', getDateWithDayNumber(8, 11).get('date'))
          .set('hours', 8)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(8, 11).get('years'))
          .set('months', getDateWithDayNumber(8, 11).get('months'))
          .set('date', getDateWithDayNumber(8, 11).get('date'))
          .set('hours', 16)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
    },
  },
  {
    raw: '• ESO Store and Account System for maintenance – August 12, 10:00AM EDT (14:00 UTC) – 12:00PM EDT (16:00 UTC)',
    result: {
      rawDate: 'August 12, 10:00AM EDT (14:00 UTC) – 12:00PM EDT (16:00 UTC)',
      slug: [
        'service_store_eso',
        'service_system_account',
      ],
      status: 'planned',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(8, 12).get('years'))
          .set('months', getDateWithDayNumber(8, 12).get('months'))
          .set('date', getDateWithDayNumber(8, 12).get('date'))
          .set('hours', 14)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(8, 12).get('years'))
          .set('months', getDateWithDayNumber(8, 12).get('months'))
          .set('date', getDateWithDayNumber(8, 12).get('date'))
          .set('hours', 16)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
    },
  },
  {
    raw: 'We will be performing maintenance on the PTS on Monday at 10:00AM EDT (14:00 UTC). ',
    result: {
      rawDate: 'Monday at 10:00AM EDT (14:00 UTC). ',
      slug: [
        'server_pc_pts',
      ],
      status: 'planned',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayIndex(1).get('years'))
          .set('months', getDateWithDayIndex(1).get('months'))
          .set('date', getDateWithDayIndex(1).get('date'))
          .set('hours', 14)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
    },
  },
  {
    raw: 'The PTS is currently unavailable while we perform maintenance.',
    result: {
      rawDate: '',
      slug: [
        'server_pc_pts',
      ],
      status: 'down',
      dates: [],
    },
  },
  {
    raw: 'The maintenance is complete, and the PTS is now available.',
    result: {
      rawDate: '',
      slug: [
        'server_pc_pts',
      ],
      status: 'up',
      dates: [],
    },
  },
  {
    raw: 'Due to a hardware issue, the European PC/Mac megaserver will be taken offline for maintenance.',
    result: {
      rawDate: '',
      slug: [
        'server_pc_eu',
      ],
      status: 'issues',
      dates: [],
    },
  },
  {
    raw: 'Due to a hardware issue, the European PC/Mac megaserver is currently unavailable while we perform maintenance.',
    result: {
      rawDate: '',
      slug: [
        'server_pc_eu',
      ],
      status: 'down',
      dates: [],
    },
  },
  {
    raw: 'The hardware issue is resolved, and the European PC/Mac megaserver is now available. Thank you for your patience!',
    result: {
      rawDate: '',
      slug: [
        'server_pc_eu',
      ],
      status: 'up',
      dates: [],
    },
  },
  {
    raw: 'Due to a hardware issue, the European PlayStation® megaserver will be taken offline for maintenance at 3:00PM EDT / 19:00 UTC.',
    result: {
      rawDate: '3:00PM EDT / 19:00 UTC.',
      slug: [
        'server_ps_eu',
      ],
      status: 'issues',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithHours(19, 0).get('years'))
          .set('months', getDateWithHours(19, 0).get('months'))
          .set('date', getDateWithHours(19, 0).get('date'))
          .set('hours', 19)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      ],
    },
  },
  {
    raw: 'Due to a hardware issue, the European PlayStation® megaserver is currently unavailable while we perform maintenance.',
    result: {
      rawDate: '',
      slug: [
        'server_ps_eu',
      ],
      status: 'down',
      dates: [],
    },
  },
  {
    raw: 'The hardware issue is resolved, and the European PlayStation® megaserver is now available. Thank you for your patience!',
    result: {
      rawDate: '',
      slug: [
        'server_ps_eu',
      ],
      status: 'up',
      dates: [],
    },
  },
  {
    raw: 'In response to the ongoing issue, the North American and European PC/Mac megaservers will be taken offline for maintenance.',
    result: {
      rawDate: '',
      slug: [
        'server_pc_na',
        'server_pc_eu',
      ],
      status: 'issues',
      dates: [],
    },
  },
  {
    raw: 'In response to the ongoing issue, the North American and European PC/Mac megaservers are currently unavailable while we perform maintenance.',
    result: {
      rawDate: '',
      slug: [
        'server_pc_na',
        'server_pc_eu',
      ],
      status: 'down',
      dates: [],
    },
  },
  {
    raw: 'The issue is resolved, and the North American and European PC/Mac megaservers are now available. Thank you for your patience!',
    result: {
      rawDate: '',
      slug: [
        'server_pc_na',
        'server_pc_eu',
      ],
      status: 'up',
      dates: [],
    },
  },
  {
    raw: 'The connection issues for the North American Xbox megaserver have been resolved at this time. If you continue to experience difficulties at login, please restart your client. Thank you for your patience!',
    result: {
      rawDate: '',
      slug: [
        'server_xbox_na',
      ],
      status: 'up',
      dates: [],
    },
  },
  {
    raw: '• [COMPLETE] PC/Mac: NA megaserver for patch maintenance – September 7, 4:00AM EDT (8:00 UTC) – 10:00AM EDT (14:00 UTC)',
    result: {
      rawDate: 'September 7, 4:00AM EDT (8:00 UTC) – 10:00AM EDT (14:00 UTC)',
      slug: [
        'server_pc_na',
      ],
      status: 'up',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(9, 7).get('years'))
          .set('months', getDateWithDayNumber(9, 7).get('months'))
          .set('date', getDateWithDayNumber(9, 7).get('date'))
          .set('hours', 8)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(9, 7).get('years'))
          .set('months', getDateWithDayNumber(9, 7).get('months'))
          .set('date', getDateWithDayNumber(9, 7).get('date'))
          .set('hours', 14)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
      ],
    },
  },
  {
    raw: '• [COMPLETE] PC/Mac: EU megaserver for patch maintenance – September 7, 4:00AM EDT (8:00 UTC) – 12:00PM EDT (16:00 UTC)',
    result: {
      rawDate: 'September 7, 4:00AM EDT (8:00 UTC) – 12:00PM EDT (16:00 UTC)',
      slug: [
        'server_pc_eu',
      ],
      status: 'up',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(9, 7).get('years'))
          .set('months', getDateWithDayNumber(9, 7).get('months'))
          .set('date', getDateWithDayNumber(9, 7).get('date'))
          .set('hours', 8)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(9, 7).get('years'))
          .set('months', getDateWithDayNumber(9, 7).get('months'))
          .set('date', getDateWithDayNumber(9, 7).get('date'))
          .set('hours', 16)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
      ],
    },
  },
  {
    raw: '• [COMPLETE] PC/Mac: EU megaserver for maintenance – September 14, 3:00AM EDT (7:00 UTC) – 10:00AM EDT (14:00 UTC)',
    result: {
      rawDate: 'September 14, 3:00AM EDT (7:00 UTC) – 10:00AM EDT (14:00 UTC)',
      slug: [
        'server_pc_eu',
      ],
      status: 'up',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(9, 14).get('years'))
          .set('months', getDateWithDayNumber(9, 14).get('months'))
          .set('date', getDateWithDayNumber(9, 14).get('date'))
          .set('hours', 7)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(9, 14).get('years'))
          .set('months', getDateWithDayNumber(9, 14).get('months'))
          .set('date', getDateWithDayNumber(9, 14).get('date'))
          .set('hours', 14)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
      ],
    },
  },
  {
    raw: '• PC/Mac: EU megaserver for maintenance – September 14, 3:00AM EDT (7:00 UTC) – 10:00AM EDT (14:00 UTC)',
    result: {
      rawDate: 'September 14, 3:00AM EDT (7:00 UTC) – 10:00AM EDT (14:00 UTC)',
      slug: [
        'server_pc_eu',
      ],
      status: 'planned',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(9, 14).get('years'))
          .set('months', getDateWithDayNumber(9, 14).get('months'))
          .set('date', getDateWithDayNumber(9, 14).get('date'))
          .set('hours', 7)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(9, 14).get('years'))
          .set('months', getDateWithDayNumber(9, 14).get('months'))
          .set('date', getDateWithDayNumber(9, 14).get('date'))
          .set('hours', 14)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
      ],
    },
  },
  {
    raw: '• [IN PROGRESS] PC/Mac: EU megaserver for maintenance – September 14, 3:00AM EDT (7:00 UTC) – 10:00AM EDT (14:00 UTC)',
    result: {
      rawDate: 'September 14, 3:00AM EDT (7:00 UTC) – 10:00AM EDT (14:00 UTC)',
      slug: [
        'server_pc_eu',
      ],
      status: 'down',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(9, 14).get('years'))
          .set('months', getDateWithDayNumber(9, 14).get('months'))
          .set('date', getDateWithDayNumber(9, 14).get('date'))
          .set('hours', 7)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(9, 14).get('years'))
          .set('months', getDateWithDayNumber(9, 14).get('months'))
          .set('date', getDateWithDayNumber(9, 14).get('date'))
          .set('hours', 14)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
      ],
    },
  },
  {
    raw: 'The Xbox Live™ service interruption has been resolved. Thank you for your patience!',
    result: {
      rawDate: '',
      slug: [
        'server_xbox_na',
        'server_xbox_eu',
      ],
      status: 'up',
      dates: [],
    },
  },
  {
    raw: 'The maintenance is complete, the PTS is now back online, and patch 7.2.0 including the Deadlands DLC is available. You can find the latest patch notes here: <a href=\\"https://forums.elderscrollsonline.com/en/discussion/586882/\\" rel=\\"nofollow\\">https://forums.elderscrollsonline.com/en/discussion/586882/</a>',
    result: {
      rawDate: '',
      slug: [
        'server_pc_pts',
      ],
      status: 'up',
      dates: [],
    },
  },
  {
    raw: 'The PTS is now offline for maintenance, and is currently unavailable.',
    result: {
      rawDate: '',
      slug: [
        'server_pc_pts',
      ],
      status: 'down',
      dates: [],
    },
  },
  {
    raw: 'The maintenance is complete, and the PTS is now back online and available.',
    result: {
      rawDate: '',
      slug: [
        'server_pc_pts',
      ],
      status: 'up',
      dates: [],
    },
  },
  {
    raw: 'We are currently investigating issues some Steam users are having logging into the North American and European PC/Mac megaservers.',
    result: {
      rawDate: '',
      slug: [
        'server_pc_na',
        'server_pc_eu',
      ],
      status: 'issues',
      dates: [],
    },
  },
  {
    raw: 'The issues related to Steam players logging in to the North American and European PC/Mac megaservers have been resolved at this time. If you continue to experience difficulties at login, please restart your client. Thank you for your patience!',
    result: {
      rawDate: '',
      slug: [
        'server_pc_na',
        'server_pc_eu',
      ],
      status: 'up',
      dates: [],
    },
  },
  {
    raw: 'The issue is resolved, and the North American PC/Mac megaserver is now available. Thank you for your patience!',
    result: {
      rawDate: '',
      slug: [
        'server_pc_na',
      ],
      status: 'up',
      dates: [],
    },
  },
  {
    raw: 'We are currently investigating issues some players are having logging into the megaservers. We will update as new information becomes available.',
    result: {
      rawDate: '',
      slug: [
        'server_pc_na',
        'server_pc_eu',
        'server_xbox_na',
        'server_xbox_eu',
        'server_ps_na',
        'server_ps_eu',
      ],
      status: 'issues',
      dates: [],
    },
  },
  {
    raw: 'In response to the ongoing issue, the European PC/Mac megaserver is currently unavailable while we perform maintenance.',
    result: {
      rawDate: '',
      slug: [
        'server_pc_eu',
      ],
      status: 'down',
      dates: [],
    },
  },
  {
    raw: 'The ESO store and account system are currently unavailable while we perform maintenance.',
    result: {
      rawDate: '',
      slug: [
        'service_store_eso',
        'service_system_account',
      ],
      status: 'down',
      dates: [],
    },
  },
  {
    raw: 'The issues related to logging in to the megaservers have been resolved at this time. If you continue to experience difficulties at login, please restart your client. Thank you for your patience!',
    result: {
      rawDate: '',
      slug: [
        'server_pc_na',
        'server_pc_eu',
        'server_xbox_na',
        'server_xbox_eu',
        'server_ps_na',
        'server_ps_eu',
      ],
      status: 'up',
      dates: [],
    },
  },
  {
    raw: 'The ESO store and account system are currently available.',
    result: {
      rawDate: '',
      slug: [
        'service_store_eso',
        'service_system_account',
      ],
      status: 'up',
      dates: [],
    },
  },
  {
    raw: '• ESO Website for maintenance – December 8, 7:00AM EST (12:00 UTC) - 3:00PM EST (20:00 UTC) ',
    result: {
      rawDate: 'December 8, 7:00AM EST (12:00 UTC) - 3:00PM EST (20:00 UTC) ',
      slug: [
        'service_web_site',
      ],
      status: 'planned',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(12, 8).get('years'))
          .set('months', getDateWithDayNumber(12, 8).get('months'))
          .set('date', getDateWithDayNumber(12, 8).get('date'))
          .set('hours', 12)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(12, 8).get('years'))
          .set('months', getDateWithDayNumber(12, 8).get('months'))
          .set('date', getDateWithDayNumber(12, 8).get('date'))
          .set('hours', 20)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
      ],
    },
  },
  {
    raw: '• [IN PROGRESS] ESO Website for maintenance – December 8, 7:00AM EST (12:00 UTC) - 3:00PM EST (20:00 UTC)',
    result: {
      rawDate: 'December 8, 7:00AM EST (12:00 UTC) - 3:00PM EST (20:00 UTC)',
      slug: [
        'service_web_site',
      ],
      status: 'down',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(12, 8).get('years'))
          .set('months', getDateWithDayNumber(12, 8).get('months'))
          .set('date', getDateWithDayNumber(12, 8).get('date'))
          .set('hours', 12)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(12, 8).get('years'))
          .set('months', getDateWithDayNumber(12, 8).get('months'))
          .set('date', getDateWithDayNumber(12, 8).get('date'))
          .set('hours', 20)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
      ],
    },
  },
  {
    raw: '• [EXTENDED] ESO Website for maintenance – December 8, 7:00AM EST (12:00 UTC) - 6:00PM EST (23:00 UTC)',
    result: {
      rawDate: 'December 8, 7:00AM EST (12:00 UTC) - 6:00PM EST (23:00 UTC)',
      slug: [
        'service_web_site',
      ],
      status: 'down',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(12, 8).get('years'))
          .set('months', getDateWithDayNumber(12, 8).get('months'))
          .set('date', getDateWithDayNumber(12, 8).get('date'))
          .set('hours', 12)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(12, 8).get('years'))
          .set('months', getDateWithDayNumber(12, 8).get('months'))
          .set('date', getDateWithDayNumber(12, 8).get('date'))
          .set('hours', 23)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
      ],
    },
  },
  {
    raw: '• [COMPLETE] ESO Website for maintenance – December 8, 7:00AM EST (12:00 UTC) - 3:00PM EST (20:00 UTC) ',
    result: {
      rawDate: 'December 8, 7:00AM EST (12:00 UTC) - 3:00PM EST (20:00 UTC) ',
      slug: [
        'service_web_site',
      ],
      status: 'up',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(12, 8).get('years'))
          .set('months', getDateWithDayNumber(12, 8).get('months'))
          .set('date', getDateWithDayNumber(12, 8).get('date'))
          .set('hours', 12)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(12, 8).get('years'))
          .set('months', getDateWithDayNumber(12, 8).get('months'))
          .set('date', getDateWithDayNumber(12, 8).get('date'))
          .set('hours', 20)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
      ],
    },
  },
  {
    raw: 'We are currently investigating issues with the ESO Store and Account System. We will update as new information becomes available.',
    result: {
      rawDate: '',
      slug: [
        'service_store_eso',
        'service_system_account',
      ],
      status: 'issues',
      dates: [],
    },
  },
  {
    raw: 'In response to the ongoing issue, the ESO Store and Account System are currently unavailable while we perform maintenance.',
    result: {
      rawDate: '',
      slug: [
        'service_store_eso',
        'service_system_account',
      ],
      status: 'down',
      dates: [],
    },
  },
  {
    raw: 'The issue is resolved, and the ESO Store and Account System are now available. Thank you for your patience!',
    result: {
      rawDate: '',
      slug: [
        'service_store_eso',
        'service_system_account',
      ],
      status: 'up',
      dates: [],
    },
  },
  {
    raw: '• [EXTENDED] PC/Mac: NA and EU megaservers for maintenance – January 10, 4:00AM EST (9:00 UTC) – 10:00AM EST (15:00 UTC)',
    result: {
      rawDate: 'January 10, 4:00AM EST (9:00 UTC) – 10:00AM EST (15:00 UTC)',
      slug: [
        'server_pc_na',
        'server_pc_eu',
      ],
      status: 'down',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(1, 10).get('years'))
          .set('months', getDateWithDayNumber(1, 10).get('months'))
          .set('date', getDateWithDayNumber(1, 10).get('date'))
          .set('hours', 9)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(1, 10).get('years'))
          .set('months', getDateWithDayNumber(1, 10).get('months'))
          .set('date', getDateWithDayNumber(1, 10).get('date'))
          .set('hours', 15)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
      ],
    },
  },
  {
    raw: '• PlayStation®: NA megaserver for maintenance – January 19, 2:00AM EST (7:00 UTC) – 12:00PM EST (17:00 UTC)',
    result: {
      rawDate: 'January 19, 2:00AM EST (7:00 UTC) – 12:00PM EST (17:00 UTC)',
      slug: [
        'server_ps_na',
      ],
      status: 'planned',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(1, 19).get('years'))
          .set('months', getDateWithDayNumber(1, 19).get('months'))
          .set('date', getDateWithDayNumber(1, 19).get('date'))
          .set('hours', 7)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(1, 19).get('years'))
          .set('months', getDateWithDayNumber(1, 19).get('months'))
          .set('date', getDateWithDayNumber(1, 19).get('date'))
          .set('hours', 17)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
      ],
    },
  },
  {
    raw: '• PlayStation®: EU megaserver for maintenance – January 19, 6:00AM EST (11:00 UTC) – 10:00AM EST (15:00 UTC)',
    result: {
      rawDate: 'January 19, 6:00AM EST (11:00 UTC) – 10:00AM EST (15:00 UTC)',
      slug: [
        'server_ps_eu',
      ],
      status: 'planned',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(1, 19).get('years'))
          .set('months', getDateWithDayNumber(1, 19).get('months'))
          .set('date', getDateWithDayNumber(1, 19).get('date'))
          .set('hours', 11)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(1, 19).get('years'))
          .set('months', getDateWithDayNumber(1, 19).get('months'))
          .set('date', getDateWithDayNumber(1, 19).get('date'))
          .set('hours', 15)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
      ],
    },
  },
  {
    raw: '• [IN PROGRESS] PlayStation®: NA megaserver for maintenance – January 19, 2:00AM EST (7:00 UTC) – 12:00PM EST (17:00 UTC)',
    result: {
      rawDate: 'January 19, 2:00AM EST (7:00 UTC) – 12:00PM EST (17:00 UTC)',
      slug: [
        'server_ps_na',
      ],
      status: 'down',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(1, 19).get('years'))
          .set('months', getDateWithDayNumber(1, 19).get('months'))
          .set('date', getDateWithDayNumber(1, 19).get('date'))
          .set('hours', 7)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(1, 19).get('years'))
          .set('months', getDateWithDayNumber(1, 19).get('months'))
          .set('date', getDateWithDayNumber(1, 19).get('date'))
          .set('hours', 17)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
      ],
    },
  },
  {
    raw: '• [IN PROGRESS] PlayStation®: EU megaserver for maintenance – January 19, 6:00AM EST (11:00 UTC) – 10:00AM EST (15:00 UTC)',
    result: {
      rawDate: 'January 19, 6:00AM EST (11:00 UTC) – 10:00AM EST (15:00 UTC)',
      slug: [
        'server_ps_eu',
      ],
      status: 'down',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(1, 19).get('years'))
          .set('months', getDateWithDayNumber(1, 19).get('months'))
          .set('date', getDateWithDayNumber(1, 19).get('date'))
          .set('hours', 11)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(1, 19).get('years'))
          .set('months', getDateWithDayNumber(1, 19).get('months'))
          .set('date', getDateWithDayNumber(1, 19).get('date'))
          .set('hours', 15)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
      ],
    },
  },
  {
    raw: '• [COMPLETE] PlayStation®: EU megaserver for maintenance – January 19, 6:00AM EST (11:00 UTC) – 10:00AM EST (15:00 UTC)',
    result: {
      rawDate: 'January 19, 6:00AM EST (11:00 UTC) – 10:00AM EST (15:00 UTC)',
      slug: [
        'server_ps_eu',
      ],
      status: 'up',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(1, 19).get('years'))
          .set('months', getDateWithDayNumber(1, 19).get('months'))
          .set('date', getDateWithDayNumber(1, 19).get('date'))
          .set('hours', 11)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(1, 19).get('years'))
          .set('months', getDateWithDayNumber(1, 19).get('months'))
          .set('date', getDateWithDayNumber(1, 19).get('date'))
          .set('hours', 15)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
      ],
    },
  },
  {
    raw: '• [COMPLETE] PlayStation®: NA megaserver for maintenance – January 19, 2:00AM EST (7:00 UTC) – 12:00PM EST (17:00 UTC)',
    result: {
      rawDate: 'January 19, 2:00AM EST (7:00 UTC) – 12:00PM EST (17:00 UTC)',
      slug: [
        'server_ps_na',
      ],
      status: 'up',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(1, 19).get('years'))
          .set('months', getDateWithDayNumber(1, 19).get('months'))
          .set('date', getDateWithDayNumber(1, 19).get('date'))
          .set('hours', 7)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(1, 19).get('years'))
          .set('months', getDateWithDayNumber(1, 19).get('months'))
          .set('date', getDateWithDayNumber(1, 19).get('date'))
          .set('hours', 17)
          .set('minutes', 0)
          .set('seconds', 0)
          .set('milliseconds', 0),
      ],
    },
  },
  {
    raw: '• ESO Store for maintenance – January 27, 2:30PM EST (19:30 UTC) – 3:30PM EST (20:30 UTC)',
    result: {
      rawDate: 'January 27, 2:30PM EST (19:30 UTC) – 3:30PM EST (20:30 UTC)',
      slug: [
        'service_store_eso',
      ],
      status: 'planned',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(1, 27).get('years'))
          .set('months', getDateWithDayNumber(1, 27).get('months'))
          .set('date', getDateWithDayNumber(1, 27).get('date'))
          .set('hours', 19)
          .set('minutes', 30)
          .set('seconds', 0)
          .set('milliseconds', 0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(1, 27).get('years'))
          .set('months', getDateWithDayNumber(1, 27).get('months'))
          .set('date', getDateWithDayNumber(1, 27).get('date'))
          .set('hours', 20)
          .set('minutes', 30)
          .set('seconds', 0)
          .set('milliseconds', 0),
      ],
    },
  },
  {
    raw: '• [IN PROGRESS] ESO Store for maintenance – January 27, 2:30PM EST (19:30 UTC) – 3:30PM EST (20:30 UTC)',
    result: {
      rawDate: 'January 27, 2:30PM EST (19:30 UTC) – 3:30PM EST (20:30 UTC)',
      slug: [
        'service_store_eso',
      ],
      status: 'down',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(1, 27).get('years'))
          .set('months', getDateWithDayNumber(1, 27).get('months'))
          .set('date', getDateWithDayNumber(1, 27).get('date'))
          .set('hours', 19)
          .set('minutes', 30)
          .set('seconds', 0)
          .set('milliseconds', 0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(1, 27).get('years'))
          .set('months', getDateWithDayNumber(1, 27).get('months'))
          .set('date', getDateWithDayNumber(1, 27).get('date'))
          .set('hours', 20)
          .set('minutes', 30)
          .set('seconds', 0)
          .set('milliseconds', 0),
      ],
    },
  },
  {
    raw: '• [COMPLETE] ESO Store for maintenance – January 27, 2:30PM EST (19:30 UTC) – 3:30PM EST (20:30 UTC)',
    result: {
      rawDate: 'January 27, 2:30PM EST (19:30 UTC) – 3:30PM EST (20:30 UTC)',
      slug: [
        'service_store_eso',
      ],
      status: 'up',
      dates: [
        moment()
          .utc()
          .set('years', getDateWithDayNumber(1, 27).get('years'))
          .set('months', getDateWithDayNumber(1, 27).get('months'))
          .set('date', getDateWithDayNumber(1, 27).get('date'))
          .set('hours', 19)
          .set('minutes', 30)
          .set('seconds', 0)
          .set('milliseconds', 0),
        moment()
          .utc()
          .set('years', getDateWithDayNumber(1, 27).get('years'))
          .set('months', getDateWithDayNumber(1, 27).get('months'))
          .set('date', getDateWithDayNumber(1, 27).get('date'))
          .set('hours', 20)
          .set('minutes', 30)
          .set('seconds', 0)
          .set('milliseconds', 0),
      ],
    },
  },
];

/**
 * Pattern of Forum Message slug
 *
 * @type {slug: Slug, result: {type: Type, support: Support, zone: Zone}}[]
 */
export const slugPattern: {slug: Slug, result: {type: Type, support: Support, zone: Zone}}[] = [
  {
    slug: 'server_xbox_na',
    result: {
      type: 'server',
      support: 'xbox',
      zone: 'na',
    },
  },
  {
    slug: 'server_xbox_eu',
    result: {
      type: 'server',
      support: 'xbox',
      zone: 'eu',
    },
  },
  {
    slug: 'server_ps_na',
    result: {
      type: 'server',
      support: 'ps',
      zone: 'na',
    },
  },
  {
    slug: 'server_ps_eu',
    result: {
      type: 'server',
      support: 'ps',
      zone: 'eu',
    },
  },
  {
    slug: 'server_pc_na',
    result: {
      type: 'server',
      support: 'pc',
      zone: 'na',
    },
  },
  {
    slug: 'server_pc_eu',
    result: {
      type: 'server',
      support: 'pc',
      zone: 'eu',
    },
  },
  {
    slug: 'server_pc_pts',
    result: {
      type: 'server',
      support: 'pc',
      zone: 'pts',
    },
  },
  {
    slug: 'service_web_site',
    result: {
      type: 'service',
      support: 'web',
      zone: 'site',
    },
  },
  {
    slug: 'service_web_forum',
    result: {
      type: 'service',
      support: 'web',
      zone: 'forum',
    },
  },
  {
    slug: 'service_store_crown',
    result: {
      type: 'service',
      support: 'store',
      zone: 'crown',
    },
  },
  {
    slug: 'service_store_eso',
    result: {
      type: 'service',
      support: 'store',
      zone: 'eso',
    },
  },
  {
    slug: 'service_system_account',
    result: {
      type: 'service',
      support: 'system',
      zone: 'account',
    },
  },
];
