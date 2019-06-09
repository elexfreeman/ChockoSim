import BaseObject from '../../Sys/BaseObject';
import Core from '../../Sys/Core';


/**
 * Базовый продукт
 */
export default class BaseProduct extends BaseObject {

    /* Основние свойства продукта */
    public id?: number;
   
    public basePrice: number; // себестоимость
    public shelfLife: number; //срок годности в днях
    public createAt: string; // дата производства
    public isExpired: boolean; // продукт просрочен


    /**
     * 
     * @param item - основные поля из DB
     * @param date - дата создания
     */
    constructor(core: Core, item: any) {
        super(core);

        this.id = item['id'];
        this.caption = item['caption'];
        this.basePrice = item['basePrice'];
        this.shelfLife = item['shelfLife'];
        this.createAt = core.Now();
        this.isExpired = false;

    }

    /**
     * Во времени изменяется состояние просроченности shelfLife
     */
    public async Tick() {

        /* проверка просроченности */
        if (this.core.Life() > this.shelfLife) {
            this.isExpired = true;            
            /* если продукт просрочен то его базовая стоимость = 0 */
            this.basePrice = 0;
        }
    }

    public Print() {
        console.log('id: ', this.id);
        console.log('caption: ', this.caption);
        console.log('basePrice: ', this.basePrice);
        console.log('shelfLife: ', this.shelfLife);
        console.log('createAt: ', this.createAt);
        console.log('isExpired: ', this.isExpired);
    }


}