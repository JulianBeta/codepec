import React from 'react'
import '../stylesheets/ClienteComponent.css'
import '../components/ClienteComponent.jsx'
import '../stylesheets/comunpages.css'
import ClienteComponent from '../components/ClienteComponent.jsx';
import GoToTop from '../components/Gototop'

export const Clientes = () => {
  return (
    
    <div className='contenedorpagina'>
      
    <div className='contenedor-principal'>
      <h2 className='titulo'>CLIENTES</h2> 
      {/* <h1 className='textotitulo'>CODEPEC S.A.S. tiene entre sus clientes a diversas empresas y establecimientos comerciales en Colombia, que reciben servicios de asesoría y representación legal. Algunos de nuestros clientes son:</h1> */}
           <ClienteComponent
          imagen='oras'
          nombre='Oras Techonologies S.A.S.'
          descripcion = 'Empresa de ingeniería con 10 años de trayectoria, enfocada en Inteligencia Analítica, Seguridad Electrónica, Telecomunicaciones y Desarrollo de Software. Los servicios prestados a esta empresa son: elaboración y revisión de contratos laborales, cumplimiento normativo en términos de horas extras, turnos y prestaciones y asesoría en medidas disciplinarias y terminación de contratos.'/>
        <ClienteComponent
          imagen='reeds'
          nombre='Reed Pub'
          descripcion = 'Reconocido PUB ubicado en la localidad de Teusaquillo en Bogotá. Los servicios prestados a este establecimiento comercial incluyen: elaboración, radicación y seguimiento de escritos de objeción a medidas correctivas y representación legal y acompañamiento en audiencias ante inspectores de policía.'/>     
        <ClienteComponent
          imagen = 'ssac'
          nombre = 'Sistemas de Seguridad Antenas y Citófonos S.A.'
          descripcion = 'Especializados en la instalación de redes comunales de antenas, citofonía, cámaras, alarmas y electricidad en proyectos multivivienda. Recibe nuestros servicios en la revisión y validación de documentos exigidos por las autoridades para su funcionamiento, así como la redacción y negociación de contratos comerciales y de suministro.'/>       
        <ClienteComponent
         imagen = 'nextdoor'
         nombre = 'Next Door Hostel'
          descripcion = 'Alojamiento moderno y versátil ubicado en Bogotá, ideal paraquienes buscan comodidad y servicios integrales. Desde CODEPEC SAS, brindamos asesoría y acompañamiento para garantizar el cumplimiento de todos los requisitos previstos en el Código Nacional de Seguridad y Convivencia Ciudadana y demás normatividad aplicable para el desarrollo de su actividad económica.'/>
        <ClienteComponent
          imagen = 'melomarket'
          nombre = 'El Melón Market'
          descripcion = 'Empresa con más de 12 años de experiencia, ubicada en Ocaña, Norte de Santander. Los servicios que brinda CODEPEC a esta empresa incluyen la asesoría en contratos de arrendamiento, suministro y prestación de servicios; y asesoría en contratación laboral en cuanro a el cumplimiento normativo en términos de horas extras, turnos y prestaciones.'/>
        <ClienteComponent
          imagen = 'mass'
          nombre = 'MAS Centro Deportivo de Desarrollo Personal'
          descripcion = 'Academia de artes marciales con más de 12 años de experiencia. Como clientes de CODEPEC, han recibido apoyo en la revisión y validación de documentos exigidos por las autoridades para su funcionamiento, así como en la elaboración de contratos de arrendamiento, suministro y de contratos de luchadores, para el desarrollo de sus eventos.'/>
        <ClienteComponent
          imagen = 'grub'
          nombre = 'Grub'
          descripcion = 'Establecimiento comercial especializado en Smash Burguers y Pizzas Napolitanas. Como clientes de CODEPEC SAS se han beneficiado con la defensa ante prácticas de competencia desleal, protección y registro de derechos de propiedad intelectual y representación en acciones judiciales y extrajudiciales.'/>
        </div>
        <br></br>
        <div className='contenedor-principal'><h2 className='titulo'> ALIADOS </h2> 
        {/* <h1 className='textotitulo'>Contamos con firmas aliadas para el cumplimiento integral de nuestros objetivos misionales</h1> */}
        <ClienteComponent
          imagen = 'naturasas'
          nombre = 'Natura Construcciones S.A.S.'
          descripcion = 'Natura Construcciones SAS trabaja desde 1998 en proyectos inmobiliarios de alto impacto, creando espacios donde el bienestar y la calidad de vida son la base.'/>       
        <ClienteComponent
          imagen = 'acees'
          nombre = 'Aceess Abogados'
          descripcion = 'Acees Abogados - Abogacía para empresas y negocios, es un equipo de abogados con amplia experiencia en el asesoramiento legal a empresas. Nos especializamos en derecho laboral, comercial y de tierras.'/>
        <ClienteComponent
          imagen = 'apep'
          nombre = 'Asociación para la Promoción del Empleo Público'
          descripcion = 'APEP es una asociación interdisciplinaria de profesionales con presencia a nivel nacional, especializada en brindar servicios integrales de asesoría, acompañamiento y capacitación en los procesos de selección adelantados por la Comisión Nacional del Servicio Civil.'/>
        
        </div>
      <GoToTop/>
    </div>
  );
}
export default Clientes;
