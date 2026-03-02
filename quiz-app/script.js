const progressElement = document.getElementById("progress");
const highScoreElement = document.getElementById("high-score");

const question =[
    {
        question: "What is the capital city of Kenya?",
        answers:[
            {text: "Nairobi" , correct:true},
            {text: "Mombasa" , correct:false},
            {text: "Kisumu" , correct:false},
            {text: "Nakuru" , correct:false},

        ]
    },
    {
        question: "Which language runs in the browser?",
        answers: [
            {text: "Python", correct:false},
            {text: "Java", correct:false},
            {text: "Javascript", correct:true},
            {text: "C++", correct:false},


        ]
    },

    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyperlinks and Text Markup Language", correct: false },
            { text: "Home Tool Markup Language", correct: false },
            { text: "Hyper Text Markup Language", correct: true },
            { text: "High Text Machine Language", correct: false }
        ]
    },

    {
        question: "Which company developed JavaScript?",
        answers: [
            { text: "Microsoft", correct: false },
            { text: "Netscape", correct: true },
            { text: "Google", correct: false },
            { text: "Apple", correct: false }
        ]
    },

    {
        question: "Which data type is used to store true or false values?",
        answers: [
            { text: "String", correct: false },
            { text: "Number", correct: false },
            { text: "Boolean", correct: true },
            { text: "Array", correct: false }
        ]
    },
];

const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex =0;
let score =0;


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";

    shuffleArray(question);

    question.forEach(q => shuffleArray(q.answers));

    const savedHighScore = Number(localStorage.getItem("highScore")) || 0;
    highScoreElement.innerHTML = `High Score: ${savedHighScore}`;


    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    progressElement.innerHTML = `Question ${currentQuestionIndex + 1} of ${question.length}`;
    questionElement.innerHTML=currentQuestion.question;

    const progressBar = document.getElementById("progress-bar");

progressBar.style.width =
    ((currentQuestionIndex + 1) / question.length) * 100 + "%";

        currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerHTML = `${index + 1}. ${answer.text}`;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);
    });

    if (currentQuestionIndex === question.length - 1) {
        nextButton.innerHTML = "Submit";
    } else {
        nextButton.innerHTML = "Next";
    }
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const correct = selectedBtn.dataset.correct === "true";

    if (correct) {
        score++;
        selectedBtn.classList.add("correct");
    } else {
        selectedBtn.classList.add("wrong");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}


function showScore() {
    resetState();
    progressElement.innerHTML = "";

    const percentage = Math.round((score / question.length) * 100);

    //  Get current high score
    let savedHighScore = localStorage.getItem("highScore") || 0;

    //  If new score is higher , update it
    if (score > savedHighScore) {
        localStorage.setItem("highScore", score);
        
        savedHighScore = score;
    }

    highScoreElement.innerHTML = `High Score: ${savedHighScore}`;

    questionElement.innerHTML = `
        You scored ${score} out of ${question.length}! <br>
        ${percentage}%
    `;

    nextButton.innerHTML = "Restart";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < question.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < question.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();

