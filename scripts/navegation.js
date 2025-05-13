document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const navList = document.getElementById('nav-list');

  menuToggle.addEventListener('click', function() {
    // Visibility mobile
    if (navList.style.display === 'block') {
      navList.style.display = 'none';
    } else {
      navList.style.display = 'block';
    }
  });
});