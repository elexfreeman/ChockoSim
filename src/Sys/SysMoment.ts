import * as moment from 'moment';


/**
 * Счетчик времени
 */
export default class SysMoment {

    public date: any;
    public startAt: string;

    constructor() {
        this.date = moment();
        this.startAt = this.Now();
    }

    /**
     * увеличивается дата
     */
    public Tick() {
        this.date.add(1, 'hours');
    }

    /**
     * выводит текущею дату тика
     */
    public Print(): void {
        console.log(this.date.format('DD-MM-YYYY HH:mm:ss'));
    }

    /**
     * текущая дата
     */
    public Now(): string {
        return this.date.format('YYYY-MM-DD HH:mm:ss');
    }

    /**
     * продолжительность в днях от момента начала
     */
    public Life(): number {
        let start = moment(this.startAt).unix();
        let now = moment(this.Now()).unix();

        return Math.round(((now - start)/60)/60);
    }


}