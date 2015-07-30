//this wraps the js file inside of a require.js module
define([
        'underscore',
        'backbone',
        'models/song',
        'views/songView'], function(_, Backbone, Song, SongView){
        
        //the below pattern is called, Revealing Module Pattern
        
        //any function defined here has privacy, and is not visible from the outside
        //we can define any function has privacy
        var initialize = function(){
                var song = new Song ({ title: "Blue in Green" });

                var songView = new SongView({ el: "#container", model: song });
                songView.render();
        }
        
        //what we return at the end, are the functions we are exposing to the outside world as public
        //the second initialize in the return refers back to the first initialize function
        return {
                initialize: initialize
        };
});


