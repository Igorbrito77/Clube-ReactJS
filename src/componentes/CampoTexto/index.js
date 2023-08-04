import { useState } from 'react';
import './CampoTexto.css';

const CampoTexto = (props) => {

    console.log(props);

    const msg = `${props.placeholder}...`;

    const aoDigitado = (evento) =>{
       props.aoAlterado(evento.target.value);
    };

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input onChange={aoDigitado} required={props.obrigatorio} placeholder={msg}/>
        </div>
    );
    
}

export default CampoTexto;