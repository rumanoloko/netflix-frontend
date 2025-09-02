import {useAuth} from '../context/AuthContext.jsx';
import { Navigate } from 'react-router-dom';

export default function ProtectedHomeRoute({ children }) {
    const {isAuthenticated} = useAuth();
    if (isAuthenticated === null) return null; // o un loader
    return isAuthenticated ? children : <Navigate to="/login" />;
}
