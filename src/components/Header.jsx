import { Link } from 'react-router-dom';

import './header.css'; 

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-container">
        <a href="/" className="logo-link">
          <img 
            src="images/components/helicoptero_transparente.png" 
            alt="Skylease Logo" 
            className="logo-image" 
          />
          <span className="logo-text">SKYLEASE</span>
        </a>

        <nav className="nav-desktop">
          <ul className="nav-desktop-list">
            <li><Link to="/helicopteros" className="menu-link">Helicópteros</Link></li>
            <li><a href="#comunidad" className="menu-link">Comunidad</a></li>
            <li><a href="#precios" className="menu-link">Precios</a></li>
            <li><a href="#contactos" className="menu-link">Contactos</a></li>
            <li className="nav-separator"></li>
            {/* <li>
              <button 
                className="btn btn-login" 
                onClick={onLoginClick}
              >
                Iniciar sesión
              </button>
            </li> */}
            
              
            <li><Link to="/login" className="btn btn-login">Iniciar sesión</Link></li>
            <li><Link to="/register" className="btn btn-register">Registrarse</Link></li>
            {/* <li>
              <button className="btn btn-register">
                Registrarse
              </button>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;