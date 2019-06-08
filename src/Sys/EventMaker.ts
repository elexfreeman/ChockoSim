import BaseObject from './BaseObject';

/**
 * события объектов
 */
class EventMaker {

    /* массив обрабатываемых объектов */
    private objects: BaseObject[] = [];

    /**
     * Добавляет в общий цикл объект
     * @param item - базавой любой объект
     */
    public Add(item: BaseObject) {
        this.objects.push(item);
    }

    /**
     * срабатыванеи общего события Tick()
     */
    public async Tick() {

        for (let i = 0; i < this.objects.length; i++) {

            /* если объект удаленый */
            if (this.objects[i].isDeleted) {
                delete this.objects[i];
                this.objects.splice(i, 1);
            } else {
                /* отрабатываем тик */
                await this.objects[i].Tick();
            }
        }

    }

    public Print() {
        for (let i = 0; i < this.objects.length; i++) {
            this.objects[i].Print();
        }
    }

}

const e = new EventMaker();
export default e; 