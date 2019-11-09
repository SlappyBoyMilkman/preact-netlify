import { h } from 'preact';
import React from "react";
import { usePrerenderData } from '@preact/prerender-data-provider';

class Project extends React.Component{
  constructor( props ){
    super();
    const [data, isLoading] = usePrerenderData(props);
    this.state = {

    }

  }
  render(){
    debugger
    return(
      <div>
      </div>
    )
  }
}

export default Project
