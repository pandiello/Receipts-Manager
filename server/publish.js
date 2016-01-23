//Search package configuration-----------------------------------------

SearchSource.defineSource('clientess', function(searchText, options) {
  console.log(searchText);

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
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
function buildRegExp(searchText) {
  var words = searchText.trim().split(/[ \-\:]+/);
  var exps = _.map(words, function(word) {
    return "(?=.*" + word + ")";
  });
  var fullExp = exps.join('') + ".+";
  return new RegExp(fullExp, "i");
}