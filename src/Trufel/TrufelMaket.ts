import { BaseMerchandise } from '../Objects/Products/BaseMerchandise'
import BasePackage from '../Objects/Products/BasePackage';
import Core from '../Sys/Core';
import BaseProduct from '../Objects/Products/BaseProduct';
import { fGetTrufelVozd } from './Trufels';
import { ProductIngredientI } from '../Objects/Products/IngredientsI';
import { TrufelVozd } from './TrufelVozd';

export class TrufelMaker {

    protected aMerchant: BaseMerchandise[];

    constructor(core: Core, amount: number) {
        this.aMerchant = [];

        for (let k = 0; k < amount; k++) {
            const pac = new BasePackage(core, 500);
            const aTrufel: BaseProduct[] = [];
            for (let i = 0; i < 9; i++) {
                aTrufel.push(new TrufelVozd(core));
            }
            this.aMerchant.push(new BaseMerchandise(core, pac, aTrufel, 10))
        }
    }


    /**
     * Подсчет ингредиентов
     */
    public fGetIngredients(): ProductIngredientI[] {
        let out: ProductIngredientI[] = [];

        let obj: { [key: string]: ProductIngredientI; } = {};

        for (let k = 0; k < this.aMerchant.length; k++) {
            for (let i = 0; i < this.aMerchant[k].aProduct.length; i++) {
                for (let g = 0; g < this.aMerchant[k].aProduct[i].data.ingredients.length; g++) {
                    const ingredient = this.aMerchant[k].aProduct[i].data.ingredients[g];

                    if (!obj[ingredient.ingredient.caption]) {
                        obj[ingredient.ingredient.caption] = { ...ingredient };
                        obj[ingredient.ingredient.caption].amount = 0;
                    }
                    obj[ingredient.ingredient.caption].amount += ingredient.amount;
                }
            }
        }

        for (let k in obj) {
            out.push(obj[k]);
        }

        return out;
    }


    public fGetIngredientsTotalPrice() {
        let out: ProductIngredientI[] = this.fGetIngredients();
        let totalAmout: number = 0;
        for (let i = 0; i < out.length; i++) {
            console.log(`
Ингредиент: ${out[i].ingredient.caption}
Цена за грамм: ${(out[i].ingredient.price).toFixed(2)}
Вес в граммах: ${(out[i].amount).toFixed(2)}
Итого: ${(out[i].ingredient.price * out[i].amount).toFixed(2)}
            
            `);
            totalAmout += out[i].amount;
        }
        console.log('Общий все:', totalAmout);
    }


}