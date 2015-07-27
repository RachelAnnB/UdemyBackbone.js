//this is the Spec (test) for calculator.js
//jasmine specs are grouped by suites
//aim to have short and organized specs so you don't confuse yourself

//this is a suite, and we are using Jasmine's describe function
describe("Calculator", function(){
  var calculator;
  
  //the first 2 specs are used for setup
  //the beforeEach method is run before each spec
  //in this case, it takes care of initializing our calculator object
  beforeEach(function(){
    calculator = new Calculator();
  });
  
  //the afterEach method is run after each spec
//  afterEach(function(){
//    
//  };
  
  describe("add", function(){

    //this is a spec
    //call the suite by using Jasmines it function
    //similar to the describe function, it gets 2 arguments
    //first one is the name of the spec "should be able to add 2 number"
    //the second is the function that impliments that
    it("should be able to add 2 numbers.", function(){
      var result = calculator.add(2, 3);

      //this is an insertion, we write these by using the expect function
      //this function takes a value, that is the actual value, and is followed by a matcher function
      //toEqual is a matcher function
      expect(result).toEqual(5);
    });

    //this is a spec
    it("should throw an error if both arguments are not provided.", function(){
      expect(function(){
        calculator.add(1)
        //toThrow is a matcher function
      }).toThrow();
    });
    
    //say we want to mock out add method of our calculator object
    //this means when we call it, the code we have already written will not be executed
    //instead a mock function will be executed, which by default does nothing
    it("should be called with the right arguments.", function(){
      
      /*
      //first argument is the object - calculator
      //second argument is the method on the object we are spying/mocking
      //you can also set a return value on the mock function - returnValue(7)
      spyOn(calculator, "add").and.returnValue(7);
      
      var result = calculator.add(2, 5);
      
      //toBeUndefined another matcher function
      //expect(result).toBeUndefined();
      
      //changed the result so it does work
      expect(result).toEqual(7);
      
      //toHaveBeenCalled verifies that the add method was called earlier
      expect(calculator.add).toHaveBeenCalled();
      
      //toHaveBeenCalledWith verifies that the add method was called with the correct arguments
      expect(calculator.add).toHaveBeenCalledWith(2, 5);
      */
      
      //you can also make the mock spec throw an error
      spyOn(calculator, "add").and.throwError("someError");
      expect(function(){
        var result = calculator.add(2, 5);
      }).toThrowError("someError");
      
      
    });
    
  });
});