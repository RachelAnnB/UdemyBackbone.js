//THIS IS METHOD ONE//
/*
//trigger method used to publish events, "walking" is the name of the event
var person = {
        name: "Mosh",
        
        walk: function(){
                this.trigger("walking",{
                        speed: 1,
                        startTime: "08:00"
                });
        }
};

_.extend(person, Backbone.Events);

//the first arguement is the name of the event that we would like to subscribe to, which is "walking"
//the second arguement is the call back function
//use the on method to subscribe to an arguement
person.on("walking", function(e){
        console.log("Person is walking");
        console.log("Event Args", e);
});

person.off("walking");

person.walk();
*/


//THIS IS METHOD TWO//
//trigger method used to publish events, "walking" is the name of the event
var person = {
        name: "Mosh",
        
        walk: function(){
                this.trigger("walking",{
                        speed: 1,
                        startTime: "08:00"
                });
        }
};

_.extend(person, Backbone.Events);

//the first arguement is the name of the event that we would like to subscribe to, which is "walking"
//the second arguement is the call back function
//the once method fires the function one time as the name implies
person.once("walking", function(e){
        console.log("Person is walking");
        console.log("Event Args", e);
});

//use the off method to unsubscribe to events
//person.off("walking");

person.walk();
person.walk();