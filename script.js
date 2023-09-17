// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
var startBtn = document.querySelector(".startBtn");
var questions = [
    {
        question: "Which tag is used to add an image to HTML?", 
        answers: [
            "div",
            "img",
            "meta",
            "head"
        ],
        correctAnswer: "img"
    },
    {
        question: "Which HTML element do we put the JavaScript inside of?",
        answers: [
            "<js>",
            "<javascript>",
            "<script>",
            "<banana>"
        ],
        correctAnswer: "<script>"
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        answers: [
            "css-color",
            "text-color",
            "color",
            "css-text"
        ],
        correctAnswer: "color"
    },
    {
        question: "Select the correct answer for which sign is used for jQuery for a shortcut",
        answers: [
            "$",
            "!",
            "#",
            "@"
    
        ],
        correctAnswer: "$"
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: [
            "function-functionName{}",
            "myFunction=function()",
            "function.myFunction[]",
            "function myFunction()"
        ],
        correctAnswer: "function myFunction()"
    }
];

var currentQuestionIndex = 0;
var score = 0;

startBtn.addEventListener("click", function(){
    //Need to hide start button by adding hide to the class
    // Need to show questions by taking away hide in the class 
    var startDiv = document.querySelector(".startDiv");
    startDiv.classList.add("hide");
    var quizDiv = document.querySelector(".quizDiv");
    quizDiv.classList.remove("hide"); 
    displayQuestion();   
});

function displayQuestion(){
    var questionEl = document.querySelector(".questionEl");
    var answerButtons = document.querySelectorAll(".answer");

    questionEl.textContent = questions[currentQuestionIndex].question;

    for (var i = 0; i < answerButtons.length; i++) {
        if (questions[currentQuestionIndex].answers[i]) {
        answerButtons[i].textContent = questions[currentQuestionIndex].answers[i];
        answerButtons[i].classList.remove("hide");
    }else {
       answerButtons[i].classList.add("hide");
        }
    }

    for (var i = 0; i < answerButtons.length; i++) {
        answerButtons[i].addEventListener("click", function (event) {
            var selectedAnswer = event.target.textContent;
            checkAnswer(selectedAnswer);
        });
    }
}

function checkAnswer(selectedAnswer) {
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (selectedAnswer === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    var quizDiv = document.querySelector(".quizDiv");
    quizDiv.classList.add("hide");

    var scoreDisplay = document.querySelector(".scoreDisplay");
    var initialsInput = document.getElementById("initials");
    var saveScoreBtn = document.getElementById("saveScoreBtn");
    var scoreSpan = document.getElementById("score");

    scoreSpan.textContent = score;
    scoreDisplay.classList.remove("hide");

    saveScoreBtn.addEventListener("click", function() {
        var initials = initialsInput.value;
        if (initials) {
            alert("Score saved!");
        } else {
            alert("Please enter your initials.");
        }
    });

    var saveScoreForm = document.querySelector(".saveScoreForm");
    saveScoreForm.classList.remove("hide");
}