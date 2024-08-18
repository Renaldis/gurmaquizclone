const remove = document.querySelector(".title-brand");
const score = document.querySelector(".score-content .score");
const submitAnswer = document.querySelector(".submitAnswer");
window.onload = () => {
  if (localStorage.getItem("score") != null) {
    score.innerHTML = JSON.parse(localStorage.getItem("score"));
    // window.location.reload();
  }
  if (localStorage.getItem("submitAnswer") != null) {
    submitAnswer.innerText = JSON.parse(localStorage.getItem("submitAnswer"));
  }
};

remove.onclick = () => {
  console.log("tes");
  localStorage.clear();
  window.location.reload();
};
