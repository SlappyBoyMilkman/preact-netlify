const { generateFileList } = require('./src/crawler');
const { join } = require('path');
const fs = require('fs');
const { getStatement } = require('./src/crawler/getStatement.js');
const { getProjects } = require('./src/crawler/getProjects.js');
const { getAbout } = require( "./src/crawler/getAbout.js" )


const content = 1;
const blogs = 1;
const projects = getProjects( join( __dirname, "content" ) );
const statement = getStatement( join( __dirname, "content" ) );
const about = getAbout( join( __dirname, "content" ) );

let funky = () => {
	const pages = [
		{
			url: '/',
			seo: {
				cover: '/assets/profile.jpg'
			},
			projects: projects,
			statement: statement,
		},
		{ url: '/contact/' },
		{ url: '/about/', about: about },
		{ url: '/contact/success' },
		{
			url: '/work',
		 	projects: projects
	 	}
	];

	// adding blogs list posts page
	pages.push({
		url: '/blogs/',
	});



	pages.push({
		url: '/projects/',
		projects: projects,
		statement: statement,
	});

	pages.push( ...projects.map( project => {
		let obj = {
			url: `/projects/${project.id}`,
			projects: projects,
			statement: statement,
			project: project
		};
		return obj
	}))

	return pages;
};

// let pro = funky()

// console.log( pro )
module.exports = funky;
