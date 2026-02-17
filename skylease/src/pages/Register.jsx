import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
      });

      const data = await response.json();

      if (response.ok) {
        alert('¡Registro exitoso! Ahora inicia sesión.');
        navigate('/login');
      } else {
        setError(data.message || 'Error en el registro');
      }
    } catch (err) {
      setError(`Error de conexión con el servidor ${err}`);
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-azul-oscuro p-4">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl w-full max-w-md border-t-[5px] border-naranja animate-fade-in">
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="text-center mb-2">
            <h2 className="font-heading text-4xl font-bold text-azul-oscuro mb-2">SKYLEASE</h2>
            <p className="text-gris font-medium">Crear nueva cuenta</p>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded text-sm text-center">
              {error}
            </div>
          )}

          <div>
            <label className="block font-bold text-azul-oscuro mb-2 text-sm">Usuario</label>
            <input
              className="w-full p-3.5 border-2 border-gray-200 rounded-lg outline-none focus:border-naranja focus:ring-4 focus:ring-naranja/10 transition-all font-body"
              type="text"
              placeholder="Nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block font-bold text-azul-oscuro mb-2 text-sm">Email</label>
            <input 
              className="w-full p-3.5 border-2 border-gray-200 rounded-lg outline-none focus:border-naranja focus:ring-4 focus:ring-naranja/10 transition-all font-body"
              type='email' 
              placeholder="ejemplo@skylease.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block font-bold text-azul-oscuro mb-2 text-sm">Contraseña</label>
            <input
              className="w-full p-3.5 border-2 border-gray-200 rounded-lg outline-none focus:border-naranja focus:ring-4 focus:ring-naranja/10 transition-all font-body"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="mt-4 w-full bg-naranja text-white font-heading font-bold py-3.5 rounded-lg hover:bg-azul-oscuro transition-colors tracking-wider uppercase shadow-md hover:shadow-lg">
            CREAR CUENTA
          </button>

        </form>

        <div className="my-8 border-t border-gray-100"></div>

        <div className="text-center">
          <span className="text-gris mr-2 text-sm">¿Ya eres miembro?</span>
          <Link to="/login" className="text-azul-claro font-bold hover:underline text-sm">
            Iniciar sesión
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;