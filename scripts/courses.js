// courses.js

document.addEventListener('DOMContentLoaded', function() {
  // Array of course objects for the certificate
  const courses = [
    { code: "CSE 110", title: "Introduction to Computing", subject: "CSE", credits: 3, completed: true },
    { code: "WDD 130", title: "Web Fundamentals", subject: "WDD", credits: 3, completed: false },
    { code: "CSE 111", title: "Programming Basics", subject: "CSE", credits: 3, completed: true },
    { code: "CSE 210", title: "Data Structures", subject: "CSE", credits: 4, completed: false },
    { code: "WDD 131", title: "Responsive Web Design", subject: "WDD", credits: 3, completed: true },
    { code: "WDD 231", title: "Advanced Web Development", subject: "WDD", credits: 3, completed: false }
  ];

  // Initially display all courses
  let filteredCourses = courses;
  
  // Container for course cards and total credits element
  const coursesContainer = document.querySelector('.boxcertificate01.boxCourse');
  const totalCreditsEl = document.getElementById('totalCreditsCert01');

  // Function to display courses dynamically
  function displayCourses(courseList) {
    // Clear container
    coursesContainer.innerHTML = '';

    // Loop through courses and create card for each
    courseList.forEach(course => {
      const courseCard = document.createElement('div');
      courseCard.classList.add('course-card');
      // If course is completed, add a special styling class
      if (course.completed) {
        courseCard.classList.add('completed');
      }
      courseCard.innerHTML = `
        <h3>${course.code}: ${course.title}</h3>
        <p>Subject: ${course.subject}</p>
        <p>Credits: ${course.credits}</p>
      `;
      coursesContainer.appendChild(courseCard);
    });

    // Calculate total credits using reduce
    const totalCredits = courseList.reduce((sum, course) => sum + course.credits, 0);
    totalCreditsEl.textContent = "Total Credits for Certificate: " + totalCredits;
  }

  // Initial display of all courses
  displayCourses(filteredCourses);

  // Add event listeners to filter buttons
  const filterButtons = document.querySelectorAll('.courseButton');
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filterValue = this.value;
      if (filterValue === 'all') {
        filteredCourses = courses;
      } else {
        filteredCourses = courses.filter(course => course.subject.toLowerCase() === filterValue);
      }
      displayCourses(filteredCourses);
    });
  });
});