import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={s.sidebar}>
          <ul className={s.sidebar__box}>
            <li className={s.item}><NavLink className = { navData => navData.isActive ? s.active : s.link } to='/profile'>Profile</NavLink></li>
            <li className={s.item}><NavLink className = { navData => navData.isActive ? s.active : s.link } to='/news'>News</NavLink></li>
            <li className={s.item}><NavLink className = { navData => navData.isActive ? s.active : s.link } to='/messages'>Messages</NavLink></li>
            <li className={s.item}><NavLink className = { navData => navData.isActive ? s.active : s.link } to='/friends'>Friends</NavLink></li>
            <li className={s.item}><NavLink className = { navData => navData.isActive ? s.active : s.link } to='/settings'>Settings</NavLink></li>
          </ul>
        </div>
    )
}

export default Sidebar;