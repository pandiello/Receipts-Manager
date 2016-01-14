Template.addCliente.events({
	"submit .navbar-form" : function(event){

		event.preventDefault();

			Clientes.insert({
				nombre: event.target.nombre.value,
				direccion: event.target.direccion.value,
			});

			Session.set('showCliente', !Session.get('showCliente'));
	},

	"click .close" : function(event){
		Session.set('showCliente', !Session.get('showCliente'));
	}
});