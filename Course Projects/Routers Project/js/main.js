//These Backbone Views represent all the pages on the website
var CarsView = Backbone.View.extend({
    render: function(){
        this.$el.html("CARS VIEW");
        
        return this;
    }
});

var BoatsView = Backbone.View.extend({
    render: function(){
        this.$el.html("BOATS VIEW");
        
        return this;
    }
});

var MotorcyclesView = Backbone.View.extend({
    render: function(){
        this.$el.html("MOTORCYCLES VIEW");
        
        return this;
    }
});

var ObjectView = Backbone.View.extend({
    render: function(){
        this.$el.html("OBJECT VIEW");
        
        return this;
    }
});

//This is the Backbone Router
var AppRouter = Backbone.Router.extend({
    //these are defining the routes
    routes: {
        //route pattern plus parameter
        "cars": "viewCars",
        "cars/:carId": "viewCarById",
        
        //route pattern plus parameter
        "boats": "viewBoats",
        "boats/:boatId": "viewBoatById",
        
        //route pattern plus parameter
        "motorcycles": "viewMotorcycles",
        "motorcycles/:motorcycleId": "viewMotorcycleById",
        
        //default handler route plus parameter
        //# stands for a splat part
        "#other": "defaultRoute",
        "other/:defaultPageId": "viewDefaultPageById",
    },
    
    //this is the route handler for viewCars
    viewCars: function(){
        var view = new CarsView({ el: "#container" });
        view.render();
    },
    //this is the route handler for viewCarById
    viewCarById: function(carId){
    },
    
    //this is the route handler for viewBoats
    viewBoats: function(){
        var view = new BoatsView({ el: "#container" });
        view.render();
    },
    //this is the route handler for viewBoatById
    viewBoatById: function(boatId){
    },
    
    //this is the route handler for viewMotorcycles
    viewMotorcycles: function(){
        var view = new MotorcyclesView({ el: "#container" });
        view.render();
    },
    //this is the route handler for viewMotorcycleById
    viewMotorcycleById: function(motorcycleId){
    },
    
    //this is the route handler for defaultRoute
    defaultRoute: function(){
        var view = new ObjectView({ el: "#container" });
        view.render();
    },
    //this is the route handler for viewDefaultPageById
    viewDefaultPageById: function(defaultPageId){
    },
    
});

var router = new AppRouter();
//this tells Backbone to start listing changes in the browsers address
Backbone.history.start();

//this is the View for the Navigation Bar
var NavigationView = Backbone.View.extend({
    events: {
        "click": "onClick"
    },
    
    onClick: function(e){
        
        //the target method gets the clicked li
        var $li = $(e.target);
        
        router.navigate($li.attr("data-url"), { trigger: true });
    }
});

var navigationView = new NavigationView({ el: "#nav" });
