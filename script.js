// Referencing true and false buttons
var trueBtn = $("#true");
var falseBtn = $("#false");

// Referencing multiple choice buttons
var aBtn = $("#a");
var bBtn = $("#b");
var cBtn = $("#c");
var dBtn = $("#d");

// Referencing quiz control buttons
var prevBtn = $("#previous");
var nextBtn = $("#next");
var restartBtn = $("#restart");
var submitBtn = $("#submit");
var startBtn = $("#start");

// Referencing where scores are displayed during the quiz
var userScore = $("#score");
var totalScore = $("#total-score");

// Setting up local storage for highscores
var highScores = [];
var userHighScore = localStorage.getItem("userHighScore");

// Referencing where the questions are displayed
var questionText = $("#question-text");

// Setting value to zero to start quiz at first question
var currentQuestion = 0;

// Setting user's score to zero to at the start
var score = 0;

// What the user see's to tell them the quiz is over
var endGameMessage = "Congrats on finishing the game";

// JS array with questions, answers and which answer is right
var questions = [
  {
    question: "Who was the first Giant to hit 500 career home runs?",
    answers: [
      { option: "Buster Posey", answer: false },
      { option: "Willie Mays", answer: false },
      { option: "Mel Ott", answer: true },
      { option: "Barry Bonds", answer: false },
    ],
  },
  {
    question:
      "The Giants won the National League West Division under which manager?",
    answers: [
      { option: "Gabe Kaplar", answer: false },
      { option: "Bruce Bochy", answer: true },
      { option: "John McGraw", answer: false },
      { option: "Dusty Baker", answer: false },
    ],
  },
  {
    question:
      "In 1957, the New York Giants moved to San Francisco to become the San Francisco Giants. What was the original name of the franchise?",
    answers: [
      { option: "New York Dodgers", answer: false },
      { option: "New York Giants", answer: false },
      { option: "New York Gothams", answer: true },
      { option: "Brooklyn Giants", answer: false },
    ],
  },
  {
    question: "Who was the first Giant to get elected into the Hall of Fame?",
    answers: [
      { option: "Matt Cain", answer: false },
      { option: "Barry Bonds", answer: false },
      { option: "Christy Mathewson", answer: true },
      { option: "Mickey Welch", answer: false },
    ],
  },
  {
    question:
      "Barry Bonds was the first Giant to win an MVP award in the 21st century, true or false?",
    answers: [
      { option: "True", answer: true },
      { option: "False", answer: false },
    ],
  },
];

// restartBtn.on("click", restart);

startBtn.on("click", beginQuiz);

console.log(questions);

var currentQuestion = 0;

var userTimer = 30;

var timerEl = document.getElementById("timerEl");

var userTimerEl = document.getElementById("user-timer");

var scoreEl = document.getElementById("score");

// Function to begin quiz
function beginQuiz(event) {
  console.log("start game", event);
  document.getElementById("welcome-screen").classList.add("hide");

  timerEl.classList.remove("hide");
  timerEl.classList.add("time-scores");
  userTimerEl.textContent = `Time left: ${userTimer}`;
  timer();

  scoreEl.textContent = `Score: ${score}`;
  document.getElementById("question-container").classList.remove("hide");
  showNextQuestion();
}

// Function to move user to the next question
function showNextQuestion() {
  if (currentQuestion < 5) {
    document.getElementById("question-text").textContent =
      questions[currentQuestion].question;

    document.getElementById("optionButtons").innerHTML = "";

    for (let i = 0; i < questions[currentQuestion].answers.length; i++) {
      var thisAnswer = questions[currentQuestion].answers[i];
      var button = document.createElement("button");
      button.classList.add("btn", "btn-tf");
      button.dataset.isCorrect = thisAnswer.answer;
      button.textContent = thisAnswer.option;
      button.addEventListener("click", checkAnswer);
      document.getElementById("optionButtons").append(button);
    }
    console.log(score);
  } else {
    endGame();
  }
}

// function to check if user answered correctly
function checkAnswer(e) {
  var isCorrect = e.target.dataset.isCorrect;
  if (isCorrect === "true") {
    score += 2;
    scoreEl.textContent = `Score: ${score}`;
  } else {
    userTimer -= 5;
    userTimerEl.textContent = `Time left: ${userTimer}`;
  }
  currentQuestion++;
  showNextQuestion();
}
console.log(score);
// Function to restart the game
// function restart() {
//   currentQuestion = 0;
//   score = 0;
//   userTimer = 30;
//   beginQuiz();
//}

// function that runs and displays timer, note it's set to 30 seconds here as well as other places

function endGame() {
  highScores.quizScore = score;
  localStorage.setItem("highScores", JSON.stringify(userScore));

  document.getElementById("user-timer").classList.add("hide");
  document.getElementById("optionButtons").classList.add("hide");
  document.getElementById("question-text").textContent = endGameMessage;

  // attempting to create restart button
  var startBtn = document.createElement("button");
  startBtn.textContent = "Click to play again";
  startBtn.addEventListener("click", beginQuiz);
  document.getElementById("restart-button").append(startBtn);

  // attempting to store score in localstorage and show top 5 high scores with initials
  function showHighScores() {
    highScores.append = userScore;
  }
}

function timer() {
  setInterval(timerCount, 1000);
  function timerCount() {
    userTimer -= 1;
    userTimerEl.textContent = `Time left: ${userTimer}`;
    if (userTimer === 0) {
      endGame();
    }
  }
}
