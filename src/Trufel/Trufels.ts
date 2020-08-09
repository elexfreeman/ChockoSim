import { ItemI } from "../Objects/Products/BaseProduct";

import * as Ing from '../data/Ingredients';

export const fGetTrufelVozd = (): ItemI => {

    const TrufelVodData: ItemI = {
        caption: 'Воздушный Трюфель', // название    
        shelfLife: 7 + 7, // срок годности
        massa: 13, // масса  гр
        ingredients: [
        ],
    }
    TrufelVodData.ingredients.push({
        ingredient: Ing.chockoDarck,
        amount: 130 / 39,
    });

    TrufelVodData.ingredients.push({
        ingredient: Ing.chockoMilc,
        amount: 70 / 39,
    });

    TrufelVodData.ingredients.push({
        ingredient: Ing.cacaoOil,
        amount: 20 / 39,
    });

    TrufelVodData.ingredients.push({
        ingredient: Ing.honey,
        amount: 10 / 39,
    });

    TrufelVodData.ingredients.push({
        ingredient: Ing.mindalPral,
        amount: 30 / 39,
    });

    TrufelVodData.ingredients.push({
        ingredient: Ing.vaflelCrosh,
        amount: 30 / 39,
    });

    TrufelVodData.ingredients.push({
        ingredient: Ing.slivki,
        amount: 100 / 39,
    });

    return TrufelVodData;
}
