import { Component, Inject, OnInit } from '@angular/core';

import { ChatMessageComponent } from './chat-message.component';

import { SocketService } from './socket.service';

import { Message } from './message';
import { User } from './user';

@Component({
    selector: 'chat',
    template: `
    <ul class='message-window'>
        <chat-message class='messages' *ngFor='let message of messages' [message]='message' [currentUser]='currentUser'></chat-message>
        <div class='input'>
            <form #messageForm='ngForm' (ngSubmit)='send($event)'>
                <textarea class='form-control' placeholder='Write your message....' name='content' id='content'
                [(ngModel)]='draftMessage.content' #content='ngModel' (keydown.enter)='send($event)'></textarea>
                <input type='submit' class='btn' value='Submit'>
            </form>
        </div>
    </ul>
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
        //let name = prompt('What is your name?');
        this.currentUser = new User((Math.random()*10).toString(), "Denis");
        this.socketService
        .connect()
        .getMessages()
        .subscribe((message: Message) => { this.messages.push(message); setTimeout(() => this.scrollToBottom()); } );

        this.socketService.send(new Message('Welcome!', new User('_0', 'System')))
        for(let i=0; i<=10; i++){
            this.socketService.send(new Message(`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer sed arcu quis velit semper pulvinar. Praesent aliquam nulla odio, in iaculis quam aliquet ac.
            Praesent dictum dui ut dui aliquet malesuada. Vivamus eget arcu et turpis efficitur ultrices.
            Aliquam a luctus urna, a malesuada mauris. Nam efficitur vitae quam volutpat fringilla.`, new User('_0', 'System')));
        }
           

    }

    send(event: any){
        this.draftMessage.author = this.currentUser;
        this.socketService.send(this.draftMessage);
        this.draftMessage = new Message();
        return false;
   }

    scrollToBottom(): void {
        console.log(this);
    }
}