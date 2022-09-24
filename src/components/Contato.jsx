import React from "react";

import './Contato.css'

export default props =>
    <div className="contato" onClick={ e => props.click && props.click(props.nome)}>
         
        <div className="picture"></div>
        <div className='nomeContato'>
            <h4>{props.nome}</h4>
            <p>{props.msg}</p>
            <div className="horarioDiv">
                <p id="horario">{props.horario}</p>
            </div>
        </div>
    </div>
