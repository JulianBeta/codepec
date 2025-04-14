import React from 'react'
import '../stylesheets/EquipoComponent.css'
import '../components/EquipoComponent.jsx'
import '../stylesheets/comunpages.css'
import EquipoComponent from '../components/EquipoComponent.jsx'
import GoToTop from '../components/Gototop'

export const Equipo = () => {
  return (
    

    <div className='contenedorpagina'>
      
      <div className='contenedor-principal'>
       <h2 className='tituloequipo'>CODEPEC S.A.S. cuenta con un equipo profesional especializado para atender todas la necesidades de nuestros clientes </h2>
       <br></br>
        <EquipoComponent
          imagen='camilar'
          nombre='Reed Pub'
          descripcion = 'Reconocido PUB ubicado en la localidad de Teusaquillo en Bogotá. Los servicios prestados a este establecimiento comercial incluyen: elaboración, radicación y seguimiento de escritos de objeción a medidas correctivas y representación legal y acompañamiento en audiencias ante inspectores de policía.'/>
        <EquipoComponent
          imagen='oras'
          nombre='Oras Techonologies S.A.S.'
          descripcion = 'Empresa de ingeniería con 10 años de trayectoria, enfocada en Inteligencia Analítica, Seguridad Electrónica, Telecomunicaciones y Desarrollo de Software. Los servicios prestados a esta empresa son: elaboración y revisión de contratos laborales, cumplimiento normativo en términos de horas extras, turnos y prestaciones y asesoría en medidas disciplinarias y terminación de contratos.'/>
        <EquipoComponent
          imagen = 'ssac'
          nombre = 'Sistemas de Seguridad Antenas y Citófonos S.A.'
          descripcion = 'Especializados en la instalación de redes comunales de antenas, citofonía, cámaras de video, alarmas y electricidad en proyectos de multivivienda. Esta empresa recibe nuestros servicios en la revisión y validación de documentos exigidos por las autoridades para su funcionamiento, así como la redacción y negociación de contratos comerciales y de suministro.'/>       
        <EquipoComponent
         imagen = 'nextdoor'
         nombre = 'Next Door Hostel'
          descripcion = 'Alojamiento moderno y versátil ubicado en Bogotá, ideal paraquienes buscan comodidad y servicios integrales. Desde CODEPEC SAS, brindamos asesoría y acompañamiento para garantizar el cumplimiento de todos los requisitos previstos en el Código Nacional de Seguridad y Convivencia Ciudadana y demás normatividad aplicable para el desarrollo de su actividad económica.'/>
        <EquipoComponent
          imagen = 'melomarket'
          nombre = 'El Melón Market'
          descripcion = 'Empresa con más de 12 años de experiencia, ubicada en Ocaña, Norte de Santander. Los servicios que brinda CODEPEC a esta empresa incluyen la asesoría en contratos de arrendamiento, suministro y prestación de servicios; y asesoría en contratación laboral en cuanro a el cumplimiento normativo en términos de horas extras, turnos y prestaciones.'/>
        <EquipoComponent
          imagen = 'mass'
          nombre = 'MAS Centro Deportivo de Desarrollo Personal'
          descripcion = 'Academia de artes marciales con más de 12 años de experiencia. Es un referente de los deportes de combate a nivel nacional. Como clientes de CODEPEC, han recibido apoyo en la revisión y validación de documentos exigidos por las autoridades para su funcionamiento, así como en la elaboración de contratos de arrendamiento, suministro y de contratos de luchadores, para el desarrollo de sus eventos.'/>
        <EquipoComponent
          imagen = 'camilar'
          nombre = 'Camila Rodríguez T.'
          descripcion = 'Abogada Junior'/>
        
       </div>
      <GoToTop/>
    </div>
  );
}

export default Equipo

    // <ul>
    // <li>	<b>María I. Sánchez:</b> Abogada, Magíster en Derecho Público y Especialista en Derecho Administrativo.</li>
    // <li>	<b>Laura Díaz M.:</b> Abogada, Especialista en Derecho Ambiental y en Derecho Público.</li>
    // <li><b>	Santiago A. Rojas: </b>Abogado, Especialista en Derecho Policivo y Penal.</li>
    // <li><b>	Camilo Rodríguez:</b> Abogado Junior.</li>
    
