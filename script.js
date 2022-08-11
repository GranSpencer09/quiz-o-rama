// Declaring all variables
var trueBtn = $("#true");
var falseBtn = $("#false");

var aBtn = $("#a");
var bBtn = $("#b");
var cBtn = $("#c");
var dBtn = $("#d");

var prevBtn = $("#previous");
var nextBtn = $("#next");
var restartBtn = $("#restart");
var submitBtn = $("#submit");

var userScore = $("#user-score");
var totalScore = $("#total-score");

var questionText = $("#question-text");

var currentQuestion = 0;

var score = 0;

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

// timer
// store high scores
// view high scores
// wrong answers hurt time and high score

// Event listeners
restartBtn.on("click", restart);
prevBtn.on("click", previous);
nextBtn.on("click", next);
submitBtn.on("click", submit);

console.log(questions);

var currentQuestion = 0;

// Function to begin quiz
// function beginQuiz() {{
// }

// beginQuiz();

// Function to restart the game
function restart() {
  currentQuestion = 0;
  prevBtn.classList.remove("hide");
  nextBtn.classList.remove("hide");
  prevBtn.classList.remove("hide");
  submitBtn.classList.remove("hide");
  trueBtn.classList.remove("hide");
  falseBtn.classList.remove("hide");
  aBtn.classList.remove("hide");
  bBtn.classList.remove("hide");
  cBtn.classList.remove("hide");
  dBtn.classList.remove("hide");
  score = 0;
  beginQuiz();
}

// Function to move user to next question
// function next() {

// }

// Function to move user back to previous question
// function prev() {

// }

// Function to run when the user submits quiz
function submit() {
  prevBtn.classList.add("hide");
  nextBtn.classList.add("hide");
  submitBtn.classList.add("hide");
  trueBtn.classList.add("hide");
  falseBtn.classList.add("hide");
  aBtn.classList.add("hide");
  bBtn.classList.add("hide");
  cBtn.classList.add("hide");
  dBtn.classList.add("hide");
  questionText.appendChild = "Congrats on finishing your quiz!";
}
