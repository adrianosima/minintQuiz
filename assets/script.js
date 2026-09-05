const questions =[
    {
        question: 'Em que continente está localizada Angola?',
        answers: [
            {id:1, text: 'Tubarão', correct: false},
            {id:2, text: 'Baleia Azul', correct: false},
            {id:3, text: 'Angola está localizada no continente africano, na região da África Austral.', correct: true},
            {id:4, text: 'Elefante', correct: false}
        ]
    },
    {
        question: 'Qual é a capital de Angola?',
        answers: [
            {id:1, text: 'Tubarão', correct: false},
            {id:2, text: 'Baleia Azul', correct: false},
            {id:3, text: 'girafa', correct: false},
            {id:4, text: 'Luanda', correct: true}
        ]
    },
    {
        question: 'Quais países fazem fronteira terrestre com Angola?',
        answers: [
            {id:1, text: 'Tubarão', correct: false},
            {id:2, text: ' República Democrática do Congo, República do Congo, Zâmbia e Namíbia', correct: true},
            {id:3, text: 'girafa', correct: false},
            {id:4, text: 'Elefante', correct: false}
        ]
    },
    {
        question: 'Quando foi proclamada a Independência Nacional de Angola?',
        answers: [
            {id:1, text: 'Tubarão', correct: false},
            {id:2, text: 'Baleia Azul', correct: false},
            {id:3, text: 'girafa', correct: false},
            {id:4, text: ' 11 de Novembro de 1975', correct: true}
        ]
    },
    {
        question: 'Quem proclamou a Independência de Angola?',
        answers: [
            {id:1, text: 'António Agostinho Neto.', correct: true},
            {id:2, text: 'Baleia Azul', correct: false},
            {id:3, text: 'girafa', correct: false},
            {id:4, text: 'Elefante', correct: false}
        ]
    },
    {
        question: 'Qual era o nome oficial de Angola durante o período colonial?',
        answers: [
            {id:1, text: 'Tubarão', correct: false},
            {id:2, text: 'Baleia Azul', correct: false},
            {id:3, text: 'Angola está localizada no continente africano, na região da África Austral.', correct: false},
            {id:4, text: 'Província Ultramarina de Angola ', correct: true}
        ]
    },
    {
        question: 'Durante aproximadamente quanto tempo Angola esteve sob domínio colonial português?',
        answers: [
            {id:1, text: 'Tubarão', correct: false},
            {id:2, text: 'Baleia Azul', correct: false},
            {id:3, text: 'Durante vários séculos, até à proclamação da Independência em 1975', correct: true},
            {id:4, text: 'Elefante', correct: false}
        ]
    },
    {
        question: 'Quais foram os principais movimentos de libertação nacional de Angola?',
        answers: [
            {id:1, text: 'Tubarão', correct: false},
            {id:2, text: 'Baleia Azul', correct: false},
            {id:3, text: '•MPLA; •FNLA; •UNITA;', correct: true},
            {id:4, text: 'Elefante', correct: false}
        ]
    },
    {
        question: ' O que significa MPLA?',
        answers: [
            {id:1, text: 'Tubarão', correct: false},
            {id:2, text: 'Baleia Azul', correct: false},
            {id:3, text: 'Angola está localizada no continente africano, na região da África Austral.', correct: false},
            {id:4, text: ' Movimento Popular de Libertação de Angola.', correct: true}
        ]
    },
    {
        question: ' O que significa FNLA?',
        answers: [
            {id:1, text: 'Tubarão', correct: false},
            {id:2, text: 'Baleia Azul', correct: false},
            {id:3, text: 'Frente Nacional de Libertação de Angola', correct: true},
            {id:4, text: 'Elefante', correct: false}
        ]
    },
    {
        question: 'O que significa UNITA?',
        answers: [
            {id:1, text: 'União Nacional para a Independência Total de Angola.', correct: true},
            {id:2, text: 'Baleia Azul', correct: false},
            {id:3, text: 'Angola está localizada no continente africano, na região da África Austral.', correct: false},
            {id:4, text: 'Elefante', correct: false}
        ]
    },
    {
        question: 'Quem foi o primeiro Presidente de Angola?',
        answers: [
            {id:1, text: ' António Agostinho Neto.', correct: true},
            {id:2, text: 'Baleia Azul', correct: false},
            {id:3, text: 'Angola está localizada no continente africano, na região da África Austral.', correct: false},
            {id:4, text: 'Elefante', correct: false}
        ]
    },
    {
        question: 'Quando começou a luta armada de libertação nacional em Angola?',
        answers: [
            {id:1, text: 'Tubarão', correct: false},
            {id:2, text: 'A luta armada é geralmente situada a partir de 4 de Fevereiro de 1961, data associada ao início da luta armada de libertação nacional.', correct: true},
            {id:3, text: 'Angola está localizada no continente africano, na região da África Austral.', correct: false},
            {id:4, text: 'Elefante', correct: false}
        ]
    },
    {
        question: 'O que aconteceu em 4 de Fevereiro de 1961?',
        answers: [
            {id:1, text: 'Tubarão', correct: false},
            {id:2, text: 'Ocorreram ataques contra estabelecimentos coloniais em Luanda, data que passou a ser considerada um marco do início da luta armada de libertação nacional em Angola', correct: true},
            {id:3, text: 'Angola está localizada no continente africano, na região da África Austral.', correct: false},
            {id:4, text: 'Elefante', correct: false}
        ]
    },
    {
        question: 'O que aconteceu em 15 de Março de 1961',
        answers: [
            {id:1, text: 'Tubarão', correct: false},
            {id:2, text: 'Baleia Azul', correct: false},
            {id:3, text: 'Registaram-se ataques e levantamentos no Norte de Angola, marcando uma importante fase da luta contra o domínio colonial português.', correct: true},
            {id:4, text: 'Elefante', correct: false}
        ]
    },
    {
        question: 'Quem foi Agostinho Neto?',
        answers: [
            {id:1, text: 'Tubarão', correct: false},
            {id:2, text: 'Baleia Azul', correct: false},
            {id:3, text: 'Foi médico, poeta, líder do MPLA e o primeiro Presidente da República de Angola após a Independência.', correct: true},
            {id:4, text: 'Elefante', correct: false}
        ]
    },
    {
        question: 'Por que o ano de 2002 é importante na história recente de Angola?',
        answers: [
            {id:1, text: 'Tubarão', correct: false},
            {id:2, text: 'Baleia Azul', correct: false},
            {id:3, text: 'Angola está localizada no continente africano, na região da África Austral.', correct: false},
            {id:4, text: ' Porque marcou o fim da guerra civil e o início de uma nova fase de paz,reconstrução e desenvolvimento nacional.', correct: true}
        ]
    },
    {
        question: 'Quando terminou a guerra civil em Angola?',
        answers: [
            {id:1, text: '2002', correct: true},
            {id:2, text: 'Baleia Azul', correct: false},
            {id:3, text: 'Angola está localizada no continente africano, na região da África Austral.', correct: false},
            {id:4, text: 'Elefante', correct: false}
        ]
    },
    {
        question: 'Quem foi Jonas Savimbi?',
        answers: [
            {id:1, text: 'Tubarão', correct: false},
            {id:2, text: 'Baleia Azul', correct: false},
            {id:3, text: ' Foi fundador e líder da UNITA e uma das principais figuras da guerra civil angolana', correct: true},
            {id:4, text: 'Elefante', correct: false}
        ]
    },
    {
        question: 'Qual é a data comemorativa da Independência Nacional?',
        answers: [
            {id:1, text: 'Tubarão', correct: false},
            {id:2, text: ' 11 de Novembro', correct: true},
            {id:3, text: 'Angola está localizada no continente africano, na região da África Austral.', correct: false},
            {id:4, text: 'Elefante', correct: false}
        ]
    },
    {
        question: 'Qual é a importância do 11 de Novembro para os angolanos?',
        answers: [
            {id:1, text: 'Tubarão', correct: false},
            {id:2, text: 'Baleia Azul', correct: false},
            {id:3, text: ' a conquista da soberania e independência nacional.', correct: true},
            {id:4, text: 'Elefante', correct: false}
        ]
    },
    {
        question: 'Qual é o hino nacional de Angola?',
        answers: [
            {id:1, text: 'Tubarão', correct: false},
            {id:2, text: 'Baleia Azul', correct: false},
            {id:3, text: 'Angola Avante', correct: true},
            {id:4, text: 'Elefante', correct: false}
        ]
    },
    {
        question: 'Quais são as cores da bandeira de Angola?',
        answers: [
            {id:1, text: 'Tubarão', correct: false},
            {id:2, text: 'Baleia Azul', correct: false},
            {id:3, text: 'Angola está localizada no continente africano, na região da África Austral.', correct: false},
            {id:4, text: 'Vermelho, preto e amarelo.', correct: true}
        ]
    },
    {
        question: 'O que simboliza o vermelho da bandeira?',
        answers: [
            {id:1, text: 'Tubarão', correct: false},
            {id:2, text: 'Baleia Azul', correct: false},
            {id:3, text: ' Tradicionalmente, representa o sangue derramado pelos angolanos durante a luta de libertação nacional e na defesa da pátria.', correct: true},
            {id:4, text: 'Elefante', correct: false}
        ]
    },
    {
        question: 'O que simboliza o preto?',
        answers: [
            {id:1, text: 'Representa o continente africano.', correct: true},
            {id:2, text: 'Baleia Azul', correct: false},
            {id:3, text: 'Angola está localizada no continente africano, na região da África Austral.', correct: false},
            {id:4, text: 'Elefante', correct: false}
        ]
    },
    {
        question: 'O que simboliza o amarelo?',
        answers: [
            {id:1, text: 'Tubarão', correct: false},
            {id:2, text: 'Baleia Azul', correct: false},
            {id:3, text: 'Representa as riquezas do país', correct: true},
            {id:4, text: 'Elefante', correct: false}
        ]
    },
    {
        question: 'Quais elementos aparecem no centro da bandeira de Angola?',
        answers: [
            {id:1, text: 'Tubarão', correct: false},
            {id:2, text: 'Baleia Azul', correct: false},
            {id:3, text: 'Uma roda dentada, uma catana e uma estrela', correct: true},
            {id:4, text: 'Elefante', correct: false}
        ]
    },
    {
        question: 'Qual é a importância da paz para Angola?',
        answers: [
            {id:1, text: 'Tubarão', correct: false},
            {id:2, text: 'Baleia Azul', correct: false},
            {id:3, text: 'A paz permitiu consolidar a estabilidade nacional, promover a reconstruçãodas infraestruturas e criar melhores condições para o desenvolvimento económico esocial.', correct: true},
            {id:4, text: 'Elefante', correct: false}
        ]
    },
    {
        question: 'Qual é a língua oficial de Angola?',
        answers: [
            {id:1, text: 'Tubarão', correct: false},
            {id:2, text: 'Baleia Azul', correct: false},
            {id:3, text: 'O português.', correct: true},
            {id:4, text: 'Elefante', correct: false}
        ]
    },
   
]

console.log(questions.length)

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

/*Mostando as quiz tons to quiz */
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
    answers = questions[currentQuestionIndex].answers
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