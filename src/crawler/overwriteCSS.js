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

function getColorsFolder( src ){
	let newSrc = src.filter( ( folder ) => {
		return (folder.indexOf( "/sitecolors" ) !== - 1)
	});
	return newSrc[0]
}

function getColors( source ){
	const isDirectory = source => fs.lstatSync(source).isDirectory();
  const isFile = source => !fs.lstatSync(source).isDirectory();
  const getAllListings = source =>
		fs.readdirSync(source).map(name => join(source, name));
  let allContent = getAllListings(source);
  let colorsFolder = getColorsFolder( allContent )
  let colorsFile = getAllListings( colorsFolder )[0]
  let data = fs.readFileSync( colorsFile, 'utf-8');
  return data
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


function overwriteCSS( content, assets ){
  const isDirectory = assets => fs.lstatSync(assets).isDirectory();
  const isFile = assets => !fs.lstatSync(assets).isDirectory();
  const getAllListings = assets =>
		fs.readdirSync(assets).map(name => join(assets, name));
  let allAssets = getAllListings( assets );
  let assetsFolder = getAssetsFolder( allAssets )
  let assetsContents = getAllListings( assetsFolder )
  let index = getIndex( assetsContents )

	let colors = getColors( content );

  let data = fs.readFileSync( index, 'utf-8');


  let color1 = sliceGood( colors, "color1: ", "\n" ).replace("'","").replace("'","");
  let color2 = sliceGood( colors, "color2: ", "\n" ).replace("'","").replace("'","");
  let color3 = sliceGood( colors, "color3: ", "\n" ).replace("'","").replace("'","");
  let color4 = sliceGood( colors, "color4: ", "\n" ).replace("'","").replace("'","");

  console.log( color1, color2, color3, color4 )

  data = data.replace( /#01AC82/g, color1 );
  data = data.replace( /#0A6655/g, color2 );
  data = data.replace( /#F6F2ED/g, color3 );
  data = data.replace( /#F8F8F5/g, color4 );

  fs.writeFile( assetsFolder + "/index.css", data, () => { console.log("error") })
  console.log( data )
}

module.exports = {overwriteCSS}
