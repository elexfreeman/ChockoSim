import BaseProduct from './BaseProduct';
import Core from '../../Sys/Core';

/**
 * Ингредиенты
 */
export interface IngredientsI {
    caption: string; // название
    amount: number; // количество   
}

/**
 * Описание продукта
 */
export interface ChockoItemI {
    id?: number;
    caption: string; // название    
    shelfLife: number; // срок годности
    massa: number; // масса
    basePrice?: number; // цена
    ingredientsI: IngredientsI[];
}

/**
 * Шоколадка
 */
export class BaseChockoP extends BaseProduct {
   
    ingredientsI: IngredientsI[];
   
    constructor(core: Core, item: ChockoItemI) {
        super(core, item);
        this.ingredientsI = item.ingredientsI;        
    }

    public async Tick() {
        super.Tick();
    }

    /**
     * Печать свойств
     */
    public Print() {
        super.Print();
        console.log('ingredientsI: ', this.ingredientsI);      
    }


}