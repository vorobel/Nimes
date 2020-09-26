import React from 'react';
import './Hero.scss';
import Menu from '../Menu/Menu';
import Button from '../Button/Button';
import hero from '../assets/img/hero.png';
import Icons from '../Icons/Icons';
import Social from '../Social/Social';

function Hero() {
    return (
        <div className="hero">
            <div className="wrapper">
                <div className="hero__menu">
                    <Menu />
                    <a href="#"><i className="fas fa-long-arrow-alt-down"></i></a>
                </div>
                <div className="hero__content">
                    <div className="hero__content__text">
                        <p>The quality you deserve</p>
                        <h1>Denim</h1>
                        <Button btnValue="Check new collection"/>
                    </div>
                    <div className="hero__content__img">
                        <img src={hero}></img>
                    </div>
                </div>
                <div className="hero__social">
                    <Icons col/>
                    <Social />
                </div>
            </div>
        </div>
    )
}

export default Hero;
