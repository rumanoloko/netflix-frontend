import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Navigate} from 'react-router-dom';
//              <Route path="/" element={<Navigate to="/login" />} />
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/home" element={<HomePage />}/>
              <Route path="/" element={<App />}/>
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
