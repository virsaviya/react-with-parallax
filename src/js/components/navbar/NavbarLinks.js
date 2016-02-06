import React from "react";

class NavbarLinks extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    let links = this.props.links.map( link => {
      return (
        <li key={link.id}>
          <a href={link.link}>{link.name}</a>
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