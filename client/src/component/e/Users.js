import React, { Component } from 'react';
import ChoiceBtns from "../component/ChoiceBtns";
ImageBackground source={require("../images/FirstImage")}

class App extends Component {
 render() {
   return (
     <div>
       <ImageBackground >
        <ChoiceBtns />
       </ImageBackground>
     </div>
    );
   };
  }


export default App;


<Route path='/users' component={Users}/>
