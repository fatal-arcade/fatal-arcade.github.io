
const navbar_button = document.getElementById("navbar-button");

const navbar = document.getElementById("navbar");

navbar_button.addEventListener("click", () => {
  navbar.classList.toggle("collapsed");
});
