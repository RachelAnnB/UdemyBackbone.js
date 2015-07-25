var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
    model: Song
});

var songs = new Songs([
    new Song({ title: "Song 1" }),
    new Song({ title: "Song 2" }),
    new Song({ title: "Song 3" })
    ]);

songs.add(new Song({ title: "Song 4" }));

//add models to a collection with the add method
//length property returns the number of items in a collection
//the at method returns the model at a specific index
//the get method returns the model by its specified id or cid (client id)
//remove a model from a collection with the remove method