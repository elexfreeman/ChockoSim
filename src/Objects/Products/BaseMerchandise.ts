import BaseObject from '../../Sys/BaseObject';
import BaseProduct from './BaseProduct';
import BasePackage from './BasePackage';
import Core from '../../Sys/Core';

/**
 * Товар
 */
export class BaseMerchandise extends BaseObject {

    public product: BaseProduct;
    public package: BasePackage;

    public addPrice: number; // надбавка в % на основную стоимость товара


    /**
     * 
     * @param product - продукт
     * @param addPrice - надбавочная стоимость
     * @param packagePrice - стоимость упаковки
     */
    constructor(core: Core, product: BaseProduct, addPrice: number) {
        super(core);
        this.product = product;
        this.addPrice = addPrice;
    }

    /**
     * стоимость товара
     */
    get price() {
        return Math.round(this.product.basePrice + ((this.product.basePrice * this.addPrice) / 100)) - this.package.price;;
    }

}