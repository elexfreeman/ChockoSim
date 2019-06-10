/* ядро системы */
import Core from './Sys/Core';

import BaseProduct from './Objects/Products/BaseProduct' ;
import BaseProductBag from './Objects/Products/BaseProductBag' ;

import BaseStore from './Objects/Store/BaseStore';

let tick;

/* Ядро системы */
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

let sugar = {
    id : 1,
    caption : 'Мешок сахара',
    basePrice : 300,
    shelfLife : 4000,
    amount: 10
}

let testP1 = new BaseProduct(core, product1);
let testP2 = new BaseProduct(core, product2);

let pSugar = new BaseProductBag(core, sugar);

let store = new BaseStore(core, 10);

store.Add(testP1);
store.Add(testP2);
store.Add(pSugar);





tick = setInterval(async () => { 

    /* вызыв общих тиков */
    core.Tick();
    

    console.log('');
    console.log('');
    console.log('=================================');   
    console.log(core.Life());    

    core.event.Print();
    

    
}, 1000); 
