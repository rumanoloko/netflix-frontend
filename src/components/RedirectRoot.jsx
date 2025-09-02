import {useAuth} from '../context/AuthContext.jsx';
import { Navigate } from 'react-router-dom';

export default function RedirectRoot() {
    const {isAuthenticated} = useAuth();

    if (isAuthenticated === null) return null;
    return isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />;
}
