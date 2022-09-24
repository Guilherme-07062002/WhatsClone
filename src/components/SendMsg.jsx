import React from "react"

import './MsgBar.css'

export default props =>
    <div className={`sendMsg ${props.send === true ? 'send' : ''} `}>
        <p>{props.text}</p>
    </div> 