import { User } from './user';

export class Message{
    constructor(public content: string = '', public author: User = new User(), public date: number = Date.now()){ }
}