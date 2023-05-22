let sectionHeroEl =
  document.querySelector(".section--hero") || document.createElement("div");
let observer = new IntersectionObserver(function () {}, {
  root: null,
  threshold: 0,
  rootMargin: "-80px"
});

observer.observe(sectionHeroEl);
