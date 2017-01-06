"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var io = require("socket.io-client");
var SocketService = (function () {
    function SocketService() {
        this.uri = 'https://simple-group-chat.herokuapp.com/';
    }
    SocketService.prototype.connect = function () {
        this.socket = io(this.uri);
        return this;
    };
    SocketService.prototype.disconnect = function () {
        this.socket.emit('disconnect');
        return this;
    };
    SocketService.prototype.send = function (message) {
        this.socket.emit('add-message', message);
        return this;
    };
    SocketService.prototype.getMessages = function () {
        var _this = this;
        var observable = new Observable_1.Observable(function (observer) {
            _this.socket.on('message', function (data) { return observer.next(data); });
        });
        return observable;
    };
    return SocketService;
}());
SocketService = __decorate([
    core_1.Injectable()
], SocketService);
exports.SocketService = SocketService;
