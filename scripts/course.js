document.addEventListener('DOMContentLoaded', function() {
  // Array of course objects as displayed in the image example
  const courses = [
    { code: "CSE 110", title: "Introduction to Computing", subject: "CSE", credits: 3, completed: true },
    { code: "WDD 130", title: "Web Fundamentals", subject: "WDD", credits: 3, completed: false },
    { code: "CSE 111", title: "Programming Basics", subject: "CSE", credits: 3, completed: true },
    { code: "CSE 210", title: "Data Structures", subject: "CSE", credits: 4, completed: false },
    { code: "WDD 131", title: "Responsive Web Design", subject: "WDD", credits: 3, completed: true },
    { code: "WDD 231", title: "Advanced Web Development", subject: "WDD", credits: 3, completed: false }
  ];

  // Variable to hold the filtered courses; defaults to all courses
  let filteredCourses = courses;
  
  // Select the container elements for courses and total credits
  const coursesContainer = document.getElementById('courses');
  const totalCreditsElem = document.getElementById('total-credits');

  // Select filter buttons
  const btnAll = document.getElementById('btn-all');
  const btnCse = document.getElementById('btn-cse');
  const btnWdd = document.getElementById('btn-wdd');

  // Function to display courses dynamically
  function displayCourses(courseList) {
    // Clear the container
    coursesContainer.innerHTML = '';

    // Loop through each course and create a course card
    courseList.forEach(course => {
      const courseCard = document.createElement('div');
      courseCard.classList.add('course-card');
      // Add a special class if the course is completed
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

    // Calculate the total credits using reduce
    const totalCredits = courseList.reduce((sum, course) => sum + course.credits, 0);
    totalCreditsElem.textContent = totalCredits;
  }

  // Event listeners for filter buttons
  btnAll.addEventListener('click', function() {
    filteredCourses = courses;
    displayCourses(filteredCourses);
  });

  btnCse.addEventListener('click', function() {
    filteredCourses = courses.filter(course => course.subject === "CSE");
    displayCourses(filteredCourses);
  });

  btnWdd.addEventListener('click', function() {
    filteredCourses = courses.filter(course => course.subject === "WDD");
    displayCourses(filteredCourses);
  });

  // Display all courses on initial load
  displayCourses(filteredCourses);
});