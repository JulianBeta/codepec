import React from 'react'
//import '../stylesheets/comunpages.css'
import GoToTop from '../components/Gototop'
import '../stylesheets/EstablecimientosyUrbanismo.css'

export const Establecimientos = () => {
        return (

                <div className='contenedorpagina'>
                        <br></br><br></br><div ><h4 className='titulo1'>SERVICIOS A ESTABLECIMIENTOS DE COMERCIO</h4></div>
                        <div >
                                <br></br>
                                <div className="dropdown">
                                        <button className="dropdown-button">
                                                ASESORÍA, ACOMPAÑAMIENTO Y REPRESENTACIÓN ANTE INSPECTORES DE POLICÍA POR MEDIDAS CORRECTIVAS
                                        </button>
                                        <div className="dropdown-content">
                                                <h3 className="submenu-title">Acciones específicas:</h3>
                                                <li className='li'>Elaboración, radicación y seguimiento de escritos de objeción de medidas correctivas.</li>
                                                <li className='li'>Presentación de acciones de tutela por sellamientos ilegales.</li>
                                                <li className='li'>Representación legal y acompañamiento en audiencias ante inspectores de policía.</li>
                                                <br></br>
                                                <h3 className="submenu-title">Ventajas para el cliente:</h3>
                                                <li className='li'>Protección ante sanciones arbitrarias o desproporcionadas.</li>
                                                <li className='li'>Defensa legal efectiva para evitar el cierre del establecimiento.</li>
                                                <li className='li'>Restablecimiento de la actividad comercial cuando ha sido afectada por decisiones administrativas.</li>
                                                <br></br>
                                        </div>
                                </div>
                                <div className='dropdown'>
                                        <button className='dropdown-button'> VERIFICACIÓN JURÍDICA DE CUMPLIMIENTO DE REQUISITOS PARA EL DESARROLLO DE ACTIVIDAD ECONÓMICA
                                        </button>
                                        <div className='dropdown-content'>
                                                <h3 className='submenu-title'>Acciones específicas:</h3>
                                                <li className='li'>Revisión y validación de documentos exigidos por las autoridades.</li>
                                                <li className='li'>Asesoría y acompañamiento para garantizar el cumplimiento de todos los requisitos previstos el Artículo 87 del Código Nacional de Seguridad y Convivencia Ciudadana y demás normatividad aplicable.</li>
                                                <br></br>
                                                <h3 className="submenu-title">Ventajas para el cliente:</h3>
                                                <li className='li'>Prevención de sanciones y cierre de negocios.</li>
                                                <li className='li'>Cumplimiento legal garantizado para evitar conflictos con las autoridades.</li><br></br>
                                        </div>
                                </div>
                                <br></br>
                                <div className="dropdown">
                                        <button className="dropdown-button">ASESORÍA EN CONTRATACIÓN LABORAL</button>
                                        <div className="dropdown-content">
                                                <h3 className='submenu-title'>Acciones específicas:</h3>
                                                <li className='li'>Elaboración y revisión de contratos laborales.</li>
                                                <li className='li'>Cumplimiento normativo en términos de horas extras, turnos y prestaciones.</li>
                                                <li className='li'>Asesoría en medidas disciplinarias y terminación de contratos.</li><br></br>
                                                <h3 className="submenu-title">Ventajas para el cliente:</h3>
                                                <li className='li'>Reducción de riesgos legales y demandas laborales.</li>
                                                <li className='li'>Optimización de la gestión de recursos humanos.</li><br></br>
                                        </div>
                                </div>
                                <br></br>
                                <div className='dropdown'>
                                        <button className="dropdown-button">REPRESENTACIÓN EN PROCESOS POR COMPETENCIA DESLEAL Y PROPIEDAD INTELECTUAL</button>
                                        <div className="dropdown-content">
                                                <h3 className='submenu-title'>Acciones específicas:</h3>
                                                <li className='li'>Defensa ante prácticas de competencia desleal.</li>
                                                <li className='li'>Protección y registro de derechos de propiedad intelectual.</li>
                                                <li className='li'>Representación en acciones judiciales y extrajudiciales.</li><br></br>
                                                <br></br>
                                                <h3 className="submenu-title">Ventajas para el cliente:</h3>
                                                <li className='li'>Protección ante sanciones arbitrarias o desproporcionadas.</li>
                                                <li className='li'>Protección de la marca y activos intangibles.</li>
                                                <li className='li'>Prevención de disputas comerciales.</li>
                                                <li className='li'>Recuperación de daños por infracciones.</li><br></br>
                                        </div>
                                </div>
                        </div>
                        <GoToTop />
                </div >
        )
}

export default Establecimientos