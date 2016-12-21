import { Component, Inject, OnInit } from '@angular/core';

import { ChatMessageComponent } from './chat-message.component';

import { SocketService } from './socket.service';

import { Message } from './message';
import { User } from './user';

@Component({
    selector: 'chat',
    template: `
    <ul class='messages'>
        <chat-message *ngFor='let message of messages' [message]='message' [user]='currentUser'> </chat-message>
        <form #messageForm='ngForm' (ngSubmit)='send($event)'>
            <textarea class='form-control' placeholder='Write your message....' name='content' id='content'
            [(ngModel)]='draftMessage.content' #content='ngModel' (keydown.enter)='send($event)'></textarea>
            <input type='submit' class='btn' value='Submit'>
        </form>
    </ul>
    `,
    providers: [SocketService]
})

export class ChatComponent implements OnInit{
    private messages: Message[];
    private draftMessage: Message;
    private currentUser: User;
    
    constructor(@Inject(SocketService) private socketService: SocketService){
        this.messages = [];
        this.draftMessage = new Message();
    }

    ngOnInit(): void{
        //let name = prompt('What is your name?');
        this.currentUser = new User(undefined, "Denis");
        this.socketService.connect()
        .getMessages()
        .subscribe((message: Message) => { this.messages.push(message);});
        this.socketService.send(new Message('hello', new User()));
    }

    send(event: any){
        this.draftMessage.author = this.currentUser;
        this.socketService.send(this.draftMessage);
        this.draftMessage = new Message();
   }
}