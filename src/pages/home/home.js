import { Component } from 'react';

import Header from '../../components/header/header';
import Promo from '../../components/promo/promo';
import Carousel from '../../components/swiper/swiper';
import Filter from '../../components/filter/filter';
import About from '../../components/about/about';
import Carousell from '../../components/subscription/subscription';
import Footer from '../../components/footer/footer';
import ArrowBack from '../../components/arrow-back/arrowback';
import ArrowUp from '../../components/arrow-up/arrowup';
import img from '../../assets/Rectangle1.png'
import img2 from '../../assets/Rectangle2.png'
import img3 from '../../assets/Rectangle3.png'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datashop: [
                {
                    name: "Door Out 201 Wenge Veralinga",
                    price: "6",
                    month: "1",
                    productclass: 'premium',
                    descr: "1Lorem Ipsum is simply dummy text",
                    id: 1,
                    brands: 'Lorem Lalam',
                    image: img
                },

                {
                    name: "GROFF Р3-315 Chalet Grasse/Chalet Grasse",
                    price: "2",
                    month: "2",
                    productclass: 'premium',
                    descr: "Lorem Lalam is simply dummy text",
                    id: 2,
                    brands: 'Lorem Lalam',
                    image: img2
                },

                {
                    name: "RОптим Line (66мм) Wenge Crosscutelax",
                    price: "12",
                    month: "3",
                    productclass: 'premium',
                    descr: "Lorem Relax is simply dummy text11",
                    id: 3,
                    brands: 'Relax',
                    image: img3
                },

                {
                    name: "GROFF Т2-221 Cappuccino Veralinga (102мм)",
                    price: "10 ",
                    month: "6",
                    productclass: 'standart',
                    descr: "Lorem Morern is simply dummy text",
                    id: 4,
                    brands: 'Lorem Morern',
                    image: img2
                },

                {
                    name: "GROFF Т2-221 Cappuccino Veralinga (122мм)",
                    price: "5 ",
                    month: "9",
                    productclass: 'stantart',
                    descr: "Lorem Lalam is simply dummy text",
                    id: 5,
                    brands: 'Lorem Lalam',
                    image: img,
                },

                {
                    name: "Door Out 201 Wenge Veralinga",
                    price: "2",
                    month: "12",
                    productclass: 'standart',
                    descr: "Lorem Ipsum is simply dummy text",
                    id: 6,
                    brands: 'Lorem Ispum',
                    image: img2,
                },

                {
                    name: "LalDoor Out 131 BLUR Veralingaam",
                    price: "15 ",
                    month: "9",
                    productclass: 'premium',
                    descr: "Lorem Lalam is simply dummy text",
                    id: 7,
                    brands: 'Lorem Lalam',
                    image: img3
                },

                {
                    name: "GROFF Т2-221 Cappuccino Veralinga (102мм)",
                    price: "17",
                    month: "12",
                    productclass: 'premium',
                    descr: "Lorem Ipsum is simply dummy text",
                    id: 9,
                    brands: 'Lorem Lalam',
                    image: img3
                },

                {
                    name: "Door Out 201 Wenge Veralinga",
                    price: "4",
                    month: "1",
                    productclass: 'standart',
                    descr: "Lorem Ipsum is simply dummy text",
                    id: 10,
                    brands: 'Lorem Ispum',
                    image: img
                },

                {
                    name: "LaDoor Out 201 Wengelam",
                    price: "12",
                    month: "2",
                    productclass: 'premium',
                    descr: "Lorem Lalam is simply dummy text",
                    id: 11,
                    brands: 'Lorem Lalam',
                    image: img2
                },

                {
                    name: "Door Out 201 Wenge",
                    price: "17",
                    month: "3",
                    productclass: 'premium',
                    descr: "Lorem Relax is simply dummy text",
                    id: 12,
                    brands: 'Lorem Relax',
                    image: img
                },

                {
                    name: "Door Out 201 Wenge",
                    price: "10 ",
                    month: "6",
                    productclass: 'standart',
                    descr: "Lorem Morern is simply dummy text",
                    id: 13,
                    brands: 'Lorem Modern',
                    image: img3
                },

            ],
            dataitem: [
                {
                    price: "01", month: "1",
                    text: "Lorem Ipsum is simply dummy text", id: 1
                },
                {
                    price: "02", month: "2",
                    text: "Lorem Ipsum is simply dummy text", id: 2
                },
                {
                    price: "12", month: "3",
                    text: "Lorem Ipsum is simply dummy text", id: 3
                },
                {
                    price: "10 ", month: "6",
                    text: "Lorem Ipsum is simply dummy text", id: 4
                },
                {
                    price: "05 ", month: "9",
                    text: "Lorem Ipsum is simply dummy text", id: 5
                },
                {
                    price: "07", month: "12",
                    text: "Lorem Ipsum is simply dummy text", id: 6
                },
            ],
            term: '',
            filter: '',
        };
    }


    render() {

        const { datashop } = this.props;

        return (
            <div className="home">
                <div className="home-wrap">
                    <Header />
                    <Promo />
                    <Carousel datashop={datashop} />
                    <Filter />
                    <About />
                    <Carousell dataitem={this.state.dataitem} />
                    <Footer />
                </div>
                <ArrowBack />
                <ArrowUp />
            </div>
        )
    }
}


export default Home;