import React from 'react';
import BlockHeader from '../BlockHeader/BlockHeader';
import Card from '../Card/Card';
import './Category.scss';

import data from '../data/data';

function Category() {
    return (
        <div className="category wrapper"> 
            <BlockHeader theme="Shop by category"/>
            <Card props={data.category}/>
        </div>
    )
}

export default Category;
