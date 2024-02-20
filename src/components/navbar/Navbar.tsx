import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

// let s = {
//     'nav': 'Navbar_nav__I2\+Ee',
//     'item': 'Navbar_item__x-Bx9'
// }
export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to='/profile' className={link => link.isActive ? s.active : s.item}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' className={link => link.isActive ? s.active : s.item}>Messages</NavLink>
            </div>
            <div>
                <NavLink to='/news' className={link => link.isActive ? s.active : s.item}>News</NavLink>
            </div>
            <div>
                <NavLink to='/music' className={link => link.isActive ? s.active : s.item}>Music</NavLink>
            </div>
            <div>
                <NavLink to='/settings' className={link => link.isActive ? s.active : s.item}>Название хранится в Навлинк</NavLink>
            </div>
        </nav>
    )
}