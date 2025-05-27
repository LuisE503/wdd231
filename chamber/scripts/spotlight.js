async function loadSpotlight() {
  try {
    const response = await fetch("data/members.json");
    if (response.ok) {
      const members = await response.json();
      displaySpotlight(members);
    } else {
      console.error(await response.text());
    }
  } catch (error) {
    console.error(error);
  }
}
function displaySpotlight(members) {
  const eligibleMembers = members.filter(member => member.membership === 3 || member.membership === 2);
  eligibleMembers.sort(() => 0.5 - Math.random());
  const spotlightMembers = eligibleMembers.slice(0, 3);
  const spotlightContainer = document.getElementById("spotlight-cards");
  spotlightContainer.innerHTML = "";
  spotlightMembers.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("spotlight-card");
    card.innerHTML = `<img src="images/${member.image}" alt="${member.name} Logo"><h3>${member.name}</h3><p>${member.phone}</p><p>${member.address}</p><a href="${member.website}" target="_blank">${member.website}</a><p>Membership: ${member.membership === 3 ? "Gold" : "Silver"}</p>`;
    spotlightContainer.appendChild(card);
  });
}
document.addEventListener("DOMContentLoaded", loadSpotlight);
