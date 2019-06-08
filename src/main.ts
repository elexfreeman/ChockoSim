import SysMoment from './Sys/SysMoment';
import EventMaker from './Sys/EventMaker';

import BaseProduct from './Objects/Products/BaseProduct' ;

let tick;

/* счетчик времени */
const date = new SysMoment();

let product1 = {
    id : 1,
    caption : 'Новый продукт 1',
    basePrice : 250,
    shelfLife : 4
}
let product2 = {
    id : 1,
    caption : 'Новый продукт 2',
    basePrice : 300,
    shelfLife : 4
}

let testP1 = new BaseProduct(date, product1);
let testP2 = new BaseProduct(date, product2);



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

    
}, 1000); 

