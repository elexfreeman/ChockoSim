import FinchBase from '../../Sys/FinchBase';
import User from '../User/User';


/**
 * Пользователь системы
 */
export default class Delivery extends FinchBase {


    public caption: string; // название
    public description: string; // описание

    public data_create: string; // дата создания
    public data_expiration: string; // дата окончания
    public data_close: string; // дата закрытия сделки

    public creator: User; // создатель
    public courier: User; // курьер

    public status: number; // статус    

    public location: string; // откуда взять посылку
    public destination: string; // куда доставить посылку

    constructor() {
        super();
    }


}