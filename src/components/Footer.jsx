import React from 'react';
import { Link } from 'react-router-dom';
import './../stylesheets/Footer.css';
import logofooter from './../assets/logoCodepec72px.png'

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
                        <Link to="/equipo">Equipo</Link>
                        <Link to="/serviciosestablecimientos">Establecimientos</Link>
                        <Link to="/serviciosurbanismo">Urbanismo</Link>
                    </nav>
                </div>

                <div className="footer-section">
                    <div className="contact-info">
                        <h3>Contacto</h3>
                        <p>Tel: (123) 456-7890</p>
                        <p>Email: info@empresa.com</p>
                        <p>Dirección: Calle Principal 123</p>
                    </div>
                </div>

                <div className="footer-section">
                    <div className="social-media">
                        <a href="/" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
                        <a href="/" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                        <a href="/" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                        <a href="/" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>

                <div className="copyright">
                    <p>© 2023 Empresa. Todos los derechos reservados.</p>
                    <p>Aviso Legal | Política de Privacidad</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;