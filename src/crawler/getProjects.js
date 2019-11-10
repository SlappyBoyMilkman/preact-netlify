const fs = require('fs');
const { join } = require('path');

function getDetails(data) {
	const matadata = data.match(/---(.*\n)*---/)[0];
	const details =  matadata.match(/(.*):(.*)/g).reduce((obj, detail) => {
		const value = detail.substr(detail.indexOf(':') + 2);
		const key = detail.substr(0, detail.indexOf(':'));
		obj[key] = value;
		return obj;
	}, {});
  console.log( details )
	return details;
}

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
      let details = getDetails( data )
      console.log( data )
      let obj = {};
      obj.title = details.title;
      console.log( obj )
    }
  );

}


module.exports = {
	getProjects
};
