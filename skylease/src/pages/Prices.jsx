import { Link } from 'react-router-dom';

const Prices = () => {
  const plans = [
    {
      name: "Vuelo Estándar",
      price: "Desde 150€",
      period: "/persona",
      desc: "Reserva tu plaza en nuestros vuelos programados.",
      features: [
        "Vuelos panorámicos (30 min)",
        "Rutas Costa o Montaña",
        "Seguro incluido",
        "Fines de semana"
      ],
      cta: "Ver Flota y Reservar",
      link: "/helicopteros", 
      highlight: false
    },
    {
      name: "Charter Privado",
      price: "Desde 850€",
      period: "/hora",
      desc: "Alquiler completo del helicóptero para ti.",
      features: [
        "Helicóptero privado",
        "Ruta a medida",
        "Espera incluida (2h)",
        "Servicio VIP"
      ],
      cta: "Ver Flota y Reservar",
      link: "/helicopteros",
      highlight: true
    },
    {
      name: "Membresía Club",
      price: "5.000€",
      period: "/año",
      desc: "Para viajeros frecuentes y empresas.",
      features: [
        "Prioridad de reserva",
        "Sin cargos cancelación",
        "Concierge 24/7",
        "Descuentos en horas"
      ],
      cta: "Contactar Agente",
      link: "/contactos",
      highlight: false
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 pb-20 pt-10">
      
      <div className="text-center max-w-3xl mx-auto px-6 mb-16">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-azul-oscuro mb-4">
          Nuestras Tarifas
        </h1>
        <p className="text-gris text-lg">
          Opciones claras para cada tipo de viajero.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-12">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`bg-white rounded-2xl shadow-xl overflow-hidden border transition-transform duration-300 hover:-translate-y-2 relative flex flex-col
              ${plan.highlight ? 'border-naranja md:scale-110 z-10 shadow-2xl' : 'border-gray-100'}
            `}
          >
            {plan.highlight && (
              <div className="bg-naranja text-white text-center text-xs font-bold uppercase tracking-widest py-1">
                Recomendado
              </div>
            )}
            <div className="p-8 flex-grow">
              <h3 className="font-heading text-2xl font-bold text-azul-oscuro mb-2">{plan.name}</h3>
              <p className="text-sm text-gray-500 mb-6 h-10">{plan.desc}</p>
              <div className="flex items-baseline mb-8">
                <span className="text-3xl font-bold text-azul-oscuro">{plan.price}</span>
                <span className="text-gray-400 ml-1 text-sm">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gris">
                    <span className={`mr-2 font-bold ${plan.highlight ? 'text-naranja' : 'text-azul-claro'}`}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 pt-0 mt-auto">
                <Link 
                    to={plan.link}
                    className={`block w-full text-center py-3 rounded-lg font-bold transition-colors
                        ${plan.highlight 
                            ? 'bg-azul-oscuro text-white hover:bg-naranja' 
                            : 'bg-gray-100 text-azul-oscuro hover:bg-azul-oscuro hover:text-white'}
                    `}
                >
                    {plan.cta}
                </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Prices;