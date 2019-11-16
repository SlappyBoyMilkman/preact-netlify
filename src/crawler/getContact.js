const fs = require('fs');
const { join } = require('path');

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

function getFolder( src, folderName ){
	let newSrc = src.filter( ( folder ) => {
		return (folder.indexOf( folderName ) !== - 1)
	});
	return newSrc[0]
}

function getContact( source ){
  const isDirectory = source => fs.lstatSync(source).isDirectory();
  const isFile = source => !fs.lstatSync(source).isDirectory();
  const getAllListings = source =>
    fs.readdirSync(source).map(name => join(source, name));
  let allContent = getAllListings(source);
  let contactFolder = getFolder( allContent, "/contact" )
  let contactListings = getAllListings( contactFolder )
  const data = fs.readFileSync( contactListings[0], 'utf-8');
  let title = sliceGood( data, "title: ", "\n" )
  let body = slicePre( slicePre( data, "---\n" ), "---\n")
  return {
    title: title,
    body: body
  }
}


module.exports = {
  getContact
}
