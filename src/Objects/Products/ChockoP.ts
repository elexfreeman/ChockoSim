import BaseProduct from './BaseProduct';
import SysMoment from '../../Sys/SysMoment';

/**
 * Шоколадка
 */
export default class ChockoP extends BaseProduct {

    public chockoBin: number; // процент содержания какао
    public milk: number; // процент содержания молока

    /**
     * 
     * @param item {
     *  id: number;
     *  caption: string;
     *  price: number;
     *  shelfLife: number;
     *  chockoBin: number;
     *  milk: number;
     * }
     * @param date 
     */
    constructor(date: SysMoment, item: any) {
        super(date, item);

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