import SysMoment from './Sys/SysMoment';
import EventMaker from './Sys/EventMaker';

let tick;

/* счетчик времени */
const date = new SysMoment();


tick = setInterval(async () => { 

    date.Tick();
    date.Print();

    console.log(date.Life());
}, 500); 

