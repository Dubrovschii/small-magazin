
import React  from 'react';



const Item2 = ({price, month, text}) => {

    return(
        <div className="swiper-slide slide">
                    <div className="swiper-item">
                        <div className="about-block-item">
                                <div className="about-block-item-price">$ {price}</div>
                                <div className="about-block-item-month">{month} MONTH</div>
                                <div className="about-block-item-text abitc">{text}</div>
                                <button className='carousell-btn'>
                                    Go
                                </button>
                        </div>
                    </div>
                </div>      
    )
}


export default Item2;