import { useState } from 'react';
import { useUser } from '../components/UserContext.jsx';

import { useNavigate, Link } from 'react-router-dom' 
import './login.css'

function Login() {
    const [username, setUsername] = useState('');
    const { login } = useUser();
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        login(username);
        navigate('/');
    }

    function handleChange(e) {
        setUsername(e.target.value);
    }

    return (
        <div className="page-container">
            <div className='form-card'>
                
                <form onSubmit={handleSubmit}>
                    <h2>SKYLEASE</h2> 
                    <p style={{textAlign:'center', color: 'var(--gris)', marginBottom: '20px'}}>
                        Portal de Acceso
                    </p>

                    <div>
                        <label className='form-label'>Usuario</label>
                        <input
                            className='form-input'
                            type="text"
                            placeholder="Ej. piloto123"
                            value={username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <br />
                    <div>
                        <label className='form-label'>Contraseña</label>
                        <input
                            className='form-input'
                            type="password"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    <br />
                    
                    <button type='submit' className='form-button'>
                        INGRESAR
                    </button>
                </form>

                <hr style={{margin: '20px 0', border: 'none', borderTop: '1px solid #eee'}}/>

                {/* AQUÍ ESTÁ EL CAMBIO: Texto + Enlace */}
                <div style={{ textAlign: 'center' }}>
                    <p style={{ display: 'inline', color: 'var(--gris)', marginRight: '5px' }}>
                        ¿Aún no tienes cuenta?
                    </p>
                    <Link to="/register" className="register-link">
                        Registrarse
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default Login;