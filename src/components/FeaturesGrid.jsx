const FeaturesGrid = ({ features }) => {
    return (
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
    );
};

export default FeaturesGrid;