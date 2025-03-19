const questions = [
    {
        question: "Qual é a jornada de trabalho máxima do aprendiz?",
        options: ["6 horas por dia", "8 horas por dia", "12 horas por dia"],
        correctAnswer: 1 // A resposta correta é "6 horas por dia"
    },
    {
        question: "Até que hora o aprendiz pode trabalhar?",
        options: ["22h", "23h", "00h"],
        correctAnswer: 1 // A resposta correta é "22h"
    },
    {
        question: "O aprendiz pode realizar atividades perigosas?",
        options: ["Sim", "Não", "Somente se autorizado"],
        correctAnswer: 2 // A resposta correta é "Não"
    },
    {
        question: "Qual é a idade mínima para ser aprendiz?",
        options: ["14 anos", "16 anos", "18 anos"],
        correctAnswer: 1 // A resposta correta é "14 anos"
    },
    {
        question: "O aprendiz tem direito a férias?",
        options: ["Sim", "Não", "Somente após 1 ano"],
        correctAnswer: 1 // A resposta correta é "Sim"
    }
];

let score = 0;
let currentQuestionIndex = 0;

function startQuiz() {
    // Ocultar botão de início e exibir quiz
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('quizArea').style.display = 'block';
    
    // Iniciar o quiz
    loadQuestion();
}

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    
    // Exibir pergunta e opções
    document.getElementById('question').textContent = currentQuestion.question;
    document.getElementById('option1').textContent = currentQuestion.options[0];
    document.getElementById('option2').textContent = currentQuestion.options[1];
    document.getElementById('option3').textContent = currentQuestion.options[2];
    
    // Limpar feedback
    document.getElementById('feedback').textContent = '';
}

function checkAnswer(option) {
    const currentQuestion = questions[currentQuestionIndex];
    const feedbackElement = document.getElementById('feedback');
    
    // Verifica se a resposta está correta
    if (option === currentQuestion.correctAnswer) {
        score++;
        feedbackElement.textContent = "Resposta Correta!";
        feedbackElement.className = 'feedback correct';
    } else {
        feedbackElement.textContent = "Resposta Errada!";
        feedbackElement.className = 'feedback incorrect';
    }

    // Atualiza a pontuação
    document.getElementById('score').textContent = `Pontuação: ${score}`;

    // Avança para a próxima pergunta após 1 segundo
    setTimeout(() => {
        currentQuestionIndex++;
        
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    // Exibe o resultado final
    document.getElementById('question').textContent = `Quiz Concluído! Sua pontuação é: ${score}`;
    document.getElementById('feedback').textContent = '';
    document.getElementById('score').style.display = 'none';
    document.getElementById('quizArea').style.display = 'none';
    document.getElementById('startButton').style.display = 'block';
    document.getElementById('startButton').textContent = 'Reiniciar Quiz';
}
