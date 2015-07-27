//this wraps the js file inside of a require.js module
//the define function comes with require.js and defines what require.js module we'll be using
//the define function takes 2 arguements
//the first [] takes an array of dependencies
//the second function(){} is a factory function called when all the dependencies are loaded
define([
        //these are module identifiers
        //at minimum you always need underscore and backbone
        //in function(), the _ represents 'underscore', and Backbone represents 'backbone'
        'underscore',
        'backbone'], function(_, Backbone){
        
        //this defines the Backbone.Model
        var Song = Backbone.Model.extend();
        
        return Song;
});


