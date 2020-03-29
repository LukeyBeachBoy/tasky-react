import {v4 as uuidv4} from 'uuid';

export default class Todo {
    public id: string;

    constructor(public label: string, public done = false) {
        this.id = uuidv4();
    }
}
