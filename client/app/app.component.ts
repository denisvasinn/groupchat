import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ChatComponent } from './chat.component';

import { User } from './user';

@Component({
  selector: 'app',
  template: `
  <header>
  </header>
  <article>
    <chat class='chat'></chat>
  </article>
  <footer>
    <div id='bar' [ngStyle]='{"background-position": scroll}' (window:scroll)='onScroll($event)'></div>
  </footer>
  `
})
export class AppComponent{
   private scroll: string;

   onScroll(event: any){
     let step = 100/event.view.scrollMaxY;
     this.scroll = `left ${event.pageY * step}%`;
   }
}