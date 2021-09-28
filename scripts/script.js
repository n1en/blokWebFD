var menu = document.querySelector("ul")
var knop = document.querySelector(".knopMenu")
var xIcoon = document.querySelector(".xIcoon")
var menuIcon = document.querySelector(".menuIcon")

var menuLijst = document.querySelectorAll("li")

var addToCartButtons = document.querySelectorAll("button.shop");

// variable gemaakt van elementen


function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    xIcoon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    xIcoon.style.display = "block";
    menuIcon.style.display = "none";
  }
}
// showMenu staat in CSS, niet in html
// hierdoor gaat menu naar binnen en naar buiten
// door style.display block/none veranderdt het icoon (laat zien en verbergt) 


menuLijst.forEach(
  function (menuLink) {
    menuLink.addEventListener("click", toggleMenu)
  }
)
// hierdoor gaat het menu ook weg, de lijst 


function updateShoppingCart() {
  let shoppingCartAmount = document.querySelector(".shopping-cart span");
  let currentAmount = shoppingCartAmount.innerHTML;
  currentAmount = parseInt(currentAmount);
  let newAmount = currentAmount + 1;
  shoppingCartAmount.innerHTML = newAmount;
}

addToCartButtons[0].addEventListener("click", updateShoppingCart);
addToCartButtons[1].addEventListener("click", updateShoppingCart);
addToCartButtons[2].addEventListener("click", updateShoppingCart);
addToCartButtons[3].addEventListener("click", updateShoppingCart);


knop.addEventListener("click", toggleMenu)
// door deze eventlistenener / toggleMenu, is het wanneer je erop klikt de volgende stap wordt toegepast
