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
import BaseProductBag from '../src/Objects/Products/BaseProductBag';
import BaseStore from '../src/Objects/Store/BaseStore';
import { sugar, product1, product2, milk } from './test_data';


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



        it('Получить продукт со склада', async () => {
            /* Ядро системы */
            let core = new Core();

            let store = new BaseStore(core, 10);

            /* добавляем товары на склад */
            store.Add(new BaseProduct(core, product1));
            store.Add(new BaseProduct(core, product2));
            store.Add(new BaseProductBag(core, sugar));
            store.Add(new BaseProductBag(core, sugar));

            assert(store.store.length == 4);

            let iSugar = <BaseProductBag>store.Take('Мешок сахара');

            /* проверям полученыые товары */
            assert(iSugar.caption == 'Мешок сахара');
            assert(store.store.length == 3);

        }); //it ****


    });

}

run();