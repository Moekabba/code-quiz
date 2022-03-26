// DEPENDECIES  DOM elements
var containerEl = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answer-btn");
var controlEl = document.getElementById("controls");
var startButtonEl = document.getElementById("start-btn");
var nextButtonEl = document.getElementById("next-btn");
var submitButtonEl = document.getElementById("submit");
var countDownEl = document.getElementById("countdown-timer");
var choicesEl = document.getElementById("answer-btn");
var gameOverEl = document.getElementById("game-over");
var scoreEl = document.getElementById("scores");
var initialEL = document.getElementById("initials").value;
// tracking current score index
var currentScore = 0;
var currentQuestion = 0;
// Create variables to store the quiz questions
// objects in array ==>  data
var questionsArray = [
  {
    question: "What a pop()method in JavaScript is?",
    choices: [
      "pop() method takes the last element off of the given array and returns it",
      " pop() method is a browser",
    ],

    answer:
      "pop() method takes the last element off of the given array and returns it",
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
console.log(questionsArray);

//Start Functions
function startGame(event) {
  event.stopPropagation();
  // display questions when gamestarts

  // start timer when game starts (create timer function)
  startTimer();
  displayQuestions();
}
// Start timer function
function startTimer() {
  var secondsLeft = 10;
  //   using setInterval method to set time
  var timeInterval = setInterval(function () {
    countDownEl.innerHTML = " 00 " + secondsLeft;
    // Decreament time as player continues to play
    secondsLeft--;
    if (secondsLeft > 1) {
      countDownEl.textContent = secondsLeft + "seconds left";
      //   Decrement time left
    } else if (secondsLeft === 1) {
      // if time left equals to 1, remove s from seonds
      countDownEl.textContent = secondsLeft + "second left";
    } else if (secondsLeft === 0) {
      countDownEl.textContent = " ";
      gameOverEl.style.display = "block";
      // tracking scores
      scoreEl.textContent = currentScore;
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
  var question = questionsArray[currentQuestion];
  questionEl.textContent = question.question;
  choicesEl.innerHTML = "";
  // get from localStorage
  // var qArray = localStorage.getItem("questionsArray");
  // parse this into an object
  // var qObject = JSON.parse(qArray);

  // understand what's happening here (shows answer to questions )
  question.choices.forEach((choice) => {
    console.log(choice);

    // creating a button ele then set it to choice
    var button = document.createElement("button");
    button.setAttribute("value", choice.choices);
    button.setAttribute("class", "choice");
    button.onclick = answerCheck;
    button.textContent = choice;
    choicesEl.appendChild(button);
  });
}

function answerCheck() {
  if (this.value !== questionsArray[currentQuestion].answer) {
    console.log("wrong");
  } else {
    console.log("correct");
    currentScore++;
  }
  currentQuestion++;
  if (currentQuestion === questionsArray.length) {
    console.log("game over");
  } else {
    displayQuestions();
  }
}

// function answerCheck() {
//   currentQuestionIndex++;
//   if (currentQuestionIndex === questionsArray.length) {
//     console.log("game over");
//   } else {
//     displayQuestions();
//   }
// }

// creat event and connect to submit button look at loacal storae activity
// Use mouse-click events to start the quiz (start button)
// USER INTERACTION
submitButtonEl.addEventListener("click", function (event) {
  event.preventDefault();
  var scoreEnn = { initialss: initialEL, scoree: currentScore };
  // add to local storage (stringify questionsArray object into a string)
  localStorage.setItem("questionsArray", JSON.stringify(scoreEnn));
});
startButtonEl.addEventListener("click", startGame);

// // Use GitHub Pages to publish the page to the we
