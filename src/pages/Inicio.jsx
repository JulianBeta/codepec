import React from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/Inicio.css'
import imagenciudad from '../assets/ciudad.jpg'
import imagenestablecimiento from '../assets/establecimiento.jpg'
import Slider2 from '../components/Carrusel2'



export const Inicio = () => {
    return (
        <div className='contenedorpagina'>


            <div className='contenedorservicios'>
                <div className='cuadroserviciosinicio'><Link to="/serviciosurbanismo"><img className="imagenesinicio" src={imagenciudad} alt="urbanismo" /><h3 className='textoserviciosinicio'>SERVICIOS URBANISMO</h3></Link>
                </div>
                <div className='cuadroserviciosinicio'>
                    <Link to="/serviciosestablecimientos"><img className="imagenesinicio" src={imagenestablecimiento} alt="establecimientos" /><h3 className='textoserviciosinicio'>SERVICIOS ESTABLECIMIENTOS DE COMERCIO</h3></Link>
                </div></div>
            <h1 className='titulossecundariosinicio'>¿QUIÉNES SOMOS?</h1>
            <div className='seccionquienesyporque'>

                <p className='textoquienesyporque'>CODEPEC S.A.S. es una firma legal especializada en la asesoría, acompañamiento, defensa y promoción de los derechos de los ciudadanos en materia comercial y urbanística. Nuestra misión es ofrecer soluciones jurídicas integrales que permitan a nuestros clientes operar dentro del marco normativo, minimizando riesgos legales y optimizando su gestión empresarial.
                    Conformado por un equipo altamente calificado, CODEPEC S.A.S. brinda acompañamiento en áreas clave como el derecho policivo, administrativo, urbanístico, laboral, comercial y de propiedad intelectual, garantizando seguridad jurídica y protección ante las decisiones de las autoridades.
                    Nuestra experiencia nos permite ofrecer un servicio ágil, confiable y efectivo, convirtiéndonos en aliados estratégicos para establecimientos comerciales que buscan protección frente a sanciones, medidas correctivas y litigios, así como en procesos de negociación predial y estudios de títulos.
                </p>
            </div>
            <h1 className='titulossecundariosinicio'>¿POR QUÉ ELEGIR CODEPEC S.A.S.?</h1>
            <div className='seccionquienesyporque'>

                <p className='textoquienesyporque'>

                    Experiencia y especialización: Nuestro equipo cuenta con amplia trayectoria en la defensa de comerciantes y constructoras ante autoridades administrativas y de policía.<br></br><br></br>
                    - Soluciones personalizadas: Adaptamos nuestra asesoría a las necesidades específicas de cada cliente.<br></br>
                    - Defensa efectiva: Nos enfocamos en proteger los intereses de nuestros clientes con estrategias legales sólidas.<br></br>
                    - Respaldo integral: Brindamos asesoría en múltiples áreas del derecho, garantizando una protección completa.<br></br><br></br>
                    Contáctanos y protege tus derechos, intereses y negocios con CODEPEC S.A.S.

                </p>
            </div><h1 className='titulossecundariosinicio'>NUESTROS CLIENTES</h1>
            <div className='seccioncarrusel'>

                <Slider2 />
            </div>

        </div>


    )
}

export default Inicio
