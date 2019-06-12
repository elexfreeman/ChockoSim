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
import { sugar, product1, product2, milk, cacaoOil } from './test_data';

/* запускатор теста для async-await */
async function run() {

    /* описание теста */
    describe('Тест сборки простой шоколадки по рецепту', () => {


        it('Создаем из ингредиентов', async () => {
            /* Ядро системы */
            let core = new Core();

            /* заполняем склад */
            let store = new BaseStore(core, 10);
            store.Add(new BaseProductBag(core, sugar));
            store.Add(new BaseProductBag(core, milk));
            store.Add(new BaseProductBag(core, cacaoOil));
            assert(store.store.length == 3);


            /* == собираем шоколадку == */

            /* берем ингредиенты со склада */

            let iSugar = <BaseProductBag>store.Take('Мешок сахара');
            let iMilk = <BaseProductBag>store.Take('Мешок сухого молока');
            let iCacaoOil = <BaseProductBag>store.Take('Какао масло');

            assert(iSugar);
            assert(iMilk);
            assert(iCacaoOil);
            assert(store.store.length == 0);

            /* берем по 50 грам каждого */
            let takeSugar = iSugar.Take(50);
            let takeMilk = iMilk.Take(50);
            let takeCacaoOil = iCacaoOil.Take(50);

            assert(takeSugar == 50);
            assert(takeMilk == 50);
            assert(takeCacaoOil == 50);

            /* ложим обратно на склад */
            store.Add(iSugar);
            store.Add(iMilk);
            store.Add(iCacaoOil);

            assert(store.store.length == 3);

            store.Add(new BaseProduct(core, product1));

            assert(store.store.length == 4);


        }); //it ****

    });

}

run();