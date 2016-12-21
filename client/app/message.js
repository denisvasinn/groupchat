"use strict";
var user_1 = require("./user");
var Message = (function () {
    function Message(content, author, date) {
        if (content === void 0) { content = ''; }
        if (author === void 0) { author = new user_1.User(); }
        if (date === void 0) { date = Date.now(); }
        this.content = content;
        this.author = author;
        this.date = date;
    }
    return Message;
}());
exports.Message = Message;
