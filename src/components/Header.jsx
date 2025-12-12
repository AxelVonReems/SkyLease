import { Link, useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';
import './header.css'; 

const Header = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

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
            {user ? (
              <li className="user-welcome-container">
                <span className="user-greeting">Hola, <b>{user.name}</b></span>
                <button onClick={handleLogout} className="btn btn-logout">
                  Salir
                </button>
              </li>
            ) : (
              <>
                <li><Link to="/login" className="btn btn-login">Iniciar sesión</Link></li>
                <li><Link to="/register" className="btn btn-register">Registrarse</Link></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;