/*
var Animal = Backbone.Model.extend({
    walk: function() {
        console.log("Animal walking...");
    }
});

var Dog = Animal.extend();
var dog = new Dog();
dog.walk();
//walk method was not defined on the dog, but the code was inherited from the base model type
*/

/*
var Animal = Backbone.Model.extend({
    walk: function() {
        console.log("Animal walking...");
    }
});

var Dog = Animal.extend({
    walk: function() {
        console.log("Dog walking...")
    }
});
var dog = new Dog();
dog.walk();
//the walk method in the Dog class overrode the walk method in the base class
*/

/*
var Animal = Backbone.Model.extend({
    walk: function() {
        console.log("Animal walking...");
    }
});

var Dog = Animal.extend({
    walk: function() {
        Animal.prototype.walk.apply(this);
        
        console.log("Dog walking...")
    }
});
var dog = new Dog();
dog.walk();
*/

//if you want to access the walk method from the base model, you must first access the prototype base, and then call upon the attribute with the this statement

//use extend method to further extend the inheritance hierarchy
//all base classes will be inherited by the child classes