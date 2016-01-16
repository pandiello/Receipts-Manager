Template.recibos.helpers({
	recibos : function(){
		return Recibos.find({});
	},
	showAddRecibo : function(){
		return Session.get('showAddRecibo');
	}	
	
});

Template.recibos.events({
	"click .btn-info" : function(){
		Session.set('showAddRecibo', !Session.get('showAddRecibo'));
	}
	
});