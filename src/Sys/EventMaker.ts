import BaseObject from './BaseObject';

/**
 * события объектов
 */
class EventMaker {

    private objects: BaseObject[] = [];

    public Add(item: BaseObject) {
        this.objects.push(item);
    }

    public dispatch() {
        for (let i = 0; i < this.objects.length; i++) {

            /* если объект удаленый */
            if (this.objects[i].isDeleted) {
                delete this.objects[i];
            } else {
                /* отрабатываем тик */
                this.objects[i].Tick();
            }

        }
    }

}

const e = new EventMaker();
export default e; 