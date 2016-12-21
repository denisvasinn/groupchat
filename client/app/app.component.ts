import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ChatComponent } from './chat.component';

import { User } from './user';

@Component({
  selector: 'app',
  template: `
  <header>
  </header>
  <article class='conteiner'>
    <chat></chat>
  </article>
  <footer>
    <div id='bar' [ngStyle]='{"background-position": scroll}' (window:scroll)='onScroll($event)'></div>
  </footer>
  `
})
export class AppComponent implements OnInit{
   private scroll: string;

   constructor(){ }

   ngOnInit(): void{ }

   onScroll(event: any){
     let step = 100/event.view.scrollMaxY;
     this.scroll = `left ${event.pageY * step}%`;
   }
}