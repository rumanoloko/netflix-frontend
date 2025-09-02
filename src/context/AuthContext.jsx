// src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [user, setUser] = useState(null);



    const verifySession = async () => {

        try {
            const res = await fetch('http://localhost:5000/api/users/verify', {
                method: 'GET',
                credentials: 'include',
            });
            if (res.ok) {
                const data = await res.json();
                setIsAuthenticated(true);
                setUser(data.user);
            } else {
                setIsAuthenticated(false);
                setUser(null);
            }
        } catch {
            setIsAuthenticated(false);
            setUser(null);
        }
    };

    useEffect(() => {
        verifySession();
        const interval = setInterval(verifySession, 15 * 60 * 1000);
        return () => clearInterval(interval)
    }, []);

    const login = async (email, password) => {
        const res = await fetch('http://localhost:5000/api/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ email, password }),
        });

        if (res.ok) {
            await verifySession();
            return true;
        } else {
            return false;
        }
    };

    const register = async ({ name, email, password, confirmPassword}) => {
        const res = await fetch('http://localhost:5000/api/users/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ name, email, password, confirmPassword}),
        });

        if (res.ok) {
            await verifySession(); // actualiza el estado
            return true;
        } else {
            return false;
        }
    };


    const logout = async () => {
        await fetch('http://localhost:5000/api/users/logout', {
            method: 'POST',
            credentials: 'include',
        });
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
