// Navbar Background
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const navbarToggler = document.querySelector(".navbar-toggler");

  function checkScroll() {
    if (window.scrollY >= 150) {
      navbar.style.background = "rgb(42 90 218 / 95%)";
      navbar.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.5)";
    } else {
      navbar.style.background = "transparent";
      navbar.style.boxShadow = "none";
    }
  }

  // تنفيذ الفحص عند تحميل الصفحة وأثناء التمرير
  checkScroll();
  window.addEventListener("scroll", checkScroll);

  // عند الضغط على زر القائمة، يتم تلوين الـ navbar فورًا
  navbarToggler.addEventListener("click", function () {
    navbar.style.background = "rgb(42 90 218 / 95%)";
    navbar.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.5)";
  });
});

// Texts Of Slider
document.addEventListener("DOMContentLoaded", function () {
  const texts = [
    "Professional Website Designer",
    "Certified Digital Marketer with Practical Experience",
    "Expert in Office Services and Data Analysis",
    "Certified Trainer Offering Professional Courses",
  ];

  let index = 0;
  let charIndex = 0;
  let currentText = "";
  let isDeleting = false;
  let cursorVisible = true;

  const speed = 40;
  const holdTime = 2000;

  const pElement = document.querySelector(".slider-text");
  const cursorElement = document.createElement("span");
  cursorElement.innerText = "|";
  cursorElement.style.display = "inline-block";
  cursorElement.style.opacity = "1";
  pElement.appendChild(cursorElement);

  function updateText() {
    if (isDeleting) {
      currentText = texts[index].substring(0, charIndex--);
    } else {
      currentText = texts[index].substring(0, charIndex++);
    }

    pElement.innerText = currentText;
    pElement.appendChild(cursorElement);

    if (!isDeleting && charIndex === texts[index].length) {
      setTimeout(() => (isDeleting = true), holdTime);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % texts.length;
    }

    setTimeout(updateText, speed);
  }

  function blinkCursor() {
    cursorVisible = !cursorVisible;
    cursorElement.style.opacity = cursorVisible ? "1" : "0";
    setTimeout(blinkCursor, 500);
  }

  updateText();
  blinkCursor();
});

// Navbar Collapse
document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navLinks = document.querySelectorAll(".nav-coll");
  const navbarCollapse = document.querySelector("#navbarSupportedContent");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth < 992) {
        navbarCollapse.classList.remove("show"); // إزالة "show" لإغلاق القائمة
        navbarToggler.setAttribute("aria-expanded", "false"); // تحديث حالة الزر
      }
    });
  });
});

// Class Active For Nav-Link
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("article, header");
  const navLinks = document.querySelectorAll(".nav-item a");

  function setActiveNav() {
    let scrollPosition = window.scrollY;
    let foundSection = false;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
        foundSection = true;
      }
    });

    if (!foundSection && scrollPosition === 0) {
      navLinks.forEach((link) => link.classList.remove("active"));
      document
        .querySelector(".nav-item a[href='#home']")
        .classList.add("active");
    }
  }
  window.addEventListener("scroll", setActiveNav);
});

// Toggle Themes
document.addEventListener("DOMContentLoaded", function () {
  const lightBtn = document.getElementById("lightTheme");
  const darkBtn = document.getElementById("darkTheme");
  const root = document.documentElement;

  function setTheme(theme) {
    if (theme === "light") {
      root.style.setProperty("--text-color", "#333");
      root.style.setProperty("--bgColor", "#fff");
      root.style.setProperty("--story-img", "#f5f5f5");
      root.style.setProperty(
        "--gradient",
        "linear-gradient(0deg, rgba(198, 198, 198, 0.7), rgba(255, 255, 255, 0.3), rgba(198, 198, 198, 0.7))"
      );

      lightBtn.classList.add("theme-active");
      lightBtn.classList.remove("theme-disable");
      darkBtn.classList.add("theme-disable");
      darkBtn.classList.remove("theme-active");
    } else {
      root.style.setProperty("--text-color", "#ccc");
      root.style.setProperty("--bgColor", "#000");
      root.style.setProperty("--story-img", "#222");
      root.style.setProperty(
        "--gradient",
        "linear-gradient(0deg, rgba(20, 20, 20, 0.7), rgba(50, 50, 50, 0.3), rgba(20, 20, 20, 0.7))"
      );

      darkBtn.classList.add("theme-active");
      darkBtn.classList.remove("theme-disable");
      lightBtn.classList.add("theme-disable");
      lightBtn.classList.remove("theme-active");
    }

    localStorage.setItem("theme", theme);
  }

  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);

  lightBtn.addEventListener("click", () => {
    if (!lightBtn.classList.contains("theme-active")) {
      setTheme("light");
    }
  });

  darkBtn.addEventListener("click", () => {
    if (!darkBtn.classList.contains("theme-active")) {
      setTheme("dark");
    }
  });
});

// Update Of The Year On Footer
document.getElementById("year").textContent = new Date().getFullYear();

// #######################
