import Core from "../Sys/Core";
import * as Ing from '../data/Ingredients';
import { TrufelBase } from "./TrufelBase";

/**
 * Трюфель воздушный
 */
export class TrufelVozd extends TrufelBase {
    constructor(core: Core) {
        super(core);
        this.fSetCaption('Трюфель воздушный');

        this.fAddIngredient({
            ingredient: Ing.chockoDarck,
            amount: 130 / 39,
        });

        this.fAddIngredient({
            ingredient: Ing.chockoMilc,
            amount: 70 / 39,
        });

        this.fAddIngredient({
            ingredient: Ing.cacaoOil,
            amount: 20 / 39,
        });

        this.fAddIngredient({
            ingredient: Ing.honey,
            amount: 10 / 39,
        });

        this.fAddIngredient({
            ingredient: Ing.mindalPral,
            amount: 30 / 39,
        });

        this.fAddIngredient({
            ingredient: Ing.vaflelCrosh,
            amount: 30 / 39,
        });

        this.fAddIngredient({
            ingredient: Ing.slivki,
            amount: 100 / 39,
        });
    }
}