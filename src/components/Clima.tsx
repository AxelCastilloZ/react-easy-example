import React from 'react';
import type { Pronostico } from '../App';

interface Props {
  pronosticos: Pronostico[];
}

const Clima: React.FC<Props> = ({ pronosticos }) => {
  return (
    <div>
      {pronosticos.map((dia, index) => (
        <div key={index} style={{ borderBottom: '1px solid #ccc', marginBottom: '1rem' }}>
          <p>📅 Fecha: {new Date(dia.date).toLocaleDateString()}</p>
          <p>🌡️ Temp. C: {dia.temperatureC}°C</p>
          <p>🌡️ Temp. F: {dia.temperatureF}°F</p>
          <p>🌤️ Resumen: {dia.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default Clima;
