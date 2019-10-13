
// Mobile navigation button click event
const menuButton = document.querySelector("#menu-button");
const menuClose = document.querySelector("#menu-close");
const menu = document.querySelector("#menu");

menuButton.addEventListener("click", function(){
 menu.className = "menu-open";
})

menuClose.addEventListener("click", function(){
  menu.className = "menu-close";
})