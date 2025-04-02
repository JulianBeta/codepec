import React from 'react'
import '../stylesheets/ClienteComponent.css'
import '../components/ClienteComponent.jsx'
import '../stylesheets/comunpages.css'
import ClienteComponent from '../components/ClienteComponent.jsx';
import '../images/cliente-REED PUB.png'
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
          descripcion = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'/>
        <ClienteComponent
         imagen = 'nextdoor'
         nombre = 'MAS Centro Deportivo'
          descripcion = 'chupadero de gays'/>
        <ClienteComponent
          imagen = 'melomarket'
          nombre = 'REED PUB'
          descripcion = 'chupadero de gays'/>
        <ClienteComponent
          imagen = 'mass'
          nombre = 'REED PUB'
          descripcion = 'chupadero de gays'/>
        <ClienteComponent
          imagen = 'grub'
          nombre = 'REED PUB'
          descripcion = 'chupadero de gays'/>
<ClienteComponent
          imagen = 'acees'
          nombre = 'REED PUB'
          descripcion = 'chupadero de gays'/>
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