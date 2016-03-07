import React from "react";

class NavbarLinks extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let links = this.props.links.map( (link, idx) => {
      const id = idx + 1
      const url = `#section${id}`;
      return (
        <li key={id}>
          <a href={url}>{link.name}</a>
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