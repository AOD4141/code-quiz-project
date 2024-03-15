const questions = [{
    question: "Where was the Olympics in 2012 held?",
    options: [ "China", "UK", "Rio De Janeiro", "London", "Beijing"],
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

//function to renderQuestion

function renderQuestion (index) {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    questionElement.textContent = questions[index].question;
    optionsElement.innerHTML = "";

    questions[index].options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option, index);
        optionsElement.appendChild(button);
    });
}

// Function to check the answer
function checkAnswer(answer, index) {
    const resultElement = document.getElementById("result");
    if (answer === questions[index].answer) {
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = "Incorrect!";
    }
}

let currentQuestionIndex = 0;
renderQuestion(currentQuestionIndex);
