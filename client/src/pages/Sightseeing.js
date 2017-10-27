// import React from "react" ;
import React, { Component } from 'react';
import Badge  from "../component/Header/SightseeingBadge";
import DaysBtns from "../component/DaysBtns";
import SightseeingBtns from "../component/ActivityBtns/SightseeingBtns"
import PagesBtn  from "../component/Buttons/PagesBtn";

class App extends Component {
 render() {
   return (
     <div>
        <Badge />
        <DaysBtns />
        <SightseeingBtns />
        <PagesBtn />
     </div>
    );
   };
  }

export default App;
