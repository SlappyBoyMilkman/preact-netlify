const { join } = require('path');
const fs = require('fs');
const { getStatement } = require('./src/crawler/getStatement');
const { getAbout } = require('./src/crawler/getAbout');
const { getProjects } = require('./src/crawler/getProjects');
const { getContact } = require('./src/crawler/getContact');

function doThing(){
  let source = join(  __dirname, 'content');
  let projects = getProjects( source )
  let statement = getStatement( source )
  let about = getAbout( source )
  let contact = getContact( source )
}

doThing();
