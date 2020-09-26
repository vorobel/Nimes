import React from 'react';
import './Card.scss'

function Card({ props }) {
    return (
        <ul className=" card">
            {props.map((item, index) => {
                return (
                    <div key={index} className="card__item">
                        <img src={item.img} />
                        <p>{item.name}</p>
                        {item.price ? <span>{item.price}</span> : null}
                        
                    </div>
                )
            })}
        </ul>
    )
}

export default Card;
