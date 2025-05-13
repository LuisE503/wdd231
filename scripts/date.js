// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', function() {
  // Select the span element for the current year
  const currentYearSpan = document.getElementById('currentyear');
  const currentYear = new Date().getFullYear();
  if (currentYearSpan) {
    currentYearSpan.textContent = currentYear;
  }
  
  // Select the element for the last modified date and update its text
  const lastModifiedElem = document.getElementById('lastModified');
  if (lastModifiedElem) {
    lastModifiedElem.textContent = "Last Update: " + document.lastModified;
  }
});