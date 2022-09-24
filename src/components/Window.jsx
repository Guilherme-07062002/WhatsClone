import React from "react";

import './Window.css'
import './Contacts.css'

import MsgBar from "./MsgBar";

export default props =>
    <div className={`image`}>

        {((chat, nome) => {
            if (chat === 'open') {
                return (
                    <div className={`image ${chat === 'open' ? 'open' : ''}`}>
                        <div className="contactPerfil">
                            <div className="picture"></div>
                            <div className="textDialog">
                                <h4>{nome}</h4>
                            </div>
                        </div>
                        <MsgBar />
                    </div>
                )
            }
        })(props.chat, props.chatName)}

    </div>
