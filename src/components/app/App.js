import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../../pages/home/home';
import Shop from '../../pages/shop/shop';
import Media from '../../pages/media/media';
import Contact from '../../pages/contact/contact';
import More from '../../pages/more/more';
import './app.css';
import img from '../../assets/Rectangle1.png'
import img2 from '../../assets/Rectangle2.png'
import img3 from '../../assets/Rectangle3.png'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datashop: [
        {
          name: "Door Out 201 Wenge Veralinga",
          price: "6",
          month: "1",
          productclass: 'premium',
          descr: "Lorem Ipsum is simply dummy text",
          id: "1",
          brands: 'Lorem Lalam',
          image: img
        },

        {
          name: "GROFF Р3-315 Chalet Grasse/Chalet Grasse",
          price: "2",
          month: "2",
          productclass: 'premium',
          descr: "Lorem Lalam is simply dummy text",
          id: "2",
          brands: 'Lorem Lalam',
          image: img2
        },

        {
          name: "RОптим Line (66мм) Wenge Crosscutelax",
          price: "12",
          month: "3",
          productclass: 'premium',
          descr: "Lorem Relax is simply dummy text11",
          id: "3",
          brands: 'Relax',
          image: img3
        },

        {
          name: "GROFF Т2-221 Cappuccino Veralinga (102мм)",
          price: "10 ",
          month: "6",
          productclass: 'standart',
          descr: "Lorem Morern is simply dummy text",
          id: "4",
          brands: 'Lorem Morern',
          image: img2
        },

        {
          name: "GROFF Т2-221 Cappuccino Veralinga (122мм)",
          price: "5 ",
          month: "9",
          productclass: 'stantart',
          descr: "Lorem Lalam is simply dummy text",
          id: "5",
          brands: 'Lorem Lalam',
          image: img,
        },

        {
          name: "Door Out 201 Wenge Veralinga",
          price: "2",
          month: "12",
          productclass: 'standart',
          descr: "Lorem Ipsum is simply dummy text",
          id: "6",
          brands: 'Lorem Ispum',
          image: img2,
        },

        {
          name: "LalDoor Out 131 BLUR Veralingaam",
          price: "15 ",
          month: "9",
          productclass: 'premium',
          descr: "Lorem Lalam is simply dummy text",
          id: "7",
          brands: 'Lorem Lalam',
          image: img3
        },

        {
          name: "GROFF Т2-221 Cappuccino Veralinga (102мм)",
          price: "17",
          month: "12",
          productclass: 'premium',
          descr: "Lorem Ipsum is simply dummy text",
          id: "9",
          brands: 'Lorem Lalam',
          image: img3
        },

        {
          name: "Door Out 201 Wenge Veralinga",
          price: "4",
          month: "1",
          productclass: 'standart',
          descr: "Lorem Ipsum is simply dummy text",
          id: "10",
          brands: 'Lorem Ispum',
          image: img
        },

        {
          name: "LaDoor Out 201 Wengelam",
          price: "12",
          month: "2",
          productclass: 'premium',
          descr: "Lorem Lalam is simply dummy text",
          id: "11",
          brands: 'Lorem Lalam',
          image: img2
        },

        {
          name: "Door Out 201 Wenge",
          price: "17",
          month: "3",
          productclass: 'premium',
          descr: "Lorem Relax is simply dummy text",
          id: '12',
          brands: 'Lorem Relax',
          image: img
        },

        {
          name: "Door Out 201 Wenge",
          price: "10 ",
          month: "6",
          productclass: 'standart',
          descr: "Lorem Morern is simply dummy text",
          id: "13",
          brands: 'Lorem Modern',
          image: img3
        },

      ],
    };
  }

  render() {

    return (
      <Router>
        <div>

          <Routes>

            <Route path="/" element={<Home datashop={this.state.datashop} />} />
            <Route path="/shop" element={<Shop onUpdateSearch={this.onUpdateSearch} />} />
            <Route path="/more" element={<More datashop={this.state.datashop} />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>


        </div>

      </Router>

    )
  }
}

export default App;
