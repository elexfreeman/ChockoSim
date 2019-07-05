import FinchBase from '../../Sys/FinchBase';
import Delivery from '../Delivery/Delivery';
import User from './User';


/**
 * Список доставок пользователя
 */
export default class UserDelivery extends FinchBase {

    private user: User;


    constructor(user: User) {
        super();
        this.user = user;
    }

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