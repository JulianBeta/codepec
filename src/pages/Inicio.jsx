import React from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/Inicio.css'
import imagenciudad from '../../public/assets//ciudad.jpg'
import imagenestablecimiento from '../../public/assets/establecimiento.jpg'
import Slider2 from '../components/Carrusel2'
import logofondo from '../../public/assets/Logopequeño.png'



export const Inicio = () => {
    return (

        <div className='contenedorpagina'>

 {/* <div className='contenedorpagina' style={{ background: `url(${logofondo})`, backgroundRepeat: 'repeat', backgroundAttachment: 'local', backgroundSize: '100%' }}> */}
            
           
            <h1 className='titulossecundariosinicio'>¿QUIÉNES SOMOS?</h1>
            <div className='seccionquienesyporque'>

                <p className='textoquienesyporque'>CODEPEC S.A.S. es una firma legal especializada en la asesoría, acompañamiento, defensa y promoción de los derechos de los ciudadanos en materia comercial y urbanística. Nuestra misión es ofrecer soluciones jurídicas integrales que permitan a nuestros clientes operar dentro del marco normativo, minimizando riesgos legales y optimizando su gestión empresarial.
                    Conformado por un equipo altamente calificado, CODEPEC S.A.S. brinda acompañamiento en áreas clave como el derecho policivo, administrativo, urbanístico, laboral, comercial y de propiedad intelectual, garantizando seguridad jurídica y protección ante las decisiones de las autoridades.
                    Nuestra experiencia nos permite ofrecer un servicio ágil, confiable y efectivo, convirtiéndonos en aliados estratégicos para establecimientos comerciales que buscan protección frente a sanciones, medidas correctivas y litigios, así como en procesos de negociación predial y estudios de títulos.
                </p>
            </div>


 <div className='contenedorservicios'>
                <div className='cuadroserviciosinicio'><Link to="/serviciosurbanismo"><img className="imagenesinicio" src={imagenciudad} alt="urbanismo" /><h3 className='textoserviciosinicio'>URBANISMO</h3></Link>
                </div>
                <div className='cuadroserviciosinicio'>
                    <Link to="/serviciosestablecimientos"><img className="imagenesinicio" src={imagenestablecimiento} alt="establecimientos" /><h3 className='textoserviciosinicio'>ESTABLECIMIENTOS DE COMERCIO</h3></Link>
                </div></div>

                           <h1 className='titulossecundariosinicio'>¿POR QUÉ ELEGIR CODEPEC S.A.S.?</h1>
                <div className='seccionquienesyporque'>

                    <p className='textoquienesyporque'>

                        -Experiencia y especialización: Nuestro equipo cuenta con amplia trayectoria en la defensa de comerciantes y constructoras ante autoridades administrativas y de policía.<br></br>

                        -Asesoría preventiva: No solo actuamos ante problemas, sino que ayudamos a prevenirlos con orientación legal proactiva, reduciendo riesgos futuros.<br></br>

                        -Enfoque multidisciplinario: Nuestro equipo combina conocimientos en derecho administrativo, comercial y urbanístico para ofrecer soluciones integrales.<br></br>

                        -Accesibilidad y cercanía: Mantenemos una comunicación constante y transparente con nuestros clientes, asegurando que estén informados en cada etapa del proceso.<br></br>

                        -Compromiso ético: Operamos con altos estándares de honestidad y profesionalismo, priorizando siempre los intereses de nuestros clientes.<br></br>

                        -Flexibilidad en soluciones: Adaptamos nuestras estrategias no solo a las necesidades legales, sino también a las posibilidades económicas de cada cliente.<br></br>

                        -Red de aliados estratégicos: Trabajamos en colaboración con expertos en diferentes áreas para fortalecer tu defensa cuando sea necesario.<br></br>

                        -Respuesta ágil: Entendemos la urgencia en ciertos casos, por lo que actuamos con celeridad para minimizar impactos negativos en tu negocio.<br></br><br></br>

                        <b>En  CODEPEC S.A.S. defendemos tus derechos y te acompañamos con experiencia, experticia, prevención y resultados reales. <br></br>Confía en un equipo que combina especialización, trato personalizado y compromiso con tu éxito legal y empresarial.</b>


                    </p>
                </div><h1 className='titulossecundariosinicio'>NUESTROS CLIENTES</h1>
                <div className='seccioncarrusel'>

                    <Slider2 />
                </div>

            

        </div>

    )
}

export default Inicio
