// Toggle Class Active Hamburger Menu
const navbarNav = document.querySelector('.navbar-nav');
// When it Click
document.querySelector('#hamburger-menu').onclick = (e) => {
  navbarNav.classList.toggle('active');
  e.preventDefault();
};

// Search Form Active
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
// When it Click
document.querySelector('#search-btn').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

// Close sidebar when it click on anywhere
const hamburger = document.querySelector('#hamburger-menu');
const searchBtn = document.querySelector('#search-btn');

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
  if (!searchBtn.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }
});
