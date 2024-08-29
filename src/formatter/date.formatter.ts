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
    const mouth: string = this.getRawClassicMouth();
    const day: number = this.getRawClassicDay();

    return [
      moment()
        .utc()
        .set('years', moment().get('years'))
        .set('months', moment().month(mouth).get('months'))
        .set('date', day)
        .set('hours', this.getRawClassicHour1())
        .set('minutes', this.getRawClassicMinute1())
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
      moment()
        .utc()
        .set('years', moment().get('years'))
        .set('months', moment().month(mouth).get('months'))
        .set('date', day)
        .set('hours', this.getRawClassicHour2())
        .set('minutes', this.getRawClassicMinute2())
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
    ];
  }

  private getRawClassicMouth(): string {
    const split: string[] = this.rawDate.split(' ');

    return split[0];
  }

  private getRawClassicDay(): number {
    const split: string[] = this.rawDate.split(' ');

    return Number(split[1].replace(',', ''));
  }

  private getRawClassicHour1(): number {
    const split: string[] = this.rawDate.split('(');
    const split1: string[] = split[1].split(':');

    return Number(split1[0]);
  }

  private getRawClassicMinute1(): number {
    const split: string[] = this.rawDate.split('(');
    const split1: string[] = split[1].split(':');
    const split2: string[] = split1[1].split(' ');

    return Number(split2[0]);
  }

  private getRawClassicHour2(): number {
    const split: string[] = this.rawDate.split('(');
    const split1: string[] = split[2].split(':');

    return Number(split1[0]);
  }

  private getRawClassicMinute2(): number {
    const split: string[] = this.rawDate.split('(');
    const split1: string[] = split[2].split(':');
    const split2: string[] = split1[1].split(' ');

    return Number(split2[0]);
  }

  private formatSpecial(): Moment[] {
    const date: Moment = this.getSpecialDate();

    return [
      moment()
        .utc()
        .set('years', date.get('years'))
        .set('months', date.get('months'))
        .set('date', date.get('dates'))
        .set('hours', this.getRawClassicHour1())
        .set('minutes', this.getRawSpecialMinute())
        .set('seconds', 0)
        .set('milliseconds', 0)
        .utcOffset(0),
    ];
  }

  private getSpecialDate(): Moment {
    const current: Moment = moment();
    const rawDay: string = this.rawDate.split(' ')[0];
    const currentDayIndex: number = current.get('days');

    const targetDayIndex: number = moment().days(rawDay).get('days');
    current.set('days', targetDayIndex);

    if (currentDayIndex > targetDayIndex) {
      current.add(1, 'week');
    }

    return current;
  }

  private getRawSpecialMinute(): number {
    const split: string[] = this.rawDate.split(':');
    const split1: string[] = split[2].split(' ');
    return Number(split1[0]);
  }
}
