import React, {ChangeEvent, useRef} from 'react';
import s from './Dialog.module.css';
import {DialogItem, DialogProps} from "./DialogItems/DialogItems";
import {Message, MessageProps} from "./Messages/MessagesDialog";
import {DispatchType} from "../../redux/store";
import {addDialogMessageAC, changeDialogMessageAC} from "../../redux/dialog-reducer";


type DialogsProps = {
    dialogsData: DialogProps []
    messageData: MessageProps []
    newDialogMessage: string
    dispatch: (action: DispatchType) => void
}
export const Dialogs = (props: DialogsProps) => {
    const addMessage = () => {
        props.dispatch(addDialogMessageAC(props.newDialogMessage))
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {{
            props.dispatch(changeDialogMessageAC(e.currentTarget.value))
        }
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {props.dialogsData.map((el) => <DialogItem id={el.id} name={el.name} />)}
            </div>
            <div className={s.messages}>{props.messageData.map((el) => <Message id={el.id} message={el.message} />)}</div>
            <button onClick={addMessage}>ADD</button>
            <textarea onChange={onChangeHandler} value={props.newDialogMessage}></textarea>
        </div>
    );
};
