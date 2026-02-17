import { useState } from 'react';
import { useUser } from '../components/UserContext.jsx';
import { useNavigate, Link, useLocation } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { login } = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        login(data.user, data.token);
        navigate(from, { replace: true });
      } else {
        setError(data.message || 'Credenciales incorrectas');
      }
    } catch (err) {
      setError(`Error al conectar con el servidor ${err}`);
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-azul-oscuro p-4">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl w-full max-w-md border-t-[5px] border-naranja">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="text-center mb-2">
            <h2 className="font-heading text-4xl font-bold text-azul-oscuro mb-2">SKYLEASE</h2> 
            <p className="text-gris font-medium">Portal de Acceso</p>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded text-sm text-center">
              {error}
            </div>
          )}

          <div>
            <label className="block font-bold text-azul-oscuro mb-2 text-sm">Email</label>
            <input
              className="w-full p-3.5 border-2 border-gray-200 rounded-lg outline-none focus:border-azul-claro focus:ring-4 focus:ring-azul-claro/10 transition-all font-body"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block font-bold text-azul-oscuro mb-2 text-sm">Contraseña</label>
            <input
              className="w-full p-3.5 border-2 border-gray-200 rounded-lg outline-none focus:border-azul-claro focus:ring-4 focus:ring-azul-claro/10 transition-all font-body"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type='submit' className="mt-4 w-full bg-azul-claro text-white font-heading font-bold py-3.5 rounded-lg hover:bg-azul-oscuro transition-colors tracking-wider uppercase">
            Ingresar
          </button>
        </form>

        <div className="my-8 border-t border-gray-100"></div>

        <div className="text-center">
          <span className="text-gris mr-2 text-sm">¿Aún no tienes cuenta?</span>
          <Link to="/register" className="text-naranja font-bold hover:underline text-sm">
            Registrarse
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Login;