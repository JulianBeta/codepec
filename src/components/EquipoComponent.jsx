import React from 'react';
import  '../stylesheets/EquipoComponent.css';



function EquipoComponent(props) {
    return(
            <div className = 'contenedor-equipo'>
                <img
                  className='imagen-equipo'
                  src={`/assets/${props.imagen}.jpg`}
                  alt="EquipoCOPEPEC"/>
            <div className='contenedor-texto-equipo'>
                <p className='nombre-equipo'>
                 {props.nombre} 
                </p>
                <p className='descripcion-equipo'>{props.descripcion}</p>
            </div>
        </div>
    );
}

export default EquipoComponent

