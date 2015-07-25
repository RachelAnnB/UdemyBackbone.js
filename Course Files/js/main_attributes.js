// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

/*
var Song = Backbone.Model.extend( {
    initialize: function() {
        console.log("A new song has been created.");
    }
});

var song = new Song();
song.set("title", "Blue in Green");
song.set({
    artist: "Miles Davis",
    publishYear: 1959
})
*/


/*
var Song = Backbone.Model.extend();
var song = new Song( {
    title: "Blue in Green",
    artist: "Miles Davis"
    publishYear: 1959
});
*/


/*
var Song = Backbone.Model.extend();
var song = new Song( {
    title: "Blue in Green",
    artist: "Miles Davis",
    publishYear: 1959
});
*/


/*
//when defining the model, you can define default values for the attributes
//default values will be used, if the attributes are not already defined in the model
var Song = Backbone.Model.extend(
    defaults: {
        genre: "Jazz"
    });
var song = new Song( {
    title: "Blue in Green",
    artist: "Miles Davis",
    publishYear: 1959
});
*/


//NOTE: all of the below controls are used in the Console in Google Chrome Developer Tools
//use set method to set an attribute
//use get method to read an attribute
//use has method to ask an element if it has an attribute
//use unset method to remove an attribute
//use clear method to all attributes of a model