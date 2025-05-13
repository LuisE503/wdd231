document.addEventListener('DOMContentLoaded', function() {
  // Actual year
  const currentYearSpan = document.getElementById('currentyear');
  const currentYear = new Date().getFullYear();
  if (currentYearSpan) {
    currentYearSpan.textContent = currentYear;
  }
  
  // Last date
  const lastModifiedElem = document.getElementById('lastModified');
  if (lastModifiedElem) {
    lastModifiedElem.textContent = "Last Modified: " + document.lastModified;
  }
});