document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("timestamp").value = new Date().toLocaleString();
  const learnButtons = document.querySelectorAll(".learn-btn");
  learnButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const modalId = btn.getAttribute("data-modal");
      document.getElementById(modalId).style.display = "block";
    });
  });
  const closeButtons = document.querySelectorAll(".close-btn");
  closeButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      btn.parentElement.parentElement.style.display = "none";
    });
  });
  window.addEventListener("click", function (e) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(function (modal) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
});
