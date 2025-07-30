// src/signalRConnection.ts
import * as signalR from '@microsoft/signalr';

const connection = new signalR.HubConnectionBuilder()
  .withUrl('https://localhost:5001/notificationHub') // Cambia al puerto real de tu backend
  .withAutomaticReconnect()
  .build();

connection.start().catch(err => console.error('SignalR Connection Error:', err));

export default connection;
