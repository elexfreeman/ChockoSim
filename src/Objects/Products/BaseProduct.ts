import BaseObject from '../../Sys/BaseObject';
import Core from '../../Sys/Core';
import { IngredientsI, ProductIngredientI } from './IngredientsI';
/**
 * Описание продукта
 */
export interface ItemI {
    id?: number;
    caption: string; // название    
    shelfLife: number; // срок годности
    massa: number; // масса
    basePrice?: number; // цена
    ingredients: ProductIngredientI[];
}

/**
 * Базовый продукт
 */
export default class BaseProduct extends BaseObject {

    public data: ItemI;
    public isExpired: boolean;

    constructor(core: Core, data: ItemI) {
        super(core);
        this.data = data;
    }

    /**
     * Во времени изменяется состояние просроченности shelfLife
     */
    public async Tick() {

        /* проверка просроченности */
        if (this.core.Life() > this.data.shelfLife) {
            this.isExpired = true;
        }
    }

    public Print() {
    }

    fGetBasePrice(): number {
        let nPrice = 0;

        for (let i = 0; i < this.data.ingredients.length; i++) {
            nPrice = nPrice + this.data.ingredients[i].amount * this.data.ingredients[i].ingredient.price;
        }

        return nPrice;

    }


    fGetMassa(): number {
        let nMassa = 0;

        for (let i = 0; i < this.data.ingredients.length; i++) {
            nMassa = nMassa + this.data.ingredients[i].amount
        }

        return nMassa;

    }
}