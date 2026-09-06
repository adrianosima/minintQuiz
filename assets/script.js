import { questions } from "./function/data.js"

const questionElement = document.getElementById('question')

const answerBtns = document.getElementById('answer')
const nextBtn = document.getElementById('nextBtn')

let currentQuestionIndex = 0
let score = 0

/*iniciando o quis */
function startQuiz(){
    currentQuestionIndex = 0
    score = 0
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
    let currentQuestion = questions[currentQuestionIndex]
    let questioNo = currentQuestionIndex +1
    questionElement.innerHTML = questioNo + '.' + currentQuestion.question
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
   const answers = questions[currentQuestionIndex].answers
/*Pegando apenas as resposta marcadas co, verdadeira(True) */
    const correctAnswer = answers.filter((answer)=> answer.correct === true)[0]
    //fim

    //verificando o btn que foi clicado
    const selectedBtn = e.target
    //pegar pelo id
    const isCorrect = selectedBtn.dataset.id== correctAnswer.id
    //colocando o css correto
    if (isCorrect){
        selectedBtn.classList.add('correct')
        score++
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
    questionElement.innerHTML = `Score ${score} de ${questions.length}`
    nextBtn.innerHTML = 'Play again'
    nextBtn.style.display = 'block'
}

function handleNextButton(){
    currentQuestionIndex++
    if (currentQuestionIndex < questions.length){
     showQuestion()
    }else{
        showScore()
    }
} 

nextBtn.addEventListener('click', ()=>{
    if (currentQuestionIndex < questions.length){
        handleNextButton()
    }else{
        startQuiz()
    }
})

//inicializando o quiz
startQuiz()