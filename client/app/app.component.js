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
var AppComponent = (function () {
    function AppComponent(socketService) {
        this.socketService = socketService;
        this.name = 'Chat';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.socketService.connect();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>Hello {{name}}</h1>",
        providers: [socket_service_1.SocketService]
    }),
    __param(0, core_1.Inject(socket_service_1.SocketService))
], AppComponent);
exports.AppComponent = AppComponent;
