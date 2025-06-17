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
    .then(response => response.json())
    .then(data => {
      const cardsContainer = document.getElementById("discover-cards");
      data.forEach((item, index) => {
        const article = document.createElement("article");
        // Se asigna la clase genérica "discover-card" y la clase numérica para named grid areas.
        article.className = "discover-card card" + (index + 1);
        article.innerHTML = `
          <img src="images/${item.photo}" loading="lazy" alt="${item.title}" />
          <h3>${item.title}</h3>
          <p class="address">${item.address}</p>
          <p class="description">${item.description}</p>
          <button class="learn-btn">Learn More</button>
        `;
        cardsContainer.appendChild(article);
      });
    })
    .catch(function (error) {
      console.error("Error loading JSON data:", error);
    });
});
