import React from 'react';
import './Header.scss'
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import Icons from '../Icons/Icons';

function Header({ menu, icons }) {
    return (
        <div className="wrapper">
            <div className="header">
                {menu ? <Menu row /> : null}
                <Logo />
                {icons ? <Icons /> : null}
            </div>
        </div>
    )
}

export default Header
