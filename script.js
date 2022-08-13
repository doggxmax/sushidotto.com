const nav = document.querySelector(".nav");

nav.addEventListener("click", function (e) {
  if (e.target.classList.contains("nav_link")) {
    e.preventDefault();
    const id = e.target.getAttribute("href");
    // console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

document
  .querySelector(".menu-products")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const hrf = e.target.getAttribute("href");
    document.querySelector(hrf).scrollIntoView({ behavior: "smooth" });
    const lines = e.target;
    const sibl = lines.closest(".menu-products").querySelectorAll(".btn");
    sibl.forEach((el) => {
      if (el !== lines) {
        el.classList.remove("a_active");
      } else {
        el.classList.add("a_active");
      }
    });
  });
///////////////////////////
const handleHover = function (e) {
  if (e.target.classList.contains("links")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".links");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      el.style.transition = "0.7s all";
      logo.style.transition = "0.7s all";
      if (el !== link) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};

// Passing "argument" into handler
nav.addEventListener("mouseover", handleHover.bind(0.2));
nav.addEventListener("mouseout", handleHover.bind(1));

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

const imgTargets = document.querySelectorAll("img[data-src]");

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

imgTargets.forEach((img) => imgObserver.observe(img));
