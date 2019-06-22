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

import BaseProduct from '../src/Objects/Products/BaseProduct';
import BaseStore from '../src/Objects/Store/BaseStore';
import { BaseMerchandise } from "../src/Objects/Products/BaseMerchandise";
import { sugar, product1, product2, milk } from './test_data';
import BasePackage from '../src/Objects/Products/BasePackage';


/* запускатор теста для async-await */
async function run() {

    /* описание теста */
    describe('Тест BaseMerchandise', () => {


        it('Соборка упакованного товара', async () => {
            /* Ядро системы */
            let core = new Core();

            let testP1 = new BaseProduct(core, product1);
            let pac = new BasePackage(core, 20);

            let testP1M = new BaseMerchandise(core, pac, [testP1], 20);
            testP1M.caption = 'Упакованный товар';

            let store = new BaseStore(core, 10);

            /* добавляем товары на склад */
            store.Add(testP1M);


            /* вызыв общих тиков */
            await core.Tick();

            /* получаем ссылки на товары со склада */
            let p1 = <BaseMerchandise>store.Get(0);


            /* проверям полученыые товары */
            assert(p1.caption == 'Упакованный товар');

            assert(p1.price > pac.price + testP1.basePrice);

        }); //it ****


        it('Проверка просроченности', async () => {
            /* Ядро системы */
            let core = new Core();

            let testP1 = new BaseProduct(core, product1);
            let pac = new BasePackage(core, 20);

            let testP1M = new BaseMerchandise(core, pac, [testP1], 20);
            testP1M.caption = 'Упакованный товар';

            let store = new BaseStore(core, 10);

            /* добавляем товары на склад */
            store.Add(testP1M);


            /* вызыв общих тиков */
            await core.Tick();

            /* получаем ссылки на товары со склада */
            let p1 = <BaseMerchandise>store.Get(0);


            /* проверям полученыые товары */
            assert(p1.caption == 'Упакованный товар');

            assert(p1.price > pac.price + testP1.basePrice);


            for (let i = 0; i < 20; i++) {
                await core.Tick();
            }

            assert(p1.price == 0);

        }); //it ****


    });

}

run();