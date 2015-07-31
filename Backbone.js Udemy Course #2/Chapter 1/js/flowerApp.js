//These are the Model Instances
var redRoses = new app.singleFlower({
  name: "Red Roses",
  price: 39.95,
  color: "Red",
  img: "images/redRoses.jpg",
  link: "redRose"
});

var rainbowRoses = new app.singleFlower({
  name: "Rainbow Roses",
  price: 29.95,
  color: "orange",
  link: "rainbowRose"
});

var heirloomRoses = new app.singleFlower({
  name: "Heirloom roses",
  price: 19.95,
  img: "images/heirloomRoses.jpg",
  link: "heirloomRose"
});

var flowerGroup = new app.FlowersCollection([
  redRoses, rainbowRoses, heirloomRoses
]);

//COMMENTED THIS OUT DURING LECTURE 16
//flowerGroup.add(heirloomRoses);
//flowerGroup.remove(redRoses);
//console.log(flowerGroup.toJSON());

var flowerGroupView = new app.allFlowersView ({ collection: flowerGroup });
$("#allFlowers").html(flowerGroupView.render().el);