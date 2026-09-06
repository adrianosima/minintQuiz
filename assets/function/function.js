import { questions } from "./data.js"

const questionElement = document.querySelector('#question')

const answerBtns = document.querySelector('#answer')
const nextBtn = document.querySelector('#nextBtn')
const title = document.querySelector('#title')

const history = document.getElementsByClassName('his')[0] 
const mi = document.getElementsByClassName('mi')[0] 
const ad = document.getElementsByClassName('ad')[0] 



let currentQuestionIndex = 0
let currentIndexQuestion = 0
let score = 0

/*iniciando o quis */
function startQuiz(){
    currentQuestionIndex = 0
    currentIndexQuestion = 1
    score = 0
    history.style.width = `0%`
    mi.style.width = `0%`
    ad.style.width = `0%`
    nextBtn.innerHTML = 'Proximo'
    showQuestion()
}
/*Terminando o quiz */

/*Criando novas questions para o quiz */
function resetState(){
    nextBtn.style.display = 'none'
    /*removendo todos os btn do elemento pai */
    while (answerBtns.firstChild){
        answerBtns.removeChild(answerBtns.firstChild)
    }
    /*fim */
}

/*Mostando as questons do quiz */
function showQuestion(){
    /*Chamando a função que apaga e reinicia o quiz */
    resetState()
    //fim
    /*Pegando as questons e as respostas de maneira dinamica */
    let currentQuestion = questions[currentQuestionIndex][currentIndexQuestion]


    questionElement.innerHTML = `${currentIndexQuestion}. ${currentQuestion.question}`
    title.innerHTML = questions[currentQuestionIndex][0]
    /*Percorrendo o div que tera as respostas, e addicionando as respostas dinamicamente*/
    currentQuestion.answers.forEach((answer)=>{
        const button = document.createElement('button')
        button.innerHTML = answer.text
        button.dataset.id = answer.id
        button.classList.add('btn')
        button.addEventListener('click', selectAnswer)
        answerBtns.appendChild(button) 
    })
    //fim
}
/*Termina aqui */

/*Selecionar a respostas */
function selectAnswer(e){
   const answers = questions[currentQuestionIndex][currentIndexQuestion].answers
/*Pegando apenas as resposta marcadas co, verdadeira(True) */
    const correctAnswer = answers.filter((answer)=> answer.correct === true)[0]
    //fim

    //verificando o btn que foi clicado
    const selectedBtn = e.target
    //pegar pelo id
    const isCorrect = selectedBtn.dataset.id== correctAnswer.id
    //colocando o css correto
    if (isCorrect && questions[0]){
        selectedBtn.classList.add('correct')
        score++
        history.style.width = `${score}.33%`
    }else{
        selectedBtn.classList.add('incorrect')
    }
    Array.from(answerBtns.children).forEach((button)=>{
        button.disabled = true
    })
    nextBtn.style.display = 'block'
}

function showScore(){
    resetState()
    questionElement.innerHTML = `Score ${score} de ${questions[currentQuestionIndex].length}`
    nextBtn.innerHTML = 'Play again'
    nextBtn.style.display = 'block'
}

function NextButton(){
    currentIndexQuestion++
    if (currentIndexQuestion < questions[currentQuestionIndex].length){
     showQuestion()
     
    }else{
        showScore()
        
    }
} 

nextBtn.addEventListener('click', ()=>{
    if (currentIndexQuestion < questions[currentQuestionIndex].length){
        NextButton()
        
    }else{
        startQuiz()
    }
})

console.log(questions.length)
//inicializando o quiz
startQuiz()