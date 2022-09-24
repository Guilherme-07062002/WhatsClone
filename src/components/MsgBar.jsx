import React, { useState } from "react";

import SendMsg from "./SendMsg";

import './MsgBar.css'
const MsgBar = () => {
    const [state, setState] = useState('')
    const [text, setText] = useState('')
    const [send, setSend] = useState('')
    const sendMessage = (e) => {
        setState(e.key)
        if (state === 'Enter') {
            setText(document.getElementById('msg').value)
            setSend(true)
            render()
            document.getElementById('msg').value = ''
        }
    }
    const render = () => {
        if (send == true) {
            return (
                <SendMsg text={text} send={send} />
            )
        }
    }
    return (
        <div>
            {render()}
            <div className="msgBar">
                <input id="msg" type='text' placeholder="Digite uma mensagem" autoComplete="off" onKeyPress={(e) => sendMessage(e)}></input>
            </div>
        </div>
    )
}
export default MsgBar;