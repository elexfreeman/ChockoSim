import * as moment from 'moment';
import EventMaker from './EventMaker';

/**
 * Ядро системы
 */
export default class Core {

    public date: any;
    public startAt: string;

    public event: EventMaker;

    constructor() {
        this.date = moment();
        this.startAt = this.Now();
        this.event = new EventMaker();
    }

    /**
     * увеличивается дата
     */
    public async Tick() {
        this.date.add(1, 'hours');
        await this.event.Tick();
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