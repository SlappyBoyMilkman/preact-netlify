import React from "react";
import Markdown from 'markdown-to-jsx';
import "../../fonts/fonts.css"

class SelectedProject extends React.Component{
  constructor( props ){
    super();
    this.state = {
      project: props.project,
      drawerOpen: props.drawerOpen
    }
  }

  componentWillReceiveProps( props ){
    this.setState({
      project: props.project,
      drawerOpen: props.drawerOpen
    })
  }


  render(){
    return(
      <div>
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

export default SelectedProject;
