import './footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">

        <div className="footer-column footer-column-brand">
          <a href="/" className="logo-link">
            <img 
              src="/images/components/helicoptero_transparente.png" 
              alt="Skylease Logo" 
              className="logo-image" 
            />
            <span className="logo-text">SKYLEASE</span>
          </a>
          <p className="footer-tagline">Alquiler de helicópteros en todo el mundo.</p>
          <div className="social-icons">
            <a href="#twitter"><img src="/images/components/twitter_logo.svg" alt="Twitter logo" /></a>
            <a href="#instagram"><img src="/images/components/instagram_logo.svg" alt="Instagram logo" /></a>
            <a href="#youtube"><img src="/images/components/youtube_logo.svg" alt="YouTube logo" /></a>
            <a href="#linkedin" aria-label="LinkedIn"><img src="/images/components/linkedin_logo.svg" alt="LinkedIn logo" /></a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Destinos Populares</h3>
          <ul>
            <li><a href="#ny">Vuelos en Nueva York</a></li>
            <li><a href="#vegas">Tours en Las Vegas</a></li>
            <li><a href="#london">Vistas de Londres</a></li>
            <li><a href="#madrid">Panoramas de Madrid</a></li>
            <li><a href="#miami">Costas de Miami</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Nuestros Servicios</h3>
          <ul>
            <li><a href="#corp">Alquiler Corporativo</a></li>
            <li><a href="#tour">Vuelos Turísticos</a></li>
            <li><a href="#photo">Fotografía Aérea</a></li>
            <li><a href="#school">Escuela de Vuelo</a></li>
            <li><a href="#hangar">Mantenimiento y Hangar</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Compañía y Legal</h3>
          <ul>
            <li><a href="#about">Sobre Skylease</a></li>
            <li><a href="#fleet">Nuestra Flota</a></li>
            <li><a href="#security">Certificados de Seguridad</a></li>
            <li><a href="#privacy">Política de Privacidad</a></li>
            <li><a href="#terms">Términos de Servicio</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          © {currentYear} Skylease. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;