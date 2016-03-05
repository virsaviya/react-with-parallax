import React from "react";

import Navbar from "./navbar/Navbar";
import Sections from "./layers/Sections";
// import SampleComp from "./SampleComp";

import layersToRender from '../../constants/layersToRender';


class Main extends React.Component {
  render() {
    // console.log(layersToRender);
    return(
      <div className="app ">
        <Navbar sections={layersToRender} />
        <Sections sections={layersToRender} />
      </div>
    )
  }
}

export default Main
