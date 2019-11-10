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
      statement: data.statement,
      selectedProject: this.getSelectedProject()
    }
  }

  getSelectedProject(){
    return undefined
  }

  componentWillReceiveProps( props ){
    let project = props.matches.project
    this.setState({ selectedProject: project })
  }

  project(){

  }

  render(){
    return(
      <div className = "main">
        <div className = "wrap">
          <div className = "grid grid__flex">
            <div className = "grid__item medium-up--one-half">
              <Statement statement = { this.state.statement } />
            </div>
            <div className = "grid__item medium-up--one-half">
              {
                this.project()
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Project
