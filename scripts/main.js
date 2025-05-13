// main.js

document.addEventListener('DOMContentLoaded', function() {
  // Toggle navigation for mobile view
  const menuButton = document.getElementById('menu');
  const navList = document.querySelector('nav ul');

  menuButton.addEventListener('click', function() {
    // Toggle the display of the navigation list
    if (navList.style.display === 'block') {
      navList.style.display = 'none';
    } else {
      navList.style.display = 'block';
    }
  });

  // Insert current year dynamically in the footer
  const currentYearSpan = document.getElementById('currentyear');
  currentYearSpan.textContent = new Date().getFullYear();

  // Insert document last modified date dynamically
  const lastModifiedElem = document.getElementById('lastModified');
  lastModifiedElem.textContent = "Last Update: " + document.lastModified;
});