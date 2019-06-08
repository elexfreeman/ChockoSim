import BaseObject from '../../Sys/BaseObject';
import BaseProduct from './BaseProduct';
import SysMoment from '../../Sys/SysMoment';

/**
 * Товар
 */
export class BaseMerchandise extends BaseObject {

    public product: BaseProduct;

    public addPrice: number; // надбавка в % на основную стоимость товара
    public packagePrice: number; // стоимость упаковки

    /**
     * 
     * @param product - продукт
     * @param addPrice - надбавочная стоимость
     * @param packagePrice - стоимость упаковки
     */
    constructor(date: SysMoment, product: BaseProduct, addPrice: number, packagePrice: number) {
        super(date);
        this.product = product;        
        this.addPrice = addPrice;        
        this.packagePrice = packagePrice;        
    }

    /**
     * стоимость товара
     */
    get price() {
        return Math.round(this.product.basePrice + ((this.product.basePrice * this.addPrice) / 100)) - this.packagePrice;
    }

}