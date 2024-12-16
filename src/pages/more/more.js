import React, { Component } from "react";
import Header from "../../components/header/header";


import Footer from "../../components/footer/footer";
import ArrowBack from "../../components/arrow-back/arrowback";
import ArrowUp from "../../components/arrow-up/arrowup";
// import moreImg from "./item-img.svg"

import './more.css'


class More extends Component {
  constructor(props) {
    super(props);
    this.state = {

      name: '',
      price: '',
      brands: '',
      productclass: '',
      id: '',
      image: '',
      calc: 1,
      total: '',
      multiplier: 1,
    }

  }
  componentDidMount() {
    const searchParams = new URLSearchParams(window.location.search);
    const name = searchParams.get("name");
    const price = searchParams.get("price");
    const brands = searchParams.get("brands");
    const productclass = searchParams.get("productclass");
    const id = searchParams.get("id");
    const image = searchParams.get("image");
    const total = searchParams.get("total");

    // console.log(searchParams.get("id"));
    this.setState({
      name,
      price,
      productclass,
      brands,
      image,
      id,
      total: isNaN(total) ? this.state.price : total,
    });

    console.log(id);

  }

  changeCalc = (i) => {
    this.setState((prevState) => {
      const newCalc = prevState.calc + i;
      if (newCalc < 1) {
        return { calc: prevState.calc };
      }
      return { calc: newCalc };
    });
  }
  onMinusTotal = () => {
    if (this.state.multiplier > 1) {
      const newMultiplier = this.state.multiplier - 1;
      const total = this.state.price * newMultiplier;
      this.setState({
        total,
        multiplier: newMultiplier,
      });
    }
  }

  onPlusTotal = () => {
    const newMultiplier = this.state.multiplier + 1;
    const total = this.state.price * newMultiplier;
    this.setState({
      total,
      multiplier: newMultiplier,
    });
  }


  render() {

    const { name, price, total } = this.state;
    const { id, brands, productclass, image } = this.state;


    return (

      <div >
        <Header />
        <div className="more ">
          <div className="more-wrap p40" >

            <div className="more-promo wr1570">
              <div className="more-block">
                <div className="more-block-img">
                  <img datashop={image} src={image} alt="" />
                </div>

                <div className="more-block-info">
                  <div className="more-block-title">

                    <span datashop={name}>{name}</span>

                  </div>
                  <div className="more-block-price">

                    <span datashop={price}>{price} $</span>
                  </div>
                  <div className="more-block-code">
                    <span>The code:</span>
                    <span datashop={id}> {id}</span>
                  </div>
                  <div className="more-block-brands">
                    <span>Brands:</span>
                    <span datashop={brands}> {brands}</span>
                  </div>
                  {/* <div className="more-block-species">
                    <span>ANIMAL SPECIES:</span>
                    <span > kitten</span>
                  </div> */}
                  <div className="more-block-weight">
                    <span>Weight:</span>
                    <span > 1 KG ON THE SCALE</span>
                  </div>
                  <div className="more-block-class">
                    <span>Product class:</span>
                    <span datashop={productclass}> {productclass}</span>
                  </div>
                  <div className="more-block-age">
                    <span>Age of the animal:</span>
                    <span > GROWN UPS</span>
                  </div>
                  <div className="more-block-ingriedients">
                    <span>Ingriedients:</span>
                    <span > Chicken</span>
                  </div>


                  <div className="more-block-calc">
                    <button
                      className="more-block-minus"
                      onClick={() => {
                        this.changeCalc(-1);
                        this.onMinusTotal();
                      }}
                    >
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29 15C29 7.27083 22.7292 1 15 1C7.27083 1 1 7.27083 1 15C1 22.7292 7.27083 29 15 29C22.7292 29 29 22.7292 29 15Z" stroke="none" strokeWidth="2" strokeMiterlimit="10" fill="#edb021" />
                        <path d="M21 15H9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>

                    </button>
                    <div className="more-block-num">
                      {this.state.calc}
                    </div>
                    <button className="more-block-plus"
                      onClick={() => {
                        this.changeCalc(1);
                        this.onPlusTotal();
                      }}>
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29 15C29 7.27083 22.7292 1 15 1C7.27083 1 1 7.27083 1 15C1 22.7292 7.27083 29 15 29C22.7292 29 29 22.7292 29 15Z" stroke="none" strokeWidth="2" strokeMiterlimit="10" fill="#edb021" />
                        <path d="M15 9V21M21 15H9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>

                    </button>
                  </div>

                  <div className="more-block-total">
                    <span>Total:</span>

                    {total !== null ? <span>{total} $</span> : <span>{this.state.price} $</span>}
                  </div>

                  <div className="more-block-btn">
                    <button className="more-block-buy add-card">
                      Add to card
                    </button>
                    <button className="more-block-buy buy-now">
                      Buy now!
                    </button>
                  </div>


                </div>




              </div>
              <div className="promo-hr"></div>
            </div>
            <ArrowBack />
            <ArrowUp />

          </div>
        </div>
        <Footer />
      </div>

    )
  }
}
export default More;