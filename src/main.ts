import SysMoment from './Sys/SysMoment';

let tick;

const date = new SysMoment();

tick = setInterval(async () => {    
    await date.Tick();
    date.Print();

    console.log(date.Life());
}, 500); 

