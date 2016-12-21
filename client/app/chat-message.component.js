"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ChatMessageComponent = (function () {
    function ChatMessageComponent() {
    }
    ChatMessageComponent.prototype.ngOnInit = function () {
        console.log(this.message);
    };
    return ChatMessageComponent;
}());
ChatMessageComponent = __decorate([
    core_1.Component({
        selector: 'chat-message',
        template: "\n    <li class='message' [ngClass]='message.author.uid==currentUser.uid?\"author-message\":\"user-message\"'>\n        <div class='info'>\n          <a href='#'>{{message.author.name}}</a>\n          <span>{{message.date | date}}</span>\n        </div>\n        <a class='photo' href='#'>\n          <img src='images/photo.png' alt='User photo' title=''>\n        </a>\n        <p>{{message.content}}</p>\n      </li>\n    ",
        inputs: ['message', 'currentUser']
    })
], ChatMessageComponent);
exports.ChatMessageComponent = ChatMessageComponent;
