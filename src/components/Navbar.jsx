import React from 'react'
import { Link } from 'react-router-dom'
import './../stylesheets/Header.css'
import { useState } from 'react'
import logonavbar from '../../public/assets/logoCodepec72px.png'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // const closemenu = () => {
    //     setIsOpen(!menuOpen);
    // }
    
    return (
        <header>
            
            <nav className={`menu ${isOpen ? 'open' : ''}`}>
            {isOpen && (
                    <>
                        <span className="close-btn" onClick={toggleMenu}><b>X</b></span>
                        {/* <div className="logona">
                            <a href="/"><img src={logo} alt="Logo" /></a>
                        </div> */}
                    </>
                )}
                <Link to="/"><img src={logonavbar} alt="icono"/></Link>
                <Link className="titulonavbar" to="/">INICIO</Link>
                <Link className="titulonavbar" to="/clientes">NUESTROS CLIENTES</Link>
                {/* <Link className="titulonavbar"to="/equipo">NUESTRO EQUIPO</Link> */}
                <Link className="titulonavbar" to="/serviciosestablecimientos">ESTABLECIMIENTOS DE COMERCIO</Link>
                <Link className="titulonavbar" to="/serviciosurbanismo">URBANISMO</Link>
                
            </nav><div> <img src={logonavbar} alt="icono"/></div>
            <div className="hamburger" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div> 
                
            </div>

        </header>
    )
}

export default Navbar
