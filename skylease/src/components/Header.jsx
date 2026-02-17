import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useUser } from '../components/UserContext';

const Header = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate('/');
  };

  const getLinkClass = (path) => {
    const baseStyle = "font-medium px-4 py-2 rounded-lg transition-all block md:inline-block";
    if (location.pathname === path) {
      return `${baseStyle} bg-white text-azul-oscuro`;
    }
    return `${baseStyle} text-white hover:bg-white hover:text-azul-oscuro`;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-azul-oscuro shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group transition-transform hover:scale-105 duration-200">
          <img 
            src="/images/components/helicoptero_transparente.png" 
            alt="Skylease Logo" 
            className="h-10 md:h-12 w-auto" 
          />
          <span className="text-white text-2xl md:text-3xl font-bold tracking-wide font-heading">
            SKYLEASE
          </span>
        </Link>

        <nav className="hidden md:flex items-center">
          <ul className="flex items-center gap-1 list-none m-0 p-0">
            <li><Link to="/helicopteros" className={getLinkClass('/helicopteros')}>Helicópteros</Link></li>
            <li><Link to="/comunidad" className={getLinkClass('/comunidad')}>Comunidad</Link></li>
            <li><Link to="/precios" className={getLinkClass('/precios')}>Precios</Link></li>
            <li><Link to="/contactos" className={getLinkClass('/contactos')}>Contactos</Link></li>
            <li className="h-8 w-px bg-azul-claro/50 mx-4"></li>
            {user ? (
              <li className="flex items-center gap-4">
                <span className="text-white">Hola, <b className="text-azul-claro">{user.username}</b></span>
                <button onClick={handleLogout} className="bg-azul-claro/20 border border-azul-claro/50 text-white px-4 py-1.5 rounded-lg hover:bg-azul-claro transition-all">Salir</button>
              </li>
            ) : (
              <div className="flex items-center gap-3">
                <Link to="/login" className="bg-azul-claro px-5 py-2 rounded-lg text-white font-bold hover:bg-white hover:text-azul-oscuro transition-all">Log In</Link>
                <Link to="/register" className="bg-naranja text-white px-6 py-2 rounded-lg font-bold shadow-lg hover:bg-white hover:text-naranja transition-all">Register</Link>
              </div>
            )}
          </ul>
        </nav>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-3xl focus:outline-none z-50 p-2"
          aria-label="Menu"
        >
          <div className="transition-transform duration-300" style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0)' }}>
            {isOpen ? '✕' : '☰'}
          </div>
        </button>
      </div>

      <div 
        className={`
          md:hidden absolute top-20 left-0 w-full bg-azul-oscuro border-t border-azul-claro/20 px-6 pb-10 shadow-2xl transition-all duration-300 ease-in-out
          ${isOpen 
            ? 'opacity-100 translate-y-0 visible' 
            : 'opacity-0 -translate-y-4 invisible pointer-events-none'
          }
        `}
      >
        <ul className="flex flex-col gap-4 pt-6 list-none">
          <li><Link onClick={() => setIsOpen(false)} to="/helicopteros" className={getLinkClass('/helicopteros')}>Helicópteros</Link></li>
          <li><Link onClick={() => setIsOpen(false)} to="/comunidad" className={getLinkClass('/comunidad')}>Comunidad</Link></li>
          <li><Link onClick={() => setIsOpen(false)} to="/precios" className={getLinkClass('/precios')}>Precios</Link></li>
          <li><Link onClick={() => setIsOpen(false)} to="/contactos" className={getLinkClass('/contactos')}>Contactos</Link></li>
          <hr className="border-azul-claro/20 my-2" />
          {user ? (
            <div className="flex flex-col gap-4">
              <span className="text-white">Hola, <b className="text-azul-claro">{user.username}</b></span>
              <button onClick={handleLogout} className="bg-azul-claro/20 text-white p-3 rounded-lg border border-azul-claro/50">Salir</button>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <Link onClick={() => setIsOpen(false)} to="/login" className="bg-azul-claro text-center py-3 rounded-lg text-white font-bold">Iniciar sesión</Link>
              <Link onClick={() => setIsOpen(false)} to="/register" className="bg-naranja text-center py-3 rounded-lg text-white font-bold">Registrarse</Link>
            </div>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;