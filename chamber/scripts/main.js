document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".hamburger-menu");
  const navigation = document.querySelector("nav ul");

  menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
  });
});
