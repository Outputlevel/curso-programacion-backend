console.log("Hola desde un archivo publico!");

const socket = io();

socket.emit('message', '¡Hola, me estoy comunicando desde el websocket!');

socket.on('evento_para_socket_individual', data => {
    console.log('>>>>>>>> evento_para_socket_individual\n', data);
})

socket.on('evento_para_todos_menos_el_socket_actual', data => {
    console.log('>>>>>>>> evento_para_todos_menos_el_socket_actual\n', data);
})

socket.on('evento_para_todos', data => {
    console.log('>>>>>>>> evento_para_todos\n', data);
});

//Evento Personalizado
socket.emit('joaco', 'Hola Coders');