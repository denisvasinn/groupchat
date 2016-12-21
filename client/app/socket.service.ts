import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

import { Message } from './message';

@Injectable()

export class SocketService{
    private socket: any;
    private uri: string = 'http://localhost:3000';

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

    getMessages(): Observable<any>{
        let observable = new Observable((observer: any) => {
            this.socket.on('message', (data: Message) => observer.next(data));
        });
        return observable;
    }
}

