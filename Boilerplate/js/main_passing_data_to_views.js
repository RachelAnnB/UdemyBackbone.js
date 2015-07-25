// this is commented out so the main_handling_DOM_events.js can work properly
//var Song = Backbone.Model.extend();
//
//var Songs = Backbone.Collection.extend({
//    model: Song
//})
//
//var SongView = Backbone.View.extend({
//    tagName: "li",
//    
//    render: function(){
//        this.$el.html(this.model.get("title"));
//        
//        return this;
//    }
//});
// this is commented out so the main_handling_DOM_events.js can work properly


//the Collection Views are responsible for delegating the render to the Model Views
//they Iterate the Collection and create a child view for each Model inside the Collection

//this.model refers to the collection passed to the View
//use the each method to Iterate the collection
//at each Iteration the funcion(song) is executed with the (song) referring to the current song
//that then gets put into a new song, rendered, and appended to the DOM element of the SongsView
//that then gets put into a new song, rendered, and appended to the DOM element of the SongsView

var SongsView = Backbone.View.extend({
    render: function(){
        var self = this;
        
        this.model.each(function(song){
            var songView = new SongView({ model: song });
            self.$el.append(songView.render().$el);
        });
    }
});

var songs = new Songs ([
    new Song({ title: "Blue in Green" }),
    new Song({ title: "So What" }),
    new Song({ title: "All Blues" })
]);

var songsView = new SongsView({ el: "#songs", model: songs })
songsView.render();



//Iterate means to repeat