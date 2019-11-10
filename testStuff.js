const { join } = require('path');
const fs = require('fs');
const { getStatement } = require('./src/crawler/getStatement');
const { getProjects } = require('./src/crawler/getProjects');

function doThing(){
  let source = join(  __dirname, 'content');
  let projects = getProjects( source )
}

doThing();
