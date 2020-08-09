import BaseObject from '../../Sys/BaseObject';
import Core from '../../Sys/Core';

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
    constructor(core: Core, price: number) {
        super(core);
        this.price = price;
    }

}