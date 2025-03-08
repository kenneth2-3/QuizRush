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
        { 
            question: "Which country won the FIFA World Cup in 2018?", 
            answers: ["Germany", "Brazil", "France", "Argentina"], 
            correct: "France"
        },
        { 
            question: "In which sport would you perform a slam dunk?", 
            answers: ["Tennis", "Basketball", "Volleyball", "Football"], 
            correct: "Basketball"
        },
        { 
            question: "Which movie features the quote 'I am your father'?", 
            answers: ["Harry Potter", "The Lord of the Rings", "Star Wars", "The Matrix"], 
            correct: "Star Wars"
        },
        { 
            question: "Who played the character of Jack in Titanic?", 
            answers: ["Brad Pitt", "Leonardo DiCaprio", "Johnny Depp", "Matt Damon"], 
            correct: "Leonardo DiCaprio"
        },
        { 
            question: "Who wrote 'Pride and Prejudice'?", 
            answers: ["Charlotte Brontë", "Jane Austen", "Emily Dickinson", "Agatha Christie"], 
            correct: "Jane Austen"
        },
        { 
            question: "What is the first book in the 'Harry Potter' series?", 
            answers: ["The Goblet of Fire", "The Philosopher's Stone", "The Order of the Phoenix", "The Chamber of Secrets"], 
            correct: "The Philosopher's Stone"
        },
        { 
            question: "What is the national sport of Canada?", 
            answers: ["Ice Hockey", "Soccer", "Cricket", "Rugby"], 
            correct: "Ice Hockey"
        },
        { 
            question: "How do you usually react in stressful situations?", 
            answers: ["Stay calm and analyze", "Act impulsively", "Seek help from others", "Avoid the situation"], 
            correct: "Stay calm and analyze"
        },
        { 
            question: "Which word best describes your approach to life?", 
            answers: ["Optimistic", "Realistic", "Adventurous", "Cautious"], 
            correct: "Optimistic"
        }        
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

        if (!usernameRegex.test(username) || username.length < 3) {
            // Apply error styles
            usernameInput.classList.add("input-error");
    
            // Clear input field
            usernameInput.value = "";

            // Keep the focus in the input box
            usernameInput.focus();  
    
            // Remove error style after 600ms
            setTimeout(() => {
                usernameInput.classList.remove("input-error");
            }, 600);
    
            return;  // Stop function if invalid
        }    

        // Store username and display it
        localStorage.setItem("username", username);
        usernameDisplay.textContent = `Welcome to the quiz, ${username}!`;

        // Hide input section and show quiz screen
        document.getElementById("input-section").style.display = "none"; 
        document.getElementById("quiz-rules-section").style.display = "none"; 
        document.getElementById("quiz-screen").style.display = "block"; 
        document.getElementById("question-counter").style.display = "block";

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
    function selectAnswer(buttonElement, selected, correct) {
        clearInterval(timer); // Stop timer when an answer is selected
    
        Array.from(answerButtons.children).forEach(button => {
            button.disabled = true; 
            button.classList.add("disabled"); // Prevent hover effect
    
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
    
        // Only show next button if it's NOT the last question
        if (currentQuestionIndex < questions.length - 1) {
            nextBtn.classList.remove("hidden");
        } else {
            setTimeout(endQuiz, 2000); // If last question, end quiz
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
        timerDisplay.textContent = `${timeLeft} seconds left!`;

        timer = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = `${timeLeft} seconds left!`;

            if (timeLeft <= 0) {
                clearInterval(timer);
                handleTimeUp();
            }
        }, 1000);
    }

    // Handles the question when time is up
    function handleTimeUp() {
        feedbackText.textContent = "Time's up!";
        feedbackText.style.color = "red";
        
        // Get the correct answer
        const correctAnswer = questions[currentQuestionIndex].correct;
    
        // Disable all buttons and color them appropriately
        Array.from(answerButtons.children).forEach(button => {
            button.disabled = true;
            button.classList.add("disabled"); // Prevent hover effect
    
            if (button.textContent === correctAnswer) {
                button.classList.add("correct-answer"); // Green
            } else {
                button.classList.add("wrong-answer"); // Red
            }
        });
    
        // Show "Next Question" button only if NOT the last question
        if (currentQuestionIndex < questions.length - 1) {
            nextBtn.classList.remove("hidden");
        } else {
            setTimeout(endQuiz, 2000); // End quiz on last question
        }
    }

    // Ends the quiz and shows the results screen
    function endQuiz() {
        // Hide quiz screen and question counter
        document.getElementById("quiz-screen").style.display = "none"; 
        document.getElementById("question-counter").style.display = "none";  
    
        // Hide input section and rules (in case they are still visible)
        document.getElementById("input-section").style.display = "none";  
        document.getElementById("quiz-rules-section").style.display = "none";  
    
        // Show the result screen
        document.getElementById("result-screen").style.display = "block";  
    
        // Display final score and feedback
        finalScore.textContent = `Your score: ${score} / ${questions.length}`;
        finalFeedback.textContent = score > 5 ? "Great job!" : "Better luck next time!";
    }

    function restartQuiz() {
        // Hide result screen and show start screen
        resultScreen.style.display = "none";
        startScreen.style.display = "block"; 
    
        // Show input section and quiz rules again
        document.getElementById("input-section").style.display = "block";
        document.getElementById("quiz-rules-section").style.display = "block";
    
        // Hide quiz screen and question counter
        quizScreen.style.display = "none";
        questionCounter.style.display = "none"; 
    
        // Reset username input
        usernameInput.value = "";
        usernameInput.classList.remove("input-error");
    
        // Reset quiz state variables
        score = 0;
        currentQuestionIndex = 0;
    }    
});
