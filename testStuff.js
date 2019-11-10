const { join } = require('path');
const fs = require('fs');
const { getStatement } = require('./src/crawler/getStatement');

function doThing(){
  let source = join(  __dirname, 'content');
  let statement = getStatement( source )
}

doThing();
