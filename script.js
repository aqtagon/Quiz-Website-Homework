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
            "head",
        ],
        correctAnswer: "img"
    },
    {
        question: "Which HTML element do we put the JavaScript inside of?",
        answers: [
            "<js>"
            "<javascript>"
            "<script>"
            "<banana>"
        ],
        correctAnswer: "<script>"
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        answers: [
            "css-color"
            "text-color"
            "color"
            "css-text"
        ],
        correctAnswer: "color"
    },
    {
        question: "Select the correct answer for which sign is used for jQuery for a shortcut",
        answers: [
            "$"
            "!"
            "#"
            "@"
    
        ],
        correctAnswer: "$"
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: [
            "function-functionName{}"
            "myFunction=function()"
            "function.myFunction[]"
            "function myFunction()"
        ],
        correctAnswer: "function myFunction()"
    }
];
startBtn.addEventListener("click", function(){
    //Need to hide start button by adding hide to the class
    // Need to show questions by taking away hide in the class 
    var startDiv = document.querySelector(".startDiv");
    startDiv.classList.add("hide");
    var quizDiv = document.querySelector(".quizDiv");
    quizDiv.classList.remove("hide"); 
    displayQuestion()   
})
function displayQuestion(){
    var questionEl = document.querySelector(".questionEl")
    questionEl.textContent = questions[0].question
}