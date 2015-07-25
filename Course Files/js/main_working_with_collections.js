//this js file further explains the methods used in main_creating_collections.js

var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
    model: Song
});

var songs = new Songs();

songs.add(new Song({ title: "Song 1", genre: "Jazz", downloads: 110}), { at: 0 });
//add technique is useful if you want to add a new model to the beginning of a collection

songs.push(new Song({ title: "Song 2", genre: "Jazz", downloads: 90}));
//push technique is useful if you want to add a new model to the end of a collection

//add and push methods work exactly the same, but
//the add method specifies the index in which you would like to insert a model inside a collection

/*
var lastSong = song.pop();
//pop method removes and returns the model at the end of a collection
*/

var jazzSongs = songs.where({ genre: "Jazz" });

var firstJazzSong = songs.findWhere({ genre: "Jazz" });

console.log("Jazz Songs", jazzSongs);
console.log("First Jazz Song", firstJazzSong);

var filteredSongs = songs.where({ genre: "Jazz", title: "Song 2" });
console.log("Filtered Songs", filteredSongs);
//both the where and findWhere methods take a hash of attributes that you would like to filter the collection by
//they check the entered attributes against the attributes of the methods in the collection for equality
//where method returns an array
//findWhere method returns only the first instance

var topDownloads = songs.filter(function(song){
    return song.get("downloads") > 100;
});
console.log("Top Downloads", topDownloads);
//filter method is more specific than the where and findWhere methods
//the filter methods job is to check all the models in the collection for the given criteria

songs.each(function(song){
    console.log(song);
});