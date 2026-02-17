import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[calc(80vh-4rem)] min-h-[500px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/home/HeliHero.jpg')" }}
    >
      <div className="absolute inset-0 bg-azul-oscuro/50"></div>

      <div className="relative z-10 p-8 md:p-12 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-2xl max-w-4xl mx-4 text-center">
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
          SKYLEASE
        </h1>
        <p className="font-body text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto drop-shadow-md font-light">
          Descubre el mundo desde una nueva perspectiva. Tu aventura en los cielos comienza aquí.
        </p>
        <Link 
          to="/helicopteros" 
          className="inline-block bg-naranja text-white font-bold py-3 px-8 rounded-lg uppercase tracking-wider shadow-lg hover:bg-white hover:text-naranja transition-all transform hover:-translate-y-1"
        >
          Reserva Ahora
        </Link>
      </div>
    </section>
  )
};

export default HeroSection;