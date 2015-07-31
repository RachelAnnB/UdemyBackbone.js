//Namespace our flowerApp
//BACKBONE COLLECTION for all Flowers
var app = app || {};

app.FlowersCollection = Backbone.Collection.extend({
  model: app.singleFlower
});