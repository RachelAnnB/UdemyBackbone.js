//this is the View for the todoItem Model
var TodoItemView = Backbone.View.extend({
    //this makes the following items appear in a lister, rather than a div
    tagName: "li",
    
    //if we forget to pass the Model to the View, an error will be thrown
    initialize: function(options){
        if (!(options && options.model))
            throw new Error("model is not specified.");
        
        //this refreshes the view when something is changed
        this.model.on("change", this.render, this);
    },
    
    //these are the events for the toggle checkbox & delete button
    events: {
        "click #toggle": "onClickToggle",
        "click #delete": "onClickDelete"
    },
    
    onClickDelete: function(){
        this.model.destroy();
    },
    
    onClickToggle: function(){
        //we simply call the toggle method, and let the Model decide how to update the state
        this.model.toggle();
        this.model.save();
    },
    
    render: function(){
        //this sets the li's id attribute to the model's id
        //templates go inside the li, so they can't be used to set ids or classNames of the li
        this.$el.attr("id", this.model.id);
        
        //if this model is completed, it applies a CSS class to the View's DOM element
        //toggleClass method adds or removes the completed class from this View's DOM element
        //second part, is a boolean switch that decides if the class should be added or not
        this.$el.toggleClass("completed", this.model.get("completed"));
        
        var template = $("#todoItemTemplate").html();
        var html =  Mustache.render(template, this.model.toJSON());
        this.$el.html(html);
        
        return this;
    }
});