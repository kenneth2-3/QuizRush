document.addEventListener("DOMContentLoaded", () => {
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
    const questionNumberDisplay = document.getElementById("question-number"); 
    const totalQuestionsDisplay = document.getElementById("total-questions");
    const questionCounter = document.getElementById("question-counter");

    let currentQuestionIndex = 0, score = 0, timer, username;
    
    // Quiz questions
    const questions = [
        { 
            question: "What is the capital of France?", 
            answers: ["Paris", "London", "Berlin", "Rome"], 
            correct: "Paris"
        },
        { 
            question: "Who wrote 'Hamlet'?", 
            answers: ["Shakespeare", "Hemingway", "Tolkien", "Austen"], 
            correct: "Shakespeare"
        },
        { 
            question: "Which planet is known as the Red Planet?", 
            answers: ["Earth", "Mars", "Jupiter", "Venus"], 
            correct: "Mars"
        },
    ];

    // Display total number of questions
    totalQuestionsDisplay.textContent = questions.length;

    // Event listeners
    startBtn.addEventListener("click", startQuiz);
    nextBtn.addEventListener("click", () => {
        currentQuestionIndex++;
        setNextQuestion();
    });
    restartBtn.addEventListener("click", restartQuiz);

    // Starts the quiz
    function startQuiz() {
        username = usernameInput.value.trim();
        const usernameRegex = /^[A-Z][a-z]+( [A-Z][a-z]+)*$/;

        if (!usernameRegex.test(username)) {
            alert("Please enter a valid username (Start with a capital letter).");
            return;
        }

        // Store username and display it
        localStorage.setItem("username", username);
        usernameDisplay.textContent = `Welcome to the quiz, ${username}!`;

        // Hide start screen and display it
        startScreen.classList.add("hidden");
        quizScreen.classList.remove("hidden");
        questionCounter.style.display = "block";

        score = 0;
        currentQuestionIndex = 0;
        setNextQuestion();
    }

    // Sets the next question in the quiz
    function setNextQuestion() {
        resetState();

        if (currentQuestionIndex < questions.length) {
            questionNumberDisplay.textContent = currentQuestionIndex + 1;
            showQuestion(questions[currentQuestionIndex]);
            startTimer();
        } else {
            endQuiz();
        }
    }

    // Displays the current question and answers
    function showQuestion(questionObj) {
        questionText.textContent = questionObj.question; 
        answerButtons.innerHTML = ""; // Clear previous buttons properly

        questionObj.answers.forEach(answer => {
            const button = document.createElement("button");
            button.textContent = answer;
            button.classList.add("btn");
            button.addEventListener("click", () => selectAnswer(button, answer, questionObj.correct, questionObj.image));
            answerButtons.appendChild(button);
        });

        nextBtn.classList.add("hidden"); // Hide Next until an answer is selected
    }

    // Handles answer selection and provides feedback
    function selectAnswer(buttonElement, selected, correct, image) {
        clearInterval(timer);

        Array.from(answerButtons.children).forEach(button => {
            button.disabled = true;
            if (button.textContent === correct) {
                button.classList.add("correct-answer");
            } else {
                button.classList.add("wrong-answer");
            }
        });

        if (selected === correct) {
            score++;
            feedbackText.textContent = "Correct!";
            feedbackText.style.color = "green";
        } else {
            feedbackText.textContent = `Wrong! The correct answer was ${correct}`;
            feedbackText.style.color = "red";
        }

        if (currentQuestionIndex === questions.length - 1) {
            setTimeout(endQuiz, 2000);
        } else {
            nextBtn.classList.remove("hidden"); // Show next button after selection
        }
    }

    // Resets UI for the next question
    function resetState() {
        feedbackText.textContent = "";
        nextBtn.classList.add("hidden");
        answerButtons.innerHTML = "";
    }

    // Starts the countdown timer and updates the display
    function startTimer() {
        let timeLeft = 10;
        timerDisplay.textContent = `${timeLeft} seconds`;
        timer = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = `${timeLeft} seconds`;
            if (timeLeft <= 0) {
                clearInterval(timer);
                feedbackText.textContent = "Time's up!";
                nextBtn.classList.remove("hidden");
            }
        }, 1000);
    }

    // Ends the quiz and shows the results screen
    function endQuiz() {
        quizScreen.classList.add("hidden");
        resultScreen.classList.remove("hidden");
        questionCounter.style.display = "none"; 

        finalScore.textContent = `Your score: ${score} / ${questions.length}`;
        finalFeedback.textContent = score > 1 ? "Great job!" : "Better luck next time!";
    }

    // Restarts the quiz
    function restartQuiz() {
        resultScreen.classList.add("hidden");
        startScreen.classList.remove("hidden");
        questionCounter.style.display = "none"; 
        usernameInput.value = "";
    }
});
