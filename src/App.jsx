import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './../src/stylesheets/App.css'
import Equipo from './pages/Equipo'
import Clientes from './pages/Clientes'
import Inicio from './pages/Inicio'
import Establecimientos from './pages/Establecimientos'
import Urbanismo from './pages/Urbanismo'
import Footer from './components/Footer'
import Navbar from './components/Navbar.jsx'
import LogoWhatsapp from './assets/logo-whatsapp.png'

export const App = () => {
  return (

      <Router>
        {/* Fixed header at top */}
        <Navbar />

        {/* Sticky layout: main grows to push footer to bottom */}
        <div className="app-shell">
          <main className="page-content">
            <Routes>
              <Route path='/' element={<Inicio />} />
              <Route path='/serviciosurbanismo' element={<Urbanismo />} />
              <Route path='/serviciosestablecimientos' element={<Establecimientos />} />
              <Route path='/clientes' element={<Clientes />} />
              <Route path='/equipo' element={<Equipo />} />
            </Routes>
          </main>

          <Footer />

          <button className='whatsapp'>
            <a target='_blank' href='https://api.whatsapp.com/send/?phone=573189409038'>
              <img className='imagenwa' src={LogoWhatsapp} alt="wapp" />
            </a>
          </button>
        </div>
      </Router>
  )
}


export default App