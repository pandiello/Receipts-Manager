Template.addRecibo.helpers({
  showSearch: function(){
    return Session.get('showSearch');
  },
})

Template.addRecibo.events({
  'focus #search-box' : function(){
    Session.set('showSearch',true);
  },

  'submit #newRecibe' : function(event){


      event.preventDefault();
      
      var recibo = {
        id : event.target.inputId.value,
        tipo : event.target.gridRadios.value,
        fechaCobro : event.target.inputDateCobro.value,
        cantidad : event.target.inputCantidad.value
      };

      console.log(recibo);

      var cliente = Session.get('clienteSelected');

      Clientes.update({ _id: cliente._id},{ $push: { recibos: recibo }})
    

  },
 
});