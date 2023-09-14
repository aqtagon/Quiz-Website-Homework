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
    }
]
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