(function() {
    var socket = io();
    var ping = window.getElementById('ping');
    var pong = window.getElementById('pong');

    socket.on('pong', function (message)
    {
        ping.innerHTML = message;
    });

    function sendPing ()
    {
        socket.emit(ping.value)
    }

    ping.addEventListener('input', sendPing);
})();