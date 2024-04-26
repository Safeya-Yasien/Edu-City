// header search
const searchButton = document.querySelector(".search-btn");
const headerSearchContainer = document.querySelector(
  ".header-search-container"
);
searchButton.addEventListener("click", displaySearchContainer);

function displaySearchContainer() {
  headerSearchContainer.classList.toggle("active");
}

// menu bar
const humburgerMenu = document.querySelector(".humburger-menu");
const menuBar = document.querySelector(".menu-bar");
const menuCloseBtn = document.querySelector(".menu-close");
humburgerMenu.addEventListener("click", displayMenuBar);
menuCloseBtn.addEventListener("click", displayMenuBar);
function displayMenuBar() {
  menuBar.classList.toggle("active");
}
