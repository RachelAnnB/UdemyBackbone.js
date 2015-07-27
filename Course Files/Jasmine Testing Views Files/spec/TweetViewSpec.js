//this is the suite
describe("TweetView", function(){
  var view;
  var model;
  
  //this is the setup spec
  beforeEach(function(){
    model = new Tweet();
    view = new TweetView({ model: model });
    view.render();
  });
  
  //this is the spec for the tagNAme
  it("tagName should be li.", function(){
    expect(view.tagName).toEqual("li");
  });
  
  //this is the spec for the className
  it("className should be tweet.", function(){
    expect(view.className).toEqual("tweet");
  });
  
  //this is the spec for the change method
  it("should refresh when model state changes.", function(){
    model.set("body", "UPDATED");
    expect(view.$el).toContainText("UPDATED");
  });
  
  
  //this is the suite for the onClickDelete method
  describe("when clicking delete", function(){
    //this is the spec for the confirmation argument
    it("should display a confirmation box.", function(){
      spyOn(window, "confirm");
      view.$el.find("#delete").click();
      expect(window.confirm).toHaveBeenCalled();
    });
    
    //this is the spec for the destroy method
    it("should destroy the model if the user confirms.", function(){
      spyOn(window, "confirm").and.returnValue(true);
      spyOn(model, "destroy");
      view.$el.find("#delete").click();
      expect(model.destroy).toHaveBeenCalled();
    });
  });
  
  
  //this is the suite for the onClickExpand method
  describe("when clicking expand", function(){
    //this is the spec for the success method
    it("should load the details if successful.", function(){
      spyOn(model, "fetch").and.callFake(function(options){
          var tweet = {
            retweets: 10,
            favorites: 5
          };
        model.set(tweet);
        options.success();
      });
      
      view.$el.find("#expand").click();
      expect(view.$el.find(".details")).toBeDefined();
      expect(view.$el.find(".details")).toContainText("10 retweets");
    });
  });
  
  
});