// Make connection
var socket = io.connect('http://localhost:4000');

// Query DOM
var inputHandle  = document.getElementById('inputHandle'),
    inputMessage = document.getElementById('inputMessage'),
    buttonSend   = document.getElementById('buttonSend'),
    output       = document.getElementById('output'),
    feedback     = document.getElementById('feedback');

// Emit event

buttonSend.addEventListener('click', function() {
    socket.emit('chat', {
        handle: inputHandle.value,
        message: inputMessage.value,
    });
});

inputMessage.addEventListener('keypress', function() {
    socket.emit('typing', inputHandle.value);
});

// Listen for events
socket.on('chat', function(data) {
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
    feedback.innerHTML = '';
});

socket.on('typing', function(data) {
    feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
});