const questions =[
    [ 'NOÇÕES SOBRE A HISTÓRIA DE ANGOLA',
        {
        question: 'Em que continente está localizada Angola?',
        answers: [
            {id:1, text: 'continente Europel', correct: false},
            {id:2, text: 'continente Americano', correct: false},
            {id:3, text: ' continente africano, na região da África Austral.', correct: true},
            {id:4, text: 'continente Australiano', correct: false}
        ]
    },
    {
        question: 'Qual é a capital de Angola?',
        answers: [
            {id:1, text: 'Huambo', correct: false},
            {id:2, text: 'Benguela', correct: false},
            {id:3, text: 'Malange', correct: false},
            {id:4, text: 'Luanda', correct: true}
        ]
    },
    {
        question: 'Quais países fazem fronteira terrestre com Angola?',
        answers: [
            {id:1, text: 'República Democrática do Congo, República do Congo, Zâmbia e Cuba', correct: false},
            {id:2, text: ' República Democrática do Congo, República do Congo, Zâmbia e Namíbia', correct: true},
            {id:3, text: 'Gabão, República do Congo, Zâmbia e Namíbia', correct: false},
            {id:4, text: 'República Democrática do Congo, República do Congo, Africa do sul e Namíbia', correct: false}
        ]
    },
    {
        question: 'Quando foi proclamada a Independência Nacional de Angola?',
        answers: [
            {id:1, text: '12 de Dezembro de 1977', correct: false},
            {id:2, text: '12 de Fevereiro de 1976', correct: false},
            {id:3, text: '11 de Novembro de 1976', correct: false},
            {id:4, text: ' 11 de Novembro de 1975', correct: true}
        ]
    },
    {
        question: 'Quem proclamou a Independência de Angola?',
        answers: [
            {id:1, text: 'António Agostinho Neto.', correct: true},
            {id:2, text: 'Lucio Lara', correct: false},
            {id:3, text: 'Jonas Savimbe', correct: false},
            {id:4, text: 'Jose Eduardo dos santos', correct: false}
        ]
    },
    {
        question: 'Qual era o nome oficial de Angola durante o período colonial?',
        answers: [
            {id:1, text: 'Republica de Angola', correct: false},
            {id:2, text: 'Colonia Angolana', correct: false},
            {id:3, text: 'Província de Angola', correct: false},
            {id:4, text: 'Província Ultramarina de Angola ', correct: true}
        ]
    },
    {
        question: 'Durante aproximadamente quanto tempo Angola esteve sob domínio colonial português?',
        answers: [
            {id:1, text: 'Durante 20 anos', correct: false},
            {id:2, text: 'Menos de 150 anos, até à proclamação da Independência em 1975', correct: false},
            {id:3, text: 'Durante vários séculos, até à proclamação da Independência em 1975', correct: true},
            {id:4, text: 'Menos de 100 anos, até à proclamação da Independência em 1975', correct: false}
        ]
    },
    {
        question: 'Quais foram os principais movimentos de libertação nacional de Angola?',
        answers: [
            {id:1, text: '•MPLA; •FNLA;  •CASA-C;', correct: false},
            {id:2, text: '•MPLA;•UNITA; •CASA-C;', correct: false},
            {id:3, text: '•MPLA; •FNLA; •UNITA;', correct: true},
            {id:4, text: ' •FNLA; •UNITA; •CASA-C;', correct: false}
        ]
    },
    {
        question: ' O que significa MPLA?',
        answers: [
            {id:1, text: 'Movimento Popular de Angola.', correct: false},
            {id:2, text: 'Movimento Popular da Luta de Libertação de Angola.', correct: false},
            {id:3, text: 'Movimento de Libertação de Angola.', correct: false},
            {id:4, text: ' Movimento Popular de Libertação de Angola.', correct: true}
        ]
    },
    {
        question: ' O que significa FNLA?',
        answers: [
            {id:1, text: 'Frente Nacional  de Angola', correct: false},
            {id:2, text: 'Frente Nacional da Luta de Libertação de Angola', correct: false},
            {id:3, text: 'Frente Nacional de Libertação de Angola', correct: true},
            {id:4, text: 'Frente  de Libertação de Angola', correct: false}
        ]
    },
    {
        question: 'O que significa UNITA?',
        answers: [
            {id:1, text: 'União Nacional para a Independência Total de Angola.', correct: true},
            {id:2, text: 'União  para a Independência Total de Angola.', correct: false},
            {id:3, text: 'União Nacional para a Independêncide Angola.', correct: false},
            {id:4, text: 'União Nacional de Angola.', correct: false}
        ]
    },
    {
        question: 'Quem foi o primeiro Presidente de Angola?',
        answers: [
            {id:1, text: ' António Agostinho Neto.', correct: true},
            {id:2, text: 'jose Eduardo Dos Santos', correct: false},
            {id:3, text: 'Jonas Savimbe', correct: false},
            {id:4, text: 'Lucio Lara', correct: false}
        ]
    },
    {
        question: 'Quando começou a luta armada de libertação nacional em Angola?',
        answers: [
            {id:1, text: '04 de Março de 1961', correct: false},
            {id:2, text: '4 de Fevereiro de 1961', correct: true},
            {id:3, text: '4 de Fevereiro de 1975', correct: false},
            {id:4, text: '5 de Fevereiro de 1961', correct: false}
        ]
    },
    {
        question: 'O que aconteceu em 4 de Fevereiro de 1961?',
        answers: [
            {id:1, text: 'Ocorreram despaches contra estabelecimentos coloniais em Luanda, data que passou a ser considerada um marco do início da luta armada de libertação nacional em Angola', correct: false},
            {id:2, text: 'Ocorreram ataques contra estabelecimentos coloniais em Luanda, data que passou a ser considerada um marco do início da luta armada de libertação nacional em Angola', correct: true},
            {id:3, text: 'Jonas Savimbe começou a bombardear a unita', correct: false},
            {id:4, text: 'Ocorreram ataques contra estabelecimentos coloniais em Malange, data que passou a ser considerada um marco do início da luta armada de libertação nacional em Angola', correct: false}
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
    },],
    [ 'ORGANIZAÇÃO POLÍTICA E ADMINISTRATIVA DA REPÚBLICA DE ANGOLA',
        {
        question: 'Qual é a forma de Estado de Angola?',
        answers: [
            {id:1, text: 'continente Europel', correct: false},
            {id:2, text: 'continente Americano', correct: false},
            {id:3, text: ' continente africano, na região da África Austral', correct: false},
            {id:4, text: 'Angola é um Estado unitário e soberano', correct: true}
        ]
    },
    {
        question: 'Qual é a lei fundamental da República de Angola?',
        answers: [
            {id:1, text: 'Huambo', correct: false},
            {id:2, text: 'Benguela', correct: false},
            {id:3, text: 'A Constituição da República de Angola.', correct: true},
            {id:4, text: 'Luanda', correct: false}
        ]
    },
    {
        question: 'Quais países fazem fronteira terrestre com Angola?',
        answers: [
            {id:1, text: 'República Democrática do Congo, República do Congo, Zâmbia e Cuba', correct: false},
            {id:2, text: ' República Democrática do Congo, República do Congo, Zâmbia e Namíbia', correct: true},
            {id:3, text: 'Gabão, República do Congo, Zâmbia e Namíbia', correct: false},
            {id:4, text: 'República Democrática do Congo, República do Congo, Africa do sul e Namíbia', correct: false}
        ]
    },
    {
        question: 'Quando foi proclamada a Independência Nacional de Angola?',
        answers: [
            {id:1, text: '12 de Dezembro de 1977', correct: false},
            {id:2, text: '12 de Fevereiro de 1976', correct: false},
            {id:3, text: '11 de Novembro de 1976', correct: false},
            {id:4, text: ' 11 de Novembro de 1975', correct: true}
        ]
    },
    {
        question: 'Quem proclamou a Independência de Angola?',
        answers: [
            {id:1, text: 'António Agostinho Neto.', correct: true},
            {id:2, text: 'Lucio Lara', correct: false},
            {id:3, text: 'Jonas Savimbe', correct: false},
            {id:4, text: 'Jose Eduardo dos santos', correct: false}
        ]
    },
    {
        question: 'Qual era o nome oficial de Angola durante o período colonial?',
        answers: [
            {id:1, text: 'Republica de Angola', correct: false},
            {id:2, text: 'Colonia Angolana', correct: false},
            {id:3, text: 'Província de Angola', correct: false},
            {id:4, text: 'Província Ultramarina de Angola ', correct: true}
        ]
    },
    {
        question: 'Durante aproximadamente quanto tempo Angola esteve sob domínio colonial português?',
        answers: [
            {id:1, text: 'Durante 20 anos', correct: false},
            {id:2, text: 'Menos de 150 anos, até à proclamação da Independência em 1975', correct: false},
            {id:3, text: 'Durante vários séculos, até à proclamação da Independência em 1975', correct: true},
            {id:4, text: 'Menos de 100 anos, até à proclamação da Independência em 1975', correct: false}
        ]
    },
    {
        question: 'Quais foram os principais movimentos de libertação nacional de Angola?',
        answers: [
            {id:1, text: '•MPLA; •FNLA;  •CASA-C;', correct: false},
            {id:2, text: '•MPLA;•UNITA; •CASA-C;', correct: false},
            {id:3, text: '•MPLA; •FNLA; •UNITA;', correct: true},
            {id:4, text: ' •FNLA; •UNITA; •CASA-C;', correct: false}
        ]
    },
    {
        question: ' O que significa MPLA?',
        answers: [
            {id:1, text: 'Movimento Popular de Angola.', correct: false},
            {id:2, text: 'Movimento Popular da Luta de Libertação de Angola.', correct: false},
            {id:3, text: 'Movimento de Libertação de Angola.', correct: false},
            {id:4, text: ' Movimento Popular de Libertação de Angola.', correct: true}
        ]
    },
    {
        question: ' O que significa FNLA?',
        answers: [
            {id:1, text: 'Frente Nacional  de Angola', correct: false},
            {id:2, text: 'Frente Nacional da Luta de Libertação de Angola', correct: false},
            {id:3, text: 'Frente Nacional de Libertação de Angola', correct: true},
            {id:4, text: 'Frente  de Libertação de Angola', correct: false}
        ]
    },
    {
        question: 'O que significa UNITA?',
        answers: [
            {id:1, text: 'União Nacional para a Independência Total de Angola.', correct: true},
            {id:2, text: 'União  para a Independência Total de Angola.', correct: false},
            {id:3, text: 'União Nacional para a Independêncide Angola.', correct: false},
            {id:4, text: 'União Nacional de Angola.', correct: false}
        ]
    },
    {
        question: 'Quem foi o primeiro Presidente de Angola?',
        answers: [
            {id:1, text: ' António Agostinho Neto.', correct: true},
            {id:2, text: 'jose Eduardo Dos Santos', correct: false},
            {id:3, text: 'Jonas Savimbe', correct: false},
            {id:4, text: 'Lucio Lara', correct: false}
        ]
    },
    {
        question: 'Quando começou a luta armada de libertação nacional em Angola?',
        answers: [
            {id:1, text: '04 de Março de 1961', correct: false},
            {id:2, text: '4 de Fevereiro de 1961', correct: true},
            {id:3, text: '4 de Fevereiro de 1975', correct: false},
            {id:4, text: '5 de Fevereiro de 1961', correct: false}
        ]
    },
    {
        question: 'O que aconteceu em 4 de Fevereiro de 1961?',
        answers: [
            {id:1, text: 'Ocorreram despaches contra estabelecimentos coloniais em Luanda, data que passou a ser considerada um marco do início da luta armada de libertação nacional em Angola', correct: false},
            {id:2, text: 'Ocorreram ataques contra estabelecimentos coloniais em Luanda, data que passou a ser considerada um marco do início da luta armada de libertação nacional em Angola', correct: true},
            {id:3, text: 'Jonas Savimbe começou a bombardear a unita', correct: false},
            {id:4, text: 'Ocorreram ataques contra estabelecimentos coloniais em Malange, data que passou a ser considerada um marco do início da luta armada de libertação nacional em Angola', correct: false}
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
    },],
   
]

export {questions}