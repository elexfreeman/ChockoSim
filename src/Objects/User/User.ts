import FinchBase from '../../Sys/FinchBase';
import Delivery from '../Delivery/Delivery';
import UserDeliveryList from './UserDeliveryList';


/**
 * Пользователь системы
 */
export default class User extends FinchBase {


    public login: string;

    public password: string;

    public delivery: Delivery[] = []; // список доставок пользователя

    protected userDelivery: UserDeliveryList; // конструктор доставок пользователя

    constructor() {
        super();

        this.userDelivery = new UserDeliveryList(this);
    }




}