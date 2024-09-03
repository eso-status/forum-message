import { Moment } from 'moment';
import * as moment from 'moment';

/**
 * Class permettant l'identification et la mise au bon format de la date contenu dans une annonce
 */
export default class DateFormatter {
  /**
   * Donnée brute de la date contenue dans l'annonce
   */
  public rawDate: string;

  /**
   * Liste des dates mise au bon format contenue dans l'annonce
   */
  public dates: Moment[] | undefined;

  /**
   * @param raw Donnée brute de l'annonce
   */
  constructor(private readonly raw: string) {
    this.checkFormat();
  }

  /**
   * Methode permettant de récupérer la date brute et la liste des dates présente dans l'annonce en fonction de son format
   * Cas n°1 : L'annonce contient une date avec une heure/minute de début et de fin
   * Cas N°2 : L'annonce contient le nom du prochain jour de la maintenance avec une heure/minute de début
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
   * Méthode permettant de récupérer la date brute dans le cas N°1
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
   * Méthode permettant de récupérer la date brute dans le cas N°2
   * @private
   */
  private getRawSpecialDate(): string {
    const split: string[] = this.raw.split('on the PTS on ');
    return split.length === 2 ? split[1] : '';
  }

  /**
   * Méthode permettant de générer la liste des dates mise au bon format pour le cas N°1
   * @private
   */
  private formatClassic(): Moment[] {
    return [
      DateFormatter.generateMoment(
        moment().get('years'),
        moment().month(this.getRawClassicMouth()).get('months'),
        this.getRawClassicDay(),
        this.getRawHour(),
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

  /**
   * Méthode permettant de récupérer le numéro du mois pour le cas N°1
   * @private
   */
  private getRawClassicMouth(): string {
    return this.rawDate.split(' ')[0];
  }

  /**
   * Méthode permettant de récupérer le numéro du jour pour le cas N°1
   * @private
   */
  private getRawClassicDay(): number {
    return Number(this.rawDate.split(' ')[1].replace(',', ''));
  }

  /**
   * Méthode permettant de récupérer le numéro de l'heure dans une date brute
   * @private
   */
  private getRawHour(): number {
    return Number(this.rawDate.split('(')[1].split(':')[0]);
  }

  /**
   * Méthode permettant de récupérer le numéro des minutes de l'heure de début pour le cas N°1
   * @private
   */
  private getRawClassicMinute1(): number {
    return Number(this.rawDate.split('(')[1].split(':')[1].split(' ')[0]);
  }

  /**
   * Méthode permettant de récupérer le numéro de l'heure de fin dans le cas N°1
   * @private
   */
  private getRawClassicHour2(): number {
    return Number(this.rawDate.split('(')[2].split(':')[0]);
  }

  /**
   * Méthode permettant de récupérer le numéro des minutes de l'heure de fin dans le cas N°1
   * @private
   */
  private getRawClassicMinute2(): number {
    return Number(this.rawDate.split('(')[2].split(':')[1].split(' ')[0]);
  }

  /**
   * Méthode permettant de générer la date mise au bon format dans le cas N°2
   * @private
   */
  private formatSpecial(): Moment[] {
    const date: Moment = this.getSpecialDate();

    return [
      DateFormatter.generateMoment(
        date.get('years'),
        date.get('months'),
        date.get('dates'),
        this.getRawHour(),
        this.getRawSpecialMinute(),
      ),
    ];
  }

  /**
   * Méthode permettant de récupérer la date de la maintenance dans le cas N°2
   * Le cas N°2 ne fournit pas de moi ni de jour (dans le sens pas de numéro du jour du mois), uniquement le nom du jour (lundi, mardi...). Il faut donc regarder si ce jour est passé dans la semaine en cours pour savoir si on doit ajouter ou non une semaine à la date de maintenance.
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
   * Méthode permettant de récupérer le numéro des minutes de l'heure dans le cas N°2
   * @private
   */
  private getRawSpecialMinute(): number {
    return Number(this.rawDate.split(':')[2].split(' ')[0]);
  }

  /**
   * Méthode permettant de mettre au bon format une date
   * @param year
   * @param month
   * @param day
   * @param hour
   * @param minute
   * @private
   */
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
