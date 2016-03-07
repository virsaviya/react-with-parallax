import React from "react";

import SampleComp from "../SampleComp";

class Layers extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const section = this.props.section;
    const sectionId = this.props.sectionId;
    const keys = Object.keys(section.layers);
    const layers = keys.map ( (layer, idx) => {
      const classes = `parallaxLayer parallaxLayer-${layer}`;
      const text = `Section ${sectionId}: ${section.name} ${layer} layer.`;
      if (section.layers[layer]) {
        return (
          <div key={idx} className={classes}>
            <p className="title">{text}</p>
            {section.layers[layer]}
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
