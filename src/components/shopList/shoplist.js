import { Component } from "react";

import ShopItem from "../shopItem/shopitem";

import './bg.css'



class ShopList extends Component {


    render() {


        const { datashop } = this.props;
        const elements = datashop.map(item => {
            const { id, ...itemProps } = item

            return (
                <ShopItem key={id}{...itemProps} id={id} />

            )
        })
        return (
            <div className="shop-content wr1570">
                <div className="col-sm-12 ">
                    <div className="space-row-30 shop-space-row">
                        {elements}
                    </div>
                    <button className="btn-more">Lorem Ispum</button>
                </div>
            </div>
        )
    }

}

export default ShopList;