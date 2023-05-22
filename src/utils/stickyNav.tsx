let sectionHeroEl =
  document.querySelector(".section--hero") || document.createElement("div");
let observer = new IntersectionObserver(
  function () {
    // entries should be added to function parameter
    // const intersectingState = entries[0].isIntersecting;
    // if (!intersectingState) {
    //   console.log(entries);
    //   document.body.classList.add("sticky");
    // }
    // if (intersectingState) {
    //   document.body.classList.remove("sticky");
    // }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px"
  }
);

observer.observe(sectionHeroEl);
