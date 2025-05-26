import React from 'react'
import '../stylesheets/comunpages.css'
import GoToTop from '../components/Gototop'
import '../stylesheets/EstablecimientosyUrbanismo.css'

export const Establecimientos = () => {
  return (
    <div className='contenedorpagina'>
      <div ><h1 className='titulo1'>SERVICIOS A ESTABLECIMIENTOS DE COMERCIO</h1></div>

      <div > <h2 className='titulo2'>ASESORÍA, ACOMPAÑAMIENTO Y REPRESENTACIÓN ANTE INSPECTORES DE POLICÍA POR MEDIDAS CORRECTIVAS</h2>
      </div>
      <div > 
        <h3 className='titulo3'> Acciones específicas:
        </h3></div>
    
      <div > 
        <ul className='lista'>
          <li>- Elaboración, radicación y seguimiento de escritos de objeción a medidas correctivas.</li>
          <li>- Presentación de acciones de tutela por sellamientos ilegales.</li>
          <li>-	Representación legal y acompañamiento en audiencias ante inspectores de policía.</li></ul>
      </div>
      <div ><h3 className='titulo3'>Ventajas para el cliente:</h3></div>
      <div >
        <ul className='lista'>
          <li>- Protección ante sanciones arbitrarias o desproporcionadas.</li>
          <li>- Defensa legal efectiva para evitar el cierre del establecimiento.</li>
          <li>- Restablecimiento de la actividad comercial cuando ha sido afectada por decisiones administrativas.</li></ul>
      </div>
      <div > <h2 className='titulo2'>VERIFICACIÓN JURÍDICA DE CUMPLIMIENTO DE REQUISITOS PARA EL DESARROLLO DE ACTIVIDAD ECONÓMICA</h2>
      </div>
      <div ><h3 className='titulo3'>
          Acciones específicas:</h3>
      </div>
      <div> <ul className='lista'>
            <li>- Revisión y validación de documentos exigidos por las autoridades.</li>
            <li>- Asesoría y acompañamiento para garantizar el cumplimiento de todos los requisitos previstos el Artículo 87 del Código Nacional de Seguridad y Convivencia Ciudadana y demás normatividad aplicable.</li></ul>
      </div>
       <div> <h3 className='titulo3'>Ventajas para el cliente:</h3></div>
        <div>
          <ul className='lista'>
            <li>- Prevención de sanciones y cierre de negocios.</li>
            <li>-	Cumplimiento legal garantizado para evitar conflictos con las autoridades.</li>
          </ul>
        </div>

      <div> <h2 className='titulo2'>ASESORÍA EN CONTRATACIÓN LABORAL</h2></div>
        <div>

          Acciones específicas:
        </div>
         <div> <ul className='lista'>

            <li>-	Elaboración y revisión de contratos laborales.</li>
            <li>- Cumplimiento normativo en términos de horas extras, turnos y prestaciones.</li>
            <li>- Asesoría en medidas disciplinarias y terminación de contratos.</li></ul></div>

          <div><h3 className='titulo3'>Ventajas para el cliente:</h3></div>
          <div><ul className='lista'>
            <li>- Reducción de riesgos legales y demandas laborales.</li>
            <li>- Optimización de la gestión de recursos humanos.</li>

          </ul></div>

      <div> <h2 className='titulo2'>ESTRUCTURACIÓN DE CONTRATOS CON PROVEEDORES Y TERCEROS</h2></div>
        <div><h3 className='titulo3'>
          Acciones específicas:
        </h3></div>
          <div><ul className='lista'>

            <li>- Redacción y negociación de contratos comerciales.</li>
            <li>- Asesoría en contratos de arrendamiento, suministro y prestación de servicios.</li></ul></div>
          <div><h3 className='titulo3'>Ventajas para el cliente:</h3>
          <div>
          <ul className='lista'>
            <li>- Protección jurídica en acuerdos comerciales.</li>
            <li>- Minimización de riesgos de incumplimiento o fraudes.</li>
          </ul></div>
        </div>


      <div> <h2 className='titulo2'>REPRESENTACIÓN EN PROCESOS POR COMPETENCIA DESLEAL Y PROPIEDAD INTELECTUAL</h2>
      </div>
       <div><h3 className='titulo3'>
          Acciones específicas:
        </h3></div>
        <div>
          <ul className='lista'>
            <li>- Defensa ante prácticas de competencia desleal.</li>
            <li>- Protección y registro de derechos de propiedad intelectual.</li>
            <li>- Representación en acciones judiciales y extrajudiciales.</li></ul> </div>
         <div> <h3 className='titulo3'>Ventajas para el cliente:</h3></div>
          <div><ul className='lista'><li>Protección ante sanciones arbitrarias o desproporcionadas.</li>
            <li>- Protección de la marca y activos intangibles.</li>
            <li>- Prevención de disputas comerciales.</li>
            <li>- Recuperación de daños por infracciones.</li>

          </ul></div>
          <GoToTop />
    </div>
  
  )

}

export default Establecimientos