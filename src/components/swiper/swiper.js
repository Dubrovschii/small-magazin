import { Component } from 'react';


import { Navigation } from 'swiper/modules'
import ItemList from '../../components/itemlist/itemList';
import Swiper from 'swiper';

import 'swiper/swiper-bundle.css';
import './swiper.css'

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            slidesPerView: 4,
            spaceBetween: 30,
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
                800: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                    slideToClickedSlide: true,
                },

                1224: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                    slideToClickedSlide: true,
                },
                1350: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                    slideToClickedSlide: true,
                }
            }
        });
        Swiper.use([Navigation]);

    }

    render() {

        const { datashop } = this.props;

        // if (!datashop || !Array.isArray(datashop)) {
        //     return <div>No data to display</div>; // Или другое сообщение об отсутствии данных
        // }


        return (

            <div className="carousel wr1570 p40 ">
                <div className="carousel-title">Lorem Ipsum </div>
                <div className="carousel-descr">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>

                <ItemList datashop={datashop} />



            </div>
        )
    }
}

export default Carousel;