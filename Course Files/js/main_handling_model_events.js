var Song = Backbone.Model.extend({
        defaults: {
                listeners: 0
        }
});

//all backbone models publish a change event when 1 of their attributes are changed

/*
var SongView = Backbone.View.extend({
        initialize: function(){
                this.model.on("change", this.render, this);
        },
//you don't have to always call the render effect when you change something
//especially if your using some other method to notify the user of the change (highlight, pop-up message, etc.)
//if thats the case, you can use an onModelChange event seen below

*/

var SongView = Backbone.View.extend({
        initialize: function(){
                this.model.on("change", this.onModelChange, this);
        },
        
        onModelChange: function(){
                this.$el.addClass("someClass");
        },
        
        render: function() {
                this.$el.html(this.model.get("title") + " - Listeners: " + this.model.get("listeners"));
                return this;
        }
});

var song = new Song ({ title: "Blue in Green" });

var songView = new SongView({ el: "#container", model: song });
songView.render();