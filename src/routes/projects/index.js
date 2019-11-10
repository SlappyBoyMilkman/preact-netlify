import { h } from 'preact';
import React from "react";
import { usePrerenderData } from '@preact/prerender-data-provider';
import Statement from "./statement"

class Project extends React.Component{
  constructor( props ){
    super();
    const [data, isLoading] = usePrerenderData(props);
    this.state = {
      settings: data,
      selectedProject: this.getSelectedProject()
    }
  }

  getSelectedProject(){
    return undefined
  }

  componentWillReceiveProps(){
    debugger
  }

  project(){

  }

  render(){
    return(
      <div className = "main">
        <div className = "grid">
          <div className = "grid__item medium-up--one-half">
            <Statement/>
          </div>
          <div className = "grid__item medium-up--one-half">
            {
              this.project()
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Project
