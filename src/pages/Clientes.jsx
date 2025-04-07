import React from 'react'
import '../stylesheets/ClienteComponent.css'
import '../components/ClienteComponent.jsx'
import '../stylesheets/comunpages.css'
import ClienteComponent from '../components/ClienteComponent.jsx';
import '../stylesheets/comunpages.css'
import GoToTop from '../components/Gototop'

export const Clientes = () => {
  return (
    

    <div className='contenedorpagina'>
      <div className = 'clientes'>
      <div className='contenedor-principal'>
       <div className='titulo'><h2>CODEPEC S.A.S. ha brindado asesoría y representación a diversas empresas y establecimientos comerciales en Colombia, entre ellos:</h2>
        <ClienteComponent
          imagen='reeds'
          nombre='REED PUB'
          descripcion = 'Reconocido PUB ubicado en la localidad de Teusaquillo en Bogotá. Con un modelo de negocio enfocado en la hospitalidad y el entretenimiento, este pub opera bajo altos estándares de calidad.'/>
        <ClienteComponent
          imagen = 'naturasas'
          nombre = 'Natura Construcciones S.A.S.'
          descripcion = 'Natura Construcciones SAS trabaja desde 1998 en proyectos inmobiliarios de alto impacto, creando espacios donde el bienestar y la calidad de vida son la base.'/>       
        <ClienteComponent
          imagen='oras'
          nombre='ORAS TECHNOLOGIES'
          descripcion = 'Empresa de ingeniería con 10 años de trayectoria, enfocada en Inteligencia Analítica, Seguridad Electrónica, Telecomunicaciones y Desarrollo de Software.'/>
        <ClienteComponent
          imagen = 'ssac'
          nombre = 'Sistemas de Seguridad Antenas y Citófonos S.A.'
          descripcion = 'Especializados en la instalación de redes comunales de antenas, citofonía, cámaras de video, alarmas y electricidad en proyectos de multivivienda.'/>       
        <ClienteComponent
         imagen = 'nextdoor'
         nombre = 'Next Door Hostel'
          descripcion = 'Next Door Hostel es un alojamiento moderno y versátil ubicado en Bogotá, ideal para viajeros, emprendedores y profesionales que buscan comodidad y servicios integrales. Este hostal fomenta la interacción y el networking, espacios variados y únicos.'/>
        <ClienteComponent
          imagen = 'melomarket'
          nombre = 'El Melón Market'
          descripcion = 'Empresa con más de 12 años al servicio de los ocañeros ofreciendo gran variedad de productos y una excelente atención. Ubicados en Ocaña, Norte de Santade, Barrio La Primavera.'/>
        <ClienteComponent
          imagen = 'mass'
          nombre = 'MAS Centro Deportivo de Desarrollo Personal'
          descripcion = 'Academia de artes marciales con más de 12 años de experiencia en el sector. En la actualidad es un referente de los deportes de combate a nivel nacional.'/>
        <ClienteComponent
          imagen = 'grub'
          nombre = 'GRUB'
          descripcion = 'Establecimiento comercial especializado en Smash Burguers y Pizzas Napolitanas.'/>
           <ClienteComponent
          imagen = 'acees'
          nombre = 'ACEES'
          descripcion = 'ACEES es un equipo de abogados con amplia experiencia en el asesoramiento legal a empresas. Nos especializamos en derecho laboral, comercial y de tierras.'/>
        <ClienteComponent
          imagen = 'apep'
          nombre = 'APEP'
          descripcion = 'APEP es una asociación interdisciplinaria de profesionales con presencia a nivel nacional, especializada en brindar servicios integrales de asesoría, acompañamiento y capacitación en los procesos de selección adelantados por la Comisión Nacional del Servicio Civil.'/>
        </div>
      </div>
      </div>
      <GoToTop/>
    </div>
  );
}
export default Clientes;
/*<div className = 'titulo'><div><h2>CODEPEC S.A.S. ha brindado asesoría y representación a diversas empresas y establecimientos comerciales en Colombia, entre ellos:</h2>
<div className = 'contenedor2'>
      <ul>
        <li>	REED PUB</li>
        <li>	MAS Centro Deportivo</li>
        <li>Grup Bogotá</li>
        <li>Nextdoor Hostel</li>
        <li>APEP Colombia</li>
        <li>Melon Market</li>
        <li>Natura Construcciones S.A.S.</li>
        <li>Acees Abogados S.A.S.</li>
        <li>Soluciones Urbanas Abogados S.A.S.</li>
      </ul>
    </div>
</div></div>*/