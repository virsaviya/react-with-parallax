import React from "react";
import Layers from "./Layers";

class Sections extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let sections = this.props.sections.map( (section, idx) => {
      let sectionId = `section${idx + 1}`;
      return (
        <div key={idx + 1} id={sectionId} className="parallaxSection">
          <Layers section={section} sectionId={idx + 1}/>
        </div>
      )
    })
    return(
      <div className="parallax">
        {sections}
      </div>
    )
  }
}

export default Sections
