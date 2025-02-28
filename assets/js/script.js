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