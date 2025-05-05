///// HAM BTN AND NAV OPEN/CLOSEDS

const hamBtn = document.querySelector(".ham-btn");
const nav = document.querySelector(".nav");
hamBtn.addEventListener("click", (e) => {
  if (nav.getAttribute("aria-expanded") === "false") {
    nav.setAttribute("aria-expanded", "true");
    hamBtn.setAttribute("data-active", "true");
  } else {
    nav.setAttribute("aria-expanded", "false");
    hamBtn.setAttribute("data-active", "false");
  }
});

//// GSAP
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".show-left", {
    opacity: 0,
    x: -50,
    duration: 2,
    // stagger: 0.4,
    scrollTrigger: {
      trigger: ".show-left",
      start: "top 90%",
      // markers: true,
    },
  });
  gsap.from(".show-right", {
    opacity: 0,
    x: 50,
    duration: 2,
    // stagger: 0.4,
    scrollTrigger: {
      trigger: ".show-right",
      start: "top 90%",
      // markers: true,
    },
  });
});

///////// STAGGERED

gsap.from(".portfolio-card", {
  opacity: 0,
  y: -50,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".portfolio-card",
    start: "top 90%",
    // markers: true,
  },
});
gsap.from(".tech-card", {
  opacity: 0,
  x: -50,
  duration: 1,
  stagger: 0.15,
  scrollTrigger: {
    trigger: ".tech-card",
    start: "top 90%",
    // markers: true,
  },
});
gsap.from(".projects-page-card", {
  opacity: 0,
  x: 50,
  duration: 1,
  stagger: 0.15,
  scrollTrigger: {
    trigger: ".projects-page-card",
    start: "top 90%",
  },
});

// from left stagger

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
      //  else {
      //   entry.target.classList.remove("active");
      // }
    });
  },
  { threshold: 0.2 }
);
// left
const left = document.querySelectorAll(".hidden-left");
left.forEach((el) => observer.observe(el));
// right
const right = document.querySelectorAll(".hidden-right");
right.forEach((el) => observer.observe(el));
// bottom

//// BACK TO TOP

const backToTopbtn = document.querySelector(".back-to-top-btn");

backToTopbtn.addEventListener("click", (e) => {
  window.scroll({
    top: 0,
  });
});
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 150) {
    backToTopbtn.setAttribute("data-visible", "true");
  } else backToTopbtn.setAttribute("data-visible", "false");
});

if (document.querySelector(".hero-linkedin-link")) {
  document
    .querySelector(".hero-linkedin-link")
    .addEventListener("click", (e) => {
      e.preventDefault();
      window.open("https://www.linkedin.com/company/exact-it/", "_blank");
    });
}
