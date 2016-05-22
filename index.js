// Setup basic express server
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

server.listen(port, function () {
    console.log('Server listening at port %d', port);
});

var numUsers = 0;

io.on('connection', function (socket) {
    numUsers++;

    socket.on('ping', function (data) {

        socket.emit('pong', data);
    });

    socket.on('disconnect', function () {
        numUsers--;
    });
});