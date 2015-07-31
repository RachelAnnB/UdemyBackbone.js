//Namespace our flowerApp
//BACKBONE COLLECTION for all Flowers
var app = app || {};

app.EuropeanFlower = Backbone.Collection.extend({
  model: app.singleFlower
});