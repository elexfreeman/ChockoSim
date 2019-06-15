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

import { BaseChockoMaker } from '../src/Objects/Makers/BaseChockoMaker';

import { ChockoItemI } from '../src/Objects/Products/BaseChockoP'

import { sugar, product1, product2, milk, cacaoOil, cacao } from './test_data';

/* запускатор теста для async-await */
async function run() {

    /* описание теста */
    describe('Тест сборки простой шоколадки по рецепту', () => {


        it('Создаем из ингредиентов', async () => {
            /* Ядро системы */

            let core: Core;
            let ingredient: ChockoItemI;
            let baseChockoMaker: BaseChockoMaker
            let store: BaseStore;

            const makeTime = 2;

            core = new Core();
            /* заполняем склад */
            store = new BaseStore(core, 10);
            store.Add(new BaseProductBag(core, sugar));
            store.Add(new BaseProductBag(core, milk));
            store.Add(new BaseProductBag(core, cacaoOil));
            store.Add(new BaseProductBag(core, cacao));
            //assert(store.store.length == 3);

            baseChockoMaker = new BaseChockoMaker(core, 10, makeTime);

            baseChockoMaker.addStore(store);

            /* ингредиенты */
            let cacaoOilI = {
                caption: 'Какао масло',
                amount: 10
            };
            let sugarI = {
                caption: 'Сахар',
                amount: 10
            };

            let cacaoI = {
                caption: 'Какао',
                amount: 10
            }

            baseChockoMaker.addIngredient(cacaoOilI);
            baseChockoMaker.addIngredient(sugarI);
            baseChockoMaker.addIngredient(cacaoI);

            /* описание шоколадки */
            ingredient = {
                caption: 'Простая шоколадка',
                massa: 100,
                ingredientsI: [
                    cacaoOilI, sugarI, cacaoI
                ],
                shelfLife: 10
            };

            /* == собираем шоколадку == */
            let ok = baseChockoMaker.Make(ingredient);

            assert(!baseChockoMaker.errors.emptyStore);
            assert(!baseChockoMaker.errors.ingredientAmount);
            assert(ok);

            assert(baseChockoMaker.result.length == 0);

            /* ждем */
            for (let i = 0; i <= 4; i++) {
                core.Tick();                
            }

            console.log(baseChockoMaker.result);

            assert(baseChockoMaker.result.length > 0);

        }); //it ****

    });

}

run();