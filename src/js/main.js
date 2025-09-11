const burger = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");

function toggleMenu() {
  menu.classList.toggle("open");
}

burger.addEventListener("click", toggleMenu);
