import React from "react";
import ReactDOM from "react-dom";

import Navbar from "./navbar/Navbar";
import Groups from "./layers/Groups";

import layerGroups from '../../constants/layerGroups';
import navbarLinks from '../../constants/navbarLinks';


class Main extends React.Component{
  render(){
    return(
      <div className="app">
        <Navbar links={navbarLinks}/>
        <Groups groups={layerGroups}/>
      </div>
    )
  }
}

export default Main
