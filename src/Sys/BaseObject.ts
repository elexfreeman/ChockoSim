import SysMoment from './SysMoment';
import EventMaker from './EventMaker';

/**
 * Базовый объект системы
 */
export default class BaseObject {
    
    public date: SysMoment;

    public isDeleted: boolean; //флаг удаления

    constructor(date: SysMoment) {
        this.isDeleted = false;
        this.date = date;
        /* добавляем себя в общий пул объектов */
        EventMaker.Add(this);
    }

    /**
     * Здесь описываются изменение состояние объекта во времени
     */
    public async Tick() {

    }

    public Print() {
        
    }


}