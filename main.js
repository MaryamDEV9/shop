const toggleBtn = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
  navMenu.classList.toggle("flex");
  navMenu.classList.toggle("flex-col");
  navMenu.classList.toggle("absolute");
  navMenu.classList.toggle("top-16");
  navMenu.classList.toggle("right-4");
  navMenu.classList.toggle("bg-orange-300");
  navMenu.classList.toggle("p-4");
  navMenu.classList.toggle("rounded-xl");
});
