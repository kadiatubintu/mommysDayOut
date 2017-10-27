import React, { Component } from 'react';
import Carousel from "../component/Carousel";
import OldUser from "../component/InputForms/OldUser";

class SignIn extends Component {
 render() {
   return (
     <div>
        <Carousel />
        <OldUser />
     </div>
    );
   };
  }


export default SignIn;
