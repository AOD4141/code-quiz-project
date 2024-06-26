const questions = [
    {
    question: "Where was the  2012 Olympics held?",
    options: [ "China" , "UK" , "Rio De Janeiro" , "London" , "Beijing"],
    answer: "London"
},


{ question: "Which continent will you find Jamaica?",
    options: ["North America", "Africa", "Asia", "Caribbean", "Oceania"],
    answer: "North America"
},

{question: "The capital of Australia is?",
  options: ["Melbourne", "Sydney", "Canberra","Brisbane", "Perth"],
    answer: "Canberra"
},

    { question: "How many countries are officially member states of NATO?",
     options: ["30", "31", "32", "29", "33"],
     answer: "32"

    },

    { question: "Which of this sport is not part of the Olympics events in recent times?",
    options: ["Cricket", "Football", "Water polo", "Equestrian", "Boxing"],
    answer: "Cricket"
    }

];


// Set initial time

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 110; 


const startButton = document.getElementById("start-button");
const instructionsPage = document.getElementById("instructions-page");
const quizLandingPage = document.getElementById("quiz-landingpage");
const quizContainer = document.getElementById("quiz-container");
const timerElement = document.getElementById("time");
const scoreLandingPage = document.getElementById("score-landingpage");
const finalScoreElement = document.getElementById("final-score");
const initialsInput = document.getElementById("initials");
const saveScoreButton = document.getElementById("save-score");

startButton.addEventListener("click", startQuiz);

function startQuiz() {
    instructionsPage.style.display = "none";
    quizLandingPage.style.display = "block";
    readQuestion();
    setTimer();
}
function readQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    
    questionElement.textContent = questions[currentQuestionIndex].question;
    optionsElement.innerHTML = "";

    questions[currentQuestionIndex].options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(answer) {
    const correctSound = document.getElementById("correct-sound");
    const incorrectSound = document.getElementById("incorrect-sound");

    if (answer === questions[currentQuestionIndex].answer) {
        score++;
        correctSound.play();
    } else {
     
        timeLeft -= 10;
        if (timeLeft < 0) {
            timeLeft = 0;
        }
        incorrectSound.play();
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        readQuestion();
    } else {
        endQuiz();
    }
}

function setTimer() {
    timerElement.textContent = timeLeft;
    const timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}


function endQuiz() {
    quizLandingPage.style.display = "none";
    scoreLandingPage.style.display = "block";
    finalScoreElement.textContent = `Score: ${score}`;
}


saveScoreButton.addEventListener("click", saveScore);

function saveScore() {
    const initials = initialsInput.value.trim();
    if (initials !== "") {
        alert("Score saved successfully!");
    } else {
        alert("Please enter your initials.");
    }
}

