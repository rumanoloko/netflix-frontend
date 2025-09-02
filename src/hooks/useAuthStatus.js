// src/hooks/useAuthStatus.js
import { useEffect, useState } from 'react';

export default function useAuthStatus() {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/users/verify', {
            method: 'GET',
            credentials: 'include',
        })
            .then((res) => setIsAuthenticated(res.ok))
            .catch(() => setIsAuthenticated(false));
    }, []);

    return isAuthenticated;
}
