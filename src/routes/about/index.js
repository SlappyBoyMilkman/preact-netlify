import { h } from 'preact';
import React from "react";
import Markdown from 'markdown-to-jsx';
import { usePrerenderData } from '@preact/prerender-data-provider';
import { route } from 'preact-router';


class About extends React.Component{
  constructor(){
    super();
    this.state = {}
  }

  render(){
    return(
      <div></div>
    )
  }
}

export default About
