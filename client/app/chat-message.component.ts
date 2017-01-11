import { Component } from '@angular/core';

import { Message } from './message';

@Component({
    selector: 'chat-message',
    template: `
    <li class='chat-message' [ngClass]='message.author.uid==currentUser.uid?"author-message":"user-message"'>
        <div class='message-info'>
          <a href='#'>{{message.author.name}}</a>
          <span>{{message.date | date}}</span>
        </div>
        <a class='message-photo' href='#'>
          <img src='images/photo.png' alt='User photo' title=''>
        </a>
        <p>{{message.content}}</p>
    </li>
    `,
    inputs: ['message', 'currentUser']
})

export class ChatMessageComponent{
    private message: Message;

    constructor(){ }
}