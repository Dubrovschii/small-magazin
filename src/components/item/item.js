import React from 'react';
import { Link } from 'react-router-dom';

import './item.css';

const Item = ({ name, image }) => {
    return (
        <div className="swiper-slide slide">
            <Link to='/shop'>
                <div className="swiper-item">
                    <img src={image} alt="img-item" />
                    <button className='carousel-btn'>{name}</button>
                </div>
            </Link>
        </div>
    );
};

export default Item;
