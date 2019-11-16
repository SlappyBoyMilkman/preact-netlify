import { h } from 'preact';
import React from "react";
import { usePrerenderData } from '@preact/prerender-data-provider';
import "../../fonts/fonts.css"
import { route } from 'preact-router';
import Markdown from 'markdown-to-jsx';

class Contact extends React.Component{
	constructor( props ){
		super();
		const [data, isLoading] = usePrerenderData(props);
		this.state = {
			contact: data.contact
		}
	}

	render(){
		return(
			<div className = "page page--contact">
				<div className = "item">
					<div className = "contact__text-wrapper">
						<h1>{ this.state.contact.title }</h1>
						<div className = "contact__markdown graphik">
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
