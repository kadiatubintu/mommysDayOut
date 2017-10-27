import React, { Component } from 'react';
import Carousel from "../component/Carousel";
import NewUser from "../component/InputForms/NewUser";

class SignUp extends Component {
 render() {
   return (
     <div>
        <Carousel />
        <NewUser />
     </div>
    );
   };
  }

export default SignUp;
