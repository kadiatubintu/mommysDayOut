// import React from "react" ;
import React, { Component } from 'react';
import Badge  from "../component/Header/SpadayBadge";
import DaysBtns from "../component/DaysBtns";
import SpadayBtns from "../component/ActivityBtns/SpadayBtns";

class App extends Component {
 render() {
   return (
     <div>
        <Badge />
        <DaysBtns />
        <SpadayBtns />
      </div>
    );
   };
  }

export default App;
