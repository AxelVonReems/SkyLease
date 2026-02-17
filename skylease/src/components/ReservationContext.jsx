/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';

const ReservationContext = createContext();

export const useReservation = () => {
  return useContext(ReservationContext);
};

export const ReservationProvider = ({ children }) => {
  const { user } = useUser();
  const navigate = useNavigate();
  
  const [isOpen, setIsOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const [helicopterName, setHelicopterName] = useState('');
  const [helicopterId, setHelicopterId] = useState(null);

  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    flight_date: '',
    flight_time: '',
    comments: ''
  });

  // --- CORRECCIÓN: Eliminado el useEffect problemático ---

  const openModal = (id, name) => {
    // 1. Si NO está logueado, redirigimos
    if (!user) {
      navigate('/login'); 
      return; 
    }

    // 2. Preparamos datos del helicóptero
    setHelicopterId(id);
    setHelicopterName(name);

    // 3. ✅ AQUÍ rellenamos el formulario al abrir (Reemplaza al useEffect)
    setFormData({
      full_name: user.username || '', 
      email: user.email || '',       
      phone: '',
      flight_date: '',
      flight_time: '',
      comments: ''
    });

    // 4. Abrimos modal
    setShowSuccess(false);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setShowSuccess(false);
      // Limpiamos el formulario al cerrar
      setFormData({
        full_name: '', email: '', phone: '', flight_date: '', flight_time: '', comments: ''
      });
    }, 300);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: user.id,
          helicopter_id: helicopterId,
          ...formData
        })
      });

      if (response.ok) {
        setShowSuccess(true);
      } else {
        const errorData = await response.json();
        alert('Error: ' + (errorData.message || 'No se pudo reservar'));
      }
    } catch (error) {
      console.error(error);
      alert('Error de conexión con el servidor.');
    }
  };

  return (
    <ReservationContext.Provider value={{ openModal, closeModal }}>
      {children}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={closeModal}
          ></div>

          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative z-10 overflow-hidden animate-fade-in-up">
            <div className={`${showSuccess ? 'bg-green-600' : 'bg-azul-oscuro'} p-5 flex justify-between items-center text-white transition-colors duration-300`}>
              <h3 className="font-heading text-lg font-bold">
                {showSuccess ? '¡Solicitud Recibida!' : `Reservar: ${helicopterName}`}
              </h3>
              <button onClick={closeModal} className="text-white/70 hover:text-white text-2xl font-bold leading-none">&times;</button>
            </div>

            <div className="p-6">
              {showSuccess ? (
                <div className="text-center py-8 flex flex-col items-center animate-fade-in">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h4 className="font-heading text-2xl text-azul-oscuro font-bold mb-2">¡Todo listo!</h4>
                  <p className="text-gray-600 mb-8">
                    Hemos recibido tu solicitud para el <strong>{helicopterName}</strong>. 
                    <br/>Te enviaremos la confirmación a tu email en breve.
                  </p>
                  <button 
                    onClick={closeModal}
                    className="bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 transition-colors shadow-lg"
                  >
                    Entendido, gracias
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block font-bold text-azul-oscuro text-sm mb-1">Nombre y Apellidos *</label>
                    <input 
                      name="full_name" type="text" required 
                      className="w-full p-2.5 border border-gray-300 rounded-lg focus:border-naranja focus:ring-2 focus:ring-naranja/10 outline-none transition-all" 
                      value={formData.full_name} onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-azul-oscuro text-sm mb-1">Email *</label>
                    <input 
                      name="email" type="email" required 
                      className="w-full p-2.5 border border-gray-300 rounded-lg focus:border-naranja focus:ring-2 focus:ring-naranja/10 outline-none transition-all bg-gray-50" 
                      value={formData.email} onChange={handleChange} readOnly
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-azul-oscuro text-sm mb-1">Móvil (Opcional)</label>
                    <input 
                      name="phone" type="tel" 
                      className="w-full p-2.5 border border-gray-300 rounded-lg focus:border-naranja focus:ring-2 focus:ring-naranja/10 outline-none transition-all" 
                      placeholder="+34 600..." 
                      value={formData.phone} onChange={handleChange}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-azul-oscuro text-sm mb-1">Fecha *</label>
                      <input 
                        name="flight_date" type="date" required 
                        className="w-full p-2.5 border border-gray-300 rounded-lg focus:border-naranja focus:ring-2 focus:ring-naranja/10 outline-none text-gray-600 font-body" 
                        value={formData.flight_date} onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-azul-oscuro text-sm mb-1">Hora *</label>
                      <input 
                        name="flight_time" type="time" required 
                        className="w-full p-2.5 border border-gray-300 rounded-lg focus:border-naranja focus:ring-2 focus:ring-naranja/10 outline-none text-gray-600 font-body" 
                        value={formData.flight_time} onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-azul-oscuro text-sm mb-1">Comentarios</label>
                    <textarea 
                      name="comments" rows="3" 
                      className="w-full p-2.5 border border-gray-300 rounded-lg focus:border-naranja focus:ring-2 focus:ring-naranja/10 outline-none resize-none" 
                      placeholder="Dudas o peticiones..."
                      value={formData.comments} onChange={handleChange}
                    ></textarea>
                  </div>

                  <button type="submit" className="bg-naranja text-white font-bold py-3 rounded-lg hover:bg-azul-oscuro transition-colors mt-2 uppercase tracking-wide shadow-md">
                    Confirmar Solicitud
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </ReservationContext.Provider>
  );
};