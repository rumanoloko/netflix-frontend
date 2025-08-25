import React from 'react';
import './Login.scss';
import {Link} from 'react-router-dom';
import {useEffect} from 'react';


const Login = () => {

    useEffect(() => {
        document.body.classList.add('login-active');
        return () => {
            document.body.classList.remove('login-active');
        };
    }, []);
    return (
        <div className="login-container">
            <form className="login-form">
                <h2>Iniciar Sesión</h2>
                <input type="email" placeholder="Correo electrónico" required />
                <input type="password" placeholder="Contraseña" required />
                <button type="submit">Entrar</button>
                <p className="register-link">
                    ¿No tienes cuenta?
                    <Link to="/register">Regístrate</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
