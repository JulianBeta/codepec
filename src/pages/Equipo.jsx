import React from 'react'
import '../stylesheets/comunpages.css'
import GoToTop from '../components/Gototop'

export const Equipo = () => {
  return (
    <div className='contenedorpagina'><h1>EQUIPO PROFESIONAL</h1><h3>Nuestro equipo está conformado por abogados especializados en distintas áreas del derecho, garantizando una asesoría integral y eficiente:</h3>
    
    <ul>
    <li>	<b>María I. Sánchez:</b> Abogada, Magíster en Derecho Público y Especialista en Derecho Administrativo.</li>
    <li>	<b>Laura Díaz M.:</b> Abogada, Especialista en Derecho Ambiental y en Derecho Público.</li>
    <li><b>	Santiago A. Rojas: </b>Abogado, Especialista en Derecho Policivo y Penal.</li>
    <li><b>	Camilo Rodríguez:</b> Abogado Junior.</li>
    
    </ul>
    <GoToTop/>
    </div>
  )
  
}

export default Equipo
