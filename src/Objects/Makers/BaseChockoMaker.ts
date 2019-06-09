import BaseMaker from "./BaseMaker";
import Core from '../../Sys/Core';
import { BaseChockoP, ChockoItemI } from '../Products/BaseChockoP';

import BaseProductBag from "../Products/BaseProductBag";

/**
 * Ингредиенты
 */
export interface IngredientsI {
    amount: number;
    item: BaseProductBag;
}



/**
 * Базовый сборщик шоколада
 */
export class BaseChockoMaker extends BaseMaker {

    public _result: BaseChockoP[] = [];

    public ingredients: IngredientsI[];

    /**
    * 
    * @param core - ядро
    * @param count - кол-во на выходе
    * @param time - время на производство
    */
    constructor(core: Core, count: number, time: number) {
        super(core, count, time);
    }

    /**
     * Добавить ингредиент
     * @param ingredient 
     */
    public addIngredient(ingredient: IngredientsI) {
        this.ingredients.push(ingredient);
    }


    /**
     * Сделать шоколадку
     * @param count - кол-во     
     * @param item  - рецепт шоколадки   
     */
    public Make(item: ChockoItemI): boolean {
        let res: boolean = false;

        if (this.isFree) {
            res = true;
            this.setStatusAtWork();

            /* собираем результат */
            for (let i = 0; i < this.count; i++) {
                this._result.push(new BaseChockoP(this.core, item));
            }
        }

        return res;
    }

    /**
     * результат сборки
     */
    get result() {
        if (this.isDone()) {
            return this._result;
        } else {
            return [];
        }
    }

    public setStatusAtWork() {
        super.setStatusAtWork();
        this.timeCounter = 0;
    }

    public setStatusDone() {
        super.setStatusDone();
        this.timeCounter = 0;
    }


    /**
     * Обработка цикла производства
     */
    public async Tick() {
        /* если мы работаетм */
        if (this.isAtWork()) {
            this.timeCounter++;
            if (this.timeCounter == this.time) {
                /* работа закончилась */
                this.setStatusDone();
            }
        }
    }



}