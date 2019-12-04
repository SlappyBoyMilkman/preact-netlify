const { join } = require('path');
const fs = require('fs');
const { getStatement } = require('./src/crawler/getStatement');
const { getAbout } = require('./src/crawler/getAbout');
const { getProjects } = require('./src/crawler/getProjects');
const { getContact } = require('./src/crawler/getContact');
const { overwriteCSS } = require("./src/crawler/overwriteCSS.js")

function doThing(){
  let source = join(  __dirname, 'content');
  let projects = getProjects( source )
  let statement = getStatement( source )
  let about = getAbout( source )
  let contact = getContact( source )
  let assets = join(  __dirname, 'src');
  let thing = overwriteCSS( source, assets )
}

doThing();
