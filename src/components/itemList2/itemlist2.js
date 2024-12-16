import { Component } from "react";

import Item2 from "../item2/item2";




class ItemList2 extends Component {
    

    render(){
    

    const { dataitem } = this.props;
        const elements = dataitem.map(item => {
            const {id, ...itemProps} = item

        return(
            <Item2 key={id}{...itemProps}/>

        )
    })
    return(
        
        <div className="swiper-container2 wr1200">
            <div className="swiper-wrapper swiper-wrapper2 ">
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

export default ItemList2;