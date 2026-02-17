import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useReservation } from './ReservationContext';
import { useUser } from './UserContext';

const ProductInfo = ({ helicopter }) => {
  const { openModal } = useReservation();
  const { user } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  const handleReserve = () => {
    if (user) {
      openModal(helicopter.id, helicopter.model);
    } else {
      navigate('/login', { state: { from: location } });
    }
  };

  return (
    <section className="mb-8 border-b border-gray-100 pb-12">
      <h1 className="font-heading text-4xl md:text-6xl text-azul-oscuro mb-2">{helicopter.brand} {helicopter.model}</h1>
      <p className="text-xl text-gris mb-8">Detalles de la Flota Moderna</p>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        <div className="flex-1 w-full lg:max-w-[50%] rounded-xl overflow-hidden shadow-2xl">
          <img src={helicopter.image} alt={`Foto de ${helicopter.model}`} className="w-full h-auto block object-cover" />
        </div>

        <div className="flex-1 w-full lg:max-w-[50%]">
          <p className="text-lg text-gris leading-relaxed mb-8">{helicopter.description}</p>
          <h3 className="font-heading text-2xl text-azul-oscuro mb-4 border-b border-gray-100 pb-2">Características Principales:</h3>
          <ul className="list-none p-0 mb-8 space-y-3">
            <li className="relative pl-6 text-gris font-body">
              <span className="absolute left-0 text-naranja font-bold">✓</span> Pasajeros: {helicopter.capacity}
            </li>
            {helicopter.features.map((feature, index) => (
              <li key={index} className="relative pl-6 text-gris font-body">
                <span className="absolute left-0 text-naranja font-bold">✓</span> {feature}
              </li>
            ))}
          </ul>

          <button 
            onClick={handleReserve}
            className="bg-naranja text-white font-bold text-lg py-3 px-8 rounded-lg shadow-lg hover:bg-azul-oscuro transition-colors w-full md:w-auto uppercase tracking-wide"
          >
            Reservar {helicopter.name} Ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;