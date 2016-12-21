"use strict";
var User = (function () {
    function User(uid, name) {
        if (uid === void 0) { uid = '1'; }
        if (name === void 0) { name = 'New User'; }
        this.uid = uid;
        this.name = name;
    }
    return User;
}());
exports.User = User;
