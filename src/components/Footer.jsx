import React from 'react';
import './../stylesheets/Footer.css';
import logofooter from '../assets/logoCodepec72px.png'
import logoinstagram from '../assets/logo-instag.png'

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                {/* Left column: logo only */}
                <div className="footer-section">
                    <div className="footer-logo">
                        <img src={logofooter} alt="CODEPEC logo" />
                    </div>
                </div>

                {/* Right column: contact and social */}
                <div className="footer-section">
                    <div className="contact-info">
                        <h3>Contacto</h3>
                        <p>Tel: (+57) 318-9409038</p>
                        <p>Dirección: Calle 67 No. 11 72 Oficina 203</p>
                        <div>
                            <a href="https://www.instagram.com/codepec_sas?igsh=ODRjNDRibnBxZTZ2" target="_blank" rel="noreferrer">
                                <img src={logoinstagram} alt="Instagram" />
                            </a>
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