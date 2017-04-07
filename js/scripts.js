//Backend Logic
function Pizza (pizzaSize,topping) {
  this.pizzaSize = pizzaSize;
  this.topping = topping;
}

Pizza.prototype.costCalculator = function(){

  var price = 0

  if (this.pizzaSize === "Small") {
    price = price + 10
  }
  else if (this.pizzaSize === "Medium") {
    price = price + 12
  }
  else if (this.pizzaSize === "Large") {
    price = price + 13
  }
  else {
    price = price + 14
  }

  if (this.topping === "Avocado") {
    price = price + 1
  }

  return price
}

//User Interface
$(function(){

  $("#pizza-form").submit(function(event){
    event.preventDefault();
    var pizzaSizeInput = $("#inputSize").val();
    var toppingInput = $("#inputTopping").val();

      var firstOrder = new Pizza(pizzaSize,topping);
      var pizzaPrice = firstOrder.costCalculator();
          console.log(pizzaPrice)
      $("ul").append("<li>" + pizzaSizeInput + "</li>" + "<li>" + toppingInput + "</li>" + "<li>" + pizzaPrice + "</li>" )




  });


});
