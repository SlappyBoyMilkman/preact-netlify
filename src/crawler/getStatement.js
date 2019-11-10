const fs = require('fs');
const { join } = require('path');


function getDetails(data) {
	const matadata = data.match(/---(.*\n)*---/);
  metadata = matadata.map(
    ( m, index ) => {
      return m.match(/(.*):(.*)/g).reduce((obj, detail) => {
    		const value = detail.substr(detail.indexOf(':') + 2);
    		const key = detail.substr(0, detail.indexOf(':'));
    		obj[key] = value;
    		return obj;
    	}, {});
    }
  )

  console.log( matadata )
  return matadata;
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
    details: getDetails( data )["input"].replace( "---\ntitle: ", "" )
  }

  return obj
}


module.exports = {
	getStatement
};
