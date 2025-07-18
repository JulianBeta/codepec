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
       <h4 className='tituloequipo'>EQUIPO</h4>
        {/* <h2 className='textotituloequipo'>CODEPEC S.A.S. cuenta con un equipo profesional especializado para atender todas la necesidades de nuestros clientes </h2> */}
        <EquipoComponent
          imagen='alejandroa'
          nombre='Alejandro Alvarez'
          descripcion = 'Coordinador Jurídico - Maestría en Derecho Mercantil y Corporativo, especialización en Derecho Procesal, especilización en Derecho Administrativo'/>
        <EquipoComponent
          imagen = 'marial'
          nombre = 'María López'
          descripcion = 'Lider Procesos Policivos - Especialización en Derecho Policivo, especialización en Derecho Público'/>  
          <EquipoComponent
          imagen='camilos'
          nombre='Camilo Sánchez'
          descripcion = 'Profesional Jurídico en Urbanismo - Maestría en Planeación Urbana y Regional'/>
         <EquipoComponent
         imagen = 'santiagor'
         nombre = 'Santiago Rodriguez'
          descripcion = 'Profesional Jurídico para Establecimientos de Comencio - Especialización en Derecho Comercial'/>
           <EquipoComponent
          imagen = 'camilar'
          nombre = 'Camila Rodríguez'
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
    
