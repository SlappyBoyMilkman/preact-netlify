const fs = require('fs');
const { join } = require('path');

function getAssetsFolder( src ){
	let newSrc = src.filter( ( folder ) => {
		return (folder.indexOf( "/assets" ) !== - 1)
	});
	return newSrc[0]
}

function getIndex( src ){
	let newSrc = src.filter( ( file ) => {
    if( file.indexOf( "index_template.css" ) !== -1  ){
      return file
    }
	});
	return newSrc[0]
}

function overwriteCSS( source ){
  const isDirectory = source => fs.lstatSync(source).isDirectory();
  const isFile = source => !fs.lstatSync(source).isDirectory();
  const getAllListings = source =>
		fs.readdirSync(source).map(name => join(source, name));
  let allContent = getAllListings(source);
  let assetsFolder = getAssetsFolder( allContent )
  let assetsContents = getAllListings( assetsFolder )
  let index = getIndex( assetsContents )
  
  let data = fs.readFileSync( index, 'utf-8');


  let color1 = "#01AC82"
  let color2 = "#0A6655"
  let color3 = "#F6F2ED"
  let color4 = "#F8F8F5"

  data = data.replace( /#01AC82/g, color1 );
  data = data.replace( /#0A6655/g, color2 );
  data = data.replace( /#F6F2ED/g, color3 );
  data = data.replace( /#F8F8F5/g, color4 );

  fs.writeFile( assetsFolder + "/index.css", data, () => { console.log("error") })
  console.log( data )
}

module.exports = {overwriteCSS}
