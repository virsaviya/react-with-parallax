import React from "react";

import Navbar from "./navbar/Navbar";
import Sections from "./layers/Sections";

import layers from '../../constants/layers';


class Main extends React.Component {
  render() {
    return(
      <div className="app ">
        {/* The Navbar is generated based on the layers file*/}
        <Navbar sections={layers} />
        <Sections sections={layers} />
      </div>
    )
  }
}

export default Main;
