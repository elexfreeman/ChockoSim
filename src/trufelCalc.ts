/* ядро системы */
import Core from './Sys/Core';

import BaseProduct, { ItemI } from './Objects/Products/BaseProduct';
import BaseProductBag from './Objects/Products/BaseProductBag';

import BaseStore from './Objects/Store/BaseStore';
import { IngredientsI } from './Objects/Products/IngredientsI';
import BasePackage from './Objects/Products/BasePackage';
import { BaseMerchMaker } from './Objects/Makers/BaseMerchMaker';
import { BaseMerchandise } from './Objects/Products/BaseMerchandise';


// ингредиенты
const chockoDarck: IngredientsI = {
    caption: 'Шоколад темный', // название
    price: 705 / 1000,
}
const chockoMilc: IngredientsI = {
    caption: 'Шоколад молочный', // название
    price: 715 / 1000,
}
const cacaoOil: IngredientsI = {
    caption: 'Какао масло', // название
    price: 1090 / 1000,
}
const honey: IngredientsI = {
    caption: 'мед', // название
    price: 260 / 1000,
}
const mindalPral: IngredientsI = {
    caption: 'Миндальное пралине', // название
    price: 700 / 1000,
}
const vaflelCrosh: IngredientsI = {
    caption: 'Вафельная крошка', // название
    price: 900 / 1000,
}
const slivki: IngredientsI = {
    caption: 'Сливки', // название
    price: 352 / 1000,
}

const TrufelData: ItemI = {
    caption: 'Воздушный Трюфель', // название    
    shelfLife: 7 + 7, // срок годности
    massa: 13, // масса  гр
    ingredients: [
    ],
}

TrufelData.ingredients.push({
    ingredient: chockoDarck,
    amount: 130 / 39,
});

TrufelData.ingredients.push({
    ingredient: chockoMilc,
    amount: 70 / 39,
});

TrufelData.ingredients.push({
    ingredient: cacaoOil,
    amount: 20 / 39,
});

TrufelData.ingredients.push({
    ingredient: honey,
    amount: 10 / 39,
});

TrufelData.ingredients.push({
    ingredient: mindalPral,
    amount: 30 / 39,
});

TrufelData.ingredients.push({
    ingredient: vaflelCrosh,
    amount: 30 / 39,
});

TrufelData.ingredients.push({
    ingredient: slivki,
    amount: 100 / 39,
});



const core = new Core();

const trufel = new BaseProduct(core, TrufelData);

const pac = new BasePackage(core, 500);

const aTrufel: BaseProduct[] = [];
for (let i = 0; i < 9; i++) {
    aTrufel.push(new BaseProduct(core, TrufelData))
}


const trufelPac = new BaseMerchandise(core, pac, aTrufel, 10);

console.log(trufelPac.fGetPrice());
