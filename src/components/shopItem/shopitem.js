import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';




const ShopItem = ({ name, descr, price, brands, id, productclass, image }) => {
  const [isFavActive, setIsFavActive] = useState(false);
  const [isInfoActive, setIsInfoActive] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in',
      once: false,
    });
  }, []);

  const toggleFav = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavActive(!isFavActive);
  };

  const toggleInfo = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsInfoActive(!isInfoActive);
  };

  const favButtonClass = isFavActive ? 'btn-fav btn-fav-activ' : 'btn-fav';

  const favBtnClass = isInfoActive ? 'btn-info btn-info-activ' : 'btn-info';
  return (
    <div data-aos="fade-up" className="col-md-3 col-sm-6 col-xs-12">
      <Link to={`/more?name=${name}&price=${price}&brands=${brands}&id=${id}&productclass=${productclass}&image=${image}`}>
        <div className="shop-item">
          <div className="shop-item-start">
            <img src={image} alt="" className="shop-img" />
            <div className="shop-item-start-more">

              <button
                className={favBtnClass}
                onClick={toggleInfo}>
                <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M29.9106 15.4643C29.9106 23.6007 23.3148 30.1965 15.1784 30.1965C7.04209 30.1965 0.446289 23.6007 0.446289 15.4643C0.446289 7.32798 7.04209 0.732178 15.1784 0.732178C23.3148 0.732178 29.9106 7.32798 29.9106 15.4643ZM2.07134 15.4643C2.07134 22.7032 7.93959 28.5714 15.1784 28.5714C22.4173 28.5714 28.2855 22.7032 28.2855 15.4643C28.2855 8.22548 22.4173 2.35723 15.1784 2.35723C7.93959 2.35723 2.07134 8.22548 2.07134 15.4643Z" fill="black" fillOpacity="0.2" />
                  <path opacity="0.2" d="M15.0067 9.816C14.5214 9.816 14.114 9.66 13.7847 9.348C13.4554 9.036 13.2907 8.646 13.2907 8.178C13.2907 7.71 13.4554 7.32867 13.7847 7.034C14.114 6.722 14.5214 6.566 15.0067 6.566C15.4747 6.566 15.8734 6.722 16.2027 7.034C16.532 7.32867 16.6967 7.71 16.6967 8.178C16.6967 8.646 16.532 9.036 16.2027 9.348C15.8734 9.66 15.4747 9.816 15.0067 9.816ZM13.8627 13.43C13.8627 12.858 14.0447 12.442 14.4087 12.182C14.79 11.9047 15.362 11.766 16.1247 11.766V23.57C16.1247 24.142 15.934 24.5667 15.5527 24.844C15.1887 25.104 14.6254 25.234 13.8627 25.234V13.43Z" fill="black" />
                </svg>
              </button>
              <button
                className={favButtonClass}
                onClick={toggleFav}>
                <svg width="30" height="31" viewBox="0 0 262 225" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M188.546 16.5938C150 16.5938 131 51.4688 131 51.4688C131 51.4688 112 16.5938 73.454 16.5938C42.1277 16.5938 17.3208 40.6466 17.0002 69.3476C16.3471 128.924 68.4962 171.292 125.656 206.897C127.232 207.881 129.094 208.407 131 208.407C132.906 208.407 134.768 207.881 136.344 206.897C193.498 171.292 245.647 128.924 245 69.3476C244.68 40.6466 219.873 16.5938 188.546 16.5938Z" stroke="black" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" opacity="0.2" />
                </svg>
              </button>

            </div>
          </div>
          <div className="shop-item-end">
            <div className="shop-item-det">

              <div className="shop-item-name" >{name} </div>
              {/* <div>{image}</div>   */}
              <div className="shop-item-price">$ {price}</div>
            </div>
            <div className="shop-item-descr">
              {descr}
            </div>
          </div>
        </div>
      </Link>
    </div>



  )
}


export default ShopItem;