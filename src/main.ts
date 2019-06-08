import * as moment from 'moment';
import SysMoment from './Sys/SysMoment';

let tick;

const date = new SysMoment();

tick = setInterval(() => {
    date.Tick();
    date.Print();
}, 500);