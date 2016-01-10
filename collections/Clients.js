Clients = new Mongo.Collection('clients');

ClientSchema = new SimpleSchema({
	name : {
		type: String,
	},
});


Clients.attachSchema( ClientSchema );