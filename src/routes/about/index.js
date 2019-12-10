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
    this.state = {
      about: data.about,
      skills: data.skills
    }
  }

  componentDidMount(){
    document.getElementsByClassName( "header__lefthand-nav" )[0].style.position = "absolute";
  }

  componentWillUnmount(){
    document.getElementsByClassName( "header__lefthand-nav" )[0].style.position = "";
    debugger
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

  skills(){
    return this.state.skills.map(
      ( skill, index ) => {
        return(
          <div className = "page--about__skill">
            <h3 className = "page--about__skill__title">
              { skill.title }
            </h3>
            <p className = "">
              { skill.description }
            </p>
          </div>
        )
      }
    );
  }

  render(){
    return(
      <div className = "page page--about">
        <div className = "wrap">
          <h1 className = "page-title__mobile">About</h1>
          <div className = "grid">
            <div className = "grid__item medium-up--one-half">
              <h2 className = "akkurat" style = {{ marginTop: "0px" }}>{ this.state.about.title }</h2>
              <div className = "graphik graphik-body">
                <Markdown>{ this.state.about.experience }</Markdown>
              </div>
            </div>
            <div className = "grid__item medium-up--one-half graphik graphik-body">
              {
                this.skills()
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
