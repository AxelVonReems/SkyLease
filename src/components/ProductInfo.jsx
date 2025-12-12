const ProductInfo = ({ helicopter }) => {
    return (
        <section className="product-info">
            <h1 className="hero-title product-title">{helicopter.brand} {helicopter.model}</h1>
            <p className="product-subtitle">Detalles de la Flota Moderna</p>

            <div className="product-content">
                <div className="product-image-container">
                    <img src={helicopter.image} alt={`Foto de ${helicopter.model}`} className="product-image" />
                </div>

                <div className="product-details">
                    <p className="product-description">{helicopter.description}</p>

                    <h3 className="features-title">Características Principales:</h3>
                    <ul className="features-list">
                        <li className="feature-item">Pasajeros: {helicopter.capacity}</li>
                        {helicopter.features.map((feature, index) => (
                            <li key={index} className="feature-item">{feature}</li>
                        ))}
                    </ul>


                    <a href="#" className="btn btn-cta product-cta">
                        Reservar {helicopter.name} Ahora
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProductInfo;