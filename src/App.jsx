// import { useContext } from 'react'
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./App.css"

// Componentes
import ScrollToTop from "./components/ScrollToTop";
import { useUser } from './components/UserContext';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

// Páginas
import Helis from "./pages/Helis.jsx"
import Home from "./pages/Home.jsx"
import DetailPage from "./pages/DetailPage.jsx"
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"

function App() {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  
  function handleLogout() {
    logout();
    navigate('/login');
  }


  console.log("HOLA");
  


  
  const location = useLocation();
  const hideLayout = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      {user ? (
          <div style={{ color: 'var(--azul-oscuro)', fontWeight: 'bold' }}>
            Hola, {user.name}
            <button 
                onClick={handleLogout} 
                style={{ marginLeft: '10px', cursor: 'pointer' }}
            >
                Salir
            </button>
          </div>
        ) : (
          <div>
          </div>
        )}

      <ScrollToTop />
      {!hideLayout && <Header />}

      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/helicopteros" element = {<Helis />} />
        <Route path="/helicopteros" element = {<Helis />} />
        <Route path="/details" element = {<DetailPage />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/register" element = {<Register />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  )
}

export default App