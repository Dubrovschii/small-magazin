import { Component } from "react";


import Item from "../item/item";

import './bg.css'
import './itemList.css'



class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        const { datashop } = this.props;
        const elements = datashop.map(item => {
            const { id, ...itemProps } = item

            return (
                <Item key={id}{...itemProps} />

            )
        })
        return (

            <div className="swiper-container wr1200">
                <div className="swiper-wrapper ">
                    {elements}
                </div>
                <div className="swiper-pagination"></div>
                <div className="wr">
                    <div className="swiper-button-next"> </div>
                    <div className="swiper-button-prev"> </div>
                </div>
            </div>
        )
    }

}

export default ItemList;