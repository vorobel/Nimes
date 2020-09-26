import React from 'react';
import './Footer.scss';
import Logo from '../Logo/Logo';
import data from '../data/data';

function Footer() {
    console.log(data.footerMenu)
    return (
        <div className="footer">
            <Logo />
            <ul className="footer__menu">
                {data.footerMenu.map((item, index) => {
                    return (
                        <li key={index}><a href="#">{item}</a></li>
                    )
                })}
            </ul>
            <ul className="footer__social">
                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            </ul>
        </div>
    )
}

export default Footer
