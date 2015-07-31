var ohio = new app.singleFlower({
  state: "Ohio",
  flower: "Carnation"
});

var florida = new app.singleFlower({
  state: "Florida", 
  flower: "Orange Blossom"
});

var flowerGroup = new app.FlowersCollection([
  ohio, florida
]);

var flowerGroupView = new app.allFlowersView({ collection: flowerGroup});

$("#stateFlowers").html(flowerGroupView.render().el);

