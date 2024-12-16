import { Component } from 'react';


import { Navigation } from 'swiper/modules'
import Swiper from 'swiper';

import ItemList2 from '../itemList2/itemlist2';

import './subscription.css'
import 'swiper/swiper-bundle.css';
class Carousell extends Component {
    componentDidMount() {
        new Swiper('.swiper-container2', {
            direction: 'horizontal',
            loop: true,
            slidesPerView: 3,
            spaceBetween: 55,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    slideToClickedSlide: true,
                },
                801: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                    slideToClickedSlide: true,
                },
                1300: {
                    slidesPerView: 3,
                    spaceBetween: 55,
                    slideToClickedSlide: true,
                },
            }
        });
        Swiper.use([Navigation]);

    }

    render() {
        const { dataitem } = this.props;

        return (
            <div className="carousel wr1570">
                <div className="carousell-title">Subscription to door</div>

                <ItemList2 dataitem={dataitem} />

            </div>
        )
    }
}

export default Carousell;