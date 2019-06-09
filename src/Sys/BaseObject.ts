import Core from './Core';
import EventMaker from './EventMaker';

/**
 * Базовый объект системы
 */
export default class BaseObject {
    
    public core: Core;

    public isDeleted: boolean; //флаг удаления

    public caption: string; // название   

    constructor(core: Core) {
        this.isDeleted = false;
        this.core = core;
        /* добавляем себя в общий пул объектов */
        this.core.event.Add(this);
    }

    /**
     * Здесь описываются изменение состояние объекта во времени
     */
    public async Tick() {

    }

    public Print() {
        
    }

}