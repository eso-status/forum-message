import { Moment } from 'moment';
import * as moment from 'moment';

/**
 * Class for identifying and formatting the date contained in an announcement
 */
export default class DateFormatter {
  /**
   * Raw date data contained in the announcement
   */
  public rawDate: string;

  /**
   * List of dates formatted correctly contained in the announcement
   */
  public dates: string[];

  /**
   * @param raw Raw data of the announcement
   */
  constructor(private readonly raw: string) {
    this.checkFormat();
  }

  /**
   * Method for retrieving the raw date and the list of dates present in the announcement based on its format
   * Case #1: The announcement contains a date with a start and end time (hour/minute)
   * Case #2: The announcement contains the name of the next maintenance day with a start time (hour/minute)
   * @private
   */
  private checkFormat(): void {
    let rawDate: string = this.getRawClassicDate();
    if (rawDate !== '') {
      this.rawDate = rawDate;
      this.dates = this.formatClassic();
    }
    rawDate = this.getRawSpecialDate();
    if (rawDate !== '') {
      this.rawDate = rawDate;
      this.dates = this.formatSpecial();
    }
  }

  /**
   * Method for retrieving the raw date in case #1
   * @private
   */
  private getRawClassicDate(): string {
    const split: string[] = this.raw.split(' – ');
    if (split.length > 2) {
      split.shift();
      return split.join(' – ');
    }
    return split.length === 2 ? split[1] : '';
  }

  /**
   * Method for retrieving the raw date in case #2
   * @private
   */
  private getRawSpecialDate(): string {
    const split: string[] = this.raw.split('on the PTS on ');
    return split.length === 2 ? split[1].split('.')[0] : '';
  }

  /**
   * Method for generating the list of correctly formatted dates for case #1
   * @private
   */
  private formatClassic(): string[] {
    return [
      DateFormatter.generateDate(
        moment().get('years'),
        moment().month(this.getRawClassicMouth()).get('months'),
        this.getRawClassicDay(),
        this.getRawHour(),
        this.getRawClassicMinute1(),
      ),
      DateFormatter.generateDate(
        moment().get('years'),
        moment().month(this.getRawClassicMouth()).get('months'),
        this.getRawClassicDay(),
        this.getRawClassicHour2(),
        this.getRawClassicMinute2(),
      ),
    ];
  }

  /**
   * Method for retrieving the month number for case #1
   * @private
   */
  private getRawClassicMouth(): string {
    return this.rawDate.split(' ')[0];
  }

  /**
   * Method for retrieving the day number for case #1
   * @private
   */
  private getRawClassicDay(): number {
    return Number(this.rawDate.split(' ')[1].replace(',', ''));
  }

  /**
   * Method for retrieving the hour number from a raw date
   * @private
   */
  private getRawHour(): number {
    return Number(
      this.rawDate
        .split(' UTC')[0]
        .split(' ')
        .pop()
        .split(':')[0]
        .replace('(', ''),
    );
  }

  /**
   * Method for retrieving the minute number of the start time for case #1
   * @private
   */
  private getRawClassicMinute1(): number {
    return Number(this.rawDate.split(' UTC')[0].split(':').pop());
  }

  /**
   * Method for retrieving the end hour number in case #1
   * @private
   */
  private getRawClassicHour2(): number {
    return Number(
      this.rawDate
        .split(' UTC')[1]
        .split(' ')
        .pop()
        .split(':')[0]
        .replace('(', ''),
    );
  }

  /**
   * Method for retrieving the minute number of the end time in case #1
   * @private
   */
  private getRawClassicMinute2(): number {
    return Number(this.rawDate.split(' UTC')[1].split(':').pop());
  }

  /**
   * Method for generating the correctly formatted date in case #2
   * @private
   */
  private formatSpecial(): string[] {
    const date: Moment = this.getSpecialDate();

    return [
      DateFormatter.generateDate(
        date.get('years'),
        date.get('months'),
        date.get('dates'),
        this.getRawHour(),
        this.getRawSpecialMinute(),
      ),
    ];
  }

  /**
   * Method for retrieving the maintenance date in case #2
   * Case #2 does not provide the month or day (i.e., no day number), only the name of the day (Monday, Tuesday, etc.). Therefore, you need to check if the day has already passed in the current week to determine whether to add a week to the maintenance date.
   * @private
   */
  private getSpecialDate(): Moment {
    const current: Moment = moment();

    const targetDayIndex: number = moment()
      .days(this.rawDate.split(' ')[0])
      .get('days');
    current.set('days', targetDayIndex);

    if (moment().get('days') > targetDayIndex) {
      current.add(1, 'week');
    }

    return current;
  }

  /**
   * Method for retrieving the minute number of the time in case #2
   * @private
   */
  private getRawSpecialMinute(): number {
    return Number(this.rawDate.split(':')[2].split(' ')[0]);
  }

  /**
   * Method for formatting a date correctly
   * @param year
   * @param month
   * @param day
   * @param hour
   * @param minute
   * @private
   */
  private static generateDate(
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
  ): string {
    return moment()
      .utc()
      .set('years', year)
      .set('months', month)
      .set('date', day)
      .set('hours', hour)
      .set('minutes', minute)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0)
      .toISOString();
  }
}
