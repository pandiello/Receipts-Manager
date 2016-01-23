var options = {
  keepHistory: 1000 * 60 * 5,
  localSearch: true
};
var fields = ['nombre', 'direccion'];

ClienteSearch = new SearchSource('clientess', fields, options);