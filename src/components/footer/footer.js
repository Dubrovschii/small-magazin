import { Component } from "react";
import { Link } from 'react-router-dom';
import logo from './LOGO.svg'
import './footer.css'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="footer">
                <div className="footer-wrap wr1570">
                    <div className="footer-start">
                        <div className="list-item list-item-footer">
                            <Link to="/">
                                <img src={logo} className="logo" alt="logo" />
                            </Link>
                        </div>
                    </div>

                    <ul className="footer-end">
                        <li className="list-item list-item-footer">
                            <Link to="/" className="footer-link">
                                HoME
                            </Link>
                        </li>
                        <li className="list-item list-item-footer">
                            <Link to="/shop" className="footer-link">
                                SHOP

                            </Link>

                        </li>

                        <li className="list-item list-item-footer">
                            <Link to="/contact" className="footer-link">
                                CONTACT US
                            </Link>
                        </li>



                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer;
