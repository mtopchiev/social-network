import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";



const Navbar = () => {
    return  (
        <nav className={s.nav}>
            <div>
                <ul>
                    <li><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
                    <li><NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></li>
                    <li><NavLink to="/news" activeClassName={s.active}>News</NavLink></li>
                    <li><NavLink to="/music" activeClassName={s.active}>Music</NavLink></li>
                    <li><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></li>
                </ul>
            </div>
            <div className={s.line}></div>
        </nav>

    )
}

export default Navbar;