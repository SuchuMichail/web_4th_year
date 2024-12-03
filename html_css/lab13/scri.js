const questions = [
    {
        question: "Какая из перечисленных норм не относится к административному праву?",
        answers: [
            { text: "Право на судебный порядок защиты прав и свобод человека и гражданина", correct: true },
            { text: "Право на обжалование действий должностных лиц", correct: false },
            { text: "Право на получение лицензии на осуществление определенного вида деятельности", correct: false },
            { text: "Право на участие в управлении делами государства", correct: false }
        ]
    },
    {
        question: "Кто является субъектом административного права?",
        answers: [
            { text: "Только физические лица", correct: false },
            { text: "Только юридические лица", correct: false },
            { text: "И физические, и юридические лица", correct: true },
            { text: "Государство", correct: false }
        ]
    },
    {
        question: "Какая из перечисленных мер не является мерой административного принуждения?",
        answers: [
            { text: "Штраф", correct: false },
            { text: "Лишение свободы", correct: true },
            { text: "Административный арест", correct: false },
            { text: "Конфискация орудия совершения административного правонарушения", correct: false }
        ]
    },
    {
        question: "Кто уполномочен выдавать постановления о наложении административного штрафа?",
        answers: [
            { text: "Только судьи", correct: false },
            { text: "Только должностные лица органов внутренних дел", correct: false },
            { text: "Судьи и должностные лица органов внутренних дел", correct: true },
            { text: "Только прокуроры", correct: false }
        ]
    },
    {
        question: "В какой срок можно обжаловать постановление по делу об административном правонарушении?",
        answers: [
            { text: "В течение 10 дней", correct: true },
            { text: "В течение 1 месяца", correct: false },
            { text: "В течение 3 месяцев", correct: false },
            { text: "В течение 1 года", correct: false }
        ]
    },
    {
        question: "Какая из перечисленных мер не относится к мерам административного пресечения?",
        answers: [
            { text: "Запрет на определенные действия", correct: false },
            { text: "Принудительное лечение", correct: true },
            { text: "Запрет на посещение определенных мест", correct: false },
            { text: "Запрет на управление транспортным средством", correct: false }
        ]
    },
    {
        question: "Кто является органом, осуществляющим административное судопроизводство?",
        answers: [
            { text: "Суд", correct: true },
            { text: "Прокуратура", correct: false },
            { text: "Полиция", correct: false },
            { text: "Администрация", correct: false }
        ]
    },
    {
        question: "Какая из перечисленных статей не относится к Кодексу об административных правонарушениях РФ?",
        answers: [
            { text: "Статья о защите прав потребителей", correct: false },
            { text: "Статья о защите окружающей среды", correct: false },
            { text: "Статья о защите общественного порядка", correct: false },
            { text: "Статья о защите конституционных прав и свобод человека и гражданина", correct: true }
        ]
    },
    {
        question: "В каком случае может быть применена административная ответственность к юридическому лицу?",
        answers: [
            {text: "Только за совершение административного правонарушения", correct: false},
            {text: "Только за совершение преступления", correct: false},
            {text: "За совершение как административного правонарушения, так и преступления", correct: true},
            {text: "Административная ответственность не может быть применена к юридическому лицу", correct: false}
        ]
    },
    
    {
        question: "Какая из перечисленных мер не относится к мерам административного воздействия?",
        answers: 
        [
            {text: "Предупреждение", correct: false},
            {text: "Штраф", correct: false},
            {text: "Лишение специального права, предоставленного физическому лицу", correct: false},
            {text: "Лишение свободы", correct: true}
        ]
    },
    {
        question: "Кто уполномочен возбуждать дела об административных правонарушениях?",
        answers: [
            {text: "Только судьи", correct: false},
            {text: "Только должностные лица органов внутренних дел", correct: false},
            {text: "Судьи и должностные лица органов внутренних дел", correct: false},
            {text: "Все перечисленные лица", correct: true}
        ]
    },
    {
        question: "В какой срок должно быть рассмотрено дело об административном правонарушении?",
        answers: [
            {text: "В течение 10 дней", correct: false},
            {text: "В течение 1 месяца", correct: true},
            {text: "В течение 3 месяцев", correct: false},
            {text: "Срок не установлен", correct: false}
        ]
    },
    {
        question: "Какая из перечисленных мер не относится к мерам административного наказания?",
        answers: [
            {text: "Штраф", correct: false},
            {text: "Административный арест", correct: false},
            {text: "Лишение специального права, предоставленного физическому лицу", correct: false},
            {text: "Принудительное лечение", correct: true}
        ]
    },
    {
        question: "Кто уполномочен выносить постановления о прекращении производства по делу об административном правонарушении?",
        answers: [
            {text: "Только судьи", correct: false},
            {text: "Только должностные лица органов внутренних дел", correct: false},
            {text: "Судьи и должностные лица органов внутренних дел", correct: false},
            {text: "Все перечисленные лица", correct: true}
        ]
    },
    {
        question: "В каком случае может быть применена административная ответственность к несовершеннолетнему?",
        answers: [
            {text: "Только за совершение административного правонарушения", correct: true},
            {text: "Только за совершение преступления", correct: false},
            {text: "За совершение как административного правонарушения, так и преступления", correct: false},
            {text: "Административная ответственность не может быть применена к несовершеннолетнему", correct: false}
        ]
    },
    {
        question: "Какая из перечисленных мер не относится к мерам административного предупреждения?",
        answers: [
            {text: "Предупреждение", correct: false},
            {text: "Штраф", correct: true},
            {text: "Лишение специального права, предоставленного физическому лицу", correct: false},
            {text: "Запрет на определенные действия", correct: false}
        ]
    },
    {
        question: "Кто уполномочен выносить постановления о назначении административного наказания?",
        answers: [
            {text: "Только судьи", correct: false},
            {text: "Только должностные лица органов внутренних дел", correct: false},
            {text: "Судьи и должностные лица органов внутренних дел", correct: false},
            {text: "Все перечисленные лица", correct: true}
        ]
    },
    {
        question: "В какой срок должно быть обжаловано постановление по делу об административном правонарушении?",
        answers: [
        {text: "В течение 10 дней", correct: true},
        {text: "В течение 1 месяца", correct: false},
        {text: "В течение 3 месяцев", correct: false},
        {text: "Срок не установлен", correct: false}
        ]
    },
    {
        question: "Какая из перечисленных мер не относится к мерам административного воздействия на юридических лиц?",
        answers: [
            {text: "Штраф", correct: false},
            {text: "Приостановление деятельности", correct: false},
            {text: "Лишение специального права, предоставленного юридическому лицу", correct: false},
            {text: "Административный арест", correct: true}
        ]
    },
    {
        question: "Кто уполномочен выносить постановления о возбуждении дела об административном правонарушении?",
        answers: [
            {text: "Только судьи", correct: false},
            {text: "Только должностные лица органов внутренних дел", correct: false},
            {text: "Судьи и должностные лица органов внутренних дел", correct: false},
            {text: "Все перечисленные лица", correct: true}
        ]
    }
];

const edit_questions = [

];

let questions_size = questions.length + edit_questions.length;

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const answerEditElement = document.getElementById('answer-edit');
const quizAppElement = document.getElementById('quiz-app');
const resultsElement = document.getElementById('results');

let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions, shuffledEditQuestions;

startButton.addEventListener("click",startGame);

nextButton.addEventListener("click",() => {
    currentQuestionIndex++;
    setNextQuestion();
});


function startGame(){
    startButton.classList.add("hide");
    questionContainerElement.classList.remove("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    shuffledEditQuestions = edit_questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    setNextQuestion()
}

function setNextQuestion() {
    resetState();    
    if(currentQuestionIndex >= questions.length){
        showEditQuestion(shuffledEditQuestions[currentQuestionIndex-questions.length]);
    }
    else{
        showQuestion(shuffledQuestions[currentQuestionIndex]);
    }
}
  
function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function showQuestion(question) {
    questionElement.innerText = (currentQuestionIndex + 1) + '/' + questions_size + '. ' + question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', () => selectAnswer(button));
        answerButtonsElement.append(button);
    });
}

function showEditQuestion(question){
    questionElement.innerText = (currentQuestionIndex + 1) + '/' + questions_size + '. ' + question.question;
    
    const edit = document.createElement('input');
    edit.type = 'text';

    const button = document.createElement('button');
    button.textContent = 'Подтвердить';

    let div = document.createElement('div');

    answerEditElement.append(edit);
    answerEditElement.append(button);
    answerEditElement.append(div);

    button.addEventListener("click", () => {
        if(edit.value == question.answer){
            div.textContent = 'Верно';
            score++;
        }
        else{
            div.textContent = 'Неправильно';
        }

        setTimeout(() => {
            if (questions_size > currentQuestionIndex + 1) {
                nextButton.classList.remove('hide');
            } else {
                concludeQuiz();
            }
        }, 500);
    });
}



function selectAnswer(selectedButton) {
    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
        setStatusClass(button, button.dataset.correct);
    });
  
    const correct = selectedButton.dataset.correct;
    if (correct) {
        score++;
    }
  
    setTimeout(() => {
        if (questions_size > currentQuestionIndex + 1) {
            nextButton.classList.remove('hide');
        } else {
            concludeQuiz();
        }
    }, 500);
}


function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function concludeQuiz() {
    questionContainerElement.classList.add('hide');
    nextButton.classList.add('hide');
  
    resultsElement.classList.remove('hide');
    resultsElement.innerHTML = `
        <h2>Викторина завершена</h2>
        <p>Ваш счёт: ${score} из ${questions_size}</p>
    `;
    let res = score / questions_size;
    if(res >= 0.9){
        resultsElement.innerHTML += `
            <p>Отличная работа.</p>
            <img src="excellent.png">
        `;
    }
    else if(res >= 0.7){
        resultsElement.innerHTML += `
            <p>Хорошая работа.</p>
            <img src="good.png">
        `;
    }
    else if(res >= 0.4){
        resultsElement.innerHTML += `
            <p>Удовлетворительная работа.</p>
            <img src="bad.jpg">
        `;
    }
    else{
        resultsElement.innerHTML += `
            <p>Плохая работа.</p>
            <img src="gigabad.jpg">
        `;
    }
    quizAppElement.appendChild(resultsElement);
}