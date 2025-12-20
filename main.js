const toggleBtn = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("hidden rounded-xl flex flex-col absolute top-16 right-4 bg-orange-300 p-4");
});

