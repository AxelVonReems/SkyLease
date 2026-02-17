import { useRef } from "react";
import { Link } from "react-router-dom";

const CarouselHeli = ({ helicopteros }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -450 : 450;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }

  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6 relative">
        <h2 className="font-heading text-4xl text-azul-oscuro font-bold text-center mb-10">
          Explora nuestros helicópteros
        </h2>

        <div className="relative group">
          <button 
            onClick={() => scroll('left')} 
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-azul-oscuro text-white w-12 h-12 rounded-full shadow-xl items-center justify-center hover:bg-azul-claro hover:scale-110 transition-all duration-300 border-2 border-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div ref={scrollRef} className="flex overflow-x-auto gap-6 py-8 px-2 scroll-smooth no-scrollbar snap-x snap-mandatory w-full">
            {helicopteros.map((heli) => (
              <div key={heli.id} className="min-w-[85vw] md:min-w-[600px] h-[400px] relative rounded-2xl overflow-hidden shadow-lg snap-center flex-shrink-0 group/card cursor-pointer">
                <img 
                  src={heli.img} 
                  alt={heli.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="font-heading text-3xl font-bold text-white drop-shadow-md">
                    {heli.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={() => scroll('right')} 
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-azul-oscuro text-white w-12 h-12 rounded-full shadow-xl items-center justify-center hover:bg-azul-claro hover:scale-110 transition-all duration-300 border-2 border-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        <div className="text-center mt-8">
          <Link to="/helicopteros" className="text-azul-oscuro font-bold border-b-2 border-transparent hover:border-naranja transition-all pb-1 hover:text-naranja">
            Ver todos helicópteros
          </Link>
        </div>
      </div>
    </section>
  )
};

export default CarouselHeli;