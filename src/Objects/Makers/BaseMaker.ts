import Core from '../../Sys/Core';

/**
 * Базовый сборщик
 * на выходе массив собранных объектов
 */
export default class BaseMaker {

    public core: Core;

    public _result: any[] = []; // возвращаемы результат

    public count: number; // кол-вл собираемых объектов

    public time: number; // затрачиваемое время на производство
    public timeCounter: number; // счетчик времени производства

    public status: number = 0;

    /**
     * 
     * @param core - ядро
     * @param count - кол-во на выходе
     * @param time - время на
     */
    constructor(core: Core, count: number, time: number) {
        this.core = core;
        this.count = count;
        this.time = time;
    }

    /**
     * Добавить материал к сборке
     * @param item - материал
     */
    public addMaterial(item: any): boolean {
        return true;
    }

    /**
     * собрать
     */
    public make(): boolean {
        return true;
    }

    /**
     * результат сборки
     */
    get result() {
        return this._result;
    }

    /* Статучы */
    public setStatusAtWork() {
        this.status = 1;
    }

    public setStatusDone() {
        this.status = 2;
    }

    public setStatusFree() {
        this.status = 0;
    }

    public isAtWork(): boolean {
        if (this.status == 1) return true;
        return false;
    }

    public isDone(): boolean {
        if (this.status == 2) return true;
        return false;
    }

    public isFree(): boolean {
        if (this.status == 0) return true;
        return false;
    }

}