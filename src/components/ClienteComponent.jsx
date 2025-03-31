import React from 'react';
import  '../stylesheets/ClienteComponent.css';

function ClienteComponent(props){
    return(
         <div className = 'contenedor-cliente'>
            
                <img
                    /*ESTO ES LO QUE FALLA! LA IMAGEN NO SE DEJA IMPORTAR ARRIBA POR EL CARACTER GUIÓN QUE USA EL NOMBRE DEL ARCHIVO "-", 
                    PERO ESE GUIÓN SE REQUIERE PARA MANDAR LA IMAGEN CON PROPS.
                    
                    /*className = 'imagen-cliente'
                    src = {require(`../images/logo-${props.imagen}.png`)}
                    
                    alt= 'logo-CODEPEC' */
                />
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

