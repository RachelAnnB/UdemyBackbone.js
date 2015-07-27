
var Calculator = function(){
  var add = function(a, b){
    if (!a || !b)
      throw new Error("The add mehtod expects two arguments.");
    
    return a + b;
  }
  
  return {
    add: add
  }
}