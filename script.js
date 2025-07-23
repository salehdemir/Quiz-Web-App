const quizzes={
      html:[
        {q:"What does HTML stand for?",o:["Hyper Text Markup Language","Home Tool Markup Language","Hyperlinks and Text Markup Language","Hyperlinking Text Management Language"],a:0},
        {q:"Which tag creates a line break?",o:["<lb>","<break>","<br>","<line>"],a:2},
        // {q:"Choose the correct HTML element for the largest heading:",o:["<h6>","<heading>","<h1>","<head>"],a:2},
        // {q:"Which attribute specifies a unique identifier for an element?",o:["class","id","name","data"],a:1},
        // {q:"Which tag is used to embed an image?",o:["<img>","<pic>","<image>","<src>"],a:0},
        // {q:"Which element defines important text?",o:["<important>","<em>","<strong>","<b>"],a:2},
        // {q:"Which tag creates a hyperlink?",o:["<a>","<link>","<href>","<url>"],a:0},
        // {q:"What is the correct HTML for adding a background color?",o:["<body bg='yellow'>","<body style='background-color:yellow;'>","<background>yellow</background>","<body background='yellow'>"],a:1},
        // {q:"Which element is used for a table row?",o:["<tr>","<td>","<table>","<th>"],a:0},
        // {q:"Which element contains meta information for the document?",o:["<meta>","<header>","<head>","<body>"],a:2}
      ],
      css:[
        {q:"What does CSS stand for?",o:["Cascading Style Sheets","Colorful Style Sheets","Creative Style System","Computer Style Sheets"],a:0},
        {q:"Which property is used to change text color?",o:["font-color","color","text-color","fgcolor"],a:1},
        {q:"How do you link a CSS file in HTML?",o:["<stylesheet src='style.css'>","<css href='style.css'>","<link rel='stylesheet' href='style.css'>","<style src='style.css'>"],a:2},
        {q:"Which property changes the left margin?",o:["padding-left","margin-left","indent","space-left"],a:1},
        {q:"Which is the correct CSS comment syntax?",o:["/* comment */","// comment","<!-- comment -->","# comment"],a:0},
        {q:"Which selector selects all <p> elements inside a div?",o:["div+p","div>p","div p","div~p"],a:2},
        {q:"How do you make text bold?",o:["font-weight:bold;","style:bold;","text:bold;","font:bold;"],a:0},
        {q:"Which property changes the size of an element's font?",o:["font-size","text-size","size","type-size"],a:0},
        {q:"Which value positions an element relative to its first positioned ancestor?",o:["static","absolute","fixed","relative"],a:1},
        {q:"What does the z-index property control?",o:["vertical alignment","stacking order","horizontal alignment","opacity"],a:1}
      ],
      js:[
        {q:"Which company developed JavaScript?",o:["Netscape","Microsoft","Sun Microsystems","IBM"],a:0},
        {q:"Which symbol is used for comments in JavaScript?",o:["//","<!--","##","**"],a:0},
        {q:"How do you declare a variable in ES6?",o:["var x;","let x;","dim x;","int x;"],a:1},
        {q:"Which method converts JSON to a JavaScript object?",o:["JSON.parse()","JSON.stringify()","JSON.convert()","JSON.object()"],a:0},
        {q:"Which operator checks both value and type equality?",o:["==","=","===","!="],a:2},
        {q:"Which array method adds an element to the end?",o:["push()","pop()","shift()","unshift()"],a:0},
        {q:"What is the output of typeof null?",o:["'null'","'object'","'undefined'","'boolean'"],a:1},
        {q:"Which keyword is used to create a class?",o:["function","class","constructor","object"],a:1},
        {q:"Which function is called after a set delay?",o:["timer()","setTimeout()","delay()","wait()"],a:1},
        {q:"What does DOM stand for?",o:["Document Object Model","Data Object Model","Digital Ordinance Model","Desktop Object Model"],a:0}
      ]
    };



    let currentTopic="";
    let currentPage=0;
    let userAnswers=[];
    
    const startBtn =document.getElementById("homeBtn");
    const homeSec=document.getElementById("home");
    const quizSec=document.getElementById("quiz");
    const resultSec=document.getElementById("result");
    const questionsContainer=document.getElementById("questions-container");
    const nextBtn=document.getElementById("next-btn");
    const submitBtn=document.getElementById("submit-btn");
    const scoreDiv=document.getElementById("score");
    const percentDiv=document.getElementById("percentage");
    const tryAgainBtn=document.getElementById("try-again");
    const goHomeBtn=document.getElementById("go-home");
    const navLinks=document.querySelectorAll(".nav-link");
    const burger=document.getElementById("burger");
    const navLinksUl=document.getElementById("navLinks");


    burger.addEventListener("click",()=>{
      burger.classList.toggle("open");
      navLinksUl.classList.toggle("show");
    });


    navLinks.forEach(link=>{
      link.addEventListener("click",e=>{
        e.preventDefault();
        navLinks.forEach(l=>l.classList.remove("active"));
        link.classList.add("active");
        navLinksUl.classList.remove("show");
        burger.classList.remove("open");
        startQuiz(link.dataset.topic);
      });
    });


    function startQuiz(topic) {
  currentTopic = topic;
  currentPage = 0;
  userAnswers = [];
  showSection("quiz");
  loadQuestion();
}

startBtn.addEventListener("click", ()=> {
startQuiz("html");

})

    function showSection(section) {
  homeSec.style.display = section === "home" ? "flex" : "none";
  quizSec.style.display = section === "quiz" ? "block" : "none";
  resultSec.style.display = section === "result" ? "block" : "none";
}



function loadQuestion() {
  const questionData = quizzes[currentTopic][currentPage];
  questionsContainer.innerHTML = "";

  const qEl = document.createElement("div");
  qEl.className = "question";
  qEl.textContent = `${currentPage + 1}. ${questionData.q}`;

  const optionsContainer = document.createElement("div");
  optionsContainer.className = "options";

  questionData.o.forEach((opt, index) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "option";
    input.value = index;
    label.appendChild(input);
    label.appendChild(document.createTextNode(` ${opt}`));
    optionsContainer.appendChild(label);
  });

  questionsContainer.appendChild(qEl);
  questionsContainer.appendChild(optionsContainer);

  nextBtn.style.display = "block";
  submitBtn.style.display = "none";
}

nextBtn.addEventListener("click", () => {
  const selected = document.querySelector("input[name='option']:checked");
  if (!selected) {
      if (!document.getElementById("error-msg")) {
    const error = document.createElement("div");
    error.id = "error-msg";
   error.className = "error-message";
    // error.textContent = "⚠️ Please select one answer.";
    document.querySelector(".options").appendChild(error);
  }
    return;
  }
     else {
  const existingError = document.getElementById("error-msg");
  if (existingError) existingError.remove();
}

  userAnswers.push(Number(selected.value));
  currentPage++;

  if (currentPage < quizzes[currentTopic].length) {
    loadQuestion();
  } else {
    showResults();
  }
});

submitBtn.addEventListener("click", () => {
  showResults();
});

function showResults() {
  showSection("result");

  const correctAnswers = quizzes[currentTopic].filter(
    (q, i) => q.a === userAnswers[i]
  );

  const score = correctAnswers.length;
  const percent = (score / quizzes[currentTopic].length) * 100;

  scoreDiv.textContent = `Your answered ${score} out of ${quizzes[currentTopic].length} correctly.`;
  percentDiv.textContent = `Your score is ${percent}% – ${percent>=50?"Pass 🎉":"Fail ❌"}`;

}

tryAgainBtn.addEventListener("click", () => {
  startQuiz(currentTopic);
});

goHomeBtn.addEventListener("click", () => {
  navLinks.forEach(l => l.classList.remove("active"));
  showSection("home");
});

