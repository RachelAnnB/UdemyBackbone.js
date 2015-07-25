
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
