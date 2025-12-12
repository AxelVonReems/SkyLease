import './helis.css'

function Helis() {
    const helicopters = [
        {
            "id": 1,
            "brand": "Robinson",
            "model": "R44 Raven II",
            "image": "/images/helicopters/r44.webp",
            "capacity": 3,
            "price": 450,
            "description": "El helicóptero más popular del mundo para vuelos privados. Ideal para tours cortos y fotografía aérea gracias a su excelente visibilidad."
        },
        {
            "id": 2,
            "brand": "Bell",
            "model": "206 JetRanger",
            "image": "/images/helicopters/bell206.webp",
            "capacity": 4,
            "price": 850,
            "description": "Un clásico de la aviación, conocido por su fiabilidad y seguridad. Perfecto para traslados ejecutivos de media distancia."
        },
        {
            "id": 3,
            "brand": "Airbus",
            "model": "H125 Écureuil",
            "image": "/images/helicopters/h125.webp",
            "capacity": 5,
            "price": 1200,
            "description": "Reconocido por su potencia y versatilidad en entornos de alta montaña. Ofrece una cabina espaciosa y climatizada."
        },
        {
            "id": 4,
            "brand": "AgustaWestland",
            "model": "AW109 Power",
            "image": "/images/helicopters/aw109.webp",
            "capacity": 6,
            "price": 2100,
            "description": "Sinónimo de elegancia y velocidad. Este bimotor es la opción preferida para transporte VIP corporativo rápido."
        },
        {
            "id": 5,
            "brand": "Robinson",
            "model": "R66 Turbine",
            "image": "/images/helicopters/r66.webp",
            "capacity": 4,
            "price": 650,
            "description": "La evolución del R44 con motor de turbina. Ofrece mayor potencia, suavidad en el vuelo y un compartimento de equipaje amplio."
        },
        {
            "id": 6,
            "brand": "Eurocopter",
            "model": "EC135",
            "image": "/images/helicopters/ec135.webp",
            "capacity": 6,
            "price": 2300,
            "description": "Famoso por su bajo nivel de ruido y seguridad bimotor. Ampliamente utilizado para servicios médicos y transporte de lujo."
        },
        {
            "id": 7,
            "brand": "Sikorsky",
            "model": "S-76D",
            "image": "/images/helicopters/s76.webp",
            "capacity": 8,
            "price": 3500,
            "description": "El estándar de oro en transporte ejecutivo. Una cabina silenciosa y lujosa comparable a un jet privado."
        },
        {
            "id": 8,
            "brand": "Bell",
            "model": "407 GXi",
            "image": "/images/helicopters/bell407.webp",
            "capacity": 6,
            "price": 1500,
            "description": "Combina velocidad, rendimiento y maniobrabilidad. Cuenta con una cabina configurada tipo club para reuniones en vuelo."
        },
        {
            "id": 9,
            "brand": "MD Helicopters",
            "model": "MD 500E",
            "image": "/images/helicopters/md500.webp",
            "capacity": 3,
            "price": 900,
            "description": "Compacto, ágil y muy rápido. Ideal para ejecutivos que necesitan moverse rápidamente entre helipuertos urbanos."
        },
        {
            "id": 10,
            "brand": "Airbus",
            "model": "H130",
            "image": "/images/helicopters/h130.webp",
            "capacity": 6,
            "price": 1350,
            "description": "Diseñado específicamente para el turismo y vuelos panorámicos. Posee la cabina más ancha de su categoría."
        },
        {
            "id": 11,
            "brand": "Leonardo",
            "model": "AW139",
            "image": "/images/helicopters/aw139.webp",
            "capacity": 12,
            "price": 4200,
            "description": "Un helicóptero de tamaño medio líder en el mercado. Capacidad superior para grupos grandes sin sacrificar el lujo."
        },
        {
            "id": 12,
            "brand": "Bell",
            "model": "429 GlobalRanger",
            "image": "/images/helicopters/bell429.webp",
            "capacity": 7,
            "price": 2800,
            "description": "Bimotor ligero con una cabina de vidrio excepcional. Ofrece un vuelo excepcionalmente suave y tecnología de punta."
        },
        {
            "id": 13,
            "brand": "Guimbal",
            "model": "Cabri G2",
            "image": "/images/helicopters/cabri.webp",
            "capacity": 1,
            "price": 350,
            "description": "Pequeño, moderno y eficiente. Perfecto para vuelos individuales, entrenamiento o desplazamientos muy cortos."
        },
        {
            "id": 14,
            "brand": "Airbus",
            "model": "H145",
            "image": "/images/helicopters/h145.webp",
            "capacity": 9,
            "price": 3100,
            "description": "Versatilidad compacta con dos motores. Su diseño de rotor trasero fenestron garantiza seguridad en tierra y vuelo silencioso."
        },
        {
            "id": 15,
            "brand": "Sikorsky",
            "model": "S-92",
            "image": "/images/helicopters/s92.webp",
            "capacity": 19,
            "price": 6500,
            "description": "El gigante del transporte civil. Ofrece comodidades de baño completo y cabina de pie para grupos numerosos."
        }
    ];

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
                        <article className="heli-card-item">
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
                                <button className="heli-btn">Reservar Ahora</button>
                            </div>
                        </article>
                    )}
                </section>
            </main>
        </>
    );
}

export default Helis;