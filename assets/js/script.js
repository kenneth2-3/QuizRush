document.addEventListener("DOMContentLoaded", () => {
    const startScreen = document.getElementById("start-screen");
    const quizScreen = document.getElementById("quiz-screen"); 
    const resultScreen = document.getElementById("result-screen"); 
    const startBtn = document.getElementById("start-btn");
    const nextBtn = document.getElementById("next-btn");
    const restartBtn = document.getElementById("restartBtn");
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
    
    // Quiz questions
    const questionSets = [
        [ // Set 1
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
                question: "Which actress starred as Katniss Everdeen in 'The Hunger Games' series?",
                answers: ["Emma Watson", "Jennifer Lawrence", "Kristen Stewart", "Margot Robbie"],
                correct: "Jennifer Lawrence"
            },
            {
                question: "How many players are on the field per team in a standard soccer match?",
                answers: ["9", "10", "11", "12"],
                correct: "11"
            }
        ],
        [ // Set 2
            {
                question: "Which country won the first-ever FIFA World Cup in 1930?",
                answers: ["Argentina", "Brazil", "Uruguay", "Italy"],
                correct: "Uruguay"
            },
            {
                question: "In basketball, how many points is a free throw worth?",
                answers: ["1", "3", "5", "8"],
                correct: "1"
            },
            {
                question: "Which movie won the first-ever Academy Award for Best Picture?",
                answers: ["Gone with the Wind", "Wings", "Casablanca", "Citizen Kane"],
                correct: "Wings"
            },
            {
                question: "Which film features the famous line: 'Here’s looking at you, kid'?",
                answers: ["The Godfather", "Casablanca", "Gone with the Wind", "Titanic"],
                correct: "Casablanca"
            },
            {
                question: "Who wrote the novel 1984?",
                answers: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "J.R.R. Tolkien"],
                correct: "George Orwell"
            },
            {
                question: "Which novel features the character Atticus Finch?",
                answers: ["The Great Gatsby", "Moby-Dick", "To Kill a Mockingbird", "Pride and Prejudice"],
                correct: "To Kill a Mockingbird"
            },
            {
                question: "What is the name of Sherlock Holmes’ assistant?",
                answers: ["Watson", "Lestrade", "Moriarty", "Mycroft"],
                correct: "Watson"
            },
            {
                question: "Who wrote The Catcher in the Rye?",
                answers: ["Ernest Hemingway", "J.D. Salinger", "John Steinbeck", "William Faulkner"],
                correct: "J.D. Salinger"
            },
            {
                question: "Who holds the record for the most home runs in a single MLB season?",
                answers: ["Babe Ruth", "Barry Bonds", "Hank Aaron", "Mark McGwire"],
                correct: "Barry Bonds"
            },
            {
                question: "What is the only Grand Slam tennis tournament played on clay?",
                answers: ["Wimbledon", "Australia Open", "US Open", "French Open"],
                correct: "French Open"
            },
            {
                question: "Who played Jack Dawson in Titanic (1997)?",
                answers: ["Brad Pitt", "Tom Cruise", "Leonardo DiCaio", "Johnny Depp"],
                correct: "Leonardo DiCarpio"
            },
            {
                question: "Which animated film was Disney’s first full-length feature?",
                answers: ["Cinderella", "Snow White and the Seven Dwarfs", "Pinocchio", "Fantasia"],
                correct: "Snow White and the Seven Dwarfs"
            }
        ],
        [ // Set 3
            {
                question: "How long is an Olympic swimming pool?",
                answers: ["25 meters", "50 meters", "75 meters", "100 meters"],
                correct: "50 meters"
            },
            {
                question: "Which country has won the most Olympic gold medals in men’s ice hockey?",
                answers: ["Russia", "Canada", "USA", "Sweden"],
                correct: "Canada"
            },
            {
                question: "Which actor has played James Bond the most times in official films?",
                answers: ["Sean Connery", "Roger Moore", "Daniel Craig", "Pierce Brosnan"],
                correct: "Roger Moore"
            },
            {
                question: "What is the highest-grossing movie of all time (adjusted for inflation)?",
                answers: ["Avatar", "Titanic", "Avengers:Endgame", "Gone with the Wind"],
                correct: "Gone with the Wind"
            },
            {
                question: "Which Shakespeare play features the line 'To be, or not to be'?",
                answers: ["Macbeth", "Othello", "Hamlet", "Romeo and Juliet"],
                correct: "Hamlet"
            },
            {
                question: "Who is the author of Frankenstein?",
                answers: ["Mary Shelly", "Bram Stoker", "Edgar Allan Poe", "Charles Dickens"],
                correct: "Mary Shelly"
            },
            {
                question: "Who was the first African-American to win a Grand Slam tennis title?",
                answers: ["Serena Williams", "Arthur Ashe", "Venus Williams", "Althea Gibson"],
                correct: "Arthur Ashe"
            },
            {
                question: "Which Formula 1 driver has won the most world championships?",
                answers: ["Ayrton Senna", "Michael Schumacher", "Lewis Hamilton", "Sebastian Vettel"],
                correct: "Lewis Hamilton"
            },
            {
                question: "In 'The Dark Knight' which actor played The Joker?",
                answers: ["Jack Nicholson", "Heath Ledger", "Jared Leto", "Joaquin Phoenix"],
                correct: "Heath Ledger"
            },
            {
                question: "What year was the first Star Wars movie released?",
                answers: ["1975", "1977", "1980", "1983"],
                correct: "1977"
            },
            {
                question: "What is the first book in the Harry Potter series?",
                answers: ["The Chamber of Secrets", "The Philosopher's Stone", "The Prisoner of Azkaban", "The Goblet of Fire"],
                correct: "The Philosopher's Stone"
            },
            {
                question: "In The Lord of the Rings, what is the name of Frodo’s best friend and companion?",
                answers: ["Legolas", "Samwise Gamgee", "Gandalf", "Boromir"],
                correct: "Samwise Gamgee"
            }
        ]
    ];

    let currentSetIndex = 0, score = 0, timer, username;
    let currentQuestionIndex = 0;
    let questions = [...questionSets[currentSetIndex]]; // Loads first set

    // Display total number of questions
    totalQuestionsDisplay.textContent = questions.length;

    // Event listeners
    startBtn.addEventListener("click", startQuiz);
    nextBtn.addEventListener("click", setNextQuestion);
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
        startScreen.style.display = "none"; 
        document.getElementById("quiz-rules-section").style.display = "none"; 
        quizScreen.style.display = "block"; 
        questionCounter.style.display = "block";

        score = 0;
        currentQuestionIndex = 0;

        // Ensure the correct set is loaded
        questions = [...questionSets[currentSetIndex]];
        totalQuestionsDisplay.textContent = questions.length; 

        setNextQuestion();
    }

    // Sets the next question in the quiz
    function setNextQuestion() {
        resetState();

        if (currentQuestionIndex < questions.length) {
            questionNumberDisplay.textContent = currentQuestionIndex + 1;
            showQuestion(questions[currentQuestionIndex]);
            startTimer();
            currentQuestionIndex++;
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
            button.addEventListener("click", () => selectAnswer(button, answer, questionObj.correct));
            answerButtons.appendChild(button);
        });

        nextBtn.classList.add("hidden"); // Hide Next until an answer is selected
    }

    // Handles answer selection and provides feedback
    function selectAnswer(buttonElement, selected, correct) {
        clearInterval(timer); // Stop timer when an answer is selected
    
        Array.from(answerButtons.children).forEach(button => {
            button.disabled = true; 
            button.classList.add("disabled"); // Prevents hover effect
    
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
        if (currentQuestionIndex < questions.length) {
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
            button.classList.add("disabled"); // Prevents hover effect
    
            if (button.textContent === correctAnswer) {
                button.classList.add("correct-answer"); // Green
            } else {
                button.classList.add("wrong-answer"); // Red
            }
        });
    
        // Show "Next Question" button only if NOT the last question
        if (currentQuestionIndex < questions.length) {
            nextBtn.classList.remove("hidden");
        } else {
            setTimeout(endQuiz, 2000); // End quiz on last question
        }
    }

    // Ends the quiz and shows the results screen
    function endQuiz() {
        // Hide quiz screen and question counter
        quizScreen.style.display = "none"; 
        questionCounter.style.display = "none";  
        resultScreen.style.display = "block"; // Show results
    
        // Hide input section and rules (in case they are still visible)
        document.getElementById("input-section").style.display = "none";  
        document.getElementById("quiz-rules-section").style.display = "none";  
    
        // Display final score and feedback
        finalScore.textContent = `Your score: ${score} / ${questions.length}`;
        finalFeedback.textContent = score > 5 ? "Great job!" : "Better luck next time!";
    }

    function restartQuiz() {
        if (currentSetIndex === questionSets.length - 1) { 
            // If the third set is completed, go back to the full start page
            currentSetIndex = 0; // Reset question set index
            score = 0;
            currentQuestionIndex = 0;
            
            // Hide result screen and quiz screen
            resultScreen.style.display = "none";
            quizScreen.style.display = "none";
    
            // Show the full start screen (rules, input, and start button)
            startScreen.style.display = "block";
            document.getElementById("username").value = ""; // Clear previous username
            document.getElementById("quiz-rules-section").style.display = "block"; // Show rules if hidden
            document.getElementById("start-btn").style.display = "block"; // Ensure the start button is visible
        } else {
            // Otherwise, move to the next question set
            currentSetIndex++;
            questions = [...questionSets[currentSetIndex]];
            score = 0;
            currentQuestionIndex = 0;
            resultScreen.style.display = "none";
            quizScreen.style.display = "block";

            startQuiz(); 
        }
    }    
});
