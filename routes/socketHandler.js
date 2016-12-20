'use strict';
var users = [], sockets = [];
module.exports = function (socket){
    sockets.push(socket);
    console.log('New connection');

    socket.on('disconnect', (data) => {
        sockets.splice(sockets.indexOf(socket), 1);
        console.log('Disconnect');
    });

}