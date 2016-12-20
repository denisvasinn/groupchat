import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
@Injectable()

export class SocketService{
    private socket: any;
    private uri: string = 'http://localhost:3000';

    constructor(){ }

    connect(){
        this.socket = io(this.uri);
        return this.socket;
    }

    disconnect(): void{
        this.socket.emit('disconnect');
    }

    send(message: any){
        this.socket.on('add-message', message);
    }

    getMessages(): Observable<any>{
        let observable = new Observable((observer: any) => {
            this.socket.on('message', (data: any) => observer.next(data));
        });
        return observable;
    }
}

