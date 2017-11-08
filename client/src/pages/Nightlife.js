// import React from "react" ;
import React, { Component } from 'react';
import Badge  from "../component/Header/NightlifeBadge";
import DaysBtns from "../component/DaysBtns";
import NightlifeBtns from "../component/ActivityBtns/NightlifeBtns"

class App extends Component {
 render() {
   return (
     <div>
        <Badge />
        <DaysBtns />
        <NightlifeBtns />
     </div>
    );
   };
  }

export default App;
