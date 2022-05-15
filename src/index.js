let burguerMenu = document.querySelector(".burguerFlex")
burguerMenu.addEventListener("click", crossLine)

function crossLine() {
  this.classList.toggle("menu");
}