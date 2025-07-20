import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './../src/stylesheets/App.css'
import Equipo from './pages/Equipo'
import Clientes from './pages/Clientes'
import Inicio from './pages/Inicio'
import Establecimientos from './pages/Establecimientos'
import Urbanismo from './pages/Urbanismo'
import logofondo from './assets/establecimiento.jpg'
import Footer from './components/Footer'
import Navbar from './components/Navbar.jsx'
import LogoWhatsapp from './assets/imagengrandeWS.jpg'

export const App = () => {
  return (


      <Router  >

        <Navbar/>
        
        <Routes>

          <Route path='/' element= {<Inicio/>}/>
          <Route path='/serviciosurbanismo' element= {<Urbanismo/>}/>
          <Route path='/serviciosestablecimientos' element= {<Establecimientos/>}/>
          <Route path='/clientes' element= {<Clientes/>}/>
          <Route path='/equipo' element= {<Equipo/>}/>



        </Routes>
        <Footer />

 <button  className='whatsapp'><a target='_blank' href='https://api.whatsapp.com/send/?phone=573189409038'> <img className='imagenwa' src={LogoWhatsapp} alt="wapp" /> </a></button>

      </Router>




  )
}


export default App