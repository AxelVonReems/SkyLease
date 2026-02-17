const Comunidad = () => {
  const eventos = [
    {
      id: 1,
      titulo: "Encuentro Aéreo en los Alpes",
      fecha: "15 Oct, 2024",
      lugar: "Base Skylease, Suiza",
      desc: "Evento anual para disfrutar de las vistas montañosas. Aforo completo.",
      img: "/images/community/com_1.webp"
    },
    {
      id: 2,
      titulo: "Atardecer en la Ciudad",
      fecha: "22 Nov, 2024",
      lugar: "Helipuerto VIP, Madrid",
      desc: "Rutas especiales de fotografía nocturna disponibles durante todo el mes.",
      img: "/images/community/com_2.webp"
    }
  ];

  const posts = [
    { id: 1, user: "Juan P.", img: "/images/community/com_3.webp", caption: "Vistas increíbles hoy." },
    { id: 2, user: "Sara M.", img: "/images/community/com_4.webp", caption: "Mi primer vuelo en el R44." },
    { id: 3, user: "Marcos A.", img: "/images/community/com_5.webp", caption: "Aterrizaje perfecto." },
    { id: 4, user: "Elena S.", img: "/images/community/com_6.webp", caption: "Rumbo a la reunión." },
  ];

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      <section className="bg-azul-oscuro text-white py-12 text-center px-4">
        <div className="max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Comunidad Skylease</h1>
            <p className="font-body text-xl text-gray-300">
                Últimas noticias y mejores momentos compartidos por nuestros pilotos y pasajeros.
            </p>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6 mt-12">
        <h2 className="font-heading text-3xl text-azul-oscuro font-bold mb-8 border-l-4 border-naranja pl-4">
            Noticias y Eventos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {eventos.map(evento => (
                <div key={evento.id} className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row">
                    <div className="md:w-1/3 h-48 md:h-auto">
                        <img src={evento.img} alt={evento.titulo} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6 md:w-2/3 flex flex-col justify-center">
                        <span className="text-naranja font-bold text-sm uppercase mb-2">{evento.fecha} | {evento.lugar}</span>
                        <h3 className="font-heading text-xl font-bold text-azul-oscuro mb-2">{evento.titulo}</h3>
                        <p className="text-gris text-sm">{evento.desc}</p>
                    </div>
                </div>
            ))}
        </div>

        <h2 className="font-heading text-3xl text-azul-oscuro font-bold border-l-4 border-azul-claro pl-4 mb-8">
            Momentos Destacados
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {posts.map(post => (
                <div key={post.id} className="group relative rounded-xl overflow-hidden shadow-md h-80">
                    <img src={post.img} alt="Post" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                        <p className="text-white font-bold text-lg mb-1">{post.user}</p>
                        <p className="text-gray-200 text-sm italic">"{post.caption}"</p>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </main>
  );
};

export default Comunidad;