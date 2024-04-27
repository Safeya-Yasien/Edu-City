// slider
const nextBtn = document.querySelector(".arrow.next");
const prevBtn = document.querySelector(".arrow.prev");
const testimonialsContainer = document.querySelector(".tesimonials-container");
let scrollAmount = 0;
const step = 450;

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

function nextSlide() {
  if (
    scrollAmount <
    testimonialsContainer.scrollWidth - testimonialsContainer.offsetWidth
  ) {
    scrollAmount += step;
    testimonialsContainer.scrollTo({ left: scrollAmount, behavior: "smooth" });
  }
}

function prevSlide() {
  if (scrollAmount > 0) {
    scrollAmount -= step;
    testimonialsContainer.scrollTo({ left: scrollAmount, behavior: "smooth" });
  }
}
