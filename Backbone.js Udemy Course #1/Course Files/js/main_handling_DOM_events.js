var Song = Backbone.Model.extend();


//to handle DOM events, we register handlers for them in the events hash{} of the View
//can use JQuery selectors to filter the elements that trigger the given event

var SongView = Backbone.View.extend({
        events: {
                "click": "onClick",
                "click .bookmark": "onClickBookmark",
        },
        
        onClick: function(){
                console.log("Listen Clicked");
        },
        
        onClickBookmark: function(e){
                e.stopPropagation();
                
                console.log("Bookmark Clicked");
        },
        
        render: function() {
                this.$el.html(this.model.get("title") + " <button>Listen</button> <button class='bookmark'>Bookmark</button>");
                
                return this;
        }
});

var song = new Song({ title: "Blue in Green" });

var songView = new SongView({ el: "#container", model: song });
songView.render();