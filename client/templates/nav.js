Template.nav.helpers({
	'navActive' : function(item){
				if(item == Session.get('active')){
				return { class : "active"}
			}

	}

});

Template.nav.events({
	"click li" : function(event){

		Session.set("active",event.target.text)
	},
});