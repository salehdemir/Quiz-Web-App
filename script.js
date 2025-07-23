
// const questions = {
//   html: [
//     {
//       question: "What does HTML stand for?",
//       options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlinking Text Management Language", "Home Tool Markup Language"],
//       answer: "Hyper Text Markup Language"
//     },
//     {
//       question: "Which tag is used to create a hyperlink in HTML?",
//       options: ["<link>", "<a>", "<href>", "<url>"],
//       answer: "<a>"
//     },
//     {
//       question: "Which tag is used to display an image in HTML?",
//       options: ["<img>", "<src>", "<image>", "<pic>"],
//       answer: "<img>"
//     },
//     {
//       question: "What is the correct HTML element for the largest heading?",
//       options: ["<head>", "<h6>", "<h1>", "<heading>"],
//       answer: "<h1>"
//     },
//     {
//       question: "Which attribute is used to provide an alternative text for an image?",
//       options: ["title", "alt", "src", "href"],
//       answer: "alt"
//     },
//     {
//       question: "What is the correct way to make a list with bullets?",
//       options: ["<list>", "<ol>", "<ul>", "<dl>"],
//       answer: "<ul>"
//     },
//     {
//       question: "How do you create a checkbox in HTML?",
//       options: ["<checkbox>", "<input type='checkbox'>", "<input type='check'>", "<input checkbox>"],
//       answer: "<input type='checkbox'>"
//     },
//     {
//       question: "What does the <br> tag do?",
//       options: ["Creates a bold text", "Adds a break line", "Starts a new paragraph", "None"],
//       answer: "Adds a break line"
//     },
//     {
//       question: "Which HTML tag is used to define a table row?",
//       options: ["<td>", "<tr>", "<table>", "<row>"],
//       answer: "<tr>"
//     },
//     {
//       question: "Which element is used to input data from a user?",
//       options: ["<input>", "<form>", "<textarea>", "<select>"],
//       answer: "<input>"
//     }
//   ],
//   css: [
//     {
//       question: "What does CSS stand for?",
//       options: ["Creative Style Sheets", "Colorful Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"],
//       answer: "Cascading Style Sheets"
//     },
//     {
//       question: "Which property is used to change the text color?",
//       options: ["font-color", "text-color", "color", "background-color"],
//       answer: "color"
//     },
//     {
//       question: "Which property is used to set background color?",
//       options: ["color", "background", "bgcolor", "background-color"],
//       answer: "background-color"
//     },
//     {
//       question: "Which symbol is used for ID selector in CSS?",
//       options: [".", "#", "*", "$"],
//       answer: "#"
//     },
//     {
//       question: "How do you make text bold in CSS?",
//       options: ["font-weight: bold;", "text-style: bold;", "bold: true;", "style: bold;"],
//       answer: "font-weight: bold;"
//     },
//     {
//       question: "What does the `margin` property affect?",
//       options: ["Spacing inside the element", "Spacing outside the element", "Text alignment", "Border color"],
//       answer: "Spacing outside the element"
//     },
//     {
//       question: "How do you select all elements of a class in CSS?",
//       options: [".classname", "#classname", "*classname", "/classname"],
//       answer: ".classname"
//     },
//     {
//       question: "Which CSS unit is relative to the root element?",
//       options: ["em", "px", "rem", "%"],
//       answer: "rem"
//     },
//     {
//       question: "Which of the following positions an element relative to its first positioned ancestor?",
//       options: ["static", "fixed", "absolute", "relative"],
//       answer: "absolute"
//     },
//     {
//       question: "Which property is used to control layout in flexbox?",
//       options: ["display", "flex-direction", "position", "float"],
//       answer: "flex-direction"
//     }
//   ],
//   js: [
//     {
//       question: "Which company developed JavaScript?",
//       options: ["Netscape", "Mozilla", "Sun Microsystems", "Oracle"],
//       answer: "Netscape"
//     },
//     {
//       question: "How do you write 'Hello World' in an alert box?",
//       options: ["msg('Hello World')", "alert('Hello World')", "msgBox('Hello World')", "alertBox('Hello World')"],
//       answer: "alert('Hello World')"
//     },
//     {
//       question: "Which keyword is used to declare a variable in JavaScript?",
//       options: ["var", "int", "string", "float"],
//       answer: "var"
//     },
//     {
//       question: "What does `===` mean in JavaScript?",
//       options: ["Assignment", "Comparison with type conversion", "Strict equality", "Not equal"],
//       answer: "Strict equality"
//     },
//     {
//       question: "How do you write a function in JavaScript?",
//       options: ["function = myFunc()", "function myFunc()", "function:myFunc()", "func myFunc()"],
//       answer: "function myFunc()"
//     },
//     {
//       question: "Which method adds an element at the end of an array?",
//       options: ["push()", "pop()", "shift()", "unshift()"],
//       answer: "push()"
//     },
//     {
//       question: "Which method is used to loop through an array?",
//       options: ["loop()", "each()", "forEach()", "iterate()"],
//       answer: "forEach()"
//     },
//     {
//       question: "Which operator is used to assign a value to a variable?",
//       options: ["*", "-", "=", "+"],
//       answer: "="
//     },
//     {
//       question: "Which of these is not a JavaScript data type?",
//       options: ["string", "number", "boolean", "character"],
//       answer: "character"
//     },
//     {
//       question: "What will `typeof []` return?",
//       options: ["array", "object", "list", "undefined"],
//       answer: "object"
//     }
//   ]
// };

// const navButtons = document.querySelectorAll('.nav-btn');
// const startBtn = document.getElementById('startBtn');
// const homeDiv = document.getElementById("home");
// const quizDiv = document.getElementById('quiz');
// const questionEl = document.getElementById('question');
// const optionsEl = document.getElementById('options');
// const nextBtn = document.getElementById('nextBtn');
// const resultDiv = document.getElementById("result");
// const resultMessage = document.getElementById("resultMessage");
// const resultDetails = document.getElementById("resultDetails");
// const tryAgainBtn = document.getElementById("tryAgainBtn");
// const nextSubjectBtn = document.getElementById("nextSubjectBtn");
// const goHomeBtn = document.getElementById("goHomeBtn");
// const subjectOrder = ['html', 'css', 'js'];


// let currentSubjectIndex = 0;
// let currentSubject = "";
// let currentQuestionIndex = 0;
// let currentQuestions = [];
// let score = 0;


// navButtons.forEach(button => {
//   button.addEventListener("click", () => {
//     const subject = button.getAttribute("data-subject");

//     if (subject === "home") {
//       quizDiv.style.display = "none";
//       homeDiv.style.display = "block";
//     } else {
//       currentSubject = subject;
//       currentQuestions = questions[subject];
//       currentQuestionIndex = 0;
//       homeDiv.style.display = "none";
//       quizDiv.style.display = "block";
//       showQuestion();
//     }
//   });
// });

// function showQuestion() {
//   const currentQ = currentQuestions[currentQuestionIndex];
//   questionEl.textContent = currentQ.question;
//   optionsEl.innerHTML = "";

//   currentQ.options.forEach(option => {
//     const btn = document.createElement("button");
//     btn.textContent = option;
//     btn.className = "option-btn";
//     btn.onclick = () => checkAnswer(option);
//     optionsEl.appendChild(btn);
//   });

//   nextBtn.style.display = "none";
// }

// function checkAnswer(selected) {
//   const correct = currentQuestions[currentQuestionIndex].answer;
//   if (selected === correct) {
//     alert("Correct!");
//   } else {
//     alert("Wrong!");
//   }
//   nextBtn.style.display = "block";
// }

// nextBtn.addEventListener("click", () => {
//   currentQuestionIndex++;

//   if (currentQuestionIndex < currentQuestions.length) {
//     showQuestion();
//   } else {
//     currentSubjectIndex++;
    
//     if (currentSubjectIndex < subjectOrder.length) {
//       currentSubject = subjectOrder[currentSubjectIndex];
//       currentQuestions = questions[currentSubject];
//       currentQuestionIndex = 0;
//       alert("Now starting " + currentSubject.toUpperCase() + " quiz");
//       showQuestion();
//     } else {
//       alert("🎉 You've finished all quizzes! Well done!");
//       quizDiv.style.display = "none";
//       homeDiv.style.display = "block";
//     }
//   }
// });



// startBtn.addEventListener('click', () => {
   
//   currentSubjectIndex = 0;
//   currentSubject = subjectOrder[currentSubjectIndex];
//   currentQuestions = questions[currentSubject];
//   currentQuestionIndex = 0;

//   homeDiv.style.display = 'none';
//   quizDiv.style.display = 'block';
//   showQuestion();
// });

// function checkAnswer(selected) {
//   const correct = currentQuestions[currentQuestionIndex].answer;
//   if (selected === correct) {
//     score++;
//     alert("Correct!");
//   } else {
//     alert("Wrong!");
//   }
//   nextBtn.style.display = "block";
// }

// function showResult() {
//   const total = currentQuestions.length;
//   const percent = Math.round((score / total) * 100);

//   resultMessage.textContent = `You scored ${score} out of ${total}`;
//   resultDetails.textContent = `Your percentage is ${percent}%. You ${percent >= 60 ? 'Pass ' : 'Fail '}.`;

//   quiz.style.display = "none";
//   resultDiv.style.display = "block";
// }

// tryAgainBtn.addEventListener("click", () => {
//   currentQuestionIndex = 0;
//   score = 0;
//   resultDiv.style.display = "none";
//   quiz.style.display = "block";
//   showQuestion();
// });

// nextSubjectBtn.addEventListener("click", () => {
//   const subjects = Object.keys(questions);
//   const currentIndex = subjects.indexOf(currentSubject);
//   const nextSubject = subjects[(currentIndex + 1) % subjects.length];

//   currentSubject = nextSubject;
//   currentQuestions = questions[currentSubject];
//   currentQuestionIndex = 0;
//   score = 0;
//   resultDiv.style.display = "none";
//   quiz.style.display = "block";
//   showQuestion();
// });

// goHomeBtn.addEventListener("click", () => {
//   resultDiv.style.display = "none";
//   homeDiv.style.display = "block";
// });





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




// function loadQuestion() {
//   optionsEl.innerHTML = '';


//   const currentQuestion = quizData[currentQuestionIndex];

//   questionEl.innerText = currentQuestion.question;


//   currentQuestion.options.forEach(option => {
//     const button = document.createElement('button');
//     button.innerText = option;
//     button.classList.add('option-btn');
//     optionsEl.appendChild(button);

   
//     button.addEventListener('click', () => {
//       selectAnswer(button, currentQuestion.answer);
//     });
//   });

//   nextBtn.style.display = 'none';
// }





function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
}

function loadHome() {
  document.getElementById("content").innerHTML = `
    <section class="home">
    <h1 id="homeH1">Welcome to ULEARNA Quiz App</h1>
    <p id="homeP">Test your knowledge in HTML, CSS, and JavaScript with fun quizzes</p>

    <button onclick="startQuiz('html')">Start Quiz</button>
  </section>
  `;
}

function startQuiz(subject) {
  console.log("Starting quiz for:", subject);
  // We'll implement quiz loading in next steps
}


