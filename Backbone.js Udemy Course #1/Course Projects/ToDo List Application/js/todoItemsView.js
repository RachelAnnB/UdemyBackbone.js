//this is the View for the todoItems Collection
var TodoItemsView = Backbone.View.extend({
    id: "todoItemsContainer",
    
    //this reinforces that an error will be thrown if the Model is not defined
    initialize: function(options){
        if (!(options && options.model))
            throw new Error("model is not specified.");
        
        //this is the initialize method for the Add button
        this.model.on("add", this.onAddTodoItem, this);
        //this is the initialize method for the Delete button
        this.model.on("remove", this.onRemoveTodoItem, this);
    },
    
    //when the Collection fires a Remove event, this function will be executed
    //this will remove the li item from the DOM
    onRemoveTodoItem: function(todoItem){
        this.$("li#" + todoItem.id).remove();
    },
    
    //this handles the Collection events
    //when the Collection fires an Add event, this function will be executed
    onAddTodoItem: function(todoItem){
        //this renders the new added list item
        var view = new TodoItemView({ model: todoItem });
        this.$("#todoItems").append(view.render().$el);
    },
    
    //this handles the DOM events for when the Add button is fired
    events: {
        //this enables a keypress event
        "keypress #newTodoItem": "onKeyPress"
    },
    
    onKeyPress: function(e){
        //each keyboard key has a keyCode, 13 represents the Enter button
        if (e.keyCode == 13){
            //this is a cache object, it helps with writing cleaner code
            //its also better to prefix JQuery objects with the $ sign, to seperate them from Javascript/Backbone                   objects
            var $textBox = this.$("#newTodoItem");
        
            //the first if method prevents a new item to be added if the text box is empty
            if($textBox.val()){
                //this creates a new todoItem that is then added to the Collection
                var todoItem = new TodoItem({ title: $textBox.val() });
                //this method adds and saves textBox changes to the server
                this.model.create(todoItem);
            
                //this clears the text box after the new item is added
                $textBox.val("");
            }    
        }
    },    
    
    //this render method iterates the Collection, and wraps each Model in a todoItem View
    render: function(){
        var template = $("#todoItemsTemplate").html();
        var html = Mustache.render(template);
        this.$el.html(html);
        
        return this;
    }
});