

var perguntas = [
    {
        pergunta: "Fiscaliza os candidatos eleitos",
        respostas: {
            a: "FAZ",
            b: "NÃO FAZ"
        },
        respostaCorreta: "a",
        explicacao: "Acertou! Quem fiscaliza a atuação dos eleitos e denuncia eventuais irregularidades cometidas são os órgãos de controle, como Tribunal de Contas da União e dos estados e dos municípios e o Ministério Público."
    },
    {
        pergunta: "Organiza o processo eleitoral",
        respostas: {
            a: "FAZ",
            b: "NÃO FAZ"
        },
        respostaCorreta: "a",
        explicacao: "Cuida do alistamento eleitoral, votação, apuração dos votos, diplomação dos eleitos etc."
    },
    {
        pergunta: "Envia e-mails informando cancelamento de título",
        respostas: {
            a: "FAZ",
            b: "NÃO FAZ"
        },
        respostaCorreta: "a",
        explicacao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ut, ducimus"
    },
    {
        pergunta: "Define o perfil dos candidatos dos partidos políticos",
        respostas: {
            a: "FAZ",
            b: "NÃO FAZ"
        },
        respostaCorreta: "a",
        explicacao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ut, ducimus"
    },
    {
        pergunta: "Cobra taxa pelos serviços oferecidos",
        respostas: {
            a: "FAZ",
            b: "NÃO FAZ"
        },
        respostaCorreta: "b",
        explicacao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ut, ducimus"
    },
    {
        pergunta: "recusa pedidos de registro de candidatura",
        respostas: {
            a: "FAZ",
            b: "NÃO FAZ"
        },
        respostaCorreta: "b",
        explicacao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ut, ducimus"
    },
    {
        pergunta: "Atua de forma consultiva",
        respostas: {
            a: "FAZ",
            b: "NÃO FAZ"
        },
        respostaCorreta: "a",
        explicacao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ut, ducimus"
    },
    {
        pergunta: "Elege seus própios magistrados(juízes)",
        respostas: {
            a: "FAZ",
            b: "NÃO FAZ"
        },
        respostaCorreta: "b",
        explicacao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ut, ducimus"
    },
    {
        pergunta: "Realiza testes públicos de segurança de urna periodicamente",
        respostas: {
            a: "FAZ",
            b: "NÃO FAZ"
        },
        respostaCorreta: "a",
        explicacao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ut, ducimus"
    },
    {
        pergunta: "Organiza, fiscaliza e realiza eleições, plebiscitos e referendos ",
        respostas: {
            a: "FAZ",
            b: "NÃO FAZ"
        },
        respostaCorreta: "a",
        explicacao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ut, ducimus"
    },
    {
        pergunta: "Examina as contas dos partidos e candidatos",
        respostas: {
            a: "FAZ",
            b: "NÃO FAZ"
        },
        respostaCorreta: "a",
        explicacao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ut, ducimus"
    },
    {
        pergunta: "Cancela o título de eleitor",
        respostas: {
            a: "FAZ",
            b: "NÃO FAZ"
        },
        respostaCorreta: "a",
        explicacao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ut, ducimus"
    },
    {
        pergunta: "Prende qualquer cidadão durante as eleições",
        respostas: {
            a: "FAZ",
            b: "NÃO FAZ"
        },
        respostaCorreta: "b",
        explicacao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ut, ducimus"
    },
    {
        pergunta: "Autoriza os partidos políticos a fiscalizarem todas as etapas da eleição",
        respostas: {
            a: "FAZ",
            b: "NÃO FAZ"
        },
        respostaCorreta: "a",
        explicacao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ut, ducimus"
    },
    {
        pergunta: "Emite a indentificação Civil Nacional (ICN)",
        respostas: {
            a: "FAZ",
            b: "NÃO FAZ"
        },
        respostaCorreta: "a",
        explicacao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ut, ducimus"
    },
    {
        pergunta: "Julga crimes eleitorais(corrupção, lavagem de dinheiro etc.)",
        respostas: {
            a: "FAZ",
            b: "NÃO FAZ"
        },
        respostaCorreta: "a",
        explicacao: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic ut, ducimus"
    },
    // Adicione mais perguntas conforme necessário
];

let numeroPergunta = 0;
let acertos = 0;
let erros = 0;
let placar = 0;

function mostrarPergunta() {
    var pergunta = perguntas[numeroPergunta];
    document.getElementById('pergunta').textContent = pergunta.pergunta;
    document.getElementById('respostaA').textContent = pergunta.respostas.a;
    document.getElementById('respostaB').textContent = pergunta.respostas.b;
}

function verificarResposta(resposta) {
    var pergunta = perguntas[numeroPergunta];

    if (resposta == pergunta.respostaCorreta) {
        acertos++;
    } else {
        erros++;
    }

    // Exibir o modal com a explicação
    document.getElementById('explicacao').textContent = pergunta.explicacao;
    document.getElementById('myModal').style.display = 'block';

    // Atualizar o placar
    document.getElementById('acertos').textContent = acertos;
    document.getElementById('erros').textContent = erros;
    document.getElementById('placar').textContent = acertos + erros;

    // Avançar para a próxima pergunta
    numeroPergunta++;
    if (numeroPergunta < perguntas.length) {
        mostrarPergunta();
    } else {
        // Se não houver mais perguntas, terminar o quiz
        fecharModal();
    }
}


function fecharModal() {
    // Fechar o modal
    document.getElementById('myModal').style.display = 'none';

    // Verificar se há mais perguntas a serem exibidas
    if (numeroPergunta < perguntas.length) {
        mostrarPergunta();
    } else {
        // O quiz terminou, então oculte as opções de resposta
        document.getElementById('respostaA').style.display = 'none';
        document.getElementById('respostaB').style.display = 'none';

        // Exibir mensagem de término do quiz
        document.getElementById('pergunta').textContent = "Quiz terminado!";
    }
}

document.querySelectorAll('.resposta-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      verificarResposta(this.dataset.resposta);
    });
});

document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'none';
});




mostrarPergunta();

