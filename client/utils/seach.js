var options = {
  keepHistory: 1000 * 60 * 5,
  localSearch: true
};
var fields = ['nombre', 'direccion'];

CilentesSeach = new SearchSource('clientes', fields, options);