//BACKBONE MODEL//
var Vehicle = Backbone.Model.extend( {
    idAttribute: "registrationNumber",
    
    urlRoot: "/api/vehicles",
    
    start: function() {
        console.log("Vehicle started.");
    }
    
});

//BACKBONE MODEL//
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

//BACKBONE COLLECTION//
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

//BACKBONE VIEW//
var VehicleView = Backbone.View.extend({
        tagName: "li",
        className: "vehicle",
        id: "registrationNumber",
        attributes: {
        "data-color": "Blue"
},
    
        render: function(){
        this.$el.html(this.model.get("car"));
        
        return this;
    },
    
    events: {
        "click": "onClick",
        "click .delete": "onClickDelete",
    },
    
    onClick: function(){
        console.log("Delete Clicked");
    },
    
    onClickDelete: function(e){
        console.log("Delete Clicked");
    },

    render: function(){
        this.$el.html(this.model.get("car") + " <button>Delete</button>");
          
        return this;
    }

});

//BACKBONE VIEW//
var VehiclesView = Backbone.View.extend({
	tagName: "ul",
    className: "vehicle",

	id: "registrationNumber",
    attributes: {
        "data-color": "Blue"
    },

	render: function(){

		this.collection.each(function(vehicleModel){
			var vehicleview = new VehicleView({
                model: vehicleModel 
            });

            this.$el.append(vehicleView.render().$el);
		}, this);

		return this;
	}
});

var vehicles = new Vehicles([
	new Vehicle({ car: "Car 1", registrationNumber: "XLI887" }),
	new Vehicle({ car: "Car 2", registrationNumber: "ZNP123" }),
	new Vehicle({ car: "Car 3", registrationNumber: "XUV456" })
]);

//var vehicleView = new VehicleView({ el: "#vehicles", model: car });
//vehicleView.render();

//var vehicleView = new VehicleView({
//    collection: vehicle
//});
//vehicleView.render();

var vehiclesView = new VehiclesView({
    collection: vehicles
});
vehiclesView.render();
