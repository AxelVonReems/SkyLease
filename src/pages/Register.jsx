import { useState } from 'react';
// 1. Change import: Use the hook 'useUser' instead of UserContext
import { useUser } from '../components/UserContext'; 
import { useNavigate, Link } from 'react-router-dom';
import './login.css'; 

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 2. Use the custom hook here
  const { login } = useUser(); 
  
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // Register simulates login in this prototype
    login(username);
    console.log("Usuario registrado:", { username, email });
    navigate('/');
  }

  return (
    <div className="page-container">
      <div className='form-card'>
        
        <form onSubmit={handleSubmit}>
          <h2>SKYLEASE</h2>
          <p style={{textAlign:'center', color: 'var(--gris)', marginBottom: '20px'}}>
             Registro
          </p>

          {/* CAMPO USUARIO */}
          <div>
            <label className='form-label'>Usuario:</label>
            <input
              className='form-input'
              type="text"
              placeholder="Nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <br />

          {/* CAMPO EMAIL */}
          <div>
            <label className='form-label'>Email</label>
            <input 
                className='form-input'
                type='email' 
                placeholder="ejemplo@skylease.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
          </div>
          <br />

          {/* CAMPO CONTRASEÑA */}
          <div>
            <label className='form-label'>Contraseña:</label>
            <input
              className='form-input'
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <br />

          {/* BOTÓN PRINCIPAL (Usa la clase btn-register global o form-button) */}
          <button type="submit" className='form-button btn-register'>
            CREAR CUENTA
          </button>

        </form>

        <hr style={{margin: '20px 0', border: 'none', borderTop: '1px solid #eee'}}/>

        {/* BOTÓN SECUNDARIO */}
        <div style={{ textAlign: 'center' }}>
            <p style={{ display: 'inline', color: 'var(--gris)', marginRight: '5px' }}>
                ¿Ya eres miembro?
            </p>
            <Link to="/login" className="register-link">
                Iniciar sesión
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;