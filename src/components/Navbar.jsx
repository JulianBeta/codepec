import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './../stylesheets/Header.css'
import logonavbar from '../assets/logoCodepec72px.png'

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef(null);
    const firstLinkRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Cerrar con tecla Escape y devolver foco al botón
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isOpen) {
                setIsOpen(false);
                buttonRef.current?.focus();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);
    
    // En abrir, llevar el foco al primer enlace para navegación por teclado
    useEffect(() => {
        if (isOpen) {
            firstLinkRef.current?.focus();
        }
    }, [isOpen]);
    
    return (
        <header>
            
            <nav
                className={`menu ${isOpen ? 'open' : ''}`}
                id="primary-navigation"
                aria-label="Navegación principal"
            >
                {isOpen && (
                    <button className="close-btn" onClick={toggleMenu} aria-label="Cerrar menú">×</button>
                )}
                <Link to="/"><img src={logonavbar} alt="icono"/></Link>
                <Link className="titulonavbar" to="/" ref={firstLinkRef}>INICIO</Link>
                <Link className="titulonavbar" to="/clientes">NUESTROS CLIENTES</Link>
                {/* <Link className="titulonavbar"to="/equipo">NUESTRO EQUIPO</Link> */}
                <Link className="titulonavbar" to="/serviciosestablecimientos">ESTABLECIMIENTOS DE COMERCIO</Link>
                <Link className="titulonavbar" to="/serviciosurbanismo">URBANISMO</Link>
            </nav>

            <div>
                <img className='logobarracel' src={logonavbar} alt="icono"/>
            </div>

            <button
                className="hamburger-btn"
                onClick={toggleMenu}
                aria-controls="primary-navigation"
                aria-expanded={isOpen}
                aria-label={isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
                ref={buttonRef}
            >
                <span className="bar" aria-hidden="true"></span>
                <span className="bar" aria-hidden="true"></span>
                <span className="bar" aria-hidden="true"></span>
            </button>

            {/* Overlay para off-canvas */}
            <div
                className={`nav-overlay ${isOpen ? 'show' : ''}`}
                onClick={toggleMenu}
                aria-hidden={!isOpen}
            />

        </header>
    )
}

export default Navbar
