import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { routes } from './routes/indexRoutes.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    {routes.map(({ path, element }, i) => (
                        <Route key={i} path={path} element={element} />
                    ))}
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    </StrictMode>
)
