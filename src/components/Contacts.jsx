import React from "react";

import './Contacts.css'
// import './Contato.css'

// import Contato from "./Contato";

export default props =>
    <div className="contacts">
        <div className="meuPerfil">
            <div className="picture"></div>
        </div>
        <div className="dialog">
            <div className="picture"></div>
            <div className="textDialog">
                <p>Receba notificações de novas mensagens</p>
                <p id="text2">Ativar notificações na área de trabalho</p>
            </div>
        </div>
        <div className="barraPesquisa">
        <div className="picture"></div> 
        <div className="textDialog">
            <p>Procurar ou começar uma conversa</p>
        </div>
        </div>
        {props.elemento}
    </div>