
var Vehicle = Backbone.Model.extend( {
    idAttribute: "registrationNumber",
    
    urlRoot: "/api/vehicles",
    
    start: function() {
        console.log("Vehicle started.");
    }
    
});

var Car = Vehicle.extend( {
    start: function() {
        console.log("Car with registration number XLI887 started.");
    },
    
    validate: function(attrs) {
        if (!attrs.registrationNumber)
            return "Registration number is required.";
    }
});

var car = new Car({ registrationNumber: "XLI887", color: "Blue" });
car.start();


var Vehicles = Backbone.Collection.extend({
    model: Vehicle,
});

var vehicles = new Vehicles([
    new Vehicle({ car: "Car 1", registrationNumber: "XLI887", color: "Blue"}),
    new Vehicle({ car: "Car 2", registrationNumber: "ZNP123", color: "Blue"}),
    new Vehicle({ car: "Car 3", registrationNumber: "XUV456", color: "Gray"})
]);

var blueCars = vehicles.where({ color: "Blue" });

console.log("Blue Cars", blueCars);

var carRegNumb = vehicles.findWhere({ registrationNumber: "XLI887" });

console.log("Car Reg Numb", carRegNumb);

vehicles.remove(carRegNumb);

vehicles.each(function(vehicle){
    console.log(vehicle);
});