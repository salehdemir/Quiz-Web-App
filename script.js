
const questions = {
  html: [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlinking Text Management Language", "Home Tool Markup Language"],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "Which tag is used to create a hyperlink in HTML?",
      options: ["<link>", "<a>", "<href>", "<url>"],
      answer: "<a>"
    }
    // Add more HTML questions here (total 10)
  ],
  css: [
    {
      question: "What does CSS stand for?",
      options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Syntax", "Colorful Style Sheets"],
      answer: "Cascading Style Sheets"
    }
    // Add more CSS questions here
  ],
  js: [
    {
      question: "Which company developed JavaScript?",
      options: ["Netscape", "Mozilla", "Sun Microsystems", "Oracle"],
      answer: "Netscape"
    }
    // Add more JS questions here
  ]
};

const navButtons = document.querySelectorAll('.nav-btn');
const startBtn = document.getElementById('startBtn');
const homeDiv = document.getElementById("home");
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('nextBtn');

let currentSubject = "";
let currentQuestionIndex = 0;
let currentQuestions = [];


navButtons.forEach(button => {
  button.addEventListener("click", () => {
    const subject = button.getAttribute("data-subject");

    if (subject === "home") {
      quizDiv.style.display = "none";
      homeDiv.style.display = "block";
    } else {
      currentSubject = subject;
      currentQuestions = questions[subject];
      currentQuestionIndex = 0;
      homeDiv.style.display = "none";
      quizDiv.style.display = "block";
      showQuestion();
    }
  });
});

function showQuestion() {
  const currentQ = currentQuestions[currentQuestionIndex];
  questionEl.textContent = currentQ.question;
  optionsEl.innerHTML = "";

  currentQ.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.className = "option-btn";
    btn.onclick = () => checkAnswer(option);
    optionsEl.appendChild(btn);
  });

  nextBtn.style.display = "none";
}

function checkAnswer(selected) {
  const correct = currentQuestions[currentQuestionIndex].answer;
  if (selected === correct) {
    alert("Correct!");
  } else {
    alert("Wrong!");
  }
  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuestions.length) {
    showQuestion();
  } else {
    alert("You've finished all questions in " + currentSubject.toUpperCase());
    quizDiv.style.display = "none";
    homeDiv.style.display = "block";
  }
});


startBtn.addEventListener('click', () => {
  alert('Quiz is starting!');
});


// const quizData = [
//   {
//     question: "What is the capital of France?",
//     options: ["Paris", "Berlin", "Madrid", "Rome"],
//     answer: "Paris"
//   },
//   {
//     question: "What is 2 + 2?",
//     options: ["3", "4", "5", "22"],
//     answer: "4"
//   }

// ];


startBtn.addEventListener('click', () => {

  document.getElementById('home').style.display = 'none';
  quiz.style.display = 'block';

  loadQuestion();
});

function loadQuestion() {
  optionsEl.innerHTML = '';


  const currentQuestion = quizData[currentQuestionIndex];

  questionEl.innerText = currentQuestion.question;


  currentQuestion.options.forEach(option => {
    const button = document.createElement('button');
    button.innerText = option;
    button.classList.add('option-btn');
    optionsEl.appendChild(button);

   
    button.addEventListener('click', () => {
      selectAnswer(button, currentQuestion.answer);
    });
  });

  nextBtn.style.display = 'none';
}

