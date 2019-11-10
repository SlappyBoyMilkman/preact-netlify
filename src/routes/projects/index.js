import { h } from 'preact';
import React from "react";
import { usePrerenderData } from '@preact/prerender-data-provider';
import Statement from "./statement"
import SelectedProject from "./selectedProject"

class Project extends React.Component{
  constructor( props ){
    super();
    const [data, isLoading] = usePrerenderData(props);
    let projects = data.projects.edges
    let selectedProject = this.getSelectedProject( props.matches.project, projects  )
    let drawerOpen = false
    if( selectedProject ){
      drawerOpen = true;
    }
    this.state = {
      settings: data,
      statement: data.statement,
      drawerOpen: drawerOpen,
      projects: projects,
      selectedProject: selectedProject
    }
  }

  getSelectedProject( project, projects ){
    let _project = undefined
    if( project ){
      for( var i = 0; i < projects.length; i++ ){
        let proj = projects[i];
        if( proj.id === project ){
          return proj
        }
      }
    }
  }

  componentWillReceiveProps( props ){
    let selectedProject = this.getSelectedProject( props.matches.project, this.state.projects )
    let drawerOpen = false
    if( selectedProject ){
      drawerOpen = true;
    }
    this.setState({ selectedProject: selectedProject, drawerOpen: drawerOpen })
  }

  project(){
    if( this.state.selectedProject ){
      return (
        <SelectedProject project = { this.state.selectedProject }/>
      )
    }
  }

  getStyle(){
    let drawerOpen = "100%";
    if( this.state.drawerOpen ){
      drawerOpen = "0%"
    }
    return({
      transform: `translate( ${ drawerOpen }, 0px )`
    })
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
              <div className = "project__drawer" style = { this.getStyle() }>
                {
                  this.project()
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Project
