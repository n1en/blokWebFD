
var addToCartButtons = document.querySelectorAll("button.shop");


addToCartButtons[0].addEventListener("click", updateShoppingCart);
addToCartButtons[1].addEventListener("click", updateShoppingCart);
addToCartButtons[2].addEventListener("click", updateShoppingCart);
addToCartButtons[3].addEventListener("click", updateShoppingCart);


function updateShoppingCart() {
  let shoppingCartAmount = document.querySelector(".shopping-cart span");
  let currentAmount = shoppingCartAmount.innerHTML;
  currentAmount = parseInt(currentAmount);
  let newAmount = currentAmount + 1;
  shoppingCartAmount.innerHTML = newAmount;
}