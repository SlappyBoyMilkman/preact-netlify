
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

function getFolder( src, folderName ){
	let newSrc = src.filter( ( folder ) => {
		return (folder.indexOf( folderName ) !== - 1)
	});
	return newSrc[0]
}
