import { Navigate } from 'react-router-dom'
import pages from '../utils/pageImports'
import ProtectedHomeRoute from '../components/ProtectedHomeRoute'
import RedirectRoot from '../components/RedirectRoot'
import App from '../App'
export const routes = [
    { path: '/', element: <RedirectRoot /> },
    { path: '/login', element: <pages.LoginNetflix /> },
    { path: '/register', element: <pages.RegisterNetflix /> },
    {
        path: '/home',
        element: (
            <ProtectedHomeRoute>
                <App />
            </ProtectedHomeRoute>
        )
    }
]
