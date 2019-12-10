const fs = require('fs');
const { join } = require('path');

function getFolder( src, folderName ){
	let newSrc = src.filter( ( folder ) => {
		return (folder.indexOf( folderName ) !== - 1)
	});
	return newSrc[0]
}

function slicePre( data, pre ){
  return data.slice( data.indexOf( pre ) + pre.length )
}

function slicePost( data, post ){
  return data.slice( 0, data.indexOf( post ) )
}

function sliceGood( data, pre, post ){
  let sliced = slicePre( data, pre );
  sliced = slicePost( sliced, post )
  return sliced
}

function getFiles( skillsContents ){
  let objs = []
  skillsContents.forEach(
    ( skill ) => {
      let obj = {};
      let data = fs.readFileSync( skill, 'utf-8');
      let title = sliceGood( data, "title: ", "\n" );
      let description = slicePre(slicePre( data, "title: " ), "---\n");
			description = description.slice( 0, description.lastIndexOf( "\n" ) )
			console.log( description )
      obj.title = title;
      obj.description = description;
      objs.push( obj );
    }
  );
  return objs;
}

function getSkills( source ){
  const isDirectory = source => fs.lstatSync(source).isDirectory();
  const isFile = source => !fs.lstatSync(source).isDirectory();
  const getAllListings = source =>
    fs.readdirSync(source).map(name => join(source, name));
  let allContent = getAllListings(source);
  let skillsFolder = getFolder( allContent, "/skills" )
  let skillsContents = getAllListings( skillsFolder )
  let skills = getFiles( skillsContents )
  return skills;
}

module.exports = {
  getSkills
}
