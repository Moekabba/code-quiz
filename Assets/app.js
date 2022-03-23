// DEPENDECIES  DOM elements
var containerEl = document.getElementById("#question-container");
var questionEl = document.getElementById("#question");
var answerEl = document.getElementById("#answer-btn");
var controlEl = document.getElementById("#controls");
var startButtonEl = document.getElementById("#start-btn");
var nextButtonEl = document.getElementById("#next-btn");
var submitButtonEl = document.getElementById("#submit-button");
var countDownEl = document.getElementById("#countdown-timer");
var choicesEl = document.getElementById("#answer-buttons");
// Create variables to store the quiz questions
// objects in array ==>  data
var questionsArray = [
  {
    question: "what is Javascript?",
    choices: [
      "Javascript is a client-side and server-side scrpting language inserted into html",
      "Javascript is a browser",
    ],

    answer:
      "Javascript is a client-side and server-side scrpting language inserted into html",
  },
  {
    question: "what belongs in Javascrip data type?",
    choices: ["Boolean", "python"],

    answer: "Boolean",
  },
  {
    question: "which company developed JavaScript?",
    choices: ["google", "Netscape"],
    answer: "Netscape",
  },
  //   add more questions
];

//Start Functions
function startGame() {
  // display questions when gamestarts
  //   containerEl.classList.remove("hide");
  // hide start button while playing
  //   startButtonEl.classList.add("hide");
  // start timer when game starts (create timer function)
}
// startGame();
// Start timer function
function startTimer() {
  var secondsLeft = 10;
  //   using setInterval method to set time
  var timeInterval = setInterval(function () {
    countDownEl.innerHTML = "00" + secondsLeft;
    // Decreament time as player continues to play
    if (secondsLeft > 1) {
      countDownEl.textContent = secondsLeft + "seconds left";
      //   Decrement time left
      secondsLeft--;
    } else if (secondsLeft === 1) {
      // if time left equals to 1, remove s from seonds
      countDownEl.textContent = secondsLeft + "second left";
    } else {
      countDownEl.textContent = "";
      // Use `clearInterval()` to stop the timer
      //   console.log(timeInterval);
      clearInterval(timeInterval);
    }
  }, 1000);
}
// Write for loops to cycle through quiz questions

// Use key-press events to receive user input in the form of answers to quiz questions

// Create a time limit for the game using time functions (set timer)

// Write conditional statements to determine wrong and right answers

// Use client-side storage to store high scores (I can save my initials and score)

// display questions
function displayQuestions() {
  var currentQuestion = 0;
  questionEl.textContent = questionsArray[currentQuestion];
}
function answerCheck() {
  currentQuestionIndex++;
  if (currentQuestionIndex === questionsArray.length) {
    console.log("game over");
  } else {
    displayQuestions();
  }
}
// Use mouse-click events to start the quiz (start button)
// USER INTERACTION
// startButtonEl.addEventListener("click", startGame);

// // Use GitHub Pages to publish the page to the we
