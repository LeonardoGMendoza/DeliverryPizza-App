import React, { useState } from 'react';
import axios from 'axios';

const StartConsumer = () => {
  const [status, setStatus] = useState('');

  const startConsumer = async () => {
    try {
      // Envia a requisição para iniciar o consumidor no backend
      const response = await axios.post('https://localhost:7214/api/rabbitmq/start-consumer');
      setStatus(response.data); // Atualiza o estado com a resposta
      console.log(response.data); // Imprime no console a resposta do backend
    } catch (error) {
      console.error('Erro ao iniciar o consumidor:', error);
      setStatus('Erro ao iniciar o consumidor');
    }
  };

  return (
    <div>
      <h2>Controle do Consumidor RabbitMQ</h2>
      <button onClick={startConsumer}>Iniciar Consumidor</button>
      <p>Status: {status}</p>
    </div>
  );
};

export default StartConsumer;
