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
    loader.style.animation = "fade-out 1s ease forwards";
  }, 1700);

  // Completely remove loader
  setTimeout(() => {
    loader.style.display = "none";
  }, 2000);
});
