import React from "react";

class SelectedProject extends React.Component{
  constructor( props ){
    super();
    debugger
    this.state = {
      project: props.project
    }
  }

  componentWillReceiveProps( props ){
    this.setStatE({
      project: props.project
    })
  }

  render(){
    return(
      <div >

      </div>
    )
  }
}

export default SelectedProject;
