// import React from "react" ;
import React, { Component } from 'react';
import Badge  from "../component/Header/SightseeingBadge";
import DaysBtns from "../component/DaysBtns";
import SightseeingBtns from "../component/ActivityBtns/SightseeingBtns"

class App extends Component {
 render() {
   return (
     <div>
        <Badge />
        <DaysBtns />
        <SightseeingBtns />
     </div>
    );
   };
  }

export default App;
