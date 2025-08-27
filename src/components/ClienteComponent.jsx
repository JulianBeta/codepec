import React from 'react';
import  '../stylesheets/ClienteComponent.css';



function ClienteComponent(props) {
    return(
            <div className = 'contenedor-cliente'>
                <img
                  className='imagen-cliente'
                  src={`/assets/logo${props.imagen}.jfif`}
                  alt="Logo Reeds"/>
            <div className='contenedor-texto-cliente'>
                <b><p className='nombre-cliente'>
                 {props.nombre} 
                </p></b>
                <p className='descripcion-cliente'>{props.descripcion}</p>
            </div>
        </div>
    );
}

export default ClienteComponent

