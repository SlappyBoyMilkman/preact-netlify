import { h } from 'preact';
import React from "react";
import { usePrerenderData } from '@preact/prerender-data-provider';

class Work extends React.Component{
  constructor( props ){
    super();
    const [data, isLoading] = usePrerenderData(props);
    this.state = {
      projects: data.projects
    }
  }

  leftSideProjects(){

  }

  rightSideProjects(){

  }

  rendeR(){
    return(
      <div className = "wrapper">
        <div className = "grid">
          <div className = "grid__item medium-up--one-half">
            {
              this.leftSideProjects()
            }
          </div>
          <div className = "grid__item medium-up--one-half">
            {
              this.rightSideProjects()
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Work
