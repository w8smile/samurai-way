import React from "react";
import s from "./Navbar.module.css"

// let s = {
//     'nav': 'Navbar_nav__I2\+Ee',
//     'item': 'Navbar_item__x-Bx9'
// }
export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}><a>Profile</a></div>
            <div className={`${s.item} ${s.active}`}><a>Messages</a></div>
            <div className={s.item}><a>News</a></div>
            <div className={s.item}><a>Music</a></div>
            <div className={s.item}>Setting</div>
        </nav>
    )
}