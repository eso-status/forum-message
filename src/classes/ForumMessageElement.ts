import moment, { Moment } from 'moment';
import { Support, Slug, Status, Type, Zone } from '@eso-status/types';

const orderedSlugs: Slug[] = [
  'server_pc_na',
  'server_pc_eu',
  'server_xbox_na',
  'server_xbox_eu',
  'server_ps_na',
  'server_ps_eu',
  'server_pc_pts',
  'service_web_site',
  'service_web_forum',
  'service_store_crown',
  'service_store_eso',
  'service_system_account',
];

const time12h: string = String.raw`\d{1,2}:\d{1,2}[a-zA-Z]{1,2}`;
const monthAndDay: string = String.raw`([a-zA-Z]{3,9}) (\d{1,2}) ?, `;
const utcTime: string = String.raw`(\d{1,2}):(\d{1,2}) UTC`;
const dash = '[–|-]';
const edtFirstRange = new RegExp(
  `${monthAndDay}${time12h} E[D|S]T \\(${utcTime}\\) ${dash} ${time12h} E[D|S]T \\(${utcTime}\\)`,
);
const utcFirstRange = new RegExp(
  `${monthAndDay}${utcTime} \\(${time12h} EDT\\) ${dash} ${utcTime} \\(${time12h} EDT\\)`,
);

/**
 * Class with methode for ForumMessage element
 */
// eslint-disable-next-line @typescript-eslint/no-extraneous-class -- the published 1.x API exposes static methods, called as is by @eso-status/api 1.x
export default class ForumMessageElement {
  /**
   * Methode used to get slugs list of raw content
   *
   * @public
   * @static
   *
   * @param rawData string Raw data
   * @return Slug[] List of slug
   */
  public static getSlug(rawData: string): Slug[] {
    return orderedSlugs.filter(
      (slug: Slug): boolean =>
        ForumMessageElement.isType(
          ForumMessageElement.getType(slug),
          rawData,
        ) &&
        ForumMessageElement.isSupport(
          ForumMessageElement.getSupport(slug),
          rawData,
        ) &&
        ForumMessageElement.isZone(ForumMessageElement.getZone(slug), rawData),
    );
  }

  /**
   * Methode used to determinate service type
   *
   * @public
   * @static
   *
   * @param type Type Type to check
   * @param rawData string Raw data
   * @return boolean Check result
   */
  public static isType(type: Type, rawData: string): boolean {
    if (type === 'server') {
      return (
        rawData.includes('megaserver') ||
        rawData.includes('NA megaservers') ||
        rawData.includes('EU megaservers') ||
        rawData.includes('the megaservers') ||
        rawData.includes('PTS') ||
        rawData.includes('PlayStation') ||
        rawData.includes('Xbox Live')
      );
    }
    return (
      rawData.includes('ESO Store') ||
      rawData.includes('Account System') ||
      rawData.includes('account system') ||
      rawData.includes('ESO Website')
    );
  }

  /**
   * Methode used to determinate service support
   *
   * @public
   * @static
   *
   * @param support Support Support to check
   * @param rawData string Raw data
   * @return boolean Check result
   */
  public static isSupport(support: Support, rawData: string): boolean {
    if (support === 'xbox') {
      // OK
      return (
        rawData.includes('Xbox') ||
        rawData.includes('· NA megaservers') ||
        rawData.includes('· EU megaservers') ||
        rawData.includes('the megaservers')
      );
    }
    if (support === 'ps') {
      // OK
      return (
        rawData.includes('PlayStation') ||
        rawData.includes('· NA megaservers') ||
        rawData.includes('· EU megaservers') ||
        rawData.includes('the megaservers')
      );
    }
    if (support === 'pc') {
      // OK
      return (
        rawData.includes('PC/Mac') ||
        rawData.includes('PTS') ||
        rawData.includes('· NA megaservers') ||
        rawData.includes('· EU megaservers') ||
        rawData.includes('the megaservers')
      );
    }
    if (support === 'web') {
      return rawData.includes('ESO Website');
    }
    if (support === 'store') {
      // OK
      return (
        rawData.includes('Crown Store') ||
        rawData.includes('ESO Store') ||
        rawData.includes('ESO store')
      );
    }
    return (
      rawData.includes('Account System') || rawData.includes('account system')
    );
  }

  /**
   * Methode used to determinate service zone
   *
   * @public
   * @static
   *
   * @param zone Zone Zone to check
   * @param rawData string Raw data
   * @return boolean Check result
   */
  public static isZone(zone: Zone, rawData: string): boolean {
    if (zone === 'na') {
      // OK
      return (
        rawData.includes('North American') ||
        rawData.includes('NA') ||
        rawData.includes('PlayStation™ Network') ||
        rawData.includes('Xbox Live') ||
        rawData.includes('the megaservers')
      );
    }
    if (zone === 'eu') {
      // OK
      return (
        rawData.includes('European') ||
        rawData.includes('EU') ||
        rawData.includes('PlayStation™ Network') ||
        rawData.includes('Xbox Live') ||
        rawData.includes('the megaservers')
      );
    }
    if (zone === 'pts') {
      // OK
      return rawData.includes('PTS');
    }
    if (zone === 'site') {
      return rawData.includes('ESO Website');
    }
    if (zone === 'forum') {
      return false;
    }
    if (zone === 'crown') {
      return false;
    }
    if (zone === 'eso') {
      // OK
      return rawData.includes('ESO Store') || rawData.includes('ESO store');
    }
    return (
      rawData.includes('Account System') || rawData.includes('account system')
    );
  }

  /**
   * Methode used to get dates of raw date
   *
   * @public
   * @static
   *
   * @param rawDate string Raw date
   * @return Moment[] Dates of raw data
   */
  public static getDate(rawDate: string): Moment[] {
    if (rawDate === '') {
      return [];
    }

    if (rawDate.includes(' at ') && !rawDate.includes('EDT / ')) {
      return [ForumMessageElement.getDateWithDayIndex(rawDate)];
    }

    if (rawDate.includes('EDT / ') || rawDate.includes('EST / ')) {
      return [ForumMessageElement.getDateWithHours(rawDate)];
    }

    return ForumMessageElement.getDateWithDayNumber(rawDate);
  }

  private static getDateWithDayIndex(rawDate: string): Moment {
    const dateTime: RegExpExecArray | null =
      /([a-zA-Z]{6,9}) at \d{1,2}:\d{1,2}[a-zA-Z]{1,2} EDT \((\d{1,2}):(\d{1,2}) UTC\)/.exec(
        rawDate,
      );
    const isoWeekDay = Number(
      moment()
        .day(dateTime && dateTime.length >= 1 ? dateTime[1] : '')
        .format('d'),
    );
    const day: Moment =
      moment().utc().isoWeekday() > isoWeekDay
        ? moment().utc().isoWeekday(isoWeekDay).add(7, 'day')
        : moment().utc().isoWeekday(isoWeekDay);

    return ForumMessageElement.buildUtcDate(
      day.get('months'),
      day.get('date'),
      ForumMessageElement.getMatchedNumber(dateTime, 2),
      ForumMessageElement.getMatchedNumber(dateTime, 3),
    );
  }

  private static getDateWithHours(rawDate: string): Moment {
    const dateTime: RegExpExecArray | null =
      /E[D|S]T \/ (\d{1,2}):(\d{1,2}) UTC/.exec(rawDate);
    const hours: number = ForumMessageElement.getMatchedNumber(dateTime, 1);
    const minutes: number = ForumMessageElement.getMatchedNumber(dateTime, 2);
    const isTomorrow: boolean =
      moment().utc().get('hours') > hours ||
      (moment().utc().get('hours') === hours &&
        moment().utc().get('minutes') > minutes);
    const day: Moment = isTomorrow
      ? moment().utc().add(1, 'day')
      : moment().utc();

    return ForumMessageElement.buildUtcDate(
      day.get('months'),
      day.get('date'),
      hours,
      minutes,
    );
  }

  private static getDateWithDayNumber(rawDate: string): Moment[] {
    const dateTime: RegExpExecArray | null = rawDate.includes('UTC (')
      ? utcFirstRange.exec(rawDate)
      : edtFirstRange.exec(rawDate);
    const month: number =
      Number(
        moment()
          .month(dateTime && dateTime.length >= 1 ? dateTime[1] : '')
          .format('M'),
      ) - 1;
    const day: number = ForumMessageElement.getMatchedNumber(dateTime, 2);

    return [
      ForumMessageElement.buildUtcDate(
        month,
        day,
        ForumMessageElement.getMatchedNumber(dateTime, 3),
        ForumMessageElement.getMatchedNumber(dateTime, 4),
      ),
      ForumMessageElement.buildUtcDate(
        month,
        day,
        ForumMessageElement.getMatchedNumber(dateTime, 5),
        ForumMessageElement.getMatchedNumber(dateTime, 6),
      ),
    ];
  }

  private static getMatchedNumber(
    dateTime: RegExpExecArray | null,
    index: number,
  ): number {
    return dateTime && dateTime.length >= 1 ? Number(dateTime[index]) : 0;
  }

  private static buildUtcDate(
    month: number,
    date: number,
    hours: number,
    minutes: number,
  ): Moment {
    return moment()
      .utc()
      .set('years', moment().get('years'))
      .set('months', month)
      .set('date', date)
      .set('hours', hours)
      .set('minutes', minutes)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0);
  }

  /**
   * Methode used to get type of slug
   *
   * @public
   * @static
   *
   * @param slug Slug Slug
   * @return Type Type of slug
   */
  public static getType(slug: Slug): Type {
    return slug.split('_')[0] as Type;
  }

  /**
   * Methode used to get support of slug
   *
   * @public
   * @static
   *
   * @param slug Slug Slug
   * @return Support Support of slug
   */
  public static getSupport(slug: Slug): Support {
    return slug.split('_')[1] as Support;
  }

  /**
   * Methode used to get zone of slug
   *
   * @public
   * @static
   *
   * @param slug Slug Slug
   * @return Zone Zone of slug
   */
  public static getZone(slug: Slug): Zone {
    return slug.split('_')[2] as Zone;
  }

  /**
   * Methode used to get status of raw data
   *
   * @public
   * @static
   *
   * @param rawData string Raw data
   * @return Status Status of raw data
   */
  public static getStatus(rawData: string): Status {
    if (
      rawData.includes('unavailable') ||
      rawData.includes('[IN PROGRESS]') ||
      rawData.includes('[EXTENDED]')
    ) {
      return 'down';
    }
    if (
      rawData.includes('[COMPLETE]') ||
      rawData.includes('is now available') ||
      rawData.includes('are now available') ||
      rawData.includes('maintenance is complete') ||
      rawData.includes('resolved at this time') ||
      rawData.includes('has been resolved') ||
      rawData.includes('currently available.')
    ) {
      return 'up';
    }
    if (
      rawData.includes('currently investigating issues') ||
      rawData.includes('service interruption') ||
      rawData.includes('In response to the ongoing issue') ||
      rawData.includes('Due to a hardware issue')
    ) {
      return 'issues';
    }
    if (rawData.includes('UTC')) {
      return 'planned';
    }
    return 'down';
  }

  /**
   * Methode used to get raw date of raw data
   *
   * @public
   * @static
   *
   * @param raw string Raw data
   * @return string Raw date
   */
  public static getRawDate(raw: string): string {
    if (raw.includes('maintenance – ')) {
      const split: string[] = raw.split('maintenance – ');

      if (split.length === 2) {
        return split[1];
      }
    }

    if (raw.includes('on the PTS on ')) {
      const split: string[] = raw.split('on the PTS on ');

      if (split.length === 2) {
        return split[1];
      }
    }

    if (raw.includes('for maintenance at')) {
      const split: string[] = raw.split('for maintenance at ');

      if (split.length === 2) {
        return split[1];
      }
    }

    return '';
  }
}
