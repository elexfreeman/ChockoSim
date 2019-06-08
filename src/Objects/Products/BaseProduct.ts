import BaseObject from '../../Sys/BaseObject';
import SysMoment from '../../Sys/SysMoment';


/**
 * Базовый продукт
 */
export default class BaseProduct extends BaseObject {

    private date: SysMoment;

    public id?: number;
    public caption: number; // название   
    public price: number; // цена
    public shelfLife: number; //срок годности в днях
    public createAt: string; // дата производства
    public isExpired: boolean; // продукт просрочен


    /**
     * 
     * @param item - основные поля из DB
     * @param date - дата создания
     */
    constructor(item: any, date: SysMoment) {
        super();

        this.date = date;

        this.id = item['id'];
        this.caption = item['caption'];
        this.price = item['price'];
        this.shelfLife = item['shelfLife'];
        this.createAt = date.Now();
        this.isExpired = false;

    }

    /**
     * Во времени изменяется состояние просроченности shelfLife
     */
    public async Tick() {
       
        /* проверка просроченности */
        if (this.date.Life() > this.shelfLife ) {
            this.isExpired = true;
        }
    }

    public Print() {
        console.log('id: ', this.id);
        console.log('caption: ', this.caption);
        console.log('price: ', this.price);
        console.log('shelfLife: ', this.shelfLife);
        console.log('createAt: ', this.createAt);
    }


}