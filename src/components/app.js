import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Provider } from '@preact/prerender-data-provider';
import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Blogs from '../routes/blogs';
import Blog from '../routes/blog';
import Project from "../routes/projects"
import Contact from '../routes/contact';
import ContactSuccess from '../routes/contact-success';

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	header(){
		debugger
	}

	render(props) {
		return (
			<Provider value={props}>
				<div id="app">
					<Router onChange={this.handleRoute}>
						<Project path="/" />
						<Project path="/projects/:project?" />
						<Blogs path="/blogs/"/>
						<Blog path="/blog/:name" />
						<Contact path="/contact/" />
						<ContactSuccess path="/contact/success" />
					</Router>
				</div>
			</Provider>
		);
	}
}
