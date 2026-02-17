import { useEffect, useState } from 'react';
import HeliCard from '../components/HeliCard';

function Helis() {
  const [helicopters, setHelicopters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/helicopters')
      .then(res => res.json())
      .then(data => {
        setHelicopters(data);
        setLoading(false);
      })
      .catch(err => console.error("Error cargando helicópteros:", err));
  }, []);

  if (loading) {
    return <div className="text-center py-20 text-azul-oscuro font-bold text-xl">Cargando flota...</div>;
  }

  return (
    <main className="max-w-[1400px] mx-auto px-6 py-12">
      <section className="text-center mb-12">
        <h1 className="font-heading text-4xl font-bold text-azul-oscuro mb-4">Nuestra flota</h1>
        <p className="text-gris text-lg max-w-2xl mx-auto">
          Descubre la experiencia de volar con los modelos más exclusivos
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {helicopters.map(helicopter => (
            <HeliCard key={helicopter.id} helicopter={helicopter} />
        ))}
      </section>
    </main>
  );
}

export default Helis;