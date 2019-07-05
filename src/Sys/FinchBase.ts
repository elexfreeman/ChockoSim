import ErrorSys from './ErrorSys';

/**
 * Базовый объект
 */
export default class FinchBase {

    public id: number; // id записи

    protected db: any; // драйвер DB

    public errorSys: ErrorSys; // обработчик ошибок

    constructor() {
        this.errorSys = new ErrorSys();
    }

    /**
     * Синхронизация объекта с данными в базе
     * Все данные объекта заменяются данными базы
     * @param id 
     */
    public async sync(id: number): Promise<FinchBase> {
        this.id = id;

        return this;
    }

}