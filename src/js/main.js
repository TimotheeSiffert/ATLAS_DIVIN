const burger = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");

function toggleMenu() {
  menu.classList.toggle("open");
}

burger.addEventListener("click", toggleMenu);

const darkModeButton = document.querySelector(".toggle-button-dark");
const lightModeButton = document.querySelector(".toggle-button-light");

function toggleDarkModeBtn() {
  document.querySelector("html").setAttribute("data-theme", "dark");
}

darkModeButton.addEventListener("click", toggleDarkModeBtn);

function toggleLightModeBtn() {
  document.querySelector("html").setAttribute("data-theme", "light");
}

lightModeButton.addEventListener("click", toggleLightModeBtn);
