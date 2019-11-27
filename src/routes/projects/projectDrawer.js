import React from "react";
import Markdown from 'markdown-to-jsx';
import "../../fonts/fonts.css"
import Work from "../work/index.js"

class ProjectDrawer extends React.Component{
  constructor( props ){
    super();
    this.state = {
      project: props.project,
      projects: props.projects,
      selectedProject: props.selectedProject,
      windowWidth: props.windowWidth
    }
  }

  componentWillReceiveProps( props ){
    this.setState({ project: props.project, selectedProject: props.selectedProject, windowWidth: props.windowWidth })
  }

  getStyle(){
    if( this.state.selectedProject === this.state.project ){
      return({
        opacity: 1,
        transform: "translate( 0%, 0px )",
        transitionDelay: "all .6s",
        zIndex: 10
      })
    }else{
      return({
        opacity: 0,
        transform: "translate( 0%, 50px )",
        transitionDelay: "0s",
        zIndex: 1,
        height: "0px",
        overflow: "hidden"
      })
    }
  }

  links(){
    if( this.state.windowWidth < 768 ){
      return(
        <Work projects = { this.state.projects } project = { this.state.project }/>
      )
    }
  }

  render(){
    return(
      <div className = "project__drawer" style = { this.getStyle() }>
        <h2 className = "akkurat">{ this.state.project.title }</h2>
        <p className = "akkurat akkurat-year">{ this.state.project.year }</p>
        <div className = "selectedProject__description">
          <p className = "graphik graphik-description">{ this.state.project.details }</p>
        </div>
        <Markdown>
          {
            this.state.project.markdown
          }
        </Markdown>
        {
          this.links()
        }
      </div>

    )
  }
}

export default ProjectDrawer;
