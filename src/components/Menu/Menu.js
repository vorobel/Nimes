import React from 'react';
import data from '../data/data';
import './Menu.scss'

function Menu({row}) {
    const menuItems = data.menu;
    return (
        <ul className={row ? 'menu menu-row' : 'menu'}>
            {menuItems.map((item, index) => {
                return <li key={index} href="#"><a>{item}</a></li>
            })}
        </ul>
    )
}

export default Menu;
