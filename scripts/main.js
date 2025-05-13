// main.js

document.addEventListener('DOMContentLoaded', function() {
  // Toggle navigation menu for mobile view
  const menuButton = document.getElementById('menu');
  const navList = document.querySelector('nav ul');

  menuButton.addEventListener('click', function() {
    if (navList.style.display === 'block') {
      navList.style.display = 'none';
    } else {
      navList.style.display = 'block';
    }
  });

  // Set current year dynamically in footer
  const currentYearSpan = document.getElementById('currentyear');
  currentYearSpan.textContent = new Date().getFullYear();

  // Set last modified date dynamically in footer (using document.lastModified)
  const lastModifiedElem = document.getElementById('lastModified');
  lastModifiedElem.textContent = "Last Update: " + document.lastModified;
});