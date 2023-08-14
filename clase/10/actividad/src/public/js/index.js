const socket = io(); // Conectar con el servidor de Socket.io

const textInput = document.querySelector("#text-input");
const showText = document.querySelector("#show-text");
const chatInput = document.querySelector("#chat-input");
const chatMessages = document.querySelector("#chat-messages");

textInput.addEventListener("input", (e) => {
    socket.emit("message", textInput.value); // Enviar el mensaje al servidor
});

socket.on('messageShow', data => {
    showText.textContent = data;
});

socket.on('chatMessages', data => {
    let chat = '';
    for (let item of data) {
        chat += `${item.socketId}: ${item.message} <br>`;
    }

    chatMessages.innerHTML = chat;
});

function send() {
    socket.emit('chatMessage', chatInput.value);
    chatInput.value = '';
}