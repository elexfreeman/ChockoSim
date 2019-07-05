import FinchBaseList from '../../Sys/FinchBaseList';
import Delivery from '../Delivery/Delivery';
import User from './User';


/**
 * Список доставок пользователя
 */
export default class UserDeliveryList extends FinchBaseList {

    private user: User;


    constructor(user: User) {
        super();
        this.user = user;
    }

    /**
     * Список доставок пользователя
     */
    async list(): Promise<Delivery[]> {

        let res: Delivery[];
        if(this.user.id) {
            res = []
        } else {
           res = [];
        }

        return res;
    }


}