import { Link } from 'react-router-dom';
import './helis.css'

import helicopters from "../assets/data/helicopters.json";

function Helis() {

  return (
    <>
      <main className="heli-page-container">
        {/* Título de la página */}
        <section className="list-header">
          <h1 className="section-title">Nuestra flota de helicopteros</h1>
          <p className="section-subtitle">
          Descubre la experiencia de volar con los modelos más exclusivos del mercado.
          </p>
        </section>

        {/* Tarjetas */}
        <section className="helicopter-grid">
          {helicopters.map(helicopter => 
            <article className="heli-card-item" key={helicopter.id}>
              <img className="heli-image" src={helicopter.image} alt={helicopter.model} />
              <div className="heli-card-body">
                <div className="heli-card-header">
                <span className="heli-brand">{helicopter.brand}</span>
                <h3 className="heli-model">{helicopter.model}</h3>
                </div>
                <p className="heli-description">{helicopter.description}</p>
                <div className="heli-specs">
                <span>Pasajeros: {helicopter.capacity}</span>
                <span className="heli-price">Precio por hora: {helicopter.price}€</span>
                </div>
                <div className="heli-card-actions">
                  <Link to={`/details/${helicopter.id}`} className="btn heli-btn primary-btn">Ver más</Link>
                  <button className="btn heli-btn secondary-btn btn-cta">
                    Reservar
                  </button>
                </div>
            </div>
            </article>
          )}
        </section>
      </main>
    </>
  );
}

export default Helis;