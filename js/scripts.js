//Backend Logic
// function Pizza(size,topping,cost){
//   this.size = size
//   this.topping = topping
//   this.cost = cost
// }


//User Interface
$(function(){
  var pizzaSizeInput = $("#inputSize").val();
  var toppingInput = $("#inputTopping").val();

  $("#pizza-options").submit(function(event){
    event.preventDefault();
      console.log(pizzaSizeInput)
      console.log(toppingInput);
      $("ul").append("<li>" + pizzaSizeInput + "</li>" +"<li>" + toppingInput + "</li>" )

  });
// pizzaOrder = new Pizza(size,topping,cost)


});
