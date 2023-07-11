const searchButton = document.getElementById("day-7__search");
const searchInput = document.getElementById("day-7__input");

searchButton.addEventListener("click", () => {
  searchInput.classList.toggle("search-open");
});
console.log(searchButton);
console.log(searchInput);
