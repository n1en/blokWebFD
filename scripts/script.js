var menu = document.querySelector("ul")
var knop = document.querySelector("button")
var xIcoon = document.querySelector(".xIcoon")
var menuIcon = document.querySelector(".menuIcon")
// variable gemaakt van elementen

knop.addEventListener("click", toggleMenu)
// door deze eventlistenener / toggleMenu, is het wanneer je erop klikt de volgende stap wordt toegepast

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

var menuLijst = document.querySelectorAll("li")

menuLijst.forEach(
  function (menuLink) {
    menuLink.addEventListener("click", toggleMenu)
  }
)
// hierdoor gaat het menu ook weg, de lijst 

