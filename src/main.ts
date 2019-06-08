/* ядро системы */
import Core from './Sys/Core';

import BaseProduct from './Objects/Products/BaseProduct' ;

import BaseStore from './Objects/Store/BaseStore';

let tick;

/* счетчик времени */
const core = new Core();

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

let testP1 = new BaseProduct(core, product1);
let testP2 = new BaseProduct(core, product2);

let store = new BaseStore(core, 10);

store.Add(testP1);
store.Add(testP2);



tick = setInterval(async () => { 

    /* вызыв общих тиков */
    core.Tick();
    

    console.log('');
    console.log('');
    console.log('=================================');   
    console.log(core.Life());    

    store.Print();
    

    
}, 1000); 

