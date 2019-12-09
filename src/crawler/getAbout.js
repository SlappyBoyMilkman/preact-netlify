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

function getInternships( listings ){
  return listings.map(
    ( listing ) => {
      let data = fs.readFileSync( listing, 'utf-8');
      while( data.indexOf("---\n") !== -1 ){
        data = data.replace( "---\n", "" )
      }
      let title = sliceGood( data, "title: ", "\n" )
      let company = sliceGood( data, "company: ", "\n" )
 			company = company.slice( 1, company.length - 1 );
      let dates = slicePre( data, "dates: " )
      return ({
        title: title,
        company: company,
        dates: dates
      })
    }
  )
}

function getAbout( source ){
  const isDirectory = source => fs.lstatSync(source).isDirectory();
  const isFile = source => !fs.lstatSync(source).isDirectory();
  const getAllListings = source =>
    fs.readdirSync(source).map(name => join(source, name));
  let allContent = getAllListings(source);
  let statementFolder = getFolder( allContent, "/experience" )
  let statementContents = getAllListings( statementFolder )
  const data = fs.readFileSync( statementContents[0], 'utf-8');
  let title = sliceGood( data, "title: ", "\n---" )
  let experience = slicePre( data, "title: " )
  experience = slicePre( experience, "---\n" )
  return { experience: experience, title: title }
}



module.exports = {
  getAbout
}
