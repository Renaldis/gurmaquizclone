// getting all required elements
const submitBtn = document.querySelector(".button-area .submit.button");
const nextBtn = document.querySelector(".button-area .next.button");
const optionAnswer = document.querySelector(".options");
const numberAll = document.querySelectorAll(".number");
const optionValue = document.getElementsByName("soalSatu");
const loginBtn = document.querySelector(".login-bar .button");
const startQuiz = document.querySelector(".startQuiz");
const optionAll = document.querySelectorAll(".option");

let queAns = 0;
let queCount = 0;
let userScore = 0;
let timeValue = 10;
let counter;

// IF STARTQUIZ BUTTON CLICKED
startQuiz.addEventListener("click", () => {
  console.log("start quiz aktif");
  startQuestion();
  startQuiz.classList.add("hide");
  startTimer(timeValue);
});

// FUNGSI START
const timeTitle = document.querySelector(".time-title");
const timeSecond = document.querySelector(".timer-second");
const queText = document.querySelector(".question-text");
const optiText = document.querySelectorAll(".option");

function startQuestion() {
  timeTitle.classList.remove("hide");
  timeSecond.classList.remove("hide");
  console.log("ini index", queCount);
  showQuestions(queCount);
}

nextBtn.classList.add("partialOpacity");
const exitContent = document.querySelector(".exit-content");
const exitTitle = exitContent.querySelector(".exit-title");
const exitSubTitle = exitContent.querySelector(".exit");
const exitImage = exitContent.querySelector("a img");

// IF NEXT BUTTON CLICKED
nextBtn.addEventListener("click", () => {
  if (queCount < questions.length - 1) {
    queCount++;
    showQuestions(queCount);
    nextQuestion();
    startTimer(timeValue);
    console.log("index ke", queCount);
  } else {
    console.log("all attempt");
    nextBtn.classList.add("partialOpacity");
    exitTitle.setAttribute("class", "hide");
    exitSubTitle.classList.remove("hide");
    exitImage.classList.remove("hide");
  }
});
// fungsion nextQuestion
function nextQuestion() {
  nextBtn.classList.add("partialOpacity");
  document.querySelector(".button-area .next.button").disabled = true; // Disable Next button again
  console.log("Soal selanjutnya...");
  // console.log("SCORE", userScore);
  numberAll[queCount].classList.add("red");
  submitBtn.disabled = false;
  submitBtn.classList.remove("partialOpacity");
}

// fungsion disableOptions
function disableOptions() {
  for (let i of optionValue) {
    i.disabled = true;
  }
}

// rules
let tickIcon = `<span class="icon tick"><i class="fa-solid fa-check"></i></span>`;
let crossIcon = `<span class="icon cross"><i class="fa-solid fa-xmark"></i></span>`;
// IF SUBMIT BUTTON CLICKED
submitBtn.addEventListener("click", () => {
  if (queCount < questions.length) {
    submitAnswer();
  }
});
// IF SUBMIT BUTTON CLICKED
function submitAnswer() {
  let correctAns = questions[queCount].answer;
  let selectedRadio;
  for (let index of optionValue) {
    if (index.checked) {
      selectedRadio = index;
      break;
    }
  }
  const radioValue = selectedRadio.value;
  console.log("radioValue", radioValue);
  // const tagRadio = selectedRadio.tagName;
  // console.log("tag", tagRadio);
  let parentRadio = selectedRadio.parentElement;
  // console.log("parent", parentRadio);

  let userAns = radioValue;
  if (userAns !== "null") {
    queAns++;
    console.log("Jawaban tersubmit", queAns);
    clearInterval(counter);
    if (userAns == correctAns) {
      userScore += 10;
      console.log("userScore = ", userScore);
      parentRadio.classList.add("correct");
      parentRadio.insertAdjacentHTML("beforeend", tickIcon);
    } else {
      parentRadio.classList.add("incorrect");
      console.log(userScore);
      parentRadio.insertAdjacentHTML("beforeend", crossIcon);
      for (let index of optionValue) {
        let selectedRadio = index;
        let parentRadios = selectedRadio.parentElement;
        if (selectedRadio.value == correctAns) {
          // console.log("selectedRadio", selectedRadio.value);
          parentRadios.classList.add("correct");
          parentRadios.insertAdjacentHTML("beforeend", tickIcon);
        }
      }
    }
    // let correctAns = questions[queCount].answer;

    disableOptions();
    submitBtn.disabled = true;
    submitBtn.classList.add("partialOpacity");
    nextBtn.disabled = false;
    nextBtn.classList.remove("partialOpacity");
    numberAll[queCount].classList.add("black");
  } else {
    console.log("isi jawaban dahulu");
  }
}

// TIMER COUNTDOWN
const timeCount = document.querySelector(".timer-second");
const timeOff = document.querySelector(".time-title");
function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.innerText = time + " DETIK";
    time--;
    if (time < 9) {
      let addZero = timeCount.innerText;
      timeCount.innerText = "0" + addZero;
    }
    if (time < 0) {
      clearInterval(counter);
      timeCount.innerText = "00 DETIK";
      timeOff.innerText = "WAKTU HABIS";

      let correctAns = questions[queCount].answer;
      for (let index of optionValue) {
        let selectedRadio = index;
        let parentRadios = selectedRadio.parentElement;
        if (selectedRadio.value == correctAns) {
          // console.log("selectedRadio", selectedRadio.value);
          parentRadios.classList.add("correct");
          parentRadios.insertAdjacentHTML("beforeend", tickIcon);
        }
      }
      for (let index of optionValue) {
        index.disabled = true;
      }
      submitBtn.disabled = true;
      submitBtn.classList.add("partialOpacity");
      nextBtn.disabled = false;
      nextBtn.classList.remove("partialOpacity");
    }
  }
}

// FUNGSION SHOWQUESTION
function showQuestions(index) {
  const queText = document.querySelector(".question-text");
  let queTag = `${questions[index].question}`;
  let OptionTag = `<div class="option satu">
                            <input type="radio" name="soalSatu" value="${questions[index].options[0]}">
                            <span>
                            ${questions[index].options[0]}
                            </span>
                            
                        </div>
                        <div class="option dua">
                            <input type="radio" name="soalSatu" value="${questions[index].options[1]}">
                            <span>
                                ${questions[index].options[1]}
                            </span>
                        </div>
                        <div class="option tiga">
                            <input type="radio" name="soalSatu" value="${questions[index].options[2]}">
                            <span>
                            ${questions[index].options[2]}
                            </span>
                        </div>
                        <div class="option empat">
                            <input type="radio" name="soalSatu" value="${questions[index].options[3]}">
                            <span>
                            ${questions[index].options[3]}
                            </span>
                        </div>
                        <div class="option default">
                            <input type="radio" name="soalSatu" checked value="null">
                            <span>
                                Belum dijawab
                            </span>
                        </div>`;
  queText.innerText = queTag;
  optionAnswer.innerHTML = OptionTag;
}

const exitBtn = exitContent.querySelector(".exit-button");
// IF EXIT BUTTON CLICKED
// exitBtn.addEventListener("click", () => {});

// BAGIAN HASIL.HTML

if (localStorage.getItem("score") == null) {
  localStorage.setItem("score", "[]");
}

if (localStorage.getItem("submitAnswer") == null) {
  localStorage.setItem("submitAnswer", "[]");
}

exitBtn.onclick = () => {
  let penyimpanan = JSON.parse(localStorage.getItem("score"));
  penyimpanan.push(userScore);
  let jawabanTersubmit = JSON.parse(localStorage.getItem("submitAnswer"));
  jawabanTersubmit.push(queAns);
  // tambah.value = "";
  localStorage.setItem("score", JSON.stringify(penyimpanan));
  localStorage.setItem("submitAnswer", JSON.stringify(jawabanTersubmit));
  window.location.href = "hasil.html";
};
