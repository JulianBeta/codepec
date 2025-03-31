import React from 'react';
import  '../stylesheets/ClienteComponent.css';



function ClienteComponent(props) {
    return(
            <div className = 'contenedor-cliente'>
                <img
                  className='imagen-cliente'
                  src={`src/assets/logo${props.imagen}.jfif`}
                  alt="Logo Reeds"/>
            <div className='contenedor-texto-cliente'>
                <p className='nombre-cliente'>
                 <strong>{props.nombre}</strong> 
                </p>
                <p className='descripcion-cliente'>"{props.descripcion}"</p>
            </div>
        </div>
    );
}

export default ClienteComponent

