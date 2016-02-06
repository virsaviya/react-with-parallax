import React from "react";
import Layers from "./Layers";

class Groups extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let groups = this.props.groups.map( (group, idx) => {
      let groupId = `group${group.id}`;
      return (
        <div key={group.id} id={groupId} className="parallaxGroup">
          <Layers group={group}/>
        </div>
      )
    })
    return(
      <div className="parallax">
        {groups}
      </div>
    )
  }
}

export default Groups
