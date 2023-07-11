const searchButton = document.getElementById("day-7__search");
const searchInput = document.getElementById("day-7__input");

searchButton.addEventListener("click", () => {
  searchInput.classList.toggle("search-open");
});

const day7Button = document.getElementById("dy-7__navbar");
const hiddenMenu = document.getElementById("dy-7__container");
const frontMenu = document.getElementById("dy-7__front");

day7Button.addEventListener("click", () => {
  hiddenMenu.classList.toggle("dy-7__hidden-open");
  frontMenu.classList.toggle("dy-7__front-open");
});
