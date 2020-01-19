// Make connection
var socket = io.connect('http://localhost:4000');

// Query DOM
var inputHandle  = document.getElementById('inputHandle');
var inputMessage = document.getElementById('inputMessage');
var buttonSend   = document.getElementById('buttonSend');
var output       = document.getElementById('output');

// Emit event

buttonSend.addEventListener('click', function() {
    socket.emit('chat', {
        handle: inputHandle.value,
        message: inputMessage.value,
    });
});

// Listen for events
socket.on('chat', function(data) {
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});