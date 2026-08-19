// Loader Animation
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const spinner = document.getElementById("spinner");
  const chescaLoader = document.querySelector(".chesca-loader");

  // Show CHESCA after the spinner
  setTimeout(() => {
    spinner.style.display = "none";
    chescaLoader.style.display = "block";
  }, 700);

  // Start fading out
  setTimeout(() => {
    loader.style.animation = "fade-out 0.8s ease forwards";
  }, 1600);

  // Completely remove loader
  setTimeout(() => {
    loader.style.display = "none";
  }, 1800);
});

// Hamburger Menu JS
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  navList.style.left = "0";
  document.body.classList.add("no-scroll");
});

navList.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("fa-arrow-right-from-bracket") ||
    e.target.classList.contains("nav-link")
  ) {
    navList.style.left = "-100%";
    document.body.classList.remove("no-scroll");
  }
});
