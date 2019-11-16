import React from "react";
import Markdown from 'markdown-to-jsx';
import "../../fonts/fonts.css"

class ProjectDrawer extends React.Component{
  constructor( props ){
    super();
    this.state = {
      project: props.project,
      selectedProject: props.selectedProject
    }
  }

  componentWillReceiveProps( props ){
    this.setState({ project: props.project, selectedProject: props.selectedProject })
  }

  getStyle(){
    return({
      opacity: 0
    })
  }

  render(){
    return(
      <div className = "project__drawer" style = { this.getStyle() }>
        <h2 className = "akkurat">{ this.state.project.title }</h2>
        <p className = "akkurat akkurat-year">1920</p>
        <div className = "selectedProject__description">
          <p className = "graphik graphik-description">{ this.state.project.details }</p>
        </div>
        <Markdown>
          {
            this.state.project.markdown
          }
        </Markdown>
      </div>

    )
  }
}

export default ProjectDrawer;
