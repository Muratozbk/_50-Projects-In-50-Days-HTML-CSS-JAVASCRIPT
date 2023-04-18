const questionEl = document.getElementById('question')
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "Javascript",
    correct: "d"
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

let currentQuiz = 0;
let score = 0;

console.log(quizData[0])

loadQuiz()

function loadQuiz() {
  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer;
  answerEls.forEach(answerEl => {
    if (answerEl.checked === true) {
      answer = answerEl.id
    }
  })
  return answer;
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if (!answer) return;
  if (answer === quizData[currentQuiz].correct) {
    score++
    console.log(score)
  }
  currentQuiz++
  if (currentQuiz < quizData.length) {
    loadQuiz()
  } else {
    quiz.innerHTML = ` <h2 id="question">You answered ${score}/${quizData.length} questions correctly</h2>
      <button onclick="location.reload()">Reload</button> `
  }
})

function deselectAnswers() {
  answerEls.forEach(answer => answer.checked = false)
}


