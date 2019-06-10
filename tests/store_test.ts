process.env.TS_NODE_PROJECT = './tsconfig.json';

// process.env.TS_CONFIG_PATHS = 'true';
const mocha = require('ts-mocha');


/*дял запросов на сервер*/

/*для проверок*/
const assert = require('chai').assert;
const should = require('chai').should();
const expect = require('chai').expect;

/* *********************************************** */
/* *********************************************** */
/* *********************************************** */

import Core from '../src/Sys/Core';

import BaseProduct from '../src/Objects/Products/BaseProduct' ;
import BaseProductBag from '../src/Objects/Products/BaseProductBag' ;

import BaseStore from '../src/Objects/Store/BaseStore';




let product1 = {
    id : 1,
    caption : 'Новый продукт 1',
    basePrice : 250,
    shelfLife : 4
}

let product2 = {
    id : 2,
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


/* запускатор теста для async-await */
async function run() {

    /* описание теста */
    describe('Тест store', () => {

       
        it('Заполняем склад', async () => {
            /* Ядро системы */
            let core = new Core();

            let testP1 = new BaseProduct(core, product1);
            let testP2 = new BaseProduct(core, product2);

            let pSugar = new BaseProductBag(core, sugar);

            let store = new BaseStore(core, 10);

            /* добавляем товары на склад */
            store.Add(testP1);
            store.Add(testP2);
            store.Add(pSugar);

            /* вызыв общих тиков */
            core.Tick();

            /* получаем ссылки на товары со склада */
            let p0 = <BaseProduct>store.Get(0);
            let p1 = <BaseProduct>store.Get(1);
            
            /* проверям полученыые товары */
            assert(p0.id == 1);
            assert(p1.id == 2);

        }); //it ****

       
        it('Проверка просроченности продукта на складе', async () => {
            /* Ядро системы */
            let core = new Core();

            let testP1 = new BaseProduct(core, product1);
            let testP2 = new BaseProduct(core, product2);

            let store = new BaseStore(core, 10);

            /* добавляем товары на склад */
            store.Add(testP1);
            store.Add(testP2);            

            /* вызыв общих тиков */
            core.Tick();
            core.Tick();
            core.Tick();
            core.Tick();

            /* получаем ссылки на товары со склада */
            let p0 = <BaseProduct>store.Get(0);
            let p1 = <BaseProduct>store.Get(1);
            
            assert(p0.id == 1);
            assert(p1.id == 2);         

            /* проверяем просроченность */
            assert(!p0.isExpired);
            assert(!p1.isExpired);

        }); //it ****
       

    });

}

run();