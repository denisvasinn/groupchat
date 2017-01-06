import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

import { Message } from './message';

@Injectable()

export class SocketService{
    private socket: any;
    private uri: string = 'https://simple-group-chat.herokuapp.com/';

    constructor(){ }

    connect(){
        this.socket = io(this.uri);
        return this;
    }

    disconnect(){
        this.socket.emit('disconnect');
        return this;
    }

    send(message: Message){
        this.socket.emit('add-message', message);
        return this;
    }

    getMessages(): Observable<Message>{
        let observable = new Observable<Message>((observer: any) => {
            this.socket.on('message', (data: Message) => observer.next(data));
        });
        return observable;
    }
}

