// DARI INDEX.HTML
const npm = document.getElementById("npm");
const password = document.getElementById("password");
const errorMsg = document.getElementById("error-message");
const loginBtn = document.querySelector(".login-bar .button");

// if Login Button Clicked
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (npm.value == "11122233" && password.value == "123321") {
    window.location.href = "quiz.html";
    localStorage.clear();
    showQuestions();
  } else {
    errorMsg.innerText = "SALAH INPUT, MASUKKAN DATA VALID!";
  }
});
// AKHIR DARI INDEX.HTML
