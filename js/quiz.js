var data = [
    {
        "ID": 1,
        "classname": "text",
        "question": "What does HTML stand for?",
        "answers" : [ {
                "type": "a",
                "value": "Home Tool Markup Language"
            },{
                "type": "b",
                "value": "Hyperlinks and Text Markup Language"
            },{
                "type": "c",
                "value": "Hyper Text Markup Language"
            },{
                "type": "d",
                "value": null
            } ],
        "goodAnswer": "c"
    },{
        "ID": 2,
        "classname": "text",
        "question": "What does CSS stand for?",
        "answers" : [ {
                "type": "a",
                "value": "Creative Style Sheets"
            },{
                "type": "b",
                "value": "Computer Style Sheets"
            },{
                "type": "c",
                "value": "Colorful Style Sheets"
            },{
                "type": "d",
                "value": "Cascading Style Sheets"
            } ],
        "goodAnswer": "d"
    },{
        "ID": 3,
        "classname": "css",
        "question": "Which is the correct CSS syntax?",
        "answers" : [ {
                "type": "a",
                "value": "{body;color:black;}"
            },{
                "type": "b",
                "value": "{body:color=black;}"
            },{
                "type": "c",
                "value": "body:color=black;"
            },{
                "type": "d",
                "value": "body {color: black;}"
            } ],
        "goodAnswer": "d"
    },{
        "ID": 4,
        "classname": "comment",
        "question": "How do you insert a comment in a CSS file?",
        "answers" : [ {
                "type": "a",
                "value": "<!-- comment -->"
            },{
                "type": "b",
                "value": "// comment"
            },{
                "type": "c",
                "value": "/* comment */"
            },{
                "type": "d",
                "value": "//* comment *//"
            } ],
        "goodAnswer": "c"
    },{
        "ID": 5,
        "classname": "hexcodes",
        "question": "Which hex code stands for yellow",
        "answers" : [ {
                "type": "a",
                "value": " #FF00FF"
            },{
                "type": "b",
                "value": "#FFFF00"
            },{
                "type": "c",
                "value": "#00FFFF"
            },{
                "type": "d",
                "value": "#00FF00"
            } ],
        "goodAnswer": "b"
    },{
        "ID": 6,
        "classname": "text",
        "question": "Which property is used to change the font of an element?",
        "answers" : [ {
                "type": "a",
                "value": "font"
            },{
                "type": "b",
                "value": "font-style"
            },{
                "type": "c",
                "value": "font-family"
            },{
                "type": "d",
                "value": "font-type"
            } ],
        "goodAnswer": "c"
    },{
        "ID": 7,
        "classname": "html",
        "question": "How do you create a list which contains items with a bullet",
        "answers" : [ {
                "type": "a",
                "value": "<ul style=\"list-style-type:disc\"></ul>"
            },{
                "type": "b",
                "value": "<ol style=\"list-style-type:disc\"></ol>"
            },{
                "type": "c",
                "value": "<ul style=\"list-style-type:circle\"></ul>"
            },{
                "type": "d",
                "value": "<ol style=\"list-style-type:circle\"></ol>"
            } ],
        "goodAnswer": "a"
    },{
        "ID": 8,
        "classname": "text",
        "question": "What is the default value of the position property",
        "answers" : [ {
                "type": "a",
                "value": "fixed"
            },{
                "type": "b",
                "value": "static"
            },{
                "type": "c",
                "value": "relative"
            },{
                "type": "d",
                "value": "absolute"
            } ],
        "goodAnswer": "b"
    },{
        "ID": 9,
        "classname": "text",
        "question": "Which browsers use the -webkit- prefix?",
        "answers" : [ {
                "type": "a",
                "value": "Mozilla, Chrome and Safari"
            },{
                "type": "b",
                "value": "Chrome, Safari and iOS"
            },{
                "type": "c",
                "value": "Opera and Safari"
            },{
                "type": "d",
                "value": "Mozilla, Android and Opera"
            } ],
        "goodAnswer": "a"
    },{
        "ID": 10,
        "classname": "text",
        "question": "Who is making the Web standards?",
        "answers" : [ {
                "type": "a",
                "value": "Google"
            },{
                "type": "b",
                "value": "Microsoft"
            },{
                "type": "c",
                "value": "Mozilla"
            },{
                "type": "d",
                "value": "The World Wide Web Consortium"
            } ],
        "goodAnswer": "d"
    },{
        "ID": 11,
        "classname": "html",
        "question": "Choose the correct HTML element to define important text",
        "answers" : [ {
                "type": "a",
                "value": "<i>"
            },{
                "type": "b",
                "value": "<strong>"
            },{
                "type": "c",
                "value": "<important>"
            },{
                "type": "d",
                "value": "<b>"
            } ],
        "goodAnswer": "b"
    },{
        "ID": 12,
        "classname": "text",
        "question": "What is the correct HTML for inserting an image?",
        "answers" : [ {
                "type": "a",
                "value": "<img alt=\"MyImage\"> image.gif </img>"
            },{
                "type": "b",
                "value": "<img src=\"image.gif\" alt=\"MyImage\">"
            },{
                "type": "c",
                "value": "<img href=\"image.gif\" alt=\"MyImage\">"
            },{
                "type": "d",
                "value": "<image src=\"image.gif\" alt=\"MyImage\">"
            } ],
        "goodAnswer": "b"
    },{
        "ID": 13,
        "classname": "text",
        "question": "An <iframe> is used to display a web page within a web page.",
        "answers" : [ {
                "type": "a",
                "value": "true"
            },{
                "type": "b",
                "value": "false"
            },{
                "type": "c",
                "value": "There is no such thing as an <iframe>"
            },{
                "type": "d",
                "value": null,
            } ],
        "goodAnswer": "a"
    },{
        "ID": 14,
        "classname": "html",
        "question": "What input type is invalid?",
        "answers" : [ {
                "type": "a",
                "value": "<input type=\"range\">"
            },{
                "type": "b",
                "value": "<input type=\"time\">"
            },{
                "type": "c",
                "value": "<input type=\"datetime-local\">"
            },{
                "type": "d",
                "value": "<input type=\"mail\">",
            } ],
        "goodAnswer": "d"
    },{
        "ID": 15,
        "classname": "css",
        "question": "To make an element partially grey, you use:",
        "answers" : [ {
                "type": "a",
                "value": "grayscale(1/2)"
            },{
                "type": "b",
                "value": "grayscale(0.5)"
            },{
                "type": "c",
                "value": "grayscale(50%)"
            },{
                "type": "d",
                "value": null,
            } ],
        "goodAnswer": "a"
    },{
        "ID": 16,
        "classname": "css",
        "question": "How can you center your flex items along the main axis?",
        "answers" : [ {
                "type": "a",
                "value": "align-self"
            },{
                "type": "b",
                "value": "align-items"
            },{
                "type": "c",
                "value": "justify-content"
            },{
                "type": "d",
                "value": null,
            } ],
        "goodAnswer": "c"
    },{
        "ID": 17,
        "classname": "html",
        "question": "Which HTML element does not exist?",
        "answers" : [ {
                "type": "a",
                "value": "<details>"
            },{
                "type": "b",
                "value": "<keygen>"
            },{
                "type": "c",
                "value": "<options>"
            },{
                "type": "d",
                "value": "<samp>"
            } ],
        "goodAnswer": "c"
    }
];

var hints = [
    'Vroeger kwam je hier heel vaak',
    'Toen je niet meer thuis woonde, ging je toch vaak eerst nog hierheen om gewoon even te kijken',
    'Ooit was het van jou',
    'Als er al een lichtje gaat branden, moet je misschien kijken waarmee je het licht op deze plek echt laat branden',
    'Je moet misschien een krukje pakken, dan kan je er overheen kijken',
    'Nu hoef ik je denk echt niets meer te vertellen. Ga maar snel kijken.'
];

// Document Variables
var questionSection = document.getElementById("question-container");
var questionTitle = document.getElementById("question-title");
var questionAnswers = document.getElementById("question-answers");
var questionAnswerA = document.getElementById("a");
var questionAnswerB = document.getElementById("b");
var questionAnswerC = document.getElementById("c");
var questionAnswerD = document.getElementById("d");
var questionLength = data.length;
var progress = document.getElementById("progress");

var resultsSection = document.getElementById("results");
var resultsTitle = document.getElementById("results__title");
var resultsGrade = document.getElementById("results__grade");
var hintsSection = document.getElementById("hints");

// Variables that will be set in the functions
var questionNumber = 1;
var rightAnswers = 0;
var wrongAnswers = 0;
var valAnswerA;
var valAnswerB;
var valAnswerC;
var valAnswerD;


function loadQuestion(data, oldQuestion, oldAnswer){
    progress.setAttribute('value', questionNumber);
    progress.setAttribute('max', questionLength);
    
    questionTitle.innerText = data.question;
    questionAnswers.className = 'question__list';
    questionAnswers.classList.add(data.classname);
    data.answers.forEach(function(answer){
        switch (answer.type) {
            case 'a':
                valAnswerA = answer.value
                break;
            case 'b':
                valAnswerB = answer.value
                break;
            case 'c':
                valAnswerC = answer.value
                break;
            case 'd':
                valAnswerD = answer.value
                break;
            default:
                break;
        }
    })
    questionAnswerA.innerText = valAnswerA;
    questionAnswerB.innerText = valAnswerB;
    questionAnswerC.innerText = valAnswerC;
    if (valAnswerD) {
        questionAnswerD.innerText = valAnswerD;
        questionAnswerD.classList.remove('hide');
    } else {
        questionAnswerD.classList.add('hide');
    }

    if (oldQuestion){
        if (oldQuestion.goodAnswer === oldAnswer){
            rightAnswers ++;
        } else {
            wrongAnswers ++;
        }    
    }
}

function onKeyDown(event){
    switch (event.code) {
        case 'ArrowUp':
            nextQuestion('a');
            break;
        case 'ArrowDown':
            nextQuestion('c');
            break;
        case 'ArrowLeft':
            nextQuestion('d');
            break;
        case 'ArrowRight':
            nextQuestion('b');
            break;
        default:
    }
}

function nextQuestion(answer){
    toggleLoading(true, answer);
    questionNumber ++;
    setTimeout(() => {
        toggleLoading(false, answer);
        if (questionNumber >=  questionLength) {
            showResults();
            return;
        }
        loadQuestion(data[questionNumber - 1], data[questionNumber -2], answer);
    }, 1000);
}

function showResults(){
    questionSection.style.display = 'none';
    resultsSection.style.display = 'block';
    progress.style.display = 'none';

    var quizGrade = ((rightAnswers / questionLength) * 9) + 1;

    var resultsText;
    if (quizGrade > 1 && quizGrade < 5){
        resultsText = 'Damn, you\'d say you would still know something. But this really sucks. You know nothing anymore man.'
        numHints = 3;
    } else if (quizGrade > 5 && quizGrade < 7) {
        resultsText = 'I mean, it\'s okay but this still is a bad score dude.';
        numHints = 4;
    } else if (quizGrade > 7 && quizGrade < 8) {
        resultsText = 'Not so bad. You still know your Frontend';
        numHints = 4;
    } else if (quizGrade > 8 && quizGrade < 9) {
        resultsText = 'Wow! Very nice, I knew you could do it';
        numHints = 5;
    } else if (quizGrade > 9 && quizGrade < 10) {
        resultsText = 'WAY TO GO!!! You still know how to be a Frontender!!!';
        numHints = 6;
    }

    resultsTitle.innerText = resultsText;
    resultsGrade.innerText = Math.round(quizGrade * 10) / 10;
    
    for (let i = 0; i < numHints; i++) {
        hintsSection.innerHTML += '<li>' + hints[i] + '</li>';
    }
}

function toggleLoading(bool, answer) {
    if (bool) {
        document.getElementById(answer).classList.add('chosen');
    } else {
        document.getElementById(answer).classList.remove('chosen');
    }
}

window.addEventListener('keydown', onKeyDown);

resultsSection.style.display = 'none';
loadQuestion(data[questionNumber - 1], data[questionNumber -2], null);
