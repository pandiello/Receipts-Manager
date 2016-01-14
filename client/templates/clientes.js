Template.clientes.helpers({

	showCliente : function(){
		return Session.get("showCliente");
	}
});


Template.clientes.events({

	"click .btn-info" : function(){
		Session.set('showCliente', !Session.get('showCliente'));
	}


});