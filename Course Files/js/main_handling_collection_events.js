// this code is all from the main_passing_data_to_views.js

var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
    model: Song
})

var SongView = Backbone.View.extend({
    tagName: "li",
    
    render: function(){
        this.$el.html(this.model.get("title"));
        this.$el.attr("id", this.model.id);
        
        return this;
    }
});

//to register evenst, use the .on handler to register events for them


var SongsView = Backbone.View.extend({
    
    tagName: "ul",
    
    initialize: function(){
        this.model.on("add", this.onSongAdded, this);
        this.model.on("remove", this.onSongRemoved, this);
    },
    
    onSongAdded: function(song){
        var songView = new SongView({ model: song});
        
        this.$el.append(songView.render().$el);
    },

/*
//take baby steps, first use this to make sure your code is working
    onSongRemoved: function(){
        console.log("Song Removed");
    },

//when you know your code is working, use this
    onSongRemoved: function(song){
        this.$el.find("li#" + song.id).remove();
    },
*/
    
    onSongRemoved: function(song){
        //this.$el.find("li#" + song.id).remove();
        //below is the shorter way to write the above code
        
        this.$("li#" + song.id).remove();
    },
    
    render: function(){
        var self = this;
        
        this.model.each(function(song){
            var songView = new SongView({ model: song });
            self.$el.append(songView.render().$el);
        });
    }
});

var songs = new Songs ([
    new Song({ id: 1, title: "Blue in Green" }),
    new Song({ id: 2, title: "So What" }),
    new Song({ id: 3, title: "All Blues" })
]);

var songsView = new SongsView({ el: "#songs", model: songs })
songsView.render();



//Iterate means to repeat