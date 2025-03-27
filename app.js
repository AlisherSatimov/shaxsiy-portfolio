let navMenu = document.querySelector(".nav-menu");
let bars = document.querySelector(".fa-bars");
let xmark = document.querySelector(".fa-xmark");

bars.addEventListener("click", () => {
  navMenu.style.display = "flex";
});

xmark.addEventListener("click", () => {
  navMenu.style.display = "none";
});
