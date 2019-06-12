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
import BaseProductBag from '../src/Objects/Products/BaseProductBag';
import { sugar } from './test_data';



/* запускатор теста для async-await */
async function run() {

    /* описание теста */
    describe('Тест BaseProductBag', () => {

        it('Берем не все', async () => {
            /* Ядро системы */
            let core = new Core();
            let pSugar = new BaseProductBag(core, sugar);

            let amount = pSugar.Take(10);

            assert(pSugar.amount == (sugar.amount - 10));
            assert(amount == 10);

        }); //it ****

        it('Берем все', async () => {
            /* Ядро системы */
            let core = new Core();
            let pSugar = new BaseProductBag(core, sugar);

            let amount = pSugar.TakeAll();

            assert(amount == sugar.amount);

        }); //it ****

    });

}

run();