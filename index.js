// Setup basic express server
var server = require('http').createServer(function (){});
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

server.listen(port, function () {
    console.log('Server listening at port %d', port);
});

var numUsers = 0;

io.on('connection', function (socket) {
    numUsers++;
    var connectionNum = numUsers;
    console.log ("Socket "+connectionNum+" - connected");
    socket.on('ping', function (data) {
        console.log ("Socket "+connectionNum+" - sent ping");
        socket.emit('pong', data);
    });

    socket.on('disconnect', function () {
        console.log ("Socket "+connectionNum+" - disconnected");
        numUsers--;
    });
});