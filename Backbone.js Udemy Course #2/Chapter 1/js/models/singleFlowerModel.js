// Namespace our app
//BACKBONE MODEL
var app = app || {};

app.singleFlower = Backbone.Model.extend({

  defaults: {
    color: "pink",
    img: "images/placeholder.png"
  },

//COMMENTED THIS OUT DURING LECTURE 16//
//  initialize: function() {
//    console.log("A model instance named " + this.get("name") +  " has been created and it costs " + this.get("price"));
//    
//    this.on('change', function(){
//      console.log("Something in our model has changed.");
//    });
//    
//    this.on('change:price', function(){
//      console.log("The price for the " + this.get("name") + " model just changed to $" + this.get("price") + " dollars");
//    });
//  },

});

/*COMMENTED OUT DURING LECTURE 17
searchView = Backbone.View.extend({
  initialize: function() {
    alert("Alerts suck.");
  }
});

//The initialize funciton is always called when instantiate a Backbone View
//Consider it the constructor of the class.
var searchView = new SearchView();
*/