import { Component, Input } from '@angular/core';

import { Message } from './message';
import { User } from './user';

@Component({
    selector: 'chat-message',
    template: `
    <li class='message'>
        <div class='info'>
          <a href='#'>{{message.author.name}}</a>
          <span>{{message.date | date}}</span>
        </div>
        <a class='photo' href='#'>
          <img src='images/photo.png' alt='User photo' title=''>
        </a>
        <p>{{message.content}}</p>
      </li>
      {{user.name}}
    `,
    inputs: ['message']
})

export class ChatMessageComponent{
    private message: Message = new Message();
    private _user: User;
     @Input() 
     set user(user: User) {
         this._user = user;
     }
     get user(): User { return this._user; }
    private incoming: boolean;

    constructor(){console.log(this._user); console.log(this.message)}

}