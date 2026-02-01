// Array de objetos com as perguntas (estrutura de dados dinâmica)
// Cada objeto tem enunciado, opcoes (array) e respostaCorreta (índice da correta)
const questions = [
    {
        enunciado: "Qual é o nome da personagem principal no filme Barbie (2023)?",
        opcoes: [
            { texto: "Stereotypical Barbie"},
            { texto: "Ken"},
            { texto: "Margot Robbie como Barbie"},
            { texto: "Sasha"}
        ],
        respostaCorreta: 2 // Margot Robbie como Barbie
    },

    {
    enunciado: "Em 'Barbie em Rapunzel', qual é o talento especial da Barbie/Rapunzel?",
    opcoes: [
        { texto: "Pintar quadros mágicos" },
        { texto: "Cantar para encantar animais" },
        { texto: "Dançar para abrir portais" },
        { texto: "Criar joias mágicas" }
    ],
    respostaCorreta: 0 // Pintar quadros mágicos
},

    {
    enunciado: "Qual é o nome da protagonista em 'Barbie em A Princesa da Ilha'?",
    opcoes: [
        { texto: "Genevieve" },
        { texto: "Rosella" },
        { texto: "Elina" },
        { texto: "Anneliese" }
    ],
    respostaCorreta: 1 // Rosella
},

    {
    enunciado: "Em 'Barbie e o Castelo de Diamante', quais são os nomes das duas amigas protagonistas?",
    opcoes: [
        { texto: "Liana e Alexa" },
        { texto: "Liana e Anneliese" },
        { texto: "Liana e Rosella" },
        { texto: "Liana e Genevieve" }
    ],
    respostaCorreta: 0 // Liana e Alexa
},

     {
        enunciado: "Qual foi o primeiro filme da Barbie lançado?",
        opcoes: [
            { texto: "Barbie em O Quebra-Nozes"},
            { texto: "Barbie Fairytopia"},
            { texto: "Barbie e as 12 Princesas Bailarinas"},
            { texto: "Barbie em A Princesa e a Plebeia"}
        ],
        respostaCorreta: 0 // Barbie em O Quebra-Nozes
    },

     {
        enunciado: "Em 'Barbie em A Princesa e a Plebeia', quais são os nomes das protagonistas?",
        opcoes: [
            { texto: "Clara e Odette"},
            { texto: "Rapunzel e Rosella"},
            { texto: "Genevieve e Liana"},
            { texto: "Anneliese e Erika"}
        ],
        respostaCorreta: 3 // Anneliese e Erika
    },

    {
        enunciado: "Qual música icônica é cantada no filme Barbie (2023)?",
        opcoes: [
            { texto: "Man I Am"},
            { texto: "Dance The Night"},
            { texto: "What Was I Made For?"},
            { texto: "Angel"}
        ],
        respostaCorreta: 1 // Dance The Night
    },
    {
        enunciado: "Em Barbie: A Princesa e a Plebeia, qual é o nome da plebeia?",
        opcoes: [
            { texto: "Anneliese"},
            { texto: "Erika"},
            { texto: "Preminger"},
            { texto: "Julian"}
        ],
        respostaCorreta: 1 // Erika
    },

    {
        enunciado: "Em 'Barbie e as 12 Princesas Bailarinas', qual é o nome da protagonista?",
        opcoes: [
            { texto: "Odette"},
            { texto: "Genevieve"},
            { texto: "Merliah"},
            { texto: "Rosella"}
        ],
        respostaCorreta: 1 // Genevieve
    },

    {
        enunciado: "Qual desses filmes da Barbie se passa em uma ilha deserta?",
        opcoes: [
            { texto: "Barbie em A Princesa da Ilha"},
            { texto: "Barbie e o Castelo de Diamante"},
            { texto: "Barbie Fairytopia"},
            { texto: "Barbie em O Quebra-Nozes"}
        ],
        respostaCorreta: 0 // Barbie em A Princesa da Ilha
    },
    
    {
        enunciado: "Qual filme da Barbie apresenta a personagem Odette?",
        opcoes: [
            { texto: "Barbie em Rapunzel"},
            { texto: "Barbie em O Lago dos Cisnes"},
            { texto: "Barbie Fairytopia"},
            { texto: "Barbie em O Quebra-Nozes"}
        ],
        respostaCorreta: 1 // Barbie em O Lago dos Cisnes
    },
   
    {
        enunciado: "Em 'Barbie Fairytopia', qual é o nome da fada protagonista?",
        opcoes: [
            { texto: "Genevieve"},
            { texto: "Merliah"},
            { texto: "Elina"},
            { texto: "Rosella"}
        ],
        respostaCorreta: 2 // Elina
    },

     {
        enunciado: "Qual filme da Barbie mostra uma sereia chamada Merliah?",
        opcoes: [
            { texto: "Barbie em Um Conto de Sereia"},
            { texto: "Barbie em A Sereia das Pérolas"},
            { texto: "Barbie em A Princesa da Ilha"},
            { texto: "Barbie em O Lago dos Cisnes"}
        ],
        respostaCorreta: 0 // Barbie em Um Conto de Sereia
    },

     {
        enunciado: "Em 'Barbie em A Princesa e a Popstar', qual é o tema central?",
        opcoes: [
            { texto: "Mundo subaquático"},
            { texto: "Batalha contra bruxas"},
            { texto: "Viagem no tempo"},
            { texto: "Troca de identidades"}
        ],
        respostaCorreta: 3 // Troca de identidades
    },

    {
        enunciado: "Qual filme da Barbie apresenta a personagem Lumina?",
        opcoes: [
            { texto: "Barbie e o Castelo de Diamante"},
            { texto: "Barbie Fairytopia"},
            { texto: "Barbie em A Princesa da Ilha"},
            { texto: "Barbie em A Sereia das Pérolas"}
        ],
        respostaCorreta: 3 // Barbie em A Sereia das Pérolas
    },
    
    {
        enunciado: "Em 'Barbie e o Portal Secreto', qual é o nome da princesa protagonista?",
        opcoes: [
            { texto: "Elina"},
            { texto: "Rosella"},
            { texto: "Alexa"},
            { texto: "Genevieve"}
        ],
        respostaCorreta: 2 // Alexa
    },

    {
        enunciado: "Quem dublou a voz de Barbie em muitos filmes antigos?",
        opcoes: [
            { texto: "Margot Robbie"},
            { texto: "Kate McKinnon"},
            { texto: "America Ferrera"},
            { texto: "Diana Ross"}
        ],
        respostaCorreta: 3 // Diana Ross (em alguns, mas ajuste se necessário; usei como exemplo)
    }
];

// Resultados baseados na pontuação (níveis de fã)
const results = {
    iniciante: {
        titulo: "Fã Iniciante de Barbie",
        descricao: "Você conhece o básico, mas há muito mais magia para descobrir nos filmes!",
    },
    intermediario: {
        titulo: "Fã Intermediário de Barbie",
        descricao: "Bom conhecimento! Você sabe sobre personagens e músicas, mas pode explorar mais.",
    },
    especialista: {
        titulo: "Especialista em Barbie",
        descricao: "Você é um verdadeiro expert! Conhece tudo sobre os filmes, personagens e músicas.",
    }
};

// Variáveis globais
let currentQuestionIndex = 0;
let userAnswers = [];

// Função para carregar a pergunta atual
function loadQuestion() {
    const container = document.getElementById('quiz-container');
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    const messageDiv = document.getElementById('message');
    
    // Limpar container e mensagens
    container.innerHTML = '';
    messageDiv.innerHTML = '';
    
    // Atualizar progresso
    const progressPercent = ((currentQuestionIndex) / questions.length) * 100;
    progressFill.style.width = `${progressPercent}%`;
    progressText.textContent = ` ${currentQuestionIndex + 1} de ${questions.length}`;
    
    // Se todas as perguntas foram respondidas, mostrar resultado
    if (currentQuestionIndex >= questions.length) {
        showResult();
        return;
    }
    
    const q = questions[currentQuestionIndex];
    
    // Criar div da pergunta
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';
    
    const enunciado = document.createElement('h3');
    enunciado.textContent = q.enunciado;
    questionDiv.appendChild(enunciado);
    
    // Criar opções
    q.opcoes.forEach((opcao, i) => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'option';
    optionDiv.dataset.index = i;
    
    const text = document.createElement('span');
    text.textContent = opcao.texto;
    optionDiv.appendChild(text);
    
    // Evento de clique
    optionDiv.addEventListener('click', () => selectOption(optionDiv));
    questionDiv.appendChild(optionDiv);
});
       
    container.appendChild(questionDiv);
}

// Função para selecionar uma opção
function selectOption(selectedDiv) {
    const questionDiv = selectedDiv.parentElement;
    const options = questionDiv.querySelectorAll('.option');
    
    // Remover seleção anterior
    options.forEach(opt => opt.classList.remove('selected'));
    
    // Selecionar a atual
    selectedDiv.classList.add('selected');
    
    // Armazenar resposta
    userAnswers[currentQuestionIndex] = parseInt(selectedDiv.dataset.index);
    
    // Avançar automaticamente após 1 segundo
    setTimeout(() => {
        nextQuestion();
    }, 1000);
}

// Função para avançar para a próxima pergunta
function nextQuestion() {
    // Animação de saída
    const questionDiv = document.querySelector('.question');
    questionDiv.classList.add('fade-out');
    
    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 500);
}

// Função para mostrar o resultado final (com validação e cores)
function showResult() {
    const container = document.getElementById('quiz-container');
    const messageDiv = document.getElementById('message');
    
    // Verificar se todas foram respondidas (validação)
    let allAnswered = userAnswers.length === questions.length && userAnswers.every(ans => ans !== undefined);
    if (!allAnswered) {
        messageDiv.textContent = 'Erro: Responda todas as perguntas antes de finalizar!';
        messageDiv.style.color = 'red';
        currentQuestionIndex = questions.length - 1; // Voltar para última
        loadQuestion();
        return;
    }
    
    // Calcular pontuação e aplicar cores
    let score = 0;
    questions.forEach((q, index) => {
        const selectedIndex = userAnswers[index];
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `<h3>${q.enunciado}</h3>`;
        
        q.opcoes.forEach((opcao, i) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.innerHTML = `<span>${opcao.texto}</span>`;
            
            if (i === q.respostaCorreta) {
                optionDiv.classList.add('correct');
            } else if (i === selectedIndex) {
                optionDiv.classList.add('incorrect');
            }
            
            questionDiv.appendChild(optionDiv);
        });
        
        container.appendChild(questionDiv);
        
        if (selectedIndex === q.respostaCorreta) score++;
    });
    
    // Determinar nível de fã
    let resultKey = 'iniciante';
    if (score >= 5 && score < 16) resultKey = 'intermediario';
    else if (score === 17) resultKey = 'especialista';
    
    const result = results[resultKey];
    
    // Criar resumo/parte final
    
    const resultDiv = document.createElement('div');
    resultDiv.className = 'result';
    resultDiv.innerHTML = `
        <alt="${result.titulo}">
        <h2>${result.titulo}</h2>
        <p>${result.descricao}</p>
        <p>Você acertou ${score} de ${questions.length} perguntas!</p>
        <button onclick="restartQuiz()">Refazer Quiz</button>`;
    
    container.appendChild(resultDiv);
    messageDiv.textContent = '✨Quiz concluído! Veja suas respostas e resultado abaixo.✨';
    messageDiv.style.color = 'deeppink'; //Rosinha meio pink
}

// Função para reiniciar o quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    userAnswers = [];
    loadQuestion();
}

// Carregar a primeira pergunta
window.addEventListener('DOMContentLoaded', loadQuestion);