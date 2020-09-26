import React from 'react';
import './Bestsellers.scss';
import BlockHeader from '../BlockHeader/BlockHeader';
import Card from '../Card/Card';

import data from '../data/data'

function Bestsellers() {
    return (
        <div className="bestsellers wrapper ">
            <BlockHeader theme="Bestsellers"/>
            <Card props={data.bestsellers}/>
        </div>
    )
}

export default Bestsellers;

