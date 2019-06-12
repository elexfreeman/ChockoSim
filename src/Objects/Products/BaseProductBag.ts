import BaseProduct from './BaseProduct';
import Core from '../../Sys/Core';

/**
 * Мешок продукта (Сахар, орехи и т.д.)
 */
export default class BaseProductBag extends BaseProduct {

    /* кол-во */
    public amount: number;

    /**
   * 
   * @param item - основные поля из DB
   * @param date - дата создания
   */
    constructor(core: Core, item: any) {
        super(core, item);
        this.amount = item['amount'];
    }


    /**
     * Взять кол-во
     * @param amount - кол-во
     */
    public Take(amount: number): number {
        let resp = 0;

        if (this.amount - amount >= 0) {
            resp = amount;
        } 

        /* вычитаем кол-во */
        this.amount = this.amount - amount;

        /* если кол-во = 0 удаляем мешок */
        if (this.amount == 0) {
            this.isDeleted = true;
        }

        return resp;
    }

    /**
     * Взять все
     */
    public TakeAll(): number {
        let resp = this.amount;
        this.amount = 0;
        return resp;
    }

}