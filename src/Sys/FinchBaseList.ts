import FinchBase from './FinchBase';
import ErrorSys from './ErrorSys';

enum Sort {
    asc =  'asc',
    desc = 'desc'
}

/**
 * Базовый список
 */
export default class FinchBaseList {

    public total: number; // общее число объектов в БД

    protected db: any; // драйвер DB

    public errorSys: ErrorSys; // обработчик ошибок

    public offset: number;
    public limit: number;

    public sort: Sort;
    public sortField: string;

    constructor() {
        this.errorSys = new ErrorSys();
        this.total = 0;

        this.offset = 0;
        this.limit = 20;
        this.sort = Sort.asc;
        this.sortField = 'id';
    }


    /**
     * Список объектов
     */
    public async list(): Promise<FinchBase[]> {
        this.total = 0;
        return [];
    }

     /**
     * Синхронизация объекта с данными в базе
     * Все данные объекта заменяются данными базы
     * @param id[] - список id для синхронизации
     */
    public async sync(id: number[]): Promise<FinchBase[]> {       
        this.total = 0;
        return [];
    }

}