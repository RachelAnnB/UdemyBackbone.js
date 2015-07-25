/*
var SongView = Backbone.View.extend({
    render: function(){
        this.$el.html("Hello World");
        
        return this;
    }
});

var songView = new SongView();
songView.render();

$("#container").html(songView.$el);
//using jQuery selector to add the container

//every View has a DOM element at all times
//if you specify a DOM element that exitsts on the page the View attaches itself to it, otherwise the View will create a DOM element, this DOM element by default is an empty div
*/

var SongView = Backbone.View.extend({
    
    tagName: "span",
    className: "song",
    id: "1234",
    attributes: {
      "data-genre": "Jazz"
},
  
    render: function(){
        this.$el.html("Hello World");
        
        return this;
    }
});
//this is how you customize the DOM element that Backbone creates for the view
//using the tag, class, id, and attribute properties

var songView = new SongView();
//songView.render();


$("#container").html(songView.render().$el);
//this is another way to display the same above element