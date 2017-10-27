import React from "react";
import Home from "../../pages/Home";
import ContactUs from "../../pages/ContactUs";
import HotelFlight from "../../pages/HotelFlight";
import Nightlife from "../../pages/Nightlife";
import MyItenary from "../../pages/MyItenary";
import Spaday from "../../pages/Spaday";
import Sightseeing from "../../pages/Sightseeing";
import Users from "../../pages/Users";
import SignIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";

import { Switch, Route } from 'react-router-dom'
const Wrapper = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/contactus' component={ContactUs}/>
      <Route exact path='/home' component={Home}/>
      <Route path='/hotelflight' component={HotelFlight}/>
      <Route path='/myitenary' component={MyItenary}/>
      <Route path='/nightlife' component={Nightlife}/>
      <Route path='/spaday' component={Spaday}/>
      <Route path='/sightseeing' component={Sightseeing}/>
      <Route path='/signin' component={SignIn}/>
      <Route path='/signup' component={SignUp}/>
      <Route path='/users' component={Users}/>

    </Switch>
  </main>
)
export default Wrapper;
