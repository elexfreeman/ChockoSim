import Core from './Core';
import ErrorSys from './ErrorSys';

/**
 * Базовый объект системы
 */
export default class BaseObject {
    
    public core: Core;

    public isDeleted: boolean; //флаг удаления

    public caption: string; // название  
    
    public errorSys: ErrorSys; // ошибки выполнения

    constructor(core: Core) {
        this.isDeleted = false;
        this.core = core;
        this.errorSys = new ErrorSys();
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