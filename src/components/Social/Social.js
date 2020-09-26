import React from 'react';
import './Social.scss';
import data from '../data/data';

function Social({row}) {
    const socialItem = data.social
    return (
        <ul className={row ? 'social social-row' : 'social'}>
            {socialItem.map((item, index) => {
                return <li key={index}>{item}</li>
            })}
        </ul>
    )
}

export default Social;
