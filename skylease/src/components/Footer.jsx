const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-azul-oscuro text-white pt-16 mt-12 w-full shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
      <div className="max-w-[1400px] mx-auto px-6 pb-8 flex flex-wrap justify-between gap-10">

        <div className="flex-1 min-w-[280px] flex flex-col items-start">
          <a href="/" className="flex items-center mb-4 gap-2 no-underline">
            <img 
              src="/images/components/helicoptero_transparente.png" 
              alt="Skylease Logo" 
              className="h-10 w-auto" 
            />
            <span className="font-heading text-2xl font-bold tracking-wide text-white">SKYLEASE</span>
          </a>
          <p className="text-white/70 text-sm leading-relaxed max-w-xs mb-6 font-body">
            Alquiler de helicópteros en todo el mundo. Elevando tus estándares de viaje y seguridad.
          </p>
          <div className="flex gap-4 items-center">
            <a href="#twitter" className="opacity-70 hover:opacity-100 transition-opacity"><img src="/images/components/twitter_logo.svg" alt="Twitter" className="w-6 h-6 invert brightness-0" /></a>
            <a href="#instagram" className="opacity-70 hover:opacity-100 transition-opacity"><img src="/images/components/instagram_logo.svg" alt="Instagram" className="w-6 h-6 invert brightness-0" /></a>
            <a href="#youtube" className="opacity-70 hover:opacity-100 transition-opacity"><img src="/images/components/youtube_logo.svg" alt="YouTube" className="w-6 h-6 invert brightness-0" /></a>
            <a href="#linkedin" className="opacity-70 hover:opacity-100 transition-opacity"><img src="/images/components/linkedin_logo.svg" alt="LinkedIn" className="w-6 h-6 invert brightness-0" /></a>
          </div>
        </div>

        <div className="flex-[2] flex flex-wrap gap-8 justify-between min-w-[300px]">
            <div className="min-w-[140px]">
                <h3 className="font-heading text-lg font-bold mb-4 text-white">Destinos Populares</h3>
                <ul className="space-y-2 list-none p-0">
                    <li><a href="#ny" className="text-white/80 hover:text-white hover:underline transition-colors text-sm font-body">Vuelos en Nueva York</a></li>
                    <li><a href="#vegas" className="text-white/80 hover:text-white hover:underline transition-colors text-sm font-body">Tours en Las Vegas</a></li>
                    <li><a href="#london" className="text-white/80 hover:text-white hover:underline transition-colors text-sm font-body">Vistas de Londres</a></li>
                    <li><a href="#madrid" className="text-white/80 hover:text-white hover:underline transition-colors text-sm font-body">Panoramas de Madrid</a></li>
                </ul>
            </div>

            <div className="min-w-[140px]">
                <h3 className="font-heading text-lg font-bold mb-4 text-white">Nuestros Servicios</h3>
                <ul className="space-y-2 list-none p-0">
                    <li><a href="#corp" className="text-white/80 hover:text-white hover:underline transition-colors text-sm font-body">Alquiler Corporativo</a></li>
                    <li><a href="#tour" className="text-white/80 hover:text-white hover:underline transition-colors text-sm font-body">Vuelos Turísticos</a></li>
                    <li><a href="#photo" className="text-white/80 hover:text-white hover:underline transition-colors text-sm font-body">Fotografía Aérea</a></li>
                    <li><a href="#school" className="text-white/80 hover:text-white hover:underline transition-colors text-sm font-body">Escuela de Vuelo</a></li>
                </ul>
            </div>

            <div className="min-w-[140px]">
                <h3 className="font-heading text-lg font-bold mb-4 text-white">Compañía y Legal</h3>
                <ul className="space-y-2 list-none p-0">
                    <li><a href="#about" className="text-white/80 hover:text-white hover:underline transition-colors text-sm font-body">Sobre Skylease</a></li>
                    <li><a href="#fleet" className="text-white/80 hover:text-white hover:underline transition-colors text-sm font-body">Nuestra Flota</a></li>
                    <li><a href="#privacy" className="text-white/80 hover:text-white hover:underline transition-colors text-sm font-body">Política de Privacidad</a></li>
                    <li><a href="#terms" className="text-white/80 hover:text-white hover:underline transition-colors text-sm font-body">Términos de Servicio</a></li>
                </ul>
            </div>
        </div>
      </div>

      <div className="border-t border-azul-claro/30 mt-8 py-6 text-center px-6">
        <p className="text-sm text-white/60 font-body">
          © {currentYear} Skylease. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;