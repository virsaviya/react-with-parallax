import React from "react";

import NavbarLinks from "./NavbarLinks";

class Navbar extends React.Component{
  constructor(props){
    super(props);
  }
  onClick(e){
    console.log('magic btn clicked', e)
  }
  render(){
    return(
      <section id="navbarSection">
        {/* Bootstrapified Navbar */}
        <div className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigation" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              {/* Button that creates magic (aka debug state) */}
              <button className="btn btn-info debug" onClick={this.onClick.bind(this)}>Click for Magic</button>
            </div>
            <div className="collapse navbar-collapse" id="navigation">
              {/* Links to the different sections of your single page app */}
              {/* Change the content in /public/data/navbarLinks */}
              <NavbarLinks links={this.props.links}/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Navbar
