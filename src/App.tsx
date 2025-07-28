import Hero from './components/Hero';
import CarCard from './components/CarCard';

const cars = [
  {
    id: 1,
    model: 'Toyota Corolla',
    type: 'Sedán',
    price: 10500,
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/2018_Toyota_Corolla_%28MZEA12R%29_Ascent_Sport_hatchback_%282018-11-02%29_01.jpg',
  },
  {
    id: 2,
    model: 'Mazda CX-5',
    type: 'SUV',
    price: 15500,
    image: 'https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_960_720.jpg',
  },
  {
    id: 3,
    model: 'Chevrolet Spark',
    type: 'Compacto',
    price: 8200,
    image: 'https://cdn.autobild.es/sites/navi.axelspringer.es/public/bdc/dc/fotos/ChevroletSpark_2013_01.jpg?tf=3840x',
  },
];

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', background: '#f0f2f5' }}>
      <Hero />
      <section
        style={{
          display: 'flex',
          gap: '1rem',
          padding: '2rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </section>
    </div>
  );
}

export default App;
