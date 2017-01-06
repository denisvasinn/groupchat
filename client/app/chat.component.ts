import { Component, Inject, OnInit } from '@angular/core';

import { ChatMessageComponent } from './chat-message.component';

import { SocketService } from './socket.service';

import { Message } from './message';
import { User } from './user';

@Component({
    selector: 'chat',
    template: `
    <ul class='chat-window'>
        <chat-message class='chat-messages' *ngFor='let message of messages' [message]='message' [currentUser]='currentUser'></chat-message>
    </ul>
    <div >
        <form class='chat-input' #messageForm='ngForm' (ngSubmit)='send($event)'>
            <textarea class='form-control' placeholder='Write your message....' name='content' id='content'
            [(ngModel)]='draftMessage.content' #content='ngModel' (keydown.enter)='send($event)'></textarea>
            <input type='submit' class='btn' value='Submit'>
        </form>
    </div>
    `,
    providers: [SocketService]
})

export class ChatComponent implements OnInit{
    private messages: Message[] = [];
    private draftMessage: Message = new Message();
    private currentUser: User;
    private incoming: boolean;
    
    constructor(@Inject(SocketService) private socketService: SocketService){ }

    ngOnInit(): void{
        let name = prompt('What is your name?');
        this.currentUser = new User((Math.random()*10).toString(), name);
        this.socketService
        .connect()
        .getMessages()
        .subscribe((message: Message) => { this.messages.push(message); setTimeout(() => this.scrollToBottom()); } );

        this.socketService.send(new Message(`${name} joined.`, new User('_0', 'System')));
    }

    send(event: any){
        this.draftMessage.author = this.currentUser;
        this.socketService.send(this.draftMessage);
        this.draftMessage = new Message();
        return false;
   }

    scrollToBottom(): void {
        window.scrollBy(0, window.scrollMaxY);
        //console.log(window.scrollMaxY);
        
    }
}