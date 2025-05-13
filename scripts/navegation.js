// Wait for the DOM to load before running the script
document.addEventListener('DOMContentLoaded', function() {
  // Select the menu toggle button and navigation list
  const menuToggle = document.getElementById('menu-toggle');
  const navList = document.getElementById('nav-list');

  // Toggle the display of the navigation list on button click
  menuToggle.addEventListener('click', function() {
    if (navList.style.display === 'block') {
      navList.style.display = 'none';
    } else {
      navList.style.display = 'block';
    }
  });
});