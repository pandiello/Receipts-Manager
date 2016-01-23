Template.searchResult.helpers({

  getPackages: function() {
    return ClienteSearch.getData({
        transform: function(matchText, regExp) {
        return matchText.replace(regExp, "<b>$&</b>")
      },
      sort: {isoScore: -1}
    });
  },
  
  isLoading: function() {
      return ClienteSearch.getStatus().loading;
  },
  
});

Template.searchResult.events({
  'click a' : function(event){
      Session.set('clienteSelected',this);
      Session.set('showSearch',false);
  },

});


Template.searchBox.events({
  "keyup #search-box": _.throttle(function(e) {
    var text = $(e.target).val().trim();
    ClienteSearch.search(text);
  }, 200) 
})

