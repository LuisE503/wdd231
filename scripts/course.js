document.addEventListener('DOMContentLoaded', function() {
  const courses = [
    { code: "WDD101", title: "Web Fundamentals", subject: "WDD", credits: 3, completed: true },
    { code: "WDD102", title: "Advanced Web Techniques", subject: "WDD", credits: 3, completed: false },
    { code: "CSE101", title: "Introduction to Programming", subject: "CSE", credits: 4, completed: true },
    { code: "CSE102", title: "Data Structures", subject: "CSE", credits: 4, completed: false }
  ];

  let filteredCourses = courses; // All courses
  const coursesContainer = document.getElementById('courses');
  const totalCreditsElem = document.getElementById('total-credits');

  const btnAll = document.getElementById('btn-all');
  const btnWdd = document.getElementById('btn-wdd');
  const btnCse = document.getElementById('btn-cse');

  // Funtion courses dinamic
  function displayCourses(courseList) {
    coursesContainer.innerHTML = '';

    courseList.forEach(course => {
      const courseCard = document.createElement('div');
      courseCard.classList.add('course-card');
      if(course.completed) {
        courseCard.classList.add('completed');
      }
      courseCard.innerHTML = `
        <h3>${course.code}: ${course.title}</h3>
        <p>Subject: ${course.subject}</p>
        <p>Credits: ${course.credits}</p>
      `;
      coursesContainer.appendChild(courseCard);
    });

    // Calculate all credits
    const totalCredits = courseList.reduce((sum, course) => sum + course.credits, 0);
    totalCreditsElem.textContent = totalCredits;
  }

  // Filters bottoms events
  btnAll.addEventListener('click', function() {
    filteredCourses = courses;
    displayCourses(filteredCourses);
  });

  btnWdd.addEventListener('click', function() {
    filteredCourses = courses.filter(course => course.subject === "WDD");
    displayCourses(filteredCourses);
  });

  btnCse.addEventListener('click', function() {
    filteredCourses = courses.filter(course => course.subject === "CSE");
    displayCourses(filteredCourses);
  });

  // All courses at start
  displayCourses(filteredCourses);
});