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

    public aProduct: BaseProduct[];
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
        this.aProduct = products;
        this.addPrice = addPrice;
        this.package = cPackage;
        this.isExpired = false;
    }

    fGetPrice(): number {
        let nPrice: number = 0;

        for (let i = 0; i < this.aProduct.length; i++) {
            nPrice = nPrice + this.aProduct[i].fGetBasePrice();
        }

        nPrice = nPrice + this.package.price;
        return nPrice;

    }
}