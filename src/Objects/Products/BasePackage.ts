import BaseObject from '../../Sys/BaseObject';
import SysMoment from '../../Sys/SysMoment';

/**
 * Упаковка
 */
export default class BasePackage extends BaseObject {

    public price: number;
  
    /**
     * 
     * @param date 
     * @param price - стоимост упаковки
     */
    constructor(date: SysMoment, price: number) {
        super(date);
        this.price = price;   
    }    

}