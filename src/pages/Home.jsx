import './home.css'; 
import HeroSection from '../components/HeroSection';
import CarouselHeli from '../components/CarouselHeli';
import FeaturesGrid from '../components/FeaturesGrid';

const helicopteros = [
  {
    id: 1,
    name: "Airbus H130",
    img: "/images/helicopters/h130.webp"
  },
  {
    id: 2,
    name: "Bell 206 JetRanger",
    img: "/images/helicopters/bell206.webp"
  },
  {
    id: 3,
    name: "Robinson R44 Raven II",
    img: "/images/helicopters/r44.webp"
  },
  {
    id: 4,
    name: "Sikorsky S-76",
    img: "/images/helicopters/s76.webp"
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
  return (
    <main className="home-main">
      <HeroSection />
      <CarouselHeli helicopteros={helicopteros} />
      <FeaturesGrid features={features} />
    </main>
  );
};

export default Home;