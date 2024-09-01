import { Moment } from 'moment';
import * as moment from 'moment';

export default class DateFormatter {
  public rawDate: string;

  public dates: Moment[] | undefined;

  constructor(private readonly raw: string) {
    this.checkFormat();
  }

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

  private getRawClassicDate(): string {
    const split: string[] = this.raw.split(' – ');
    return split.length === 2 ? split[1] : '';
  }

  private getRawSpecialDate(): string {
    const split: string[] = this.raw.split('on the PTS on ');
    return split.length === 2 ? split[1] : '';
  }

  private formatClassic(): Moment[] {
    return [
      DateFormatter.generateMoment(
        moment().get('years'),
        moment().month(this.getRawClassicMouth()).get('months'),
        this.getRawClassicDay(),
        this.getRawClassicHour1(),
        this.getRawClassicMinute1(),
      ),
      DateFormatter.generateMoment(
        moment().get('years'),
        moment().month(this.getRawClassicMouth()).get('months'),
        this.getRawClassicDay(),
        this.getRawClassicHour2(),
        this.getRawClassicMinute2(),
      ),
    ];
  }

  private getRawClassicMouth(): string {
    return this.rawDate.split(' ')[0];
  }

  private getRawClassicDay(): number {
    return Number(this.rawDate.split(' ')[1].replace(',', ''));
  }

  private getRawClassicHour1(): number {
    return Number(this.rawDate.split('(')[1].split(':')[0]);
  }

  private getRawClassicMinute1(): number {
    return Number(this.rawDate.split('(')[1].split(':')[1].split(' ')[0]);
  }

  private getRawClassicHour2(): number {
    return Number(this.rawDate.split('(')[2].split(':')[0]);
  }

  private getRawClassicMinute2(): number {
    return Number(this.rawDate.split('(')[2].split(':')[1].split(' ')[0]);
  }

  private formatSpecial(): Moment[] {
    const date: Moment = this.getSpecialDate();

    return [
      DateFormatter.generateMoment(
        date.get('years'),
        date.get('months'),
        date.get('dates'),
        this.getRawClassicHour1(),
        this.getRawSpecialMinute(),
      ),
    ];
  }

  private getSpecialDate(): Moment {
    const current: Moment = moment();

    const targetDayIndex: number = moment()
      .days(this.rawDate.split(' ')[0])
      .get('days');
    current.set('days', targetDayIndex);

    if (current.get('days') > targetDayIndex) {
      current.add(1, 'week');
    }

    return current;
  }

  private getRawSpecialMinute(): number {
    return Number(this.rawDate.split(':')[2].split(' ')[0]);
  }

  private static generateMoment(
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
  ): Moment {
    return moment()
      .utc()
      .set('years', year)
      .set('months', month)
      .set('date', day)
      .set('hours', hour)
      .set('minutes', minute)
      .set('seconds', 0)
      .set('milliseconds', 0)
      .utcOffset(0);
  }
}
