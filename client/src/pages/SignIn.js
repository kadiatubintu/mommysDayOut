import React, { Component } from 'react';
import Carousel from "../component/Carousel";
import OldUser from "../component/InputForms/OldUser";
import HotelFlight from "../component/HotelFlight";
import ChoiceBtns from "../component/ChoiceBtns";

class SignIn extends Component {
 render() {
   return (
     <div>
        <Carousel />
        <OldUser />
        <ChoiceBtns />
     </div>
    );
   };
  }


export default SignIn;
