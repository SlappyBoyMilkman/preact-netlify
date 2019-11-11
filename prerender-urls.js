const { generateFileList } = require('./src/crawler');
const { join } = require('path');
const fs = require('fs');
const { getStatement } = require('./src/crawler/getStatement.js');
const { getProjects } = require('./src/crawler/getProjects.js');


const content = generateFileList(join(__dirname, 'content')).nodes;
const blogs = content[0];
const projects = getProjects( join( __dirname, "content" ) );
const statement = getStatement( join( __dirname, "content" ) );

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
		{ url: '/contact/success' },
		{
			url: '/work',
		 	projects: projects
	 	}
	];

	// adding blogs list posts page
	pages.push({
		url: '/blogs/',
		data: blogs
	});



	pages.push({
		url: '/projects/',
		projects: projects,
		statement: statement,
		data: blogs
	});



	// adding all blog pages
	pages.push(...blogs.edges.map(blog => {
		const data = fs.readFileSync(join('content', 'blog', blog.id), 'utf-8').replace(/---(.*\n)*---/, '');
		return {
			url: `/blog/${blog.id}`,
			seo: blog.details,
			data: {
				details: blog.details,
				content: data
			}
		};
	}));


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
