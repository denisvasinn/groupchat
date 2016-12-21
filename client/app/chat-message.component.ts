import { Component, OnInit } from '@angular/core';

import { Message } from './message';

@Component({
    selector: 'chat-message',
    template: `
    <li class='message' [ngClass]='message.author.uid==currentUser.uid?"author-message":"user-message"'>
        <div class='info'>
          <a href='#'>{{message.author.name}}</a>
          <span>{{message.date | date}}</span>
        </div>
        <a class='photo' href='#'>
          <img src='images/photo.png' alt='User photo' title=''>
        </a>
        <p>{{message.content}}</p>
      </li>
    `,
    inputs: ['message', 'currentUser']
})

export class ChatMessageComponent implements OnInit{
    private message: Message;

    constructor(){ }

    ngOnInit(): void{
        console.log(this.message)
    }

}