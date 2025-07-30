import React, { useEffect, useState } from 'react';
import Clima from './Clima';
import connection from './signalRConnection';

export interface Pronostico {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

const App: React.FC = () => {
  const [pronosticos, setPronosticos] = useState<Pronostico[]>([]);
  const [mensajes, setMensajes] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch clima
    fetch('https://localhost:7286/WeatherForecast')
      .then(res => {
        if (!res.ok) throw new Error('Error al obtener el pronóstico');
        return res.json();
      })
      .then(data => setPronosticos(data))
      .catch(err => setError(err.message));

    // Configurar SignalR
    connection.on('ReceiveMessage', (user: string, message: string) => {
      setMensajes(prev => [...prev, `${user}: ${message}`]);
    });

    return () => {
      connection.off('ReceiveMessage');
    };
  }, []);

  const sendMessage = () => {
    connection.invoke('SendMessage', 'ReactUser', '¡Hola desde React con clima!')
      .catch(err => console.error('SignalR send error:', err));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">🌦️ Pronóstico del Clima</h1>
      {error && <p className="text-red-500">{error}</p>}
      <Clima pronosticos={pronosticos} />

      <hr className="my-6" />
      <h2 className="text-lg font-semibold">🟢 Mensajes en tiempo real</h2>
      <button
        onClick={sendMessage}
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Enviar mensaje
      </button>
      <ul className="mt-4 list-disc pl-6">
        {mensajes.map((msg, index) => (
          <li key={index} className="text-gray-800">{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
