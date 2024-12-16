import React, { Component } from "react";
import { Link } from 'react-router-dom';
import SearchPanel from "../search-panel/search-panel";
import logo from './LOGO.svg'
import './header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            burgerActive: false,
            term: '',
        };
    }
    burgerActive = () => {
        this.setState({ burgerActive: !this.state.burgerActive });
    }
    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({ term: term })
        this.props.onUpdateSearch(term)
    }
    render() {
        const { burgerActive } = this.state;
        const hamburger = burgerActive ? 'burgerActive ' : "hamburger";
        const mobMenu = burgerActive ? 'list-mob-wr' : 'mob-active';
        return (
            <header className="header">
                <ul className="header-wrap wr1570">
                    <li className="list-item">
                        <Link to="/">
                            <img src={logo} className="logo" alt="logo" />
                        </Link>
                    </li>
                    {/* <div className="filter-search-wr fsh">
                    <div className="filter-search">
                        <label htmlFor="text">HEALTHY PETS</label>
                        <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    </div>
                    <button className="filter-search-btn">
                        <svg width="23" height="21" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M221.09 64C190.021 64 159.649 73.2132 133.816 90.4744C107.982 107.736 87.8476 132.27 75.9578 160.974C64.0681 189.679 60.9572 221.264 67.0185 251.737C73.0799 282.209 88.0412 310.2 110.011 332.169C131.98 354.139 159.971 369.1 190.443 375.162C220.916 381.223 252.501 378.112 281.206 366.222C309.91 354.332 334.444 334.198 351.706 308.365C368.967 282.531 378.18 252.159 378.18 221.09C378.177 179.428 361.626 139.473 332.167 110.014C302.707 80.554 262.752 64.0027 221.09 64Z" stroke="#CD5B25" strokeWidth="32" strokeMiterlimit="10" strokeLinecap="round"/>
                            <path d="M338.29 338.29L448 448" stroke="#CD5B25" strokeWidth="32" strokeMiterlimit="10" strokeLinecap="round"/>
                        </svg>
                    </button>
                </div> */}
                    <li className="list-item list-item-page">
                        <Link to="/" className="header-link">
                            HoME
                        </Link>
                    </li>
                    <li className="list-item list-item-page">
                        <Link to="/shop" className="header-link">
                            SHOP
                        </Link>
                    </li>

                    <li className="list-item list-item-page">
                        <Link to="/contact" className="header-link">
                            CONTACT US
                        </Link>
                    </li>
                    {/* <li className="list-item list-item-page">
                        <button className="header-link">SIGN IN</button>
                    </li> */}
                    <div className="header-mob-menu">
                        <div className={hamburger} onClick={() => this.burgerActive()}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <ul className={mobMenu}>
                            <div className="filter-search-wr fsh">
                                <div className="filter-search">
                                    <label htmlFor="text">HEALTHY PETS</label>
                                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                                </div>
                                <button className="filter-search-btn">
                                    <svg width="23" height="21" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M221.09 64C190.021 64 159.649 73.2132 133.816 90.4744C107.982 107.736 87.8476 132.27 75.9578 160.974C64.0681 189.679 60.9572 221.264 67.0185 251.737C73.0799 282.209 88.0412 310.2 110.011 332.169C131.98 354.139 159.971 369.1 190.443 375.162C220.916 381.223 252.501 378.112 281.206 366.222C309.91 354.332 334.444 334.198 351.706 308.365C368.967 282.531 378.18 252.159 378.18 221.09C378.177 179.428 361.626 139.473 332.167 110.014C302.707 80.554 262.752 64.0027 221.09 64Z" stroke="#CD5B25" strokeWidth="32" strokeMiterlimit="10" strokeLinecap="round" />
                                        <path d="M338.29 338.29L448 448" stroke="#CD5B25" strokeWidth="32" strokeMiterlimit="10" strokeLinecap="round" />
                                    </svg>
                                </button>
                            </div>
                            <li className="list-item list-item-mob dn">
                                <Link to="/">
                                    <button className="header-link"></button>
                                </Link>
                            </li>
                            <li className="list-item list-item-page dn">
                                <Link to="/shop" className="header-link">
                                    SHOP
                                </Link>
                            </li>

                            <li className="list-item list-item-page dn ">
                                <Link to="/contact" className="header-link">
                                    CONTACT US
                                </Link>
                            </li>

                        </ul>
                    </div>
                </ul>
            </header>

        )
    }

}





export default Header;