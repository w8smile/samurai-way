import React from 'react';
import s from '../Dialog.module.css';
import { NavLink } from 'react-router-dom';

export type DialogProps = {
    id: number;
    name: string;
};


export const DialogItem = (props: DialogProps) => {
    return (
        <div className={s.dialogsItem}>
            <NavLink to={'/dialogs/' + props.id} className={l => (l.isActive ? s.act : s.dialog)}>
                {props.name}
            </NavLink>
        </div>
    );
};
