// Navbar Background
// document.addEventListener("DOMContentLoaded", function () {
//   const navbar = document.querySelector(".navbar");

//   window.addEventListener("scroll", function () {
//     if (window.scrollY >= 125) {
//       navbar.style.background = "rgba(22, 60, 144, 0.9)";
//       navbar.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.5)";
//     } else {
//       navbar.style.background = "transparent";
//       navbar.style.boxShadow = "none";
//     }
//   });
// });

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

  const speed = 40; // سرعة الكتابة والحذف
  const holdTime = 2000; // المدة الزمنية للاحتفاظ بالنص الكامل قبل البدء في الحذف

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

// Class Active For Nav-Link
// document.addEventListener("DOMContentLoaded", function () {
//   let list = document.querySelectorAll(".nav-item a");

//   list.forEach((li) => {
//     li.addEventListener("click", removeActive);
//   });

//   function removeActive() {
//     list.forEach((li) => {
//       li.classList.remove("active");
//       this.classList.add("active");
//     });
//   }
// });

// Navbar Collapse
// document.addEventListener("DOMContentLoaded", function () {
//   function toggleNavbarLinks() {
//     if (window.innerWidth < 992) {
//       const navLinks = document.querySelectorAll(".nav-link");
//       navLinks.forEach((link) => {
//         link.addEventListener("click", function (event) {
//           event.preventDefault();
//           if (this.parentNode.classList.contains("dropdown")) {
//             return;
//           }
//           const navbarCollapse = document.getElementById(
//             "navbarSupportedContent"
//           );
//           const bsCollapse = new bootstrap.Collapse(navbarCollapse);
//           bsCollapse.toggle();

//           var target = this.getAttribute("href");
//           if (target && target != "#") {
//             setTimeout(function () {
//               window.location.href = target;
//             }, 350);
//           }
//         });
//       });
//     } else {
//       const navLinks = document.querySelectorAll(".nav-link");
//       navLinks.forEach((link) => {
//         link.removeEventListener("click", function () {});
//       });
//     }
//   }

//   toggleNavbarLinks();
//   window.addEventListener("resize", toggleNavbarLinks);
// });

// Counter
// document.addEventListener("DOMContentLoaded", function () {
//   const counters = document.querySelectorAll(".purecounter");

//   // إنشاء observer لمراقبة ظهور العناصر
//   const observer = new IntersectionObserver(
//     (entries, observer) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("visible"); // إضافة كلاس لتفعيل ظهور العنصر
//           startCounting(entry.target); // بدء العد عند ظهور العنصر
//           observer.unobserve(entry.target); // التوقف عن مراقبة العنصر بعد التفاعل معه
//         }
//       });
//     },
//     { threshold: 1.0 }
//   ); // يجب أن يظهر العنصر بالكامل في الشاشة (100%)

//   counters.forEach((counter) => {
//     observer.observe(counter); // مراقبة العناصر
//   });

//   // وظيفة العد
//   function startCounting(element) {
//     const start = 0; // العد يبدأ من 0
//     const end = parseInt(element.getAttribute("data-purecounter-end"), 10);
//     const duration = 2; // الزمن 2 ثانية

//     // التأكد من أن جميع القيم أرقام صالحة
//     if (isNaN(end)) {
//       console.error("هناك مشكلة في القيم المدخلة!");
//       return;
//     }

//     let current = start;
//     const increment = (end - start) / ((duration * 1000) / 50); // حساب الزيادة في كل خطوة خلال 2 ثانية

//     const interval = setInterval(() => {
//       current += increment;
//       if (current >= end) {
//         clearInterval(interval);
//         element.innerText = end; // عند الوصول للقيمة النهائية
//       } else {
//         element.innerText = Math.round(current); // عرض القيمة الحالية مع تقريبها
//       }
//     }, 50); // كل 50 ميلي ثانية
//   }
// });

// MixItUp For Portfolio
// document.addEventListener("DOMContentLoaded", function () {
//   var containerEl = document.querySelector(".mix-filter");
//   var mixer = mixitup(containerEl);
// });

// Class Active For Portfolio
// document.addEventListener("DOMContentLoaded", function () {
//   let list = document.querySelectorAll(".gallery button");

//   list.forEach((li) => {
//     li.addEventListener("click", removeShow);
//   });

//   function removeShow() {
//     list.forEach((li) => {
//       li.classList.remove("show");
//       this.classList.add("show");
//     });
//   }
// });

// Testimonials
// document.addEventListener("DOMContentLoaded", function () {
//   new Swiper(".testimonials-slider", {
//     speed: 600,
//     loop: true,
//     autoplay: {
//       delay: 5000,
//       disableOnInteraction: false,
//     },
//     slidesPerView: "auto",
//     pagination: {
//       el: ".swiper-pagination",
//       type: "bullets",
//       clickable: true,
//     },
//     breakpoints: {
//       320: {
//         slidesPerView: 1,
//         spaceBetween: 40,
//       },

//       1200: {
//         slidesPerView: 3,
//       },
//     },
//   });
// });

// #######################

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
    } else {
      root.style.setProperty("--text-color", "#ccc");
      root.style.setProperty("--bgColor", "#000");
      root.style.setProperty("--story-img", "#222");
    }
    localStorage.setItem("theme", theme);
  }

  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);

  lightBtn.addEventListener("click", () => setTheme("light"));
  darkBtn.addEventListener("click", () => setTheme("dark"));
});

// Update Of The Year On Footer
document.getElementById("year").textContent = new Date().getFullYear();
