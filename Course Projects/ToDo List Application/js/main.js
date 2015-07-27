
$(document).ready(function(){
    //here is our collection
    var todoItems = new TodoItems();
    todoItems.fetch();
    
    //here is our view
    var todoItemsView = new TodoItemsView({ model: todoItems });
    $("body").append(todoItemsView.render().$el);
    
});