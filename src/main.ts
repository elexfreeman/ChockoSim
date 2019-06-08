import SysMoment from './Sys/SysMoment';
import EventMaker from './Sys/EventMaker';

import BaseProduct from './Objects/Products/BaseProduct' ;

let tick;

/* счетчик времени */
const date = new SysMoment();

let product = {
    id : 1,
    caption : 'Новый продукт',
    basePrice : 100,
    shelfLife : 4
}
let testP = new BaseProduct(date, product);



tick = setInterval(async () => { 

    /* вызыв общих тиков */
    date.Tick();
    EventMaker.Tick();

    console.log('');
    console.log('');
    console.log('=================================');
    date.Print();
    console.log(date.Life());    
    EventMaker.Print();

    
}, 500); 

