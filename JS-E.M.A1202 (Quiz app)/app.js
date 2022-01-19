const myQuestions = [
    {
        question: 'Javascript is _________ language.',
        answers: {
            a: 'Programming',
            b: 'Application',
            c: 'None of These',
            d: 'Scripting'
        },
        multi: false,
        correctAnswer: 'd'
    },
    {
        question:
            'Which of the following is a valid type of function javascript supports?',
        answers: {
            a: 'named function',
            b: 'anonymous function',
            c: 'both of the above',
            d: 'none of the above'
        },
        multi: false,
        correctAnswer: 'c'
    },
    {
        question:
            'Which built-in method returns the index within the calling String object of the first occurrence of the specified value?',
        answers: {
            a: 'getIndex()',
            b: 'location()',
            c: 'indexOf()',
            d: 'getLocation()'
        },
        multi: false,
        correctAnswer: 'c'
    },
    {
        question: 'Which one of the following is valid data type of JavaScript',
        answers: {
            a: 'number',
            b: 'void',
            c: 'boolean',
            d: 'nothing'
        },
        multi: false,
        correctAnswer: 'c'
    }
];

var question = document.querySelector('.question');
var answers = document.querySelectorAll('.answer');
var textA = document.querySelector('.text_a');
var textB = document.querySelector('.text_b')
var textC = document.querySelector('.text_c')
var textD = document.querySelector('.text_d')
var prevBtn = document.querySelector('.btn__prev')
var nextBtn = document.querySelector('.btn__next')
var submitBtn = document.querySelector('.btn__submit')
var result = document.querySelector('.score')
let currentQuiz = 0;
let score = 0

loadQuiz()
function loadQuiz() {
    currentQuizData = myQuestions[currentQuiz];
    question.innerHTML = `Question ${currentQuiz + 1}: ` + currentQuizData.question
    textA.innerHTML = currentQuizData.answers.a
    textB.innerHTML = currentQuizData.answers.b
    textC.innerHTML = currentQuizData.answers.c
    textD.innerHTML = currentQuizData.answers.d
}

function removeChecked() {
    answers.forEach(function (value) {
        value.checked = false;
    })
}
function getSelected() {
    let answer
    answers.forEach(function (value) {
        if (value.checked) {
            answer = value.id
        }

    })
    return answer
}

nextBtn.addEventListener('click', function () {
    const answerSelection = getSelected()
    console.log(answerSelection);
    if (answerSelection === myQuestions[currentQuiz].correctAnswer) {
        score++
        console.log(score);
    }


    if (currentQuiz < myQuestions.length - 1) {
        currentQuiz++;
        loadQuiz()
        removeChecked()
    }
    else {
        currentQuiz = myQuestions.length - 1
    }


    prevBtn.style.display = (currentQuiz === 0) ? '' : 'inline-block';
    nextBtn.style.display = (currentQuiz === myQuestions.length - 1) ? 'none' : '';
    submitBtn.style.display = (currentQuiz === myQuestions.length - 1) ? 'inline-block' : '';

})

prevBtn.addEventListener('click', function () {
    answerSelection = getSelected()
    if (answerSelection === myQuestions[currentQuiz].correctAnswer) {
        score++
    }
    if (currentQuiz > 0) {
        currentQuiz--;
        loadQuiz()

    } else {
        currentQuiz = 0
    }
    prevBtn.style.display = (currentQuiz > 0) ? 'inline-block' : 'none';
    nextBtn.style.display = (currentQuiz === myQuestions.length - 1) ? 'none' : '';
    submitBtn.style.display = (currentQuiz < myQuestions.length - 1) ? '' : 'inline-block';

})

submitBtn.addEventListener('click', function () {
    answerSelection = getSelected()
    if (answerSelection === myQuestions[currentQuiz].correctAnswer) {
        score++
    }

    result.innerHTML = `<h1 style='text-align:center'>Your score is ${score}/${myQuestions.length}</h1>`
    submitBtn.style.display = 'none'
    nextBtn.style.display = 'none'
    prevBtn.style.display = 'none'
})




