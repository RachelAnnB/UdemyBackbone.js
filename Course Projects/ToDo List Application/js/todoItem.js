//this is the todoItem Model
var TodoItem = Backbone.Model.extend({
    defaults: {
        isCompleted: false
    },
    
    urlRoot: "http://jsonplaceholder.typicode.com/todos",
    
    //this way, if we don't include a description with the item, it won't be saved to the server
    validate: function(attrs){
        if (!attrs.title)
            return "Title is required.";
    },
    
    toggle: function(){
        //this sets the checkbox value to either true or false
        this.set("completed", !this.get("completed"));
    }
});