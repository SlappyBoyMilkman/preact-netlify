import React from "react";
import "../../fonts/fonts.css"
import { Link } from 'preact-router/match';


class Footer extends React.Component{
  constructor( props ){
    super();
    let links = [
      { name: "Work", url: "/work" },
      { name: "About", url: "/about" },
      { name: "Contact", url: "/contact" }
    ]
  }

  render(){
    return(
      <div className = "footer">
        <Link className = "graphik-regular graphik-body" href = "/work">Work</Link>
        <Link className = "graphik-regular graphik-body" href = "/about">About</Link>
        <Link className = "graphik-regular graphik-body" href = "/contact">Contact</Link>
      </div>
    )
  }
}

export default Footer;
