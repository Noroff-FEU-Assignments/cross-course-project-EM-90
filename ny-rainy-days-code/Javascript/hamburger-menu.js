const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-categories");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
