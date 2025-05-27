document.addEventListener("DOMContentLoaded", () => {
  function output(courses) {
    const certificates = {
      "Web and Computer Programming": {
        container: document.querySelector(".boxcertificate01"),
        totalCreditsElement: document.getElementById("totalCreditsCert01")
      }
    };

    courses.forEach((course) => {
      const courseDiv = document.createElement("div");
      courseDiv.classList.add("course-card", course.completed ? "completed" : "incomplete");
      courseDiv.setAttribute("data-subject", course.subject);
      courseDiv.setAttribute("data-credits", course.credits);
      
      const courseTitle = document.createElement("h3");
      courseTitle.textContent = `${course.subject} ${course.number}`;
      courseDiv.appendChild(courseTitle);
      
      const certificate = certificates[course.certificate];
      if (certificate) {
        certificate.container.appendChild(courseDiv);
      }
      
      courseDiv.addEventListener("click", () => {
        displayCourseDetails(course);
      });
    });
    updateCredits("ALL");
  }
  
  function updateCredits(filter) {
    let totalCredits = 0;
    document.querySelectorAll(".course-card").forEach((course) => {
      const credits = parseInt(course.getAttribute("data-credits"), 10);
      const subject = course.getAttribute("data-subject").toUpperCase();
      if (filter === "ALL" || filter === subject) {
        totalCredits += credits;
      }
    });
    document.getElementById("totalCreditsCert01").innerHTML = `<strong>Total Credits:</strong> ${totalCredits}`;
  }
  
  const filterButtons = document.querySelectorAll(".courseButton");
  filterButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const filter = button.value.toUpperCase();
      document.querySelectorAll(".course-card").forEach((course) => {
        const subject = course.getAttribute("data-subject").toUpperCase();
        course.style.display = (filter === "ALL" || filter === subject) ? "block" : "none";
      });
      updateCredits(filter);
    });
  });
  
  document.querySelector('.courseButton[value="all"]').click();
  
  const courseDetails = document.getElementById("courses-details");
  function displayCourseDetails(course) {
    courseDetails.innerHTML = `
      <button id="closeModal">X</button>
      <h2>${course.subject} ${course.number}</h2>
      <h3>${course.title}</h3>
      <p><strong>Credits:</strong> ${course.credits}</p>
      <p>${course.description}</p>
      <p><strong>Technologies:</strong> ${course.technology.join(", ")}</p>
    `;
    courseDetails.showModal();
    
    document.getElementById("closeModal").addEventListener("click", closeDialog);
    courseDetails.addEventListener("click", function(e) {
      if(e.target === this) {
        closeDialog();
      }
    }, { once: true });
  }
  
  function closeDialog() {
    courseDetails.classList.add("fade-out");
    setTimeout(() => {
      courseDetails.close();
      courseDetails.classList.remove("fade-out");
    }, 300);
  }
  
  const coursesArray = [
    {
      subject: "CSE",
      number: 110,
      title: "Introduction to Programming",
      credits: 2,
      certificate: "Web and Computer Programming",
      description: "This course introduces basic programming constructs.",
      technology: ["Python"],
      completed: true
    },
    {
      subject: "WDD",
      number: 130,
      title: "Web Fundamentals",
      credits: 2,
      certificate: "Web and Computer Programming",
      description: "This course covers the basics of HTML and CSS.",
      technology: ["HTML", "CSS"],
      completed: true
    },
    {
      subject: "CSE",
      number: 111,
      title: "Programming with Functions",
      credits: 2,
      certificate: "Web and Computer Programming",
      description: "Learn to create and use functions.",
      technology: ["Python"],
      completed: true
    },
    {
      subject: "CSE",
      number: 210,
      title: "Programming with Classes",
      credits: 2,
      certificate: "Web and Computer Programming",
      description: "An introduction to object-oriented programming.",
      technology: ["C#"],
      completed: true
    },
    {
      subject: "WDD",
      number: 131,
      title: "Dynamic Web Fundamentals",
      credits: 2,
      certificate: "Web and Computer Programming",
      description: "Build dynamic webpages using JavaScript.",
      technology: ["HTML", "CSS", "JavaScript"],
      completed: true
    },
    {
      subject: "WDD",
      number: 231,
      title: "Frontend Web Development I",
      credits: 2,
      certificate: "Web and Computer Programming",
      description: "Focus on accessibility and interactive web design.",
      technology: ["HTML", "CSS", "JavaScript"],
      completed: false
    }
  ];
  
  output(coursesArray);
});