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
	return details;
}

function getMarkdown( data ){
  let descriptionStart = data.indexOf( "description:" )
  let md = data.slice( descriptionStart )
  let nI = md.indexOf( "---" )
  md = md.slice( nI );
  md = md.replace( "---", "" )
  return md;
}

function getDescription( data ){
  let descriptionIndex = data.indexOf( "description:" );
  let description = data.slice( descriptionIndex )
  description = description.slice( 0, description.indexOf( "lefthand" ) );
  description = description.replace( "description: ", "" ).replace( ">-", "" )
  return description
}

function getBody( data ){
  let preview = data.match(/---(.*\n)*---/);
  return preview
}

function getLeft( data ){
  let leftHandIndex = data.indexOf( "lefthand: true" )
  if( leftHandIndex !== -1 ){
    return true
  }else{
    return false
  }
}

function getYear( data ){
	let index = data.indexOf( "year:" )
	let year = data.slice( index )
	year = year.slice( 0, year.indexOf("shortDescription:") )
	year = year.replace( "year: ", "" )
	year = year.replace( "'", "" )
	year = year.replace( "'", "" )
	return year
}

function getShortDescription( data ){
	let index = data.indexOf( "shortDescription:" )
	let shorty = data.slice( index )
	shorty = shorty.replace( "shortDescription:", "" )
	shorty = shorty.slice( 0, shorty.indexOf( "description:" ) )
	console.log( shorty )
	return shorty

}

function getProjects( source ){
  const isDirectory = source => fs.lstatSync(source).isDirectory();
  const isFile = source => !fs.lstatSync(source).isDirectory();
  const getAllListings = source =>
		fs.readdirSync(source).map(name => join(source, name));
  let projectFolder = getAllListings(source)[2];
  let projectContents = getAllListings( projectFolder )
  let fuckProjects = projectContents.map(
    function( project, index ){
      const data = fs.readFileSync( project, 'utf-8');
      let details = getDetails( data )
      let obj = {};
      obj.title = details.title;
      obj.details = getDescription( data );
      obj.id = project.substr(project.lastIndexOf('/') + 1),
      obj.left = getLeft( data )
			obj.year = getYear( data )
			obj.shortDescription = getShortDescription( data )
      obj.markdown = getMarkdown( data )
      return obj
    }

  );
  return fuckProjects
}


module.exports = {
	getProjects
};
