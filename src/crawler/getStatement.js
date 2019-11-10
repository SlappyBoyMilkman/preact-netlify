const fs = require('fs');
const { join } = require('path');


function getDetails(data) {
  let metadata = data.split( "---" )
  return metadata;
}

function getStatement( source ){
  const isDirectory = source => fs.lstatSync(source).isDirectory();
  const isFile = source => !fs.lstatSync(source).isDirectory();
  const getAllListings = source =>
		fs.readdirSync(source).map(name => join(source, name));
  let allContent = getAllListings(source);
  let statementFolder = allContent[3];
  let statementContents = getAllListings( statementFolder )
  const data = fs.readFileSync( statementContents[0], 'utf-8');
  let obj = {
    id: statementContents[0].substr(statementContents[0].lastIndexOf('/') + 1),
    title: getDetails( data )[1].replace( "title: ", "" ).replace("\n", ""),
    details: getDetails( data )[2]
  }
  return obj
}


module.exports = {
	getStatement
};
