import React, { useState, useEffect } from 'react';

function WebSocketScreen() {
  const [message, setMessage] = useState('Идёт соединение');
  const [response, setResponse] = useState('');

  useEffect(() => {
    const ws = new WebSocket('wss://echo.websocket.org/');

    ws.onopen = () => {
      setMessage('Соединение установлено');
    };

    ws.onmessage = (event) => {
      setResponse(event.data);
    };

    ws.onerror = (error) => {
      console.error('Ошибка:', error);
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div>
      <h2>WebSocket</h2>
      <p>Статус соединения:&nbsp;
        <b>{message}</b>
      </p>
      <p>Ответ:&nbsp;
        <b>{response}</b>
      </p>
    </div>
  );
}

export default WebSocketScreen;