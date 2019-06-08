import BaseProduct from './BaseProduct';
import Core from '../../Sys/Core';

/**
 * Шоколадка
 */
export default class BaseChockoP extends BaseProduct {

    public chockoBin: number; // процент содержания какао
    public milk: number; // процент содержания молока
    public cocoaOil: number; // процент содержания какао масла
    public sugar: number; // процент содержания сахара
    public dye: BaseProduct[]; // красители
    public filler: BaseProduct[]; // наполнитель

    /**
     * 
     * @param item {
     *  id: number;
     *  caption: string;
     *  price: number;
     *  shelfLife: number;
     *  chockoBin: number;
     *  milk: number;
     *  dye: BaseProduct[];
     *  filler: BaseProduct[];
     * }
     * @param date 
     */
    constructor(core: Core, item: any) {
        super(core, item);

        this.chockoBin = item['chockoBin'];
        this.milk = item['milk'];
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