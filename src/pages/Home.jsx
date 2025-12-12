import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './home.css'; 

const helicopteros = [
  {
    id: 1,
    name: "Airbus H130",
    img: "/images/home/Heli1.png"
  },
  {
    id: 2,
    name: "Bell 206 JetRanger",
    img: "/images/home/Heli2.png"
  },
  {
    id: 3,
    name: "Robinson R44 Raven II",
    img: "/images/home/Heli3.png"
  },
  {
    id: 4,
    name: "Sikorsky S-76",
    img: "/images/home/Heli4.png"
  },
];

const features = [
  {
    id: 1,
    title: "Seguridad Primero",
    desc: "Nuestra flota cumple con las más estrictas normativas de seguridad y mantenimiento a nivel mundial.",
    icon: "/images/home/shield_icon.svg"
  },
  {
    id: 2,
    title: "Vistas Inolvidables",
    desc: "Diseñamos rutas panorámicas exclusivas para que captures las mejores vistas desde el cielo.",
    icon: "/images/home/view_icon.svg"
  },
  {
    id: 3,
    title: "Pilotos Expertos",
    desc: "Solo trabajamos con pilotos certificados, con miles de horas de vuelo y un historial impecable.",
    icon: "/images/home/person_icon.svg"
  },
  {
    id: 4,
    title: "Flexibilidad",
    desc: "Nos adaptamos a tu itinerario. Reserva vuelos 24/7, los 365 días del año, en cualquier parte del globo.",
    icon: "/images/home/time_icon.svg"
  },
  {
    id: 5,
    title: "Flota Moderna",
    desc: "Contamos con helicópteros de última generación, equipados con la mejor tecnología en confort y aviación.",
    icon: "/images/home/heli_icon.svg"
  },
  {
    id: 6,
    title: "Soporte VIP",
    desc: "Un conserje personal gestionará tu reserva, transporte terrestre y cualquier solicitud especial.",
    icon: "/images/home/vip_icon.svg"
  },
];

const Home = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === 'left' ? -400 : 400; 
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <main className="home-main">
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">SKYLEASE</h1>
          <p className="hero-subtitle">
            Descubre el mundo desde una nueva perspectiva. Tu aventura en los cielos comienza aquí.
          </p>
          <button className="btn-cta">Reserva</button>
        </div>
      </section>

      <section className="heli-section">
        <h2 className="section-title">Explora nuestros helicópteros</h2>
        <div className="carousel-wrapper">
          <button className="nav-btn prev" onClick={() => scroll('left')}>&#8249;</button>
          <div className="scroll-container" ref={scrollRef}>
            {helicopteros.map((heli) => (
              <div key={heli.id} className="heli-card">
                <div className="card-content">
                  <img src={heli.img} alt={heli.name} />
                  <h3>{heli.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <button className="nav-btn next" onClick={() => scroll('right')}>&#8250;</button>
        </div>
        <Link to="/helicopteros" className="all-helis-btn">
          Ver todos helicópteros
        </Link>
      </section>

      <section className="feature-grid-section">
        <h2 className="section-title">¿Por qué volar con SKYLEASE?</h2>
        <div className="feature-grid">
          {features.map((item) => (
            <div key={item.id} className="feature-card">
              <div className="card-icon">
                <img src={item.icon} alt="" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;