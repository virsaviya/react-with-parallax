import React from "react";

import NavbarLinks from "./NavbarLinks";

class Navbar extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
              // <button className={magicBtn} onClick={this.onClick.bind(this)}>Click for Magic</button>
    return(
      <section id="navbarSection">
        <div className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigation" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="navigation">
              <NavbarLinks links={this.props.sections}/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Navbar
