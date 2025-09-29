
const toggleBtn = document.getElementById("toggle-btn");
const sidebar = document.getElementById("navbar");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});
