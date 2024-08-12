import { Moment } from 'moment';
import * as moment from 'moment';
import { Support, Slug, Status, Type, Zone } from '@eso-status/types';

/**
 * Class with methode for ForumMessage element
 */
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
    const slugs: Slug[] = [];

    if (
      ForumMessageElement.isType('server', rawData) &&
      ForumMessageElement.isSupport('pc', rawData) &&
      ForumMessageElement.isZone('na', rawData)
    ) {
      slugs.push('server_pc_na');
    }

    if (
      ForumMessageElement.isType('server', rawData) &&
      ForumMessageElement.isSupport('pc', rawData) &&
      ForumMessageElement.isZone('eu', rawData)
    ) {
      slugs.push('server_pc_eu');
    }

    if (
      ForumMessageElement.isType('server', rawData) &&
      ForumMessageElement.isSupport('xbox', rawData) &&
      ForumMessageElement.isZone('na', rawData)
    ) {
      slugs.push('server_xbox_na');
    }

    if (
      ForumMessageElement.isType('server', rawData) &&
      ForumMessageElement.isSupport('xbox', rawData) &&
      ForumMessageElement.isZone('eu', rawData)
    ) {
      slugs.push('server_xbox_eu');
    }

    if (
      ForumMessageElement.isType('server', rawData) &&
      ForumMessageElement.isSupport('ps', rawData) &&
      ForumMessageElement.isZone('na', rawData)
    ) {
      slugs.push('server_ps_na');
    }

    if (
      ForumMessageElement.isType('server', rawData) &&
      ForumMessageElement.isSupport('ps', rawData) &&
      ForumMessageElement.isZone('eu', rawData)
    ) {
      slugs.push('server_ps_eu');
    }

    if (
      ForumMessageElement.isType('server', rawData) &&
      ForumMessageElement.isSupport('pc', rawData) &&
      ForumMessageElement.isZone('pts', rawData)
    ) {
      slugs.push('server_pc_pts');
    }

    if (
      ForumMessageElement.isType('service', rawData) &&
      ForumMessageElement.isSupport('web', rawData) &&
      ForumMessageElement.isZone('site', rawData)
    ) {
      slugs.push('service_web_site');
    }

    if (
      ForumMessageElement.isType('service', rawData) &&
      ForumMessageElement.isSupport('web', rawData) &&
      ForumMessageElement.isZone('forum', rawData)
    ) {
      slugs.push('service_web_forum');
    }

    if (
      ForumMessageElement.isType('service', rawData) &&
      ForumMessageElement.isSupport('store', rawData) &&
      ForumMessageElement.isZone('crown', rawData)
    ) {
      slugs.push('service_store_crown');
    }

    if (
      ForumMessageElement.isType('service', rawData) &&
      ForumMessageElement.isSupport('store', rawData) &&
      ForumMessageElement.isZone('eso', rawData)
    ) {
      slugs.push('service_store_eso');
    }

    if (
      ForumMessageElement.isType('service', rawData) &&
      ForumMessageElement.isSupport('system', rawData) &&
      ForumMessageElement.isZone('account', rawData)
    ) {
      slugs.push('service_system_account');
    }

    return slugs;
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
    if (type === 'service') {
      return (
        rawData.includes('ESO Store') ||
        rawData.includes('Account System') ||
        rawData.includes('account system') ||
        rawData.includes('ESO Website')
      );
    }

    return false;
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
    if (support === 'system') {
      // OK
      return (
        rawData.includes('Account System') || rawData.includes('account system')
      );
    }

    return false;
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
    if (zone === 'account') {
      // OK
      return (
        rawData.includes('Account System') || rawData.includes('account system')
      );
    }

    return false;
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
    const list: Moment[] = [];

    if (rawDate === '') {
      return list;
    }

    if (rawDate.includes(' at ') && !rawDate.includes('EDT / ')) {
      const dateTime: RegExpExecArray | null =
        /([a-zA-Z]{6,9}) at [0-9]{1,2}:[0-9]{1,2}[a-zA-Z]{1,2} EDT \(([0-9]{1,2}):([0-9]{1,2}) UTC\)/.exec(
          rawDate,
        );
      const isoWeekDay: number = Number(
        moment()
          .day(dateTime && dateTime.length >= 1 ? String(dateTime[1]) : '')
          .format('d'),
      );

      // getDateWithDayIndex
      list.push(
        moment()
          .utc()
          .set(
            'years',
            moment().utc().isoWeekday() > isoWeekDay
              ? moment().utc().isoWeekday(isoWeekDay).add(7, 'day').get('years')
              : moment().utc().isoWeekday(isoWeekDay).get('years'),
          )
          .set(
            'months',
            moment().utc().isoWeekday() > isoWeekDay
              ? moment()
                  .utc()
                  .isoWeekday(isoWeekDay)
                  .add(7, 'day')
                  .get('months')
              : moment().utc().isoWeekday(isoWeekDay).get('months'),
          )
          .set(
            'date',
            moment().utc().isoWeekday() > isoWeekDay
              ? moment().utc().isoWeekday(isoWeekDay).add(7, 'day').get('date')
              : moment().utc().isoWeekday(isoWeekDay).get('date'),
          )
          .set(
            'hours',
            dateTime && dateTime.length >= 1 ? Number(dateTime[2]) : 0,
          )
          .set(
            'minutes',
            dateTime && dateTime.length >= 1 ? Number(dateTime[3]) : 0,
          )
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      );
    } else if (rawDate.includes('EDT / ') || rawDate.includes('EST / ')) {
      const dateTime: RegExpExecArray | null =
        /E[D|S]T \/ ([0-9]{1,2}):([0-9]{1,2}) UTC/.exec(rawDate);

      // getDateWithHours
      list.push(
        moment()
          .utc()
          .set(
            'years',
            Number(
              moment().utc().get('hours') >
                (dateTime && dateTime.length >= 1 ? Number(dateTime[1]) : 0) ||
                (moment().utc().get('hours') ===
                  (dateTime && dateTime.length >= 1
                    ? Number(dateTime[1])
                    : 0) &&
                  moment().utc().get('minutes') >
                    (dateTime && dateTime.length >= 1
                      ? Number(dateTime[2])
                      : 0))
                ? moment().utc().add(1, 'day').get('years')
                : moment().utc().get('years'),
            ),
          )
          .set(
            'months',
            Number(
              moment().utc().get('hours') >
                (dateTime && dateTime.length >= 1 ? Number(dateTime[1]) : 0) ||
                (moment().utc().get('hours') ===
                  (dateTime && dateTime.length >= 1
                    ? Number(dateTime[1])
                    : 0) &&
                  moment().utc().get('minutes') >
                    (dateTime && dateTime.length >= 1
                      ? Number(dateTime[2])
                      : 0))
                ? moment().utc().add(1, 'day').get('months')
                : moment().utc().get('months'),
            ),
          )
          .set(
            'date',
            Number(
              moment().utc().get('hours') >
                (dateTime && dateTime.length >= 1 ? Number(dateTime[1]) : 0) ||
                (moment().utc().get('hours') ===
                  (dateTime && dateTime.length >= 1
                    ? Number(dateTime[1])
                    : 0) &&
                  moment().utc().get('minutes') >
                    (dateTime && dateTime.length >= 1
                      ? Number(dateTime[2])
                      : 0))
                ? moment().utc().add(1, 'day').get('date')
                : moment().utc().get('date'),
            ),
          )
          .set(
            'hours',
            dateTime && dateTime.length >= 1 ? Number(dateTime[1]) : 0,
          )
          .set(
            'minutes',
            dateTime && dateTime.length >= 1 ? Number(dateTime[2]) : 0,
          )
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      );
    } else {
      let dateTime: RegExpExecArray | null =
        /([a-zA-Z]{3,9}) ([0-9]{1,2})[ ]?, [0-9]{1,2}:[0-9]{1,2}[a-zA-Z]{1,2} E[D|S]T \(([0-9]{1,2}):([0-9]{1,2}) UTC\) [–|-] [0-9]{1,2}:[0-9]{1,2}[a-zA-Z]{1,2} E[D|S]T \(([0-9]{1,2}):([0-9]{1,2}) UTC\)/.exec(
          rawDate,
        );
      if (rawDate.includes('UTC (')) {
        dateTime =
          /([a-zA-Z]{3,9}) ([0-9]{1,2})[ ]?, ([0-9]{1,2}):([0-9]{1,2}) UTC \([0-9]{1,2}:[0-9]{1,2}[a-zA-Z]{1,2} EDT\) [–|-] ([0-9]{1,2}):([0-9]{1,2}) UTC \([0-9]{1,2}:[0-9]{1,2}[a-zA-Z]{1,2} EDT\)/.exec(
            rawDate,
          );
      }
      const month: number =
        Number(
          moment()
            .month(dateTime && dateTime.length >= 1 ? String(dateTime[1]) : '')
            .format('M'),
        ) - 1;
      const day: number =
        dateTime && dateTime.length >= 1 ? Number(dateTime[2]) : 0;

      // getDateWithDayNumber
      list.push(
        moment()
          .utc()
          .set(
            'years',
            month < moment().utc().get('months') ||
              day < moment().utc().get('date')
              ? moment().add(1, 'year').get('years')
              : moment().get('years'),
          )
          .set('months', month)
          .set('date', day)
          .set(
            'hours',
            dateTime && dateTime.length >= 1 ? Number(dateTime[3]) : 0,
          )
          .set(
            'minutes',
            dateTime && dateTime.length >= 1 ? Number(dateTime[4]) : 0,
          )
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      );
      list.push(
        moment()
          .utc()
          .set(
            'years',
            month < moment().utc().get('months') ||
              day < moment().utc().get('date')
              ? moment().add(1, 'year').get('years')
              : moment().get('years'),
          )
          .set('months', month)
          .set('date', day)
          .set(
            'hours',
            dateTime && dateTime.length >= 1 ? Number(dateTime[5]) : 0,
          )
          .set(
            'minutes',
            dateTime && dateTime.length >= 1 ? Number(dateTime[6]) : 0,
          )
          .set('seconds', 0)
          .set('milliseconds', 0)
          .utcOffset(0),
      );
    }

    return list;
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
    return <Type>slug.split('_')[0];
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
    return <Support>slug.split('_')[1];
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
    return <Zone>slug.split('_')[2];
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
