const FeaturesGrid = ({ features }) => {
  return (
    <section className="py-16 bg-gris-claro">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="font-heading text-4xl text-azul-oscuro font-bold text-center mb-12">
          ¿Por qué volar con SKYLEASE?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item) => (
            <div key={item.id} className="bg-white p-8 rounded-xl shadow-md hover:-translate-y-1 transition-transform duration-300">
              <div className="mb-4">
                <img src={item.icon} alt="" className="w-12 h-12" />
              </div>
              <h3 className="font-heading text-xl font-bold text-azul-oscuro mb-3">{item.title}</h3>
              <p className="font-body text-gris">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;