
import { Component } from "react";
import Header from "../../components/header/header";
import ShopList from "../../components/shopList/shoplist"; // Используйте импорт компонента ShopList
import FilterTabs from "../../components/fitertabs/filtertabs";
import Footer from "../../components/footer/footer";
import ArrowBack from "../../components/arrow-back/arrowback";
import ArrowUp from "../../components/arrow-up/arrowup";
import img from '../../assets/Rectangle1.png';
import img2 from '../../assets/Rectangle2.png';
import img3 from '../../assets/Rectangle3.png';
import './bg.css';
import './shop.css';

class Shop extends Component {
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
                    id: "1",
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
                    image: img2,
                    newbrand: true
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
                    image: img3,
                    newbrand: true
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
                    image: img,
                    newbrand: true
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
            term: '',
            filter: '',
        };
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'All filters':
                return items;
            case 'Brands':
                return items.filter(item => item.brands !== '');
            case 'New brand':
                return items.filter(item => item.newbrand === true);
            case 'Premium':
                return items.filter(item => item.productclass === 'premium');
            default:
                return items;
        }
    };

    onFilterSelect = (filter) => {
        this.setState({ filter });
    };

    render() {
        const { datashop, filter } = this.state;
        const visibleData = this.filterPost(datashop, filter);

        return (
            <div className="shop">
                <Header />
                <div className="container wr1570">
                    <div className="shop-wrap">
                        <div className="shop-title pt40">Lorem Ipsum</div>
                        <div className="shop-descr">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                    </div>

                    <div className="shop-tabs">
                        <FilterTabs filter={filter} onFilterSelect={this.onFilterSelect} />
                    </div>
                </div>

                <ShopList datashop={visibleData} />

                <ArrowBack />
                <ArrowUp />
                <Footer />
            </div>
        );
    }
}

export default Shop;
