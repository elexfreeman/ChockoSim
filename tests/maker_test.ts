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


/* запускатор теста для async-await */
async function run() {

    /* описание теста */
    describe('Тест maker', () => {

        /*сам тест*/
        it('Создаем продукт из ингредиентов', async () => {
            /* Ядро системы */
            let core = new Core();

            let testP1 = new BaseProduct(core, product1);
            let testP2 = new BaseProduct(core, product2);

            let pSugar = new BaseProductBag(core, sugar);

            let store = new BaseStore(core, 10);

            store.Add(testP1);
            store.Add(testP2);
            store.Add(pSugar);
            
            /* вызыв общих тиков */
            core.Tick();
            assert(true);

        });

    });

}

run();