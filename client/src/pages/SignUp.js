import React, { Component } from 'react';
import Carousel from "../component/Carousel";
import NewUser from "../component/InputForms/NewUser";
import HotelFlight from "../component/HotelFlight";
import ChoiceBtns from "../component/ChoiceBtns";

class SignUp extends Component {
 render() {
   return (
     <div>
        <Carousel />
        <NewUser />
        <ChoiceBtns />
     </div>
    );
   };
  }


export default SignUp;
