//Backend Logic
function Pizza (pizzaSize,topping,topping2) {
  this.pizzaSize = pizzaSize;
  this.topping = topping;
  this.topping2 = topping2;
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
    price = price + 2
  }
  else{
    price = price + 1
  }
  if (this.topping2 === "Avocado") {
    price = price + 2
  }
  else{
    price = price + 1
  }

  return price
}

//User Interface
$(function(){

  $("#pizza-form").submit(function(event){
    event.preventDefault();
    var pizzaSizeInput = $("input[name=sizeChoice]:checked").val()
    var toppingInput1 = $("#topping1").val();
    var toppingInput2 = $("#topping2").val();


      var firstOrder = new Pizza(pizzaSizeInput,toppingInput1,toppingInput2);
      var pizzaPrice = firstOrder.costCalculator();
      $(".orderConfirmation").show();

      $("#size-display").text(pizzaSizeInput);
      $("#topping1-display").text (toppingInput1);
      $("#topping2-display").text(toppingInput2); $("#price-display").text(pizzaPrice);

  });

  $("#confirmation-button").click(function(){
    alert("Your Pizza is on its way! It should arrive in 40-60min")
  })


});
