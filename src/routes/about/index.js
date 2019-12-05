import { h } from 'preact';
import React from "react";
import Footer from "../../components/footer/index.js";
import Markdown from 'markdown-to-jsx';
import { usePrerenderData } from '@preact/prerender-data-provider';
import "../../fonts/fonts.css"
import { route } from 'preact-router';


class About extends React.Component{
  constructor( props ){
    super();
    const [data, isLoading] = usePrerenderData(props);
    document.title = "Jack Ferrante ・ About"
    this.state = {
      about: data.about
    }
  }

  internships(){
    return this.state.about.internships.map(
      ( internship, index ) => { return(
        <div className = "internship">
          <div className = "graphik-italic">
            <Markdown>{ internship.company }</Markdown>
          </div>
          <p className = "graphik-regular-italic font-body"> { internship.dates } </p>
        </div>
      ) }
    )
  }

  render(){
    return(
      <div className = "page page--about">
        <div className = "wrap">
          <h1 className = "page-title__mobile">About</h1>
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
          <Footer/>
        </div>
      </div>
    )
  }
}

export default About
