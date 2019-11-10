const fs = require('fs');
const { join } = require('path');

function getProjects( source ){
  const isDirectory = source => fs.lstatSync(source).isDirectory();
  const isFile = source => !fs.lstatSync(source).isDirectory();
  const getAllListings = source =>
		fs.readdirSync(source).map(name => join(source, name));
  let projectFolder = getAllListings(source)[2];
  let projectContents = getAllListings( projectFolder )
  let projects = projectContents.map(
    function( project, index ){
      const data = fs.readFileSync( project, 'utf-8');
      console.log( data )
    }
  );

}


module.exports = {
	getProjects
};
