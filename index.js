const menu = document.querySelector("#menu");
const bar = document.querySelectorAll(".bar");

menu.addEventListener("click", () => {
  bar.forEach((bar) => {
    if (bar.classList.contains("animation__open")) {
      bar.classList.remove("animation__open");
      bar.classList.add("animation__close");
    } else {
      bar.classList.remove("animation__close");
      bar.classList.add("animation__open");
    }
  });
});
