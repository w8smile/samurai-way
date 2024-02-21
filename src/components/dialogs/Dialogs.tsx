import React, {useRef} from 'react';
import s from './Dialog.module.css';
import {DialogItem, DialogProps} from "./DialogItems/DialogItems";
import {Message, MessageProps} from "./Messages/MessagesDialog";


type DialogsProps = {
    dialogsData: DialogProps []
    messageData: MessageProps []
    addMessageDialog: (message: string)=>void
    newDialogMessage: string
    changeMessageDialog: (messageText: string)=>void

}
export const Dialogs = (props: DialogsProps) => {
    const messageElement = React.createRef<HTMLTextAreaElement>()
    const addMessage = () => {
        if (messageElement.current){
            props.addMessageDialog(messageElement.current.value)
        }
    }
    const onChangeHandler = () => {
        if (messageElement.current){
            props.changeMessageDialog(messageElement.current.value)

        }
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {props.dialogsData.map((el) => <DialogItem id={el.id} name={el.name} />)}
            </div>
            <div className={s.messages}>{props.messageData.map((el) => <Message id={el.id} message={el.message} />)}</div>
            <button onClick={addMessage}>add message</button>
            <textarea ref={messageElement}
                      onChange={onChangeHandler}
                      value={props.newDialogMessage}></textarea>
        </div>
    );
};