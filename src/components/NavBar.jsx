import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <header>
            <nav>
                <button><Link to="/">INICIO</Link></button>
                <button><Link to="/clientes">NUESTROS CLIENTES</Link></button>
                <button><Link to="/equipo">NUESTRO EQUIPO</Link></button>
                <button> <Link to="/serviciosestablecimientos">SERVICIOS ESTABLECIMIENTOS DE COMERCIO</Link></button>
                <button><Link to="/serviciosurbanismo">URBANISMO</Link></button>
            </nav>


        </header>
    )
}

export default Navbar
