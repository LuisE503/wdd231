document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("member-container");
  const gridViewButton = document.getElementById("grid-view");
  const listViewButton = document.getElementById("list-view");

  gridViewButton.addEventListener("click", () => {
    container.classList.add("grid");
    container.classList.remove("list");
  });

  listViewButton.addEventListener("click", () => {
    container.classList.add("list");
    container.classList.remove("grid");
  });

  async function fetchMembers() {
    try {
      const response = await fetch("data/members.json");
      if (!response.ok) {
        throw new Error("HTTP error! Status: " + response.status);
      }
      const members = await response.json();
      displayMembers(members);
    } catch (error) {
      console.error("Error fetching members:", error);
      container.innerHTML = "<p>Error loading member data.</p>";
    }
  }

  function displayMembers(members) {
    container.innerHTML = "";
    members.forEach(member => {
      const card = document.createElement("div");
      card.classList.add("member-card");
      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name} logo">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
      `;
      container.appendChild(card);
    });
  }

  fetchMembers();
});
