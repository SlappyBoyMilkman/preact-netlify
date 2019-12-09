import { h } from 'preact';
import React from "react";
import Footer from "../../components/footer/index.js";
import { usePrerenderData } from '@preact/prerender-data-provider';
import { Link } from 'preact-router/match';
import "../../fonts/fonts.css"

const $ = require( "jquery" );

class Work extends React.Component{
  constructor( props ){
    super();
    document.title = "Jack Ferrante ・ Work"
    if( props.projects ){
      if( props.project ){
        this.state = {
          projects: props.projects,
          project: props.project
        }
      }else{
        this.state = {
          projects: props.projects,
          context: props.context
        }
      }
    }else{
      const [data, isLoading] = usePrerenderData(props);
      this.state = {
        projects: data.projects
      }
    }
  }



  leftSideProjects(){
    return this.state.projects.filter( ( project ) => { return project.left } ).map(
      function( project, index ){
        let click = ( e ) => {
          if( this.state.project ){
            window.scrollTo( 0, 0 )
          }
        }
        if( !this.state.project || this.state.project !== project ){
          return(
            <div key = {`left-side-${ index }`} className = "work-item akkurat-pro">
            <Link onClick = { click } href = { `/projects/${project.id}` }>{ project.title }</Link>
            <p> { project.year } </p>
            <p> { project.shortDescription } </p>
            </div>
          )
        }
      }.bind( this )
    )
  }

  rightSideProjects(){
    return this.state.projects.filter( ( project ) => { return !project.left } ).map(
      function( project, index ){
        let click = ( e ) => {
          if( this.state.project ){
            window.scrollTo( 0, 0 )
          }
        }
        if( !this.state.project || this.state.project !== project ){
          return(
            <div key = {`right-side-${ index }`} className = "work-item akkurat-pro">
            <Link onClick = { click } href = { `/projects/${project.id}` }>{ project.title }</Link>
            <p> { project.year } </p>
            <p> { project.shortDescription } </p>
            </div>
          )
        }
      }.bind( this )
    )
  }


  inner(){
    if( this.state.project ){
      return(
        <div>
        <h1 className = "akkurat-medium" style = {{ marginTop: "120px" }}>Other Projects</h1>
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
      )
    }else if( this.state.context && this.state.context === "home" ){
      // return(
      //   <div>
      //     <div className = "grid">
      //       <div className = "grid__item one-whole">
      //         <h1 className = "page-title__mobile" style = {{ paddingTop: "120px" }}>Other Projects</h1>
      //       </div>
      //       <div className = "grid__item medium-up--one-half">
      //         {
      //           this.leftSideProjects()
      //         }
      //       </div>
      //       <div className = "grid__item medium-up--one-half">
      //         {
      //           this.rightSideProjects()
      //         }
      //       </div>
      //     </div>
      //   </div>
      // )
    }else{
      return(
        <div className = "page">
          <div className = "wrap">
            <h1 className = "page-title__mobile">Work</h1>
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
            <Footer/>
          </div>
        </div>
      )
    }
  }

  render(){
    return(
      <div>
        {
          this.inner()
        }
      </div>
    )
  }
}

export default Work
