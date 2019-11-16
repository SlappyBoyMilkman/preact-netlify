const { join } = require('path');
const fs = require('fs');
const { getStatement } = require('./src/crawler/getStatement');
const { getAbout } = require('./src/crawler/getAbout');
const { getProjects } = require('./src/crawler/getProjects');

function doThing(){
  let source = join(  __dirname, 'content');
  let projects = getProjects( source )
  let statement = getStatement( source )
  let about = getAbout( source )
  // console.log( about )
}

doThing();
