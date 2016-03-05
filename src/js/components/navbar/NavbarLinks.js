import React from "react";

class NavbarLinks extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let links = this.props.links.map( (_, idx) => {
      const id = idx + 1
      const name = `Section ${id}`;
      const url = `#section${id}`;
      return (
        <li key={id}>
          <a href={url}>{name}</a>
        </li>
      )
    })
    return(
      <div>
        <ul className="nav navbar-nav navbar-right">
          {links}
        </ul>
      </div>
    )
  }
}

export default NavbarLinks;