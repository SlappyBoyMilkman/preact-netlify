import { h } from 'preact';
import React from "react";
import { usePrerenderData } from '@preact/prerender-data-provider';
import { Link } from 'preact-router/match';

class Work extends React.Component{
  constructor( props ){
    super();
    const [data, isLoading] = usePrerenderData(props);
    this.state = {
      projects: data.projects
    }
  }

  leftSideProjects(){
    return this.state.projects.filter( ( project ) => { return project.left } ).map(
      function( project, index ){
        return(
          <div key = {`left-side-${ index }`} className = "work-item">
            <Link href = { `/projects/${project.id}` }>{ project.title }</Link>
            <p> { project.year } </p>
            <p> { project.shortDescription } </p>
          </div>
        )
      }
    )
  }

  rightSideProjects(){
    return this.state.projects.filter( ( project ) => { return !project.left } ).map(
      function( project, index ){
        return(
          <div key = {`right-side-${ index }`} className = "work-item">
            <Link href = { `/projects/${project.id}` }>{ project.title }</Link>
          </div>
        )
      }
    )
  }

  render(){
    return(
      <div className = "page">
        <div className = "wrap">
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
      </div>
    )
  }
}

export default Work
