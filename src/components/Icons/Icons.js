import React from 'react';
import './Icons.scss';

function Icons({col}) {
    return (
        <div className={col ? 'icons icons-row' : 'icons'}>
            <a href="#"><i className="fas fa-search"></i></a>
            <a href="#"><i className="fas fa-shopping-cart"></i></a>
        </div>
    )
}

export default Icons
