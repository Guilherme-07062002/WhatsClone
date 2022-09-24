import React, { Component } from "react";

import Window from "../components/Window";
import Contacts from "../components/Contacts";
import Contato from "../components/Contato";
import MsgBar from "../components/MsgBar";

const initialState = {
    chat: '',
    chatName: ''
}

export default class Index extends Component {
    state = { ...initialState }

    constructor(props) {
        super(props)
        this.changeChat = this.changeChat.bind(this)
        // this.closeChat = this.closeChat(this)
    }
    changeChat(contact) {
        console.log(contact)
        this.setState({
            chat: 'open',
            chatName: contact
        })
    }
    render() {
        const changeChat = contact => this.changeChat(contact)
        return (
            <div className="indexWindow">
                <Contacts elemento={[
                    <Contato nome='Fulano' msg='Eae' horario='07:25' click={this.changeChat} />,
                    <Contato nome='Beltrano' msg='Bom dia' horario='09:13' click={this.changeChat} />,
                    <Contato nome='Cicrano' msg='Olá, tudo bem?' horario='18:56' click={this.changeChat} />]} />
                <Window chat={this.state.chat} chatName={this.state.chatName} />
            </div>
        )
    }
}