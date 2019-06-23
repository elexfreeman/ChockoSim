import BaseObject from '../../Sys/BaseObject';
import BaseProduct from './BaseProduct';
import BasePackage from './BasePackage';
import Core from '../../Sys/Core';

/**
 * упаковка продукт описание
 */
export interface CompositionI {
    caption: string;
    products: string[];
    addPrice: number;
    pac: string[];
}

/**
 * Товар
 */
export class BaseMerchandise extends BaseObject {

    public products: BaseProduct[];
    public package: BasePackage;

    public addPrice: number; // надбавка в % на основную стоимость товара

    public isExpired: boolean; // продукт просрочен

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
        this.isExpired = false;
    }

    /**
     * стоимость товара
     */
    get price() {
        let res = 0;

        for (let i = 0; i < this.products.length; i++) {
            /* продукт внутри просрочен */
            if (this.products[i].isExpired) {
                this.isExpired = true;
                break;
            } else {
                res += this.products[i].basePrice;
            }
        }

        /* продукт не просрочен */
        if (!this.isExpired) {
            res = res + Math.round(res * this.addPrice) / 100 + this.package.price;
        }


        return res;
    }

}