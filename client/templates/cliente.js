Template.cliente.events({
	'click #mostrarRecibos': function(){
			Clientes.update(
				{"_id": this._id},
				{ $set: { "mostrarRecibos" : true}});
			
	},
	'click #ocultarRecibos': function(){
		Clientes.update(
			{"_id": this._id},
			{ $set: { "mostrarRecibos" : false}});
		
	}
})