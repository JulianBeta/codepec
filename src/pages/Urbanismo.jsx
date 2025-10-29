import React from 'react'
import '../stylesheets/comunpages.css'
import GoToTop from '../components/Gototop'
import '../stylesheets/EstablecimientosyUrbanismo.css'
import Dropdown from '../components/Dropdown'

export const Urbanismo = () => {
  return (
    <div className='contenedorpagina'>
  <div>
    <h4 className='titulo1'>SERVICIOS EN URBANISMO</h4>
  </div>

  <div>
    

    <Dropdown title="ASESORÍA, ACOMPAÑAMIENTO Y REPRESENTACIÓN EN PROCESOS POLICIVOS POR INFRACCIONES URBANÍSTICAS">
      <h3 className="submenu-title">Acciones específicas:</h3>
      <li className='li'>Defensa en procesos sancionatorios por infracciones urbanísticas.</li>
      <li className='li'>Representación ante inspecciones de policía y autoridades urbanísticas.</li>
      <li className='li'>Acompañamiento en la gestión de licencias y permisos.</li>
      <br />

      <h3 className="submenu-title">Ventajas para el cliente:</h3>
      <li className='li'>Minimización del riesgo de sanciones y multas urbanísticas.</li>
      <li className='li'>Regularización de proyectos en curso.</li>
      <li className='li'>Defensa efectiva frente a procesos administrativos.</li>
      <br />
    </Dropdown>

    <Dropdown title="ELABORACIÓN DE ESTUDIOS DE TÍTULOS Y ACOMPAÑAMIENTO EN PROCESOS DE NEGOCIACIÓN PREDIAL">
      <h3 className="submenu-title">Acciones específicas:</h3>
      <li className='li'>Análisis de la tradición jurídica de inmuebles.</li>
      <li className='li'>Identificación de riesgos legales en la adquisición de propiedades.</li>
      <li className='li'>Acompañamiento en procesos de negociación predial y conciliación.</li>
      <br />

      <h3 className="submenu-title">Ventajas para el cliente:</h3>
      <li className='li'>Seguridad en la adquisición de predios.</li>
      <li className='li'>Reducción de riesgos legales en transacciones inmobiliarias.</li>
      <li className='li'>Estrategias de negociación eficientes y seguras.</li>
      <br />
    </Dropdown>

  </div>

  <GoToTop />
</div>

  )
}

export default Urbanismo