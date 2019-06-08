import SysMoment from './SysMoment';

/**
 * Базовый объект системы
 */
export default class BaseObject {
    
    private date: SysMoment;

    public isDeleted: boolean; //флаг удаления

    constructor(date: SysMoment) {
        this.isDeleted = false;
        this.date = date;
    }

    /**
     * Здесь описываются изменение состояние объекта во времени
     */
    public async Tick() {

    }


}