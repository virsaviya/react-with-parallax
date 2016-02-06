import React from "react";

class Layers extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let group = this.props.group
    let keys = Object.keys(group.layers)
    let layers = keys.map ( (layer, idx) => {
      let classes = `parallaxLayer parallaxLayer-${layer}`;
      let text = `Group ${group.id}: ${layer} layer.`;
      if (group.layers[layer]) {
        {/*replace p element with the components to be rendered*/}
        return (
          <div key={idx} className={classes}>
            <p className="title">{text}</p>
          }
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
