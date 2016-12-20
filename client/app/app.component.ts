import { Component, OnInit, Inject } from '@angular/core';

import { SocketService } from './socket.service';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
  providers: [SocketService]
})
export class AppComponent implements OnInit{
   private name = 'Chat';

   constructor(@Inject(SocketService) private socketService: SocketService){ }

   ngOnInit(): void{
     this.socketService.connect();
   }
}