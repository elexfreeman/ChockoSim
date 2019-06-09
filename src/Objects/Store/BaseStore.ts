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
    }

    /**
     * Добавить объект в хранилище
     * @param object 
     */
    public Add(object: BaseObject): boolean {
        /* если места нету возвращаем false */
        if (this.store.length == this.сapacity) {
            return false;
        }
        this.store.push(object);
        return true;
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


}