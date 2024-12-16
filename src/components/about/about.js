import { Component } from "react";

import './about.css'
import AboutBlock from '../../components/about-block/about-block'

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {

        return (
            <div className="about">
                <div className="about-wrap wr1200">
                    <div className="about-title">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </div>
                    <div className="about-descr">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </div>
                    <div className="about-content">
                        <AboutBlock />
                        {/* <div className="about-block ">
                            <div className="about-block-start">
                            <div className="about-block-num">1</div>
                            <div className="about-block-text">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 

                                </p>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 

                                </p>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 

                                </p>
                            </div>
                            </div>
                            <div className="about-block-item">
                                <div className="about-block-item-price">$ 00</div>
                                <div className="about-block-item-month">3 MONTH</div>
                                <div className="about-block-item-text">Lorem Ipsum is simply dummy text</div>
                            </div>
                        </div>
                        <div className="about-block about-block-fl2">
                        <div className="about-block-start">
                            <div className="about-block-num">2</div>
                            <div className="about-block-text">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 

                                </p>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 

                                </p>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 

                                </p>
                            </div>
                            </div>
                            <div className="about-block-item">
                                <div className="about-block-item-price">$ 00</div>
                                <div className="about-block-item-month">3 MONTH</div>
                                <div className="about-block-item-text">Lorem Ipsum is simply dummy text</div>
                            </div>
                        </div>
                        <div className="about-block">
                        <div className="about-block-start">
                            <div className="about-block-num">3</div>
                            <div className="about-block-text">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 

                                </p>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 

                                </p>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 

                                </p>
                            </div>
                            </div>
                            <div className="about-block-item">
                                <div className="about-block-item-price">$ 00</div>
                                <div className="about-block-item-month">3 MONTH</div>
                                <div className="about-block-item-text">Lorem Ipsum is simply dummy text</div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
