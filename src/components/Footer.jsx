import React from 'react';
import { Link } from 'react-router-dom';
import './../stylesheets/Footer.css';
import logofooter from '../assets/logoCodepec72px.png'
import logoinstagram from '../assets/logo-instag.png'

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section">
                    <div className="footer-logo">
                        {/* Replace with actual logo */}
                        <img src= {logofooter} />
                    </div>
                </div>

                <div className="footer-section">
                    <nav className="footer-links">
                        <Link to="/">Inicio</Link>
                        <Link to="/clientes">Clientes</Link>
                        {/* <Link to="/equipo">Equipo</Link> */}
                        <Link to="/serviciosestablecimientos">Establecimientos</Link>
                        <Link to="/serviciosurbanismo">Urbanismo</Link>
                    </nav>
                </div>

                <div className="footer-section">
                    <div className="contact-info">
                        <h3>Contacto</h3>
                        <p>Tel: (+57) 318-9409038</p>
                        {/* <p>Email: info@empresa.com</p> */}
                        <p>Dirección: Calle 67 No. 11 72 Oficina 203</p>  
                        <div>  < a  href="https://www.instagram.com/codepec_sas?igsh=ODRjNDRibnBxZTZ2" target='_blank' ><img src={logoinstagram}></img></a>
                    </div>
                    </div>
                </div>


                <div className="copyright">
                    <p>© 2025 CODEPEC S.A.S. Todos los derechos reservados.</p>
                    <p>Aviso Legal | Política de Privacidad</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;