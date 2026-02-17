import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí conectaríamos con el Backend más adelante
    console.log('Formulario enviado:', formData);
    alert('Gracias por contactar con Skylease. Te responderemos pronto.');
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-10 pb-20">
      
      {/* Encabezado */}
      <div className="text-center max-w-3xl mx-auto px-6 mb-12">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-azul-oscuro mb-4">
          Contáctanos
        </h1>
        <p className="text-gris text-lg">
          Estamos a tu disposición las 24 horas del día. Visítanos en nuestra base o envíanos un mensaje directo.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* COLUMNA IZQUIERDA: Info + Mapa */}
        <div className="flex flex-col gap-8">
          
          {/* Tarjetas de Información Rápida */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-naranja">
              <h3 className="font-heading font-bold text-azul-oscuro text-lg mb-2">Atención al Cliente</h3>
              <p className="text-gris text-sm">+34 900 123 456</p>
              <p className="text-gris text-sm">info@skylease.com</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-azul-claro">
              <h3 className="font-heading font-bold text-azul-oscuro text-lg mb-2">Base Principal</h3>
              <p className="text-gris text-sm">Hangar 4, Aeropuerto</p>
              <p className="text-gris text-sm">Madrid, España</p>
            </div>
          </div>

          {/* EL MAPA QUE PEDISTE */}
          <div className="bg-white p-2 rounded-xl shadow-lg h-[400px] overflow-hidden relative">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6067.102415995956!2d-3.5509109046872718!3d40.50730619301902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4233e0d7743b79%3A0x94a93b5135691233!2shelipuerto!5e0!3m2!1sen!2ses!4v1771315091823!5m2!1sen!2ses" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-lg"
                title="Mapa de ubicación"
            ></iframe>
          </div>
        </div>

        {/* COLUMNA DERECHA: Formulario */}
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border-t-[6px] border-azul-oscuro">
          <h2 className="font-heading text-2xl font-bold text-azul-oscuro mb-6">Envíanos un mensaje</h2>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block font-bold text-azul-oscuro mb-2 text-sm">Nombre Completo</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-naranja focus:ring-2 focus:ring-naranja/10 transition-all font-body"
                placeholder="Tu nombre"
                required
              />
            </div>

            <div>
              <label className="block font-bold text-azul-oscuro mb-2 text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-naranja focus:ring-2 focus:ring-naranja/10 transition-all font-body"
                placeholder="tucorreo@ejemplo.com"
                required
              />
            </div>

            <div>
              <label className="block font-bold text-azul-oscuro mb-2 text-sm">Asunto</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-naranja focus:ring-2 focus:ring-naranja/10 transition-all text-gris font-body"
              >
                <option value="">Selecciona un motivo</option>
                <option value="reservas">Información de Reservas</option>
                <option value="flota">Consulta sobre Flota</option>
                <option value="empleo">Trabaja con nosotros</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-azul-oscuro mb-2 text-sm">Mensaje</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:border-naranja focus:ring-2 focus:ring-naranja/10 transition-all resize-none font-body"
                placeholder="¿En qué podemos ayudarte?"
                required
              ></textarea>
            </div>

            <button 
                type="submit" 
                className="mt-2 bg-azul-oscuro text-white font-heading font-bold py-4 rounded-lg hover:bg-naranja transition-colors shadow-lg uppercase tracking-wider"
            >
                Enviar Mensaje
            </button>
          </form>
        </div>

      </div>
    </main>
  );
};

export default Contact;