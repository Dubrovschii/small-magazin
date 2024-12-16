import { Component } from "react";

import './about-block.css';

import icons from '../../assets/icons/check-square.svg';
import icons2 from '../../assets/icons/settings.png';
import icons3 from '../../assets/icons/tool.png';
import icons4 from '../../assets/icons/truck.png';
// import '../../assets/base.css';
class AboutBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { id: 1, num: 1, descr: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", price: "10years", preority: "Warranty for products", text: "Lorem Ipsum is simply dummy text", icons: icons },
                { id: 2, num: 2, descr: "2Lorem Ipsum is simply dummy text of the printing and typesetting industry.", price: "$ 0", preority: "Free delivery", text: "Another example of dummy text", icons: icons4 },
                { id: 3, num: 3, descr: "3Lorem Ipsum is simply dummy text of the printing and typesetting industry.", price: "$ 0", preority: "Free measurement and installation", text: "Different dummy text for testing", icons: icons3 },
                { id: 4, num: 4, descr: "4Lorem Ipsum is simply dummy text of the printing and typesetting industry.", price: "Price and quality", preority: "Own production", text: "Different dummy text for testing", icons: icons2 },
            ],
        };
    }

    render() {
        const { items } = this.state;

        return (
            <div className="about-block-wr">
                {items.map((item) => (
                    <div className="about-block" key={item.id}>
                        <div className="about-block-start">
                            <div className="about-block-num">{item.num}</div>
                            <div className="about-block-text">
                                <p>{item.descr}</p>
                            </div>
                        </div>
                        <div className="about-block-item">
                            <img src={item.icons} alt="icon" className="about-block-item-icon" />
                            <div className="about-block-item-price">{item.price}</div>
                            <div className="about-block-item-preority">{item.preority}</div>
                            <div className="about-block-item-text">{item.text}</div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default AboutBlock;
