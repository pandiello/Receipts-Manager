//Search package configuration-----------------------------------------
//-----------------------------------------------------------------------
SearchSource.defineSource('clientes', function(searchText, options) {
  var options = {sort: {isoScore: -1}, limit: 20};
  
  if(searchText) {
    var regExp = buildRegExp(searchText);
    var selector = {$or: [
      {nombre: regExp},
      {direccion: regExp}
    ]};
    
    return Clientes.find(selector, options).fetch();
  } else {
    return Clientes.find({}, options).fetch();
  }
});

function buildRegExp(searchText) {
  // this is a dumb implementation
  var parts = searchText.trim().split(/[ \-\:]+/);
  return new RegExp("(" + parts.join('|') + ")", "ig");
}
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------