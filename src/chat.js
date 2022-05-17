(function (window, document, JSON) {
    'use strict';
    let url = 'ws://40.122.237.236:8080/chat',
        ws = new WebSocket(url),
        today = new Date(),
        chat = document.getElementById('chat'),
        btn = document.getElementById('btnSend'),
        nombre = document.getElementById('nombre'),
        mensaje = document.getElementById('mensaje');

    const audio = document.createElement('audio');
    audio.setAttribute('src','assets/mp3/sound.mp3');

    ws.onopen = () => {
        console.log('conectado...');
        if(localStorage.chat) {
            chat.value = localStorage.chat;
        }
    };
    ws.onclose = () => console.log('desconectado...');
    ws.onmessage = (e) => {
        let data = JSON.parse(e.data);
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        chat.value += `[${time}] ${data.nombre} :\n${data.mensaje}\n`
        chat.scrollTop = chat.scrollHeight;
        if(data.nombre !== nombre.value) {
            audio.pause();
            audio.currentTime = 0;
            audio.play();
        }
        localStorage.setItem('chat', chat.value);
    };

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        let msg = {
            nombre: nombre.value,
            mensaje: mensaje.value
        };

        if(msg.nombre !== '' && msg.mensaje !== '') {
            ws.send(JSON.stringify(msg));
        }

        mensaje.value = '';
    });
})(window, document, JSON);