(function (window, document, JSON) {
    'use strict';
    let url = 'ws://40.122.237.236:8080/chat',
        ws = new WebSocket(url),
        chat = document.getElementById('chat'),
        btn = document.getElementById('btnSend'),
        nombre = document.getElementById('nombre'),
        mensaje = document.getElementById('mensaje');

    ws.onopen = () => console.log('conectado...');
    ws.onclose = () => console.log('desconectado...');
    ws.onmessage = (e) => {
        let data = JSON.parse(e.data);
        console.log(data);
        chat.innerHTML += `<br>Nombre: ${data.nombre} dice: ${data.mensaje}`
    };

    btn.addEventListener('click', () => {
        let msg = {
            nombre: nombre.value,
            mensaje: mensaje.value
        };

        console.log(msg);

        ws.send(JSON.stringify(msg));
    });
})(window, document, JSON);