import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Provider } from '@preact/prerender-data-provider';
import Header from './header';
import "../assets/index.css"

// Code-splitting is automated for routes
import Home from '../routes/home';
import About from "../routes/about"
import Blogs from '../routes/blogs';
import Blog from '../routes/blog';
import Work from "../routes/work"
import Project from "../routes/projects"
import Contact from '../routes/contact';
import ContactSuccess from '../routes/contact-success';

export default class App extends Component {
	constructor(){
		super();
		this.state = {
			windowWidth: window.innerWidth
		}
	}



	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};



	render(props) {
		return (
			<Provider value={props}>
				<div id="app">
					<Header />
					<Router onChange={this.handleRoute}>
						<Project path="/" windowWidth = { this.state.windowWidth } />
						<Project path="/projects/:project?" windowWidth = { this.state.windowWidth } />
						<Work path="/work" windowWidth = { this.state.windowWidth }/>
						<Blogs path="/blogs/" windowWidth = { this.state.windowWidth }/>
						<Blog path="/blog/:name" windowWidth = { this.state.windowWidth } />
						<Contact path="/contact/" windowWidth = { this.state.windowWidth } />
						<ContactSuccess path="/contact/success" windowWidth = { this.state.windowWidth } />
						<About path="/about/" windowWidth = { this.state.windowWidth }/>
					</Router>
				</div>
			</Provider>
		);
	}
}
