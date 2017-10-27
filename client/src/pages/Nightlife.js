// import React from "react" ;
import React, { Component } from 'react';
import Badge  from "../component/Header/NightlifeBadge";
import DaysBtns from "../component/DaysBtns";
import NightlifeBtns from "../component/ActivityBtns/NightlifeBtns"
import PagesBtn from "../component/Buttons/PagesBtn";

class App extends Component {
 render() {
   return (
     <div>
        <Badge />
        <DaysBtns />
        <NightlifeBtns />
        <PagesBtn />
     </div>
    );
   };
  }

export default App;
