import React from "react";
import Markdown from 'markdown-to-jsx';


class SelectedProject extends React.Component{
  constructor( props ){
    super();
    debugger
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
    debugger
    return(
      <div>
        <h2>{ this.state.project.title }</h2>
        <div className = "selectedProject__description">
          <p>{ this.state.project.details }</p>
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
