import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useReservation } from './ReservationContext';
import { useUser } from './UserContext';

const HeliCard = ({ helicopter }) => {
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
    <article className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hover:shadow-xl border border-gray-100 h-full">
      <div className="h-64 overflow-hidden relative">
        <img 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
            src={helicopter.image} 
            alt={helicopter.model} 
        />
        <span className="absolute top-4 right-4 bg-azul-oscuro text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
            {helicopter.brand}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-heading text-2xl font-bold text-azul-oscuro mb-2">{helicopter.model}</h3>
        <p className="text-gris text-sm mb-4 line-clamp-3 flex-grow">{helicopter.description}</p>
        <div className="flex justify-between items-center py-4 border-t border-gray-100 mb-4">
            <span className="text-azul-oscuro font-medium">{helicopter.capacity} Pasajeros</span>
            <span className="text-azul-claro font-bold text-xl">{helicopter.price}€<span className="text-xs text-gris font-normal">/h</span></span>
        </div>

        <div className="flex gap-4">
          <Link to={`/details/${helicopter.id}`} className="flex-1 text-center py-2 border border-azul-claro text-azul-claro font-bold rounded-lg hover:bg-azul-claro hover:text-white transition-colors">
            Ver más
          </Link>
          <button 
            onClick={handleReserve}
            className="flex-1 text-center py-2 bg-naranja text-white font-bold rounded-lg hover:bg-white hover:text-naranja border border-naranja transition-colors"
          >
            Reservar
          </button>
        </div>
      </div>
    </article>
  );
};

export default HeliCard;