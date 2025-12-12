import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css"

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

function App() {
  const location = useLocation();
  const hideLayout = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      <ScrollToTop />
      {!hideLayout && <Header />}

      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/helicopteros" element = {<Helis />} />
        <Route path="/helicopteros" element = {<Helis />} />
        <Route path="/details/:id" element = {<Details />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/register" element = {<Register />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  )
}

export default App