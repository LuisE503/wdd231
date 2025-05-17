document.addEventListener("DOMContentLoaded", () => {
  const hamButton = document.querySelector("#menu");
  const navigation = document.querySelector("nav ul");
  hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    navigation.style.display = navigation.classList.contains("open") ? "block" : "none";
  });
  
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
});