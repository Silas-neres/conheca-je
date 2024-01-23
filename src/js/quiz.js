// innerHTML = `<div id="myModal">
//              <div id="modalContent">
//              <span id="closeModal" onclick="fecharModal()">&times;</span>
//              <p id="explicacao"></p>
//              </div>
//              </div>`

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

var numeroPergunta = 0;
var acertos = 0;
var erros = 0;
var placar = 0;

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
        // Exibir o modal com a explicação
        document.getElementById('explicacao').textContent = pergunta.explicacao;
        document.getElementById('myModal').style.display = 'block';
    } else {
        erros++;
        document.getElementById('explicacao').textContent = pergunta.explicacao;
        document.getElementById('myModal').style.display = 'block';
    }

    numeroPergunta++;

    if (numeroPergunta < perguntas.length) {
        mostrarPergunta();
    } else {
        // O quiz terminou
        document.getElementById('pergunta').textContent = "Quiz terminado!";
        document.getElementById('respostaA').style.display = 'none';
        document.getElementById('respostaB').style.display = 'none';

    }

    document.getElementById('acertos').textContent = acertos;
    document.getElementById('erros').textContent = erros;
    document.getElementById('placar').textContent = erros + acertos;
}

function fecharModal() {
    // Fechar o modal
    document.getElementById('myModal').style.display = 'none';

    // Avançar para a próxima pergunta ou finalizar o quiz
    if (numeroPergunta < perguntas.length) {
        mostrarPergunta();
    } else {
        // O quiz terminou
        document.getElementById('pergunta').textContent = "Quiz terminado!";
        document.getElementById('respostaA').style.display = 'none';
        document.getElementById('respostaB').style.display = 'none';
        // Reiniciar o quiz
        numeroPergunta = 0;
        acertos = 0;
        erros = 0;
    }
}




mostrarPergunta();

