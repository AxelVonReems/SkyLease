import '../pages/home.css'

const HeroSection = () => {
    return (
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
    )
};

export default HeroSection;