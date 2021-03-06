import React from "react";
import Markdown from 'markdown-to-jsx';
import { usePrerenderData } from '@preact/prerender-data-provider';
import "../../fonts/fonts.css"
import "../../assets/index.css"
import { route } from 'preact-router';

const $ = require( "jquery" )

class Statement extends React.Component{
  constructor( props ){
    super();
    this.state = {
      statement: props.statement,
      drawerOpen: props.drawerOpen
    }
  }

  componentWillReceiveProps( props ){
    this.setState({
      drawerOpen: props.drawerOpen,
      windowWidth: props.windowWidth,
      selectedProject: props.selectedProject
    })
  }


  title(){
    if( this.state.statement.title ){
      return(
        <h1 className = "canela-bold"> { this.state.statement.title } </h1>
      )
    }
  }

  getStyle(){
    if( this.state.drawerOpen ){
      return({
        opacity: .3,
      })
    }else{
      return({
        opacity: 1,
      })
    }
  }

  assignRef( ref ){
    let a = $( ref ).find( "a" )
    a.on( "mouseenter", function( anchor ){
      if( window.innerWidth > 767 ){
        let jqAnchor = $( anchor.target )
        let html = anchor.target.outerHTML
        let first = html.slice( html.indexOf('href="') + 6 )
        let string = first.slice( 0, first.indexOf(".md") + 3 )
        route( string )
        window.scrollTo( 0, 0 )
        jqAnchor.addClass("hover")
      }
    })

    a.on( "mouseleave", function( anchor ){
      if( window.innerWidth > 767 ){
        let jqAnchor = $( anchor.target )
        jqAnchor.removeClass("hover")
      }
    })
  }

  getStyle(){
    if( this.state.windowWidth < 768 && this.state.selectedProject ){
      return({
        display: "none"
      })
    }
  }

  render(){
    return(
      <div className = "statement" style = { this.getStyle() }>
        <div className = "statement__text-wrapper" style = { this.getStyle() }>
          {
            this.title()
          }
          <div className = "graphik" ref = { this.assignRef.bind( this ) }>
            <Markdown>{ this.state.statement.details }</Markdown>
          </div>
        </div>
      </div>
    )
  }
}

export default Statement
