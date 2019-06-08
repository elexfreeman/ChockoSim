import * as moment from 'moment';

import BaseObject from './BaseObject';

export default class SysMoment implements BaseObject {

    public date: any;

    constructor() {
        this.date = moment();
    }

    /**
     * увеличивается дата
     */
    Tick() {
        this.date.add(1, 'hours');
    }

    /**
     * выводит текущею дату тика
     */
    Print() {
        console.log(this.date.format('DD-MM-YYYY HH:mm:ss'));
    }


}