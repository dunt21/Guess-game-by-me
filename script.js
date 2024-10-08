let score = 20;
let highscore = 0;
let guess = Math.trunc(Math.random() * 15 + 1);
console.log(guess);

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

function displayScore(digit) {
  document.querySelector("#score").textContent = digit;
}

function displayHighScore(number) {
  document.querySelector("#highscore").textContent = number;
}

function questionMark(parameter) {
  document.querySelector(".questionmark").textContent = parameter;
}

function confetti() {
  const confettiVideo = document.querySelector("#confetti-video");
  confettiVideo.style.display = "block";
  confettiVideo.play();

  confettiVideo.onended = function () {
    confettiVideo.style.display = "none";
  };
}

document.querySelector(".check").addEventListener("click", function () {
  let inputNum = Number(document.querySelector("input").value);

  console.log(inputNum);
  if (!inputNum) {
    displayMessage("Input a Number❗");
  } else if (inputNum === guess) {
    displayMessage("You guessed right🥳");
    confetti();
    document.querySelector("body").style.backgroundColor = "#60b347";
    displayHighScore(score);
    questionMark(guess);
    document.querySelector(".questionmark").style.width = "190px";

    if (score > highscore) {
      highscore = score;
    }
  } else if (inputNum != guess) {
    displayMessage(
      inputNum < guess ? "Number is too low 📉" : "Number is too high 📈"
    );
    // document.querySelector('input').style.color = 'maroon';
    if (score > 1) {
      score--;
      displayScore(score);
    } else {
      displayMessage("You lost the game 🥲");
      displayScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  guess = Math.trunc(Math.random() * 15 + 1);
  console.log(guess);
  score = 20;
  highscore = 0;
  displayMessage("Start guessing...");
  displayScore(score);
  displayHighScore(highscore);
  document.querySelector("input").value = "";
  document.querySelector("body").style.backgroundColor = "#b07d62";
  questionMark("?");
  document.querySelector(".questionmark").style.width = "130px";
});
