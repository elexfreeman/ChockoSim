import FinchBase from '../../Sys/FinchBase';
import Delivery from '../Delivery/Delivery';
import UserDelivery from './UserDelivery';


/**
 * Пользователь системы
 */
export default class User extends FinchBase {


    public login: string;

    public password: string;

    public delivery: Delivery[] = []; // список доставок пользователя

    protected userDelivery: UserDelivery; // конструктор доставок пользователя

    constructor() {
        super();

        this.userDelivery = new UserDelivery(this);
    }




}