import { h } from 'preact';
import React from "react";
import Markdown from 'markdown-to-jsx';
import { usePrerenderData } from '@preact/prerender-data-provider';
import "../../fonts/fonts.css"
import { route } from 'preact-router';


class About extends React.Component{
  constructor( props ){
    const [data, isLoading] = usePrerenderData(props);
    super();
    this.state = {
      about: data.about
    }
  }

  internships(){
    return this.state.about.internships.map(
      ( internship, index ) => { return(
        <div className = "internship">
          <Markdown>{ internship.company }</Markdown>
          <p className = "graphik-italic"> { internship.dates } </p>
        </div>
      ) }
    )
  }

  render(){
    return(
      <div className = "page page--about">
        <div className = "wrap">
          <div className = "grid">
            <div className = "grid__item medium-up--one-half">
              <h2 className = "akkurat">{ this.state.about.title }</h2>
              <div className = "graphik graphik-body">
                <Markdown>{ this.state.about.experience }</Markdown>
              </div>
            </div>
            <div className = "grid__item medium-up--one-half">
              <h2 className = "akkurat">Internships</h2>
              {
                this.internships()
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
