# QuizRush

# QuizRush - Online Quiz Game

Welcome to QuizRush online game! This online quiz game is a dynamic and responsive webpage dedicated to promoting educative online games, designed to enlighten users about how online quiz/game can be quite rich in knowledge.The site is optimized for mobile, tablet, and desktop devices, ensuring a seamless user experience across all platforms. In here [QuizRush](https://kenneth2-3.github.io/QuizRush/) is the live link of the website.


## Project Overview

QuizRush is an interactive online quiz game designed to:

1. Test users on various topics including sports, movies, literature and personality assessment.
2. Offer a fun and engaging experience with such as timed rounds, randomized questions, score tracking, and personalized user input.
3. Offer a visually appealing, responsive, and user-friendly interface across all devices.

---

## User Stories

## User Story

**As a user,** i want to:

- Enter my name before starting the quiz.

- Read the quiz rules before playing.

- Answer multiple-choice questions across different categories.

- Receive instant feedback on whether my answer is correct or incorrect.

- Have a countdown timer to challenge my speed.

- Track my score and see a summary at the end.

- Restart the quiz and try to improve my performance.

## User Goals

**First-time Visitors:**

- Understand how to play through the quiz rules.

- Have an engaging experience that encourages them to complete the quiz.

- Easily navigate through the game without confusion.

**Returning Users:**

- Improve their score by answering more questions correctly.

- Challenge themselves with the timer countdown.

**Frequent Users:**

- Aim for a perfect score.

- Compete with friends by sharing their scores.

- Explore all available question categories.

### Wireframes

-
-
-

## Features 

- User-friendly UI with an accessible color scheme.
- Multiple-choice questions across different categories.
- Real-time feedback for correct and incorrect answers.
- Timer to add challenge and excitement.
- Score tracking and final feedback.
- Username validation to ensure proper input.
- Restart button to replay the quiz.

---

## Technologies Used

- **HTML**: Markup language for structuring the content.
- **CSS**: Styling the webpage and ensuring responsiveness.
- **JavaScript**: Adding interactivity, such as smooth scrolling.
- **Wireframe.cc**: Used to make a sketch for the website.

---

## Design 

**Color Scheme**

The color scheme is designed to also be accessible to color-impaired users:

- Primary Color: #007bff (Bright blue for primary buttons and interactions)

- Secondary Color: #004085 (Dark blue for headings and emphasis)

- Success Color: #28a745 (Green for correct answers)

- Error Color: #d9534f (Red for incorrect answers and warnings)

- Background: #f4f4f4 (Light grey for readability)

**Typography**

The typography reflects a harmonious blend of readability and artistic flair:

- Font Family: Arial, sans-serif for readability.

- Heading Fonts: Bold, dark blue for clarity and emphasis.

- Button & Answer Choices: Large, bold text for better visibility.

- General Text: Medium font size for comfortable reading.

---

## File Structure

```

QuizRush/
│-- assets/
│   │-- css/
│   │   ├── styles.css
│   │-- js/
│   │   ├── script.js
│   │-- documentation-images/
│-- favicon.ico
│-- index.html
│-- LICENSE
│-- README.md
│-- Testing.md
```

---

## How to Run the project

1. Clone this repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd project-directory
   ```

3. Open the `index.html` file in your preferred web browser.

4. **Optional:** If you want to run it on a local server:

- Using VS Code Live Server:

  - Install the "Live Server" extension in VS Code.

  - Right-click index.html and select "Open with Live Server".

- Using Python HTTP Server:

  - Open the terminal and run:

  ```bash
  python -m http.server 8000
  ```

  - Then open http://localhost:8000 in your browser.

---

## Usage

- Enter your name in the input field and click "Start Quiz."

- Read the question and select one of the answer choices.

- The quiz provides immediate feedback on whether your answer is correct or incorrect.

- A timer is displayed for each question.

- After completing all questions, your final score and feedback will be shown.

- Click "Restart Quiz" to play again.

## Customization

1. **Changing Questions:**

   - Modify the questions array in `script.js` to add, remove, or update questions.

2. **Styling:**

   - Edit `style.css` to customize colors, fonts, and layout.

3. **Timer Settings:**

   - Adjust the timeLeft variable in script.js to change the countdown duration per question.

---

## Screenshots

### Start page


### Questions page


### Feedback page


---

## Testing



---

## Deployemnt

## Deployment to GitHub Pages

- The site was deployed to GitHub Pages. The steps to deploy are as follows:

   - In the [GitHub repository](https://github.com/kenneth2-3/QuizRush), navigate to the Settings tab.

   - From the Pages section, select the Main Branch as the source, then click "Save".

   - The page will be automatically refreshed, indicating a successful deployment.

The live link can be found [here](https://kenneth2-3.github.io/QuizRush/).

## Local Deployment 

To make a local copy of this project, you can clone it. In your IDE Terminal, type the following command:

   - git clone <repository-url>

## Contributing

Contributions are welcome! If you have suggestions or find issues, please:

1. Fork this repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## Credits

- Tools

  - [Favicon](https://favicon.io/) was used to create a logo for QuizRush.
  - [Wireframe.cc](https://wireframe.cc/) was used to make a sketch for the website.

## License 

This project is licensed under the MIT License. Feel free to use and modify it for personal or commercial purposes.

---

## Author

Kenneth Adanma

Thank you for exploring QuizRush!