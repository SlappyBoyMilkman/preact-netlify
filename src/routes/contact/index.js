import { h } from 'preact';
import React from "react";
import { usePrerenderData } from '@preact/prerender-data-provider';
import "../../fonts/fonts.css"
import { route } from 'preact-router';
import Markdown from 'markdown-to-jsx';

const $ = require( "jquery" )

class Contact extends React.Component{
	constructor( props ){
		super();
		document.title = "Jack Ferrante ・ About"
		const [data, isLoading] = usePrerenderData(props);
		this.state = {
			contact: data.contact
		}
	}

	componentDidMount(){
	}

	anchorClick( e ){
		 let text = e.target.innerText;
		 var $temp = $("<input>");
		 $("body").append($temp);
		 $temp.val(text).select();
		 document.execCommand("copy");
		 $temp.remove();
		 this.setState({ copied: true })
		 window.setTimeout(
			 () => { this.setState({ copied: false }) }, 2000
		 )
	}



	getRef( ref ){
		if( !this.state.md ){
			let anchor = ref.querySelector("a");
			anchor.href = "#"
			anchor.addEventListener( "click", this.anchorClick.bind( this ) )
			this.div = document.createElement( "div" );
			this.div.classList.add( "copied_text" );
			this.div.innerText = "COPIED!"
			anchor.appendChild( this.div )
			this.setState({ md: ref })
		}
	}

	getClassName(){
		if( this.state.copied ){
			return "contact__markdown graphik copied"
		}else{
			return "contact__markdown graphik"
		}
	}

	render(){
		return(
			<div className = "page page--contact">
				<div className = "item">
					<div className = "contact__text-wrapper">
						<h1>{ this.state.contact.title }</h1>
						<div className = { this.getClassName() } ref = { ( ref ) => { this.getRef( ref ) } }>
							<Markdown>
								{
									this.state.contact.body
								}
							</Markdown>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Contact;
