import React from 'react'
import '../stylesheets/comunpages.css'
import GoToTop from '../components/Gototop'
import '../stylesheets/EstablecimientosyUrbanismo.css'

export const Urbanismo = () => {
  return (
    <div className='contenedorpagina'>
      <br /><br />
      <div>
        <h1 className='titulo1'>SERVICIOS EN URBANISMO</h1>
      </div>
      <br /><br />
      
      <div className="urbanismo-section"> {/* Contenedor añadido */}
        <div>
          <h1>ASESORÍA, ACOMPAÑAMIENTO Y REPRESENTACIÓN EN PROCESOS POLICIVOS POR INFRACCIONES URBANÍSTICAS</h1>
        </div>
        <br /><br />
        <h2>Acciones específicas:</h2>
        <br />
        <h4>- Defensa en procesos sancionatorios por infracciones urbanísticas.</h4><br />
        <h4>- Representación ante inspecciones de policía y autoridades urbanísticas.</h4><br />
        <h4>- Acompañamiento en la gestión de licencias y permisos.</h4><br />
        
        <h2>Ventajas para el cliente:</h2><br />
        <h4>- Minimización del riesgo de sanciones y multas urbanísticas.</h4><br />
        <h4>- Regularización de proyectos en curso.</h4><br />
        <h4>- Defensa efectiva frente a procesos administrativos.</h4><br />
      </div>

      <div className="urbanismo-section"> {/* Contenedor añadido */}
        <div>
          <h1>ELABORACIÓN DE ESTUDIOS DE TÍTULOS Y ACOMPAÑAMIENTO EN PROCESOS DE NEGOCIACIÓN PREDIAL</h1>
        </div>
        <br />
        <h2>Acciones específicas:</h2><br />
        <h4>- Análisis de la tradición jurídica de inmuebles.</h4><br />
        <h4>- Identificación de riesgos legales en la adquisición de propiedades.</h4><br />
        <h4>- Acompañamiento en procesos de negociación predial y conciliación.</h4><br />
        
        <h2>Ventajas para el cliente:</h2><br />
        <h4>- Seguridad en la adquisición de predios.</h4><br />
        <h4>- Reducción de riesgos legales en transacciones inmobiliarias.</h4><br />
        <h4>- Estrategias de negociación eficientes y seguras.</h4><br />
      </div>

      <GoToTop />
    </div>
  )
}

export default Urbanismo