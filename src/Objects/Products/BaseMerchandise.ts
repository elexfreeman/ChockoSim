import BaseObject from '../../Sys/BaseObject';
import BaseProduct from './BaseProduct';
import BasePackage from './BasePackage';
import Core from '../../Sys/Core';

/**
 * Товар
 */
export class BaseMerchandise extends BaseObject {

    public products: BaseProduct[];
    public package: BasePackage;

    public addPrice: number; // надбавка в % на основную стоимость товара


    /**
     * 
     * @param product - продукт
     * @param addPrice - надбавочная стоимость
     * @param packagePrice - стоимость упаковки
     */
    constructor(core: Core, cPackage: BasePackage, products: BaseProduct[], addPrice: number) {
        super(core);
        this.products = products;
        this.addPrice = addPrice;
        this.package = cPackage;
    }

    /**
     * стоимость товара
     */
    get price() {
        let res = 0;

        for (let i = 0; i < this.products.length; i++) {
            res += this.products[i].basePrice;
        }

        res = res + Math.round(res * this.addPrice) / 100 + this.package.price;

        return res;
    }

}