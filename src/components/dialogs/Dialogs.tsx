import React from 'react';
import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";

type DialogProps = {
    id: string
    name: string
}

type MessageProps = {
    text: string
}
const Dialog = (props: DialogProps) => {
    return (
        <div className={s.dialogsPadding}>
            <NavLink to={'/dialogs/' + props.id} className={l=>l.isActive ?  s.act : s.dialog }>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessageProps) => {
    return (
        <div className={s.message}>{props.text}</div>
    )

}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div>
                <Dialog id={'1'} name={'Serg'}/>
                <Dialog id={'2'} name={'Kri$$$'}/>
                <Dialog id={'3'} name={'3loy'}/>
                <Dialog id={'4'} name={'Djanex'}/>
                <Dialog id={'5'} name={'Sam'}/>
                <Dialog id={'6'} name={'STL'}/>
            </div>
            <div className={s.messages}>
                <Message text={'Hello people'}/>
                <Message text={'Nice to meet you!'}/>
                <Message text={'Kri4ev forever'}/>
            </div>

        </div>
    );
};

