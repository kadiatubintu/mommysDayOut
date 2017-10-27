// import React from "react" ;
import React, { Component } from 'react';
import Badge  from "../component/Header/NightlifeBadge";
import DaysBtns from "../component/DaysBtns";
import Price from "../component/Dropdowns/Price"
import Submit from "../component/Buttons/Submit";
import CardLists from "../component/CardLists";
const Checkbox = require("../component/Checkbox");


class App extends Component {
 render() {
   return (
     <div>
      <Badge />
      <DaysBtns />
      <Price />
      <Submit />
      <CardLists />
     </div>
    );
   };
  }


export default App;
