import React from "react";
import Markdown from 'markdown-to-jsx';
import { usePrerenderData } from '@preact/prerender-data-provider';

class Statement extends React.Component{
  constructor( props ){
    super();
    this.state = {
      statement: props.statement
    }
  }

  componentWillReceiveProps(){
  }

  title(){
    if( this.state.statement.title ){
      return(
        <h1> { this.state.statement.title } </h1>
      )
    }
  }

  render(){
    return(
      <div className = "statement">
        <div className = "statement__text-wrapper">
        {
          this.title()
        }
          <Markdown>{ this.state.statement.details }</Markdown>
        </div>
      </div>
    )
  }
}

export default Statement
