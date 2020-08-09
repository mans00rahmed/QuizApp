var questions = [{
    "question": "What is JavaScript ?",
    "option1": "Programming Language",
    "option2": "Native Language",
    "option3": "Drama Script",
    "option4": "Ecma Script",
    "answer": "1"
}, {
    "question": "What is HTML",
    "option1": "Programming Language",
    "option2": "Native Language",
    "option3": "Styling Script",
    "option4": "Structural Language",
    "answer": "4"

}, {
    "question": "What is Angular JS",
    "option1": "Programming Language",
    "option2": "Frame Work of JS",
    "option3": "Drama Script",
    "option4": "Ecma Script",
    "answer": "2"
}];

var currentQuestion = 0
var score = 0
var totalQuestions = questions.length; 

var container = document.getElementById('quizContainer')
var questionEl = document.getElementById("question");
var option1 = document.getElementById("opt1")
var option2 = document.getElementById("opt2")
var option3 = document.getElementById("opt3")
var option4 = document.getElementById("opt4")
var nextButton = document.getElementById("nextButton")
var resultCont = document.getElementById("result")

function loadQuestion(questionIndex) {
    var q = questions[questionIndex]
    questionEl.textContent = [questionIndex + 1] + ". " + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
}

function loadNextQuestion() {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if (!selectedOption) {
        alert("Plesae select your answer")
        return;
    }
    var answer = selectedOption.value;
    if (questions[currentQuestion].answer == answer) {
        score += 10
    }
    selectedOption.checked = false
    currentQuestion++
    if (currentQuestion == totalQuestions - 1) {
        nextButton.textContent = "Finish"

    }
    if (currentQuestion == totalQuestions) {
        container.style.display = 'none'
        resultCont.style.display = ''
        resultCont.textContent = 'Your score is ' + score
        return;
    }
    loadQuestion(currentQuestion)

}
loadQuestion(currentQuestion)

function quit(){
    container.style.display = 'none'
        resultCont.style.display = ''
        resultCont.textContent = 'Your score is ' + score
        return;
}