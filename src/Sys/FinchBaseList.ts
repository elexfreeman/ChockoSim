import FinchBase from './FinchBase';
import ErrorSys from './ErrorSys';

/**
 * Базовый список
 */
export default class FinchBaseList {

    protected db: any; // драйвер DB

    public errorSys: ErrorSys; // обработчик ошибок

    /**
     * Список объектов
     */
    public async list(): Promise<FinchBase[]> {
        return [];
    }

     /**
     * Синхронизация объекта с данными в базе
     * Все данные объекта заменяются данными базы
     * @param id[] - список id для синхронизации
     */
    public async sync(id: number[]): Promise<FinchBase[]> {       

        return [];
    }

}