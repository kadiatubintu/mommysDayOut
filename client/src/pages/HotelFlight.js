import React, { Component } from 'react';
import FlightBadge from "../component/Header/FlightBadge";
import HotelBadge from "../component/Header/HotelBadge";
import Location from "../component/Location";
import Ratings from "../component/Dropdowns/Ratings";
import SaveBtn from "../component/Buttons/SaveBtn";
import Checkbox from "../component/Checkbox";


class App extends Component {
 render() {
   return (
     <div>
      <FlightBadge />
      <Location />
      <Checkbox />
      <HotelBadge />
      <Location />
      <SaveBtn />
     </div>
    );
   };
  }


export default App;
