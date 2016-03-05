import React from "react";

import SampleComp from "../SampleComp";

class Layers extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const section = this.props.section;
    const sectionId = this.props.sectionId;



    // const content = this.props.content;
    const keys = Object.keys(section);
    const layers = keys.map ( (layer, idx) => {
      const classes = `parallaxLayer parallaxLayer-${layer}`;
      const text = `Group ${sectionId}: ${layer} layer.`;
      if (section[layer]) {
        // console.log(section[layer]);
        return (
          <div key={idx} className={classes}>
            <p className="title">{text}</p>
            {section[layer]}
          </div>
        )
      }
    })
    return(
      <div>
        {layers}
      </div>
    )
  }
}

export default Layers
