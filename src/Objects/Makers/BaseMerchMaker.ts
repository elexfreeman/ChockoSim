import BaseMaker from "./BaseMaker";
import Core from '../../Sys/Core';

import BaseStore from "../Store/BaseStore";
import { BaseMerchandise, CompositionI } from "../Products/BaseMerchandise";
import BaseProduct from "../Products/BaseProduct";
import BasePackage from "../Products/BasePackage";

/**
 * Базовый сборщик шоколада
 */
export class BaseMerchMaker extends BaseMaker {

    /* отдаваемый результат */
    protected _result: BaseMerchandise[] = [];

    /* склады */
    protected storeProduct: BaseStore;
    protected storePac: BaseStore;

    protected composition: CompositionI;

    /**
    * 
    * @param core - ядро
    * @param count - кол-во на выходе
    * @param time - время на производство
    * @param addPrice - надбавочная стоимость %
    */
    constructor(core: Core, count: number, time: number, composition: CompositionI) {
        super(core, count, time);
        this.errorSys.decl('emptyStoreProduct', 'Пустой склад продуктов');
        this.errorSys.decl('emptyStorePac', 'Пустой склад упаковок');
        this.errorSys.decl('ingredientAmount', 'Нехватает ингредиентов');
        this.errorSys.decl('compositionInvalid', 'Что-то не так с составом');

        this.composition = composition;
    }

    /**
     * Добавляет доступный для работы склад
     * @param store - склад
     */
    public addStoreProduc(store: BaseStore) {
        this.storeProduct = store;
    }


    /**
     * Добавляет доступный для работы склад для упаковки
     * @param store - склад
     */
    public addStorePac(store: BaseStore) {
        this.storePac = store;
    }

    /**
     * проверка композиции
     * @param composition 
     */
    protected checkComposition() {

        if (!this.composition) {
            this.errorSys.setError('compositionInvalid');
            return;
        }

        if (this.composition.products.length == 0) {
            this.errorSys.setError('compositionInvalid');
        }

    }

    /**
     * Сделать шоколадку
     * работа со складом происходит в единый момент времени    
     */
    public Make(): boolean {

        this.errorSys.clear();

        this.checkComposition();

        let products: BaseProduct[] = [];
        let pacs: BasePackage[] = [];

        /* проверка склада */
        

        if (this.isFree && this.errorSys.isOk()) {

            this.setStatusAtWork();

            for (let i = 0; i < this.count; i++) {
                products = [];

            }

        }

        return this.errorSys.isOk();
    }

    /**
     * результат сборки
     */
    get result() {
        if (this.isDone()) {
            return this._result;
        } else {
            return [];
        }
    }

    public setStatusAtWork() {
        super.setStatusAtWork();
        this.timeCounter = 0;
    }

    public setStatusDone() {
        super.setStatusDone();
        this.timeCounter = 0;
    }


    /**
     * Обработка цикла производства
     */
    public async Tick() {
        /* если мы работаетм */
        if (this.isAtWork()) {
            this.timeCounter++;
            if (this.timeCounter == this.time) {
                /* работа закончилась */
                this.setStatusDone();
            }
        }
    }



}