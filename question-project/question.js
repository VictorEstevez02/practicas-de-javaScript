const questions = document.querySelectorAll(".question");

function quetiosnsToggle(askQuestion) {
  questions.forEach((question) => {
    if (question !== askQuestion) {
      question.classList.remove("show-text");
    }
  });

  askQuestion.classList.toggle("show-text");
}

questions.forEach((question) => {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", () => quetiosnsToggle(question));
});