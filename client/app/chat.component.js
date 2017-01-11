"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var socket_service_1 = require("./socket.service");
var message_1 = require("./message");
var user_1 = require("./user");
var ChatComponent = (function () {
    function ChatComponent(socketService) {
        this.socketService = socketService;
        this.messages = [];
        this.draftMessage = new message_1.Message();
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        var name;
        while (!name) {
            name = prompt('What is your name?');
        }
        this.currentUser = new user_1.User((Math.random() * 10).toString(), name);
        this.socketService
            .connect()
            .getMessages()
            .subscribe(function (message) { _this.messages.push(message); setTimeout(function () { return _this.scrollToBottom(); }); });
        this.socketService.send(new message_1.Message(name + " joined.", new user_1.User('_0', 'System')));
    };
    ChatComponent.prototype.send = function (event) {
        this.draftMessage.author = this.currentUser;
        this.socketService.send(this.draftMessage);
        this.draftMessage = new message_1.Message();
        return false;
    };
    ChatComponent.prototype.scrollToBottom = function () {
        window.scrollBy(0, window['scrollMaxY'] || 5000);
    };
    ChatComponent.prototype.sendTo = function (event) {
        var to = event.target.childNodes[0].data + ', ';
        this.draftMessage = new message_1.Message(to, this.currentUser);
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    core_1.Component({
        selector: 'chat',
        template: "\n    <ul class='chat-window'>\n        <chat-message class='chat-messages' *ngFor='let message of messages' [message]='message' [currentUser]='currentUser' (click)='sendTo($event)'></chat-message>\n    </ul>\n    <div >\n        <form class='chat-input' #messageForm='ngForm' (ngSubmit)='send($event)'>\n            <textarea class='form-control' placeholder='Write your message....' name='content' id='content'\n            [(ngModel)]='draftMessage.content' #content='ngModel' (keydown.enter)='send($event)'></textarea>\n            <input type='submit' class='btn' value='Submit'>\n        </form>\n    </div>\n    ",
        providers: [socket_service_1.SocketService]
    }),
    __param(0, core_1.Inject(socket_service_1.SocketService))
], ChatComponent);
exports.ChatComponent = ChatComponent;
