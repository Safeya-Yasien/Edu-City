// popup box
const enrollBtn = document.querySelector(".enroll-btn");
const popupBox = document.querySelector("#popup-box");

enrollBtn.addEventListener("click", showPopupBox);

function showPopupBox(e) {
  e.preventDefault();
  popupBox.classList.toggle("show");
}

// course outline
const viewBtns = document.querySelectorAll(".view-btn");
const lessonLists = document.querySelectorAll(".lesson-list");

viewBtns.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const lessonList = lessonLists[index];

    lessonList.classList.toggle("show");

    console.log(lessonList);
  });
});
