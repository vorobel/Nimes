import React from 'react';
import './Fall.scss';
import fall from '../assets/img/fall.png';
import Button from '../Button/Button';

function Fall() {
    return (
        <div className="fall wrapper">
            <div className="fall__img">
                <img src={fall}/>
            </div>
            <div className="fall__content">
                <div className="fall__content-block">
                    <p>Street fashion collection</p>
                    <h2>Fall 2019</h2>
                    <Button btnValue="Shop now"/>
                </div>
            </div>
        </div>
    )
}

export default Fall;
