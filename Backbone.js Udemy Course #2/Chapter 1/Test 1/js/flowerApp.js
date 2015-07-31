//These are the Model Instances

var tantalizingTulips = new app.singleFlower({
  name: "Tantalizing Tulips",
  price: 25.50,
  color: "white"
});

var fleurDisLis = new app.singleFlower({
  name: "Fleur dis  lis",
  price: 35.50,
  color: "turquoise"
});

var flowerGroup = new app.EuropeanFlower([
  tantalizingTulips, fleurDisLis
]);

tantalizingTulips.set("origincountry", "Holland");

console.log(flowerGroup.toJSON());