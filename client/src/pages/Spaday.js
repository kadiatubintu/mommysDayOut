// import React from "react" ;
import React, { Component } from 'react';
import Badge  from "../component/Header/SpadayBadge";
import Checkbox from "../component/Checkbox";
import DaysBtns from "../component/DaysBtns";
import Location from "../component/Location";
import Price from "../component/Dropdowns/Price";
import Submit from "../component/Buttons/Submit";
import CardLists from "../component/CardLists";
import SpadayBtns from "../component/ActivityBtns/SpadayBtns";

class App extends Component {
 render() {
   return (
     <div>
        <Badge />
        <DaysBtns />
        <Price />
        <Submit />
      </div>
    );
   };
  }


export default App;
