import BaseProduct from './BaseProduct';
import Core from '../../Sys/Core';


/**
 * Описание продукта
 */
export interface ChockoItemI {
    id: number;
    caption: string;
    basePrice: number;
    shelfLife: number;
    chockoBin: number;
    milk: number;
    dye: string[];
    filler: string[];
    massa: number;
    isExpired: number;
    sugar: number;
}

/**
 * Шоколадка
 */
export class BaseChockoP extends BaseProduct {

    public chockoBin: number; // процент содержания какао
    public milk: number; // процент содержания молока
    public cocoaOil: number; // процент содержания какао масла
    public sugar: number; // процент содержания сахара
    public dye: string[]; // красители
    public filler: string[]; // наполнитель
   

   
    constructor(core: Core, item: ChockoItemI) {
        super(core, item);

        this.chockoBin = item['chockoBin'];
        this.milk = item['milk'];
        this.sugar = item['sugar'];
        this.dye = item['dye'];
        this.filler = item['filler'];
        
    }

    public async Tick() {
        super.Tick();
    }

    /**
     * Печать свойств
     */
    public Print() {
        super.Print();
        console.log('chockoBin: ', this.chockoBin);
        console.log('milk: ', this.milk);
    }


}