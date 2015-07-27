//this wraps the js file inside of a require.js module
define([
        'jquery',
        'underscore',
        'backbone',
        //at minimum you always need underscore and backbone
        //because the module is located inside the models folder, it must be prefixed with models
        //this is also relative to where main.js is located
        'models/song'], function($, _, Backbone, Song){
        
        //this defines the Backbone.View
        var SongView = Backbone.View.extend({
                render: function(){
                this.$el.html(this.model.get("title"));
                
                return this;
                }
        });

        return SongView;
});
