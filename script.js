/*const playerChoices = document.querySelectorAll('.player button');
const computerChoiceText = document.getElementById('computer-choice');
const resultText = document.getElementById('result-text');

const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'It\'s a tie!';
    }
    if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')) {
        return 'You win!';
    }
    return 'Computer wins!';
}

playerChoices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const playerChoice = choice.id;
        const computerChoice = getComputerChoice();

        computerChoiceText.textContent = `Computer chooses ${computerChoice}`;
        
        const result = determineWinner(playerChoice, computerChoice);
        resultText.textContent = result;
    });
});*/
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const submitButton = document.getElementById("submit");
const messageElement = document.getElementById("message");
const scoreElement = document.getElementById("score");
const timeLeftElement = document.getElementById("time-left");

let score = 0;
let timeLeft = 60;

function displayNewQuestion() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const answer = num1 + num2;

    questionElement.textContent = `What is ${num1} + ${num2}?`;
    answerElement.value = "";
    answerElement.focus();

    submitButton.addEventListener("click", () => {
        const userAnswer = parseInt(answerElement.value);

        if (userAnswer === answer) {
            score++;
            scoreElement.textContent = score;
            messageElement.textContent = "Correct!";
        } else {
            messageElement.textContent = "Wrong answer. Try again.";
        }

        displayNewQuestion();
    });
}

function startTimer() {
    const timerInterval = setInterval(() => {
        timeLeft--;
        timeLeftElement.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            messageElement.textContent = "Time's up!";
            submitButton.disabled = true;
        }
    }, 1000);
}

displayNewQuestion();
startTimer();

