// import React from "react" ;
import React, { Component } from 'react';
import Badge  from "../component/Header/SpadayBadge";
import DaysBtns from "../component/DaysBtns";
import PagesBtn from "../component/Buttons/PagesBtn";
import SpadayBtns from "../component/ActivityBtns/SpadayBtns";

class App extends Component {
 render() {
   return (
     <div>
        <Badge />
        <DaysBtns />
        <SpadayBtns />
        <PagesBtn />
      </div>
    );
   };
  }

export default App;
