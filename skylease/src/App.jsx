import { Routes, Route, useLocation } from "react-router-dom";

// Componentes
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

// Páginas
import Helis from "./pages/Helis.jsx"
import Home from "./pages/Home.jsx"
import Details from "./pages/Details.jsx"
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import Comunity from "./pages/Comunity.jsx"
import Prices from "./pages/Prices.jsx"
import Contacts from "./pages/Contacts.jsx"

function App() {
  const location = useLocation();
  const hideLayout = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="flex flex-col min-h-screen font-body text-gris">
      <ScrollToTop />
      {!hideLayout && <Header />}

      <main className="flex-grow w-full">
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/helicopteros" element = {<Helis />} />
          <Route path="/comunidad" element = {<Comunity />} />
          <Route path="/precios" element = {<Prices />} />
          <Route path="/contactos" element = {<Contacts />} />
          <Route path="/details/:id" element = {<Details />} />
          <Route path="/login" element = {<Login />} />
          <Route path="/register" element = {<Register />} />
        </Routes>
      </main>

      {!hideLayout && <Footer />}
    </div>
  )
}

export default App