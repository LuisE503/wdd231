document.addEventListener("DOMContentLoaded", function () {
  const visitMessage = document.getElementById("visit-message");
  const lastVisit = localStorage.getItem("lastVisit");
  const now = new Date().toLocaleString();
  if (lastVisit) {
    visitMessage.textContent = "Welcome back! Your last visit was on " + lastVisit;
  } else {
    visitMessage.textContent = "Welcome! This is your first visit.";
  }
  localStorage.setItem("lastVisit", now);
  fetch("data/discover.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const cardsContainer = document.getElementById("discover-cards");
      data.forEach(function (item) {
        const card = document.createElement("div");
        card.className = "discover-card";
        card.innerHTML =
          "<h3>" + item.title + "</h3>" +
          "<p>" + item.address + "</p>" +
          "<p>" + item.description + "</p>" +
          "<img src='images/" + item.photo + "' loading='lazy' alt='" + item.title + "' />" +
          "<button class='learn-btn'>Learn More</button>";
        cardsContainer.appendChild(card);
      });
    })
    .catch(function (error) {
      console.error(error);
    });
});
