//this is the Collection for the TodoItem Model
var TodoItems = Backbone.Collection.extend({
    model: TodoItem,
    
    url: "http://jsonplaceholder.typicode.com/todos",
});