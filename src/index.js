function crossLine() {
  this.classList.toggle("menu");
}
let burguerMenu = document.querySelector(".burguerFlex");

burguerMenu.addEventListener("click", crossLine);