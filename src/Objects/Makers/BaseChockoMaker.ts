import BaseMaker from "./BaseMaker";
import Core from '../../Sys/Core';
import { BaseChockoP, ChockoItemI, IngredientsI } from '../Products/BaseChockoP';

import BaseProductBag from "../Products/BaseProductBag";
import BaseStore from "../Store/BaseStore";


/**
 * Базовый сборщик шоколада
 */
export class BaseChockoMaker extends BaseMaker {

    /* отдаваемый результат */
    public _result: BaseChockoP[] = [];

    /* ингредиенты */
    public ingredients: IngredientsI[];

    /* склады */
    public store: BaseStore;

    public errors: {
        emptyStore: boolean;
        ingredientAmount: boolean;
    };

    /**
    * 
    * @param core - ядро
    * @param count - кол-во на выходе
    * @param time - время на производство
    */
    constructor(core: Core, count: number, time: number) {
        super(core, count, time);
        this.ingredients = [];
        this.errorSys.decl('emptyStore', 'Склад заполнен');
        this.errorSys.decl('ingredientAmount', 'Нехватает ингредиентов');
    }

    /**
     * Добавляет доступный для работы склад
     * @param store - склад
     */
    public addStore(store: BaseStore) {
        this.store = store;
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
     * работа со складом происходит в единый момент времени
     * @param count - кол-во     
     * @param item  - рецепт шоколадки   
     */
    public Make(item: ChockoItemI): boolean {      
        
        this.errorSys.clear();

        if (this.isFree) {
           
            this.setStatusAtWork();
            item.basePrice = 0;

            /* перебираем ингредиенты рецепта */
            for (let i = 0; i < this.ingredients.length; i++) {

                /* берем со склада ингредиент */
                let ingredient = <BaseProductBag>this.store.Take(this.ingredients[i].caption);
                
                if (!ingredient) {                   
                    this.errorSys.setError('emptyStore');                    
                }

                /* отсыпаем по рецепту кол-во */
                if (this.errorSys.isOk()) {
                    let amount = ingredient.Take(this.ingredients[i].amount);
                    if (amount == 0) {                       
                        this.errorSys.setError('ingredientAmount');                           
                    }
                    /* высчитаываем базовую стоимость на основе цены ингредиентов */
                    item.basePrice += ingredient.basePrice * amount;
                }

                /* если все норм возвращаем на склад ингредиент */
                if (this.errorSys.isOk()) {
                    /* тут может стор быть заполнен уже */
                    this.store.Add(ingredient);
                }

                /* если все плохо прерываем готовку */
                if (!this.errorSys.isOk()) {
                    break;
                }

            }

            if (this.errorSys.isOk()) {
                /* собираем результат */
                for (let i = 0; i < this.count; i++) {
                    this._result.push(new BaseChockoP(this.core, item));
                }
            }

        }

        return this.errorSys.isOk();
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