import React, { Component } from 'react';
import Carousel from "../component/Carousel";
import HotelFlight from "../component/HotelFlight";
import ChoiceBtns from "../component/ChoiceBtns";

class Home extends Component {
 render() {
   return (
     <div>
        <Carousel />
        <ChoiceBtns />
     </div>
    );
   };
  }


export default Home;
