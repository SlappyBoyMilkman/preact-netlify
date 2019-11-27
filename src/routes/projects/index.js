import { h } from 'preact';
import React from "react";
import { usePrerenderData } from '@preact/prerender-data-provider';
import Statement from "./statement"
import ProjectDrawer from "./projectDrawer"
import { route } from 'preact-router';

export class Project extends React.Component{
  constructor( props ){
    super();
    const [data, isLoading] = usePrerenderData(props);
    let projects = data.projects
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

  componentDidMount(){
    this.__onResize()
    window.onresize = this.__onResize.bind( this );
  }

  __onResize(){
    this.setState({ windowWidth: window.innerWidth }, () => { console.log( this.state.windowWidth ) })
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

  projects(){
    if( this.state.windowWidth > 768 || this.state.selectedProject ){
      return this.state.projects.map(
        function( project, index ){
          return(
            <ProjectDrawer windowWidth = { this.state.windowWidth } projects = { this.state.projects } project = { project } selectedProject = { this.state.selectedProject } key = { `fucking-preact-${index}` }/>
          )
        }.bind( this )
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

  unselect(){
    route("/projects")
    this.setState({ drawerOpen: false })
  }

  getOverlayStyle(){
    if( this.state.drawerOpen ){
      return({
        opacity: .4,
        pointerEvents: "painted"
      })
    }else{
      return({
        opacity: 0,
        pointerEvents: "none"
      })
    }
  }

  overlay(){
    if( this.state.selectedProject ){
      return(
        <div className = "projet__drawer__overlay" onClick = { this.unselect.bind( this ) } style = { this.getOverlayStyle() }></div>
      )
    }
  }

  mobile(){
    if( this.state.windowWidth >= 768 || this.state.selectedProject ){
      return(
        <div className = "project__drawer__wrapper">
          <div className = "item">
            {
              this.projects()
            }
          </div>
        </div>
      )
    }
  }

  render(){
    return(
      <div className = "main">
        <div className = "wrap">
          <div className = "grid grid__flex">
            <div className = "grid__item medium-up--one-half">
              <div className = "item">
                <Statement windowWidth = { this.state.windowWidth } selectedProject = { this.state.selectedProject } statement = { this.state.statement } drawerOpen = { this.state.drawerOpen }/>
              </div>
            </div>
            <div className = "grid__item medium-up--one-half">
              {
                this.mobile()
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Project;
