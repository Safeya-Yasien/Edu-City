const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", function () {
    this.classList.toggle("expanded");
  });
});
