import React from 'react';
import './Button.scss';

function Button({btnValue}) {
    return (
        <div>
            <button className="btn">{btnValue}</button>
        </div>
    )
}

export default Button;
