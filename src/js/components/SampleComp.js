import React from "react";

class SampleComp extends React.Component { 
  render() {
    const text = `This is Sample Component ${this.props.id}`
    return (
      <div className="sample">
        <p>{text}</p>
        <p>Passed through layersToRender.js</p>
      </div>
    )
  }
}

export default SampleComp;