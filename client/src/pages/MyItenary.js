import React, { Component } from 'react';
import UserpageBtn from "../component/Buttons/UserpageBtn";
import Badge from "../component/Header/UsernameBadge";


class App extends Component {
 render() {
   return (
     <div>
        <Badge />
        <UserpageBtn />
     </div>
    );
   };
  }


export default App;
