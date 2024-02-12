import React from 'react';
import s from './Dialog.module.css';
import {DialogItem, DialogProps} from "./DialogItems/DialogItems";
import {Message, MessageProps} from "./Messages/MessagesDialog";


type DialogsProps = {
    dialogsData: DialogProps []
    messageData: MessageProps []
}
export const Dialogs = (props: DialogsProps) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {props.dialogsData.map((el) => <DialogItem id={el.id} name={el.name} />)}
            </div>
            <div className={s.messages}>{props.messageData.map((el) => <Message id={el.id} message={el.message} />)}</div>
        </div>
    );
};