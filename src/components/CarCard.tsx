interface Car {
  id: number;
  model: string;
  type: string;
  price: number;
  image: string;
}

export default function CarCard({ car }: { car: Car }) {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`Tarjeta del modelo ${car.model}`}
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '1rem',
        width: '250px',
        background: '#fff',
        transition: 'transform 0.2s',
        cursor: 'pointer',
        outline: 'none',
      }}
      onClick={() => alert(`Gracias por tu interés en el ${car.model}!`)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          alert(`Gracias por tu interés en el ${car.model}!`);
        }
      }}
    >
      <img
        src={car.image}
        alt={`Foto del ${car.model}`}
        style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }}
        onError={(e) => {
          e.currentTarget.src = 'https://via.placeholder.com/250x150?text=Imagen+no+disponible';
        }}
      />
      <h2>{car.model}</h2>
      <p>Tipo: <strong>{car.type}</strong></p>
      <p>Precio: <strong>${car.price}</strong></p>
      <button
        aria-label={`Contactar por ${car.model}`}
        style={{
          marginTop: '1rem',
          backgroundColor: '#2563eb',
          color: '#fff',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Contactar
      </button>
    </div>
  );
}
