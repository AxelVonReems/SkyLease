import { useRef } from "react";
import { Link } from "react-router-dom";

const CarouselHeli = ({ helicopteros }) => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = direction === 'left' ? -400 : 400;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }

    return (
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
    )
};

export default CarouselHeli;