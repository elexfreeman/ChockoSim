import BaseObject from '../../Sys/BaseObject';
import Core from '../../Sys/Core';

/**
 * Базовое хранилище
 */
export default class BaseStore extends BaseObject {

    /* объекты хранилища */
    public store: BaseObject[] = [];

    /* вместимость */
    public сapacity: number;

    /**     
     * @param date  - время
     * @param сapacity - вместимость
     */
    constructor(core: Core, сapacity: number = 0) {
        super(core);
        this.сapacity = сapacity;

        this.errorSys.decl('store_full', 'Склад заполнен');
        this.errorSys.decl('empty_arg', 'Пустой массив входных объектов');
        this.errorSys.decl('objects_to_match', 'Слишко много объектов');
    }

    /**
     * Добавить объект в хранилище
     * @param object 
     */
    public Add(object: BaseObject): boolean {
        this.errorSys.clear();
        /* если места нету возвращаем false */
        if (this.store.length == this.сapacity) {
            this.errorSys.setError('store_full');
            return false;
        }
        this.store.push(object);
        return true;
    }

    /**
     * Добавляет много объектов на склад
     * @param objects 
     */
    public AddMore(objects: BaseObject[]): boolean {
        this.errorSys.clear();
        /* если места нету возвращаем false */
        if (this.store.length == this.сapacity) {
            this.errorSys.setError('store_full');
        }

        if (!objects) {
            this.errorSys.setError('empty_arg');
        }

        if ((this.store.length + objects.length) > this.сapacity) {
            this.errorSys.setError('objects_to_match');
        }

        this.store = this.store.concat(objects);

        return this.errorSys.isOk();
    }


    /**
     * Удалить объект из хранилище
     * @param index 
     */
    public Remove(index: number) {
        this.store.splice(index, 1);
    }

    /**
     * Получить объект из хранилища
     * @param index 
     */
    public Get(index: number): BaseObject {
        if (this.store.length < index) {
            return null;
        }

        return this.store[index];
    }


    /**
     * Взять объект со склада
     * @param caption - название объекта
     */
    public Take(caption: string): BaseObject {
        let resp: BaseObject;

        for (let i = 0; i < this.store.length; i++) {
            if (this.store[i].caption == caption) {
                resp = this.store[i];
                this.Remove(i);
                break;
            }
        }
        return resp;
    }

    /**
     * сколько позиций на складе
     * @param caption 
     */
    public GetAmount(caption: string): number {
        let res = 0;

        for (let i = 0; i < this.store.length; i++) {
            if (this.store[i].caption = caption) {
                res++;
            }
        }

        return res;
    }

    /**
     * Печать в консоль
     */
    public Print() {
        console.log(">> STORE <<");
        console.log("Capacity: ", this.сapacity);
        console.log("Objects count: ", this.store.length);
        console.log("Free place: ", this.сapacity - this.store.length);
        console.log("---- Objects: ----");

        for (let i = 0; i < this.store.length; i++) {
            this.store[i].Print();
        }
    }


    /**
     * удаляем пустые объекты
     */
    public async Tick() {
        await super.Tick();
        for (let i = 0; i < this.store.length; i++) {
            if (!this.store[i]) {
                this.Remove(i);
            }
        }
    }


}