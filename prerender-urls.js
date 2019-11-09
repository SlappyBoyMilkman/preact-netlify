const { generateFileList } = require('./src/crawler');
const { join } = require('path');
const fs = require('fs');

const content = generateFileList(join(__dirname, 'content')).nodes;
const blogs = content[0];
const projects = content[2];
module.exports = () => {
	const pages = [
		{
			url: '/',
			seo: {
				cover: '/assets/profile.jpg'
			},
			projects: projects
		},
		{ url: '/contact/' },
		{ url: '/contact/success' }
	];

	// adding blogs list posts page
	pages.push({
		url: '/blogs/',
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


	return pages;
};
