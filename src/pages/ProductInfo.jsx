import React from 'react';

const ProductInfo = ({ product }) => {
    return (
        <section className="product-info">
            <h1 className="hero-title product-title">{product.name}</h1>
            <p className="product-subtitle">Detalles de la Flota Moderna</p>

            <div className="product-content">
                <div className="product-image-container">
                    <img src={product.imageUrl} alt={`Foto de ${product.name}`} className="product-image" />
                </div>

                <div className="product-details">
                    <p className="product-description">{product.description}</p>

                    <h3 className="features-title">Características Principales:</h3>
                    <ul className="features-list">
                        {product.features.map((feature, index) => (
                            <li key={index} className="feature-item">
                                <span className="feature-icon">🚁</span> {feature}
                            </li>
                        ))}
                    </ul>

                    {/* Usamos las clases de botones de tus estilos adjuntos */}
                    <a href="#" className="btn btn-cta product-cta">
                        Reservar {product.name} Ahora
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProductInfo;