import React from 'react'
import '../stylesheets/comunpages.css'
import GoToTop from '../components/Gototop'
import '../stylesheets/EstablecimientosyUrbanismo.css'

export const Urbanismo = () => {
  return (
    <div className='contenedorpagina'>
      <div className='titulo1' ><h1>SERVICIOS EN URBANISMO</h1></div>

      <div className='titulo2'> <h2>ASESORÍA, ACOMPAÑAMIENTO Y REPRESENTACIÓN EN PROCESOS POLICIVOS POR INFRACCIONES URBANÍSTICAS</h2>
      </div>
      <div className='titulo3'><h3>
        Acciones específicas:
      </h3></div>
      <div className='lista'><ul>
        <li>Defensa en procesos sancionatorios por infracciones urbanísticas.</li>
        <li>Representación ante inspecciones de policía y autoridades urbanísticas.</li>
        <li>Acompañamiento en la gestión de licencias y permisos.</li>
      </ul>
        <div className='titulo3'>  <h3>Ventajas para el cliente:</h3> </div>
        <ul>
          <li>Minimización del riesgo de sanciones y multas urbanísticas.</li>
          <li>Regularización de proyectos en curso.</li>
          <li>Defensa efectiva frente a procesos administrativos.</li>
        </ul>
      </div>


      <div className='titulo2'> <h2>ELABORACIÓN DE ESTUDIOS DE TÍTULOS Y ACOMPAÑAMIENTO EN PROCESOS DE NEGOCIACIÓN PREDIAL</h2>
      </div>
      <div className='titulo3'><h3>
        Acciones específicas:
      </h3></div>
      <div className='lista'> <ul>
        <li>Análisis de la tradición jurídica de inmuebles.</li>
        <li>Identificación de riesgos legales en la adquisición de propiedades.</li>
        <li>Acompañamiento en procesos de negociación predial y conciliación.</li>
      </ul>
      </div>
      <div className='titulo3'><h3>Ventajas para el cliente:</h3></div>
      <div className='lista'><ul>
        <li>Seguridad en la adquisición de predios.</li>
        <li>Reducción de riesgos legales en transacciones inmobiliarias.</li>
        <li>Estrategias de negociación eficientes y seguras.</li>
      </ul>
      </div>

      <GoToTop />

    </div>
  )
}

export default Urbanismo  