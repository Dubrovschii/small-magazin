import { Component } from "react";

import promoImg from './amico.png'
import './promo.css'

class Promo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="promo wr1570 p40 ">

                <div className="promo-wrap ">
                    <div className="promo-block">
                        <div className="promo-title">
                            <span>We recommend </span>
                            <span>Interior doorswith a  </span>
                            <span>15%</span>
                            <span> discount</span>
                        </div>
                        <div className="promo-text">
                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                        <button className="promo-button"> Lorem Ipsum </button>
                    </div>
                    {/* <div className="promo-title">
                        <span>We recommend </span>
                        <span>Interior doorswith a  </span>
                        <span>15%</span>
                        <span> discount</span>
                    </div> */}

                    <div className="promo-block">
                        <img src={promoImg} alt="img" className="promo-img" />
                    </div>
                </div>
                <div className="promo-hr" />
            </div>

        )
    }
}


export default Promo