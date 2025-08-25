import React, { useState, useEffect } from 'react';
import './styles/register.scss';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        document.body.classList.add('register-active');
        return () => {document.body.classList.remove('register-active');}
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        try {
            const res = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nombre, email, password, confirmPassword }),
            });

            const data = await res.json();

            if (res.ok) {
                alert('Registro exitoso');
                navigate('/login');
            } else {
                alert(data.mensaje || 'Error al registrar');
            }
        } catch (error) {
            console.error('Error al conectar con el servidor:', error);
            alert('No se pudo conectar con el servidor');
        }
    };

    return (
        <div className='register-container'>
            <form className='register-form' onSubmit={handleSubmit}>
                <h2>Crear Cuenta</h2>
                <input
                    type="text"
                    placeholder="Nombre completo"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Confirmar contraseña"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <button type="submit">Registrarse</button>
                <p className='login-link'>
                    ¿Ya tienes cuenta?
                    <Link to="/login">
                        Inicia sesión
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Register;
