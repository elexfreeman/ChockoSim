import Core from '../../Sys/Core';

/**
 * Базовый сборщик
 * на выходе массив собранных объектов
 */
export default class BaseMaker {

    public core: Core;

    public result: any[] = []; // возвращаемы результат

    public count: number; // кол-вл собираемых объектов

    /**
     * 
     * @param core - ядро
     * @param count - кол-во на выходе
     */
    constructor(core: Core, count: number) {
        this.core = core;
        this.count = count;
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
    public make() {

    }

    /**
     * Статус сборки
     */
    get status() {
        return 1;
    }

    /**
     * результат сборки
     */
    public Result(): any[] {
        return this.result;
    }

}