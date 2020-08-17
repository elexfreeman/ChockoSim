import BaseProduct from "../Objects/Products/BaseProduct";
import Core from "../Sys/Core";
import { ProductIngredientI } from "../Objects/Products/IngredientsI";
export interface MassaPercentI {
    ingredientKey: number,
    sIngredient: string;
    nPercent: number;
}
/**
 * Трюфель
 */
export class TrufelBase extends BaseProduct {

    protected nMassa: number;

    constructor(core: Core) {
        super(core);
        this.fSetCaption('Трюфель');
    }

    /**
     * устанавливает массу трюфеля
     * чтобы произвести расчет ингредиентов 
     * @param nMassa 
     */
    public fSetMassa(nMassa: number) {
        const aMassaPercent = this.fGetMassaPercent();
        for (let k = 0; k < aMassaPercent.length; k++) {
            const ingredientKey = aMassaPercent[k].ingredientKey;
            this.data.ingredients[ingredientKey].amount = nMassa * aMassaPercent[k].nPercent / 100;
        }
    }

    public fGetMassa(): number {
        let nMassa = 0;
        for (let k = 0; k < this.data.ingredients.length; k++) {
            nMassa += this.data.ingredients[k].amount;
        }
        return nMassa;
    }

    /**
     * Масса ингредиентов в процентах
     */
    public fGetMassaPercent(): MassaPercentI[] {
        let resp: MassaPercentI[] = [];
        const nMassa = this.fGetMassa();
        for (let k = 0; k < this.data.ingredients.length; k++) {
            const nPercent = this.data.ingredients[k].amount * 100 / nMassa;
            resp.push({
                ingredientKey: k,
                nPercent: nPercent,
                sIngredient: this.data.ingredients[k].ingredient.caption,
            });
        }
        return resp;
    }


    public fPrintIngredientsTotalPrice() {
        let out: ProductIngredientI[] = this.data.ingredients;
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