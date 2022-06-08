import React from 'react';
import { NavLink } from 'react-router-dom';
import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/state';
import s from './Messages.module.css';

const DialogItem = (props) => {
    return (
        <div className={s.dialog}><NavLink to={"/messages/" + props.id}>{props.name}</NavLink></div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Messages = (props) => {

    let newMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(onMessageChangeActionCreator(text))
    }

    let DialogElement = props.state.dialogs.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)

    let MessagesElement = props.state.dialogs.messagesData.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__item}>
                { DialogElement }
            </div>

            <div className={s.messages}>
                {MessagesElement}
                <div className={s.message__add}>
                    <textarea onChange={ onMessageChange } value={props.state.dialogs.newMessageText} placeholder="Write message"></textarea>
                    <button onClick={ newMessage }>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Messages;