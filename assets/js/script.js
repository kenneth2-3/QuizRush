const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const timerDisplay = document.getElementById("time-left");
const feedbackText = document.getElementById("feedback");
const finalScore = document.getElementById("final-score");
const finalFeedback = document.getElementById("final-feedback");
const usernameInput = document.getElementById("username");
const usernameDisplay = document.getElementById("username-display");
const feedbackImage = document.getElementById("feedback-image");
const questionNumberDisplay = document.getElementById("question-number");
const totalQuestionsDisplay = document.getElementById("total-questions");

let currentQuestionIndex, score, timer, username;

const questions = [
    { question: "What is the capital of France?", answers: ["Paris", "London", "Berlin", "Rome"], correct: "Paris", image: "correct.png" },
    { question: "Who wrote 'Hamlet'?", answers: ["Shakespeare", "Hemingway", "Tolkien", "Austen"], correct: "Shakespeare", image: "correct.png" },
    { question: "Which planet is known as the Red Planet?", answers: ["Earth", "Mars", "Jupiter", "Venus"], correct: "Mars", image: "correct.png" },
];

// Set total number of questions
totalQuestionsDisplay.textContent = questions.length;

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
});
restartBtn.addEventListener("click", () => {
    resultScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
});

function startQuiz() {
    username = usernameInput.value.trim();
    
    const usernameRegex = /^[A-Z][a-z]+( [A-Z][a-z]+)*$/;

    if (!usernameRegex.test(username)) {
        alert("Please enter a valid username (Start with a capital letter, at least 2 words).");
        return;
    }

    localStorage.setItem("username", username);
    usernameDisplay.textContent = `Welcome to the quiz, ${username}!`;
    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    
    score = 0;
    currentQuestionIndex = 0;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();

    if (currentQuestionIndex < questions.length) {
        questionNumberDisplay.textContent = currentQuestionIndex + 1; // Update question number
        showQuestion(questions[currentQuestionIndex]);
        startTimer();

        // Hide "Next" button if it's the last question
        if (currentQuestionIndex === questions.length - 1) {
            nextBtn.classList.add("hidden");
        } else {
            nextBtn.classList.remove("hidden");
        }
    } else {
        endQuiz();
    }
}

function showQuestion(questionObj) {
    questionText.textContent = questionObj.question;
    questionObj.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(answer, questionObj.correct, questionObj.image));
        answerButtons.appendChild(button);
    });
}