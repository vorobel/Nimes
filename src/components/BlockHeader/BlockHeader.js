import React from 'react';
import './BlockHeader.scss';

function BlockHeader({theme}) {
    return (
        <div className="blockHeader">
            <h2>{theme}</h2>
            <a href="#">View all</a>
        </div>
    )
}

export default BlockHeader;
