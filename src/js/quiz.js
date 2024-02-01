
var perguntas = [
  {
    pergunta: "Fiscaliza os candidatos eleitos",
    respostas: {
      a: "FAZ",
      b: "NÃO FAZ"
    },
    respostaCorreta: "a",
    explicacao: "Quem fiscaliza a atuação dos eleitos e denuncia eventuais irregularidades cometidas são os órgãos de controle, como Tribunal de Contas da União e dos estados e dos municípios e o Ministério Público."
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
    explicacao: "A Justiça Eleitoral não envia e-mails a eleitores para comunicar cancelamento de títulos eleitorais."
  },
  {
    pergunta: "Define o perfil dos candidatos dos partidos políticos",
    respostas: {
      a: "FAZ",
      b: "NÃO FAZ"
    },
    respostaCorreta: "a",
    explicacao: "A Justiça Eleitoral não exige um perfil social específico dos candidatos. A Constituição e a Legislação eleitoral estabelecem condições, tais como idade mínima, nacionalidade brasileira e alistamento eleitoral, entre outros."
  },
  {
    pergunta: "Cobra taxa pelos serviços oferecidos",
    respostas: {
      a: "FAZ",
      b: "NÃO FAZ"
    },
    respostaCorreta: "b",
    explicacao: "Apenas em casos de regularização cadastral em virtude do não comparecimento às urnas é que o eleitor ficará sujeito a uma multa mínima de R$ 3,51."
  },
  {
    pergunta: "recusa pedidos de registro de candidatura",
    respostas: {
      a: "FAZ",
      b: "NÃO FAZ"
    },
    respostaCorreta: "b",
    explicacao: "Qualquer candidato, partido político, coligação ou o Ministério Público Eleitoral poderá impugnar os pedidos de registro de candidatura, mediante petição fundamentada, no prazo de cinco dias contados da publicação dos pedidos."
  },
  {
    pergunta: "Atua de forma consultiva",
    respostas: {
      a: "FAZ",
      b: "NÃO FAZ"
    },
    respostaCorreta: "a",
    explicacao: "A JE possui função consultiva, o que permite o seu pronunciamento mesmo sem caráter de decisão judicial, a respeito de questões que lhe são apresentadas em tese, ou seja, de situações abstratas e impessoais.Pode - se dizer que também é uma função de caráter particular da Justiça Eleitoral, haja vista que o Poder Judiciário não é, por natureza, órgão de consulta."
  },
  {
    pergunta: "Elege seus própios magistrados(juízes)",
    respostas: {
      a: "FAZ",
      b: "NÃO FAZ"
    },
    respostaCorreta: "b",
    explicacao: "Em sua esfera, atuam magistrados de outros órgãos como STF, STJ, da Justiça Comum Estadual, evidenciando, assim, a ausência de uma magistratura própria, organizada em carreira"
  },
  {
    pergunta: "Realiza testes públicos de segurança de urna periodicamente",
    respostas: {
      a: "FAZ",
      b: "NÃO FAZ"
    },
    respostaCorreta: "a",
    explicacao: "A Justiça Eleitoral promove periodicamente a realização dos Testes Públicos de Segurança do sistema eletrônico de votação, em busca da colaboração da sociedade brasileira para o aperfeiçoamento da urna eletrônica utilizada nas eleições do país."
  },
  {
    pergunta: "Organiza, fiscaliza e realiza eleições, plebiscitos e referendos ",
    respostas: {
      a: "FAZ",
      b: "NÃO FAZ"
    },
    respostaCorreta: "a",
    explicacao: "A Justiça Eleitoral atua em três esferas: jurisdicional, em que se destaca a competência para julgar questões eleitorais; administrativa, na qual é responsável pela organização e realização de eleições, referendos e plebiscitos; e regulamentar, em que elabora normas referentes ao processo eleitoral."
  },
  {
    pergunta: "Examina as contas dos partidos e candidatos",
    respostas: {
      a: "FAZ",
      b: "NÃO FAZ"
    },
    respostaCorreta: "a",
    explicacao: "De acordo com a Lei dos Partidos Políticos, o partido está obrigado a enviar, anualmente, à Justiça Eleitoral, o balanço contábil do exercício findo, até o dia 30 de abril do ano seguinte. O balanço contábil do órgão nacional será enviado ao Tribunal Superior Eleitoral, o dos órgãos estaduais aos tribunais regionais eleitorais e o dos órgãos municipais aos juízes eleitorais"
  },
  {
    pergunta: "Cancela o título de eleitor",
    respostas: {
      a: "FAZ",
      b: "NÃO FAZ"
    },
    respostaCorreta: "a",
    explicacao: "Será cancelada a inscrição do eleitor que não votar em 3 (três) eleições consecutivas, não pagar a multa ou não se justificar no prazo de 6 (seis) meses, a contar da data da última eleição a que deveria ter comparecido."
  },
  {
    pergunta: "Prende qualquer cidadão durante as eleições",
    respostas: {
      a: "FAZ",
      b: "NÃO FAZ"
    },
    respostaCorreta: "b",
    explicacao: "Nenhuma autoridade poderá, desde 5 (cinco) dias antes e até 48 (quarenta e oito) horas depois do encerramento da eleição, prender ou deter qualquer eleitor, salvo em flagrante delito ou em virtude de sentença criminal condenatória por crime inafiançável, ou, ainda, por desrespeito a salvo-conduto."
  },
  {
    pergunta: "Autoriza os partidos políticos a fiscalizarem todas as etapas da eleição",
    respostas: {
      a: "FAZ",
      b: "NÃO FAZ"
    },
    respostaCorreta: "a",
    explicacao: "Os partidos e as coligações poderão fiscalizar todas as fases do processo de votação e apuração das eleições e o processamento eletrônico da totalização dos resultados."
  },
  {
    pergunta: "Emite a indentificação Civil Nacional (ICN)",
    respostas: {
      a: "FAZ",
      b: "NÃO FAZ"
    },
    respostaCorreta: "a",
    explicacao: "A ICN utilizará a base de dados biométricos da Justiça Eleitoral e a base de dados do Sistema Nacional de Informações de Registro Civil (Sirc). O novo Documento Nacional de Identidade (DNI) terá validade em todo o território nacional e será emitido pela Justiça Eleitoral, pelos institutos de identificação civil dos estados e do Distrito Federal, com certificação da Justiça Eleitoral, e por outros órgãos mediante delegação do Tribunal Superior Eleitoral"
  },
  {
    pergunta: "Julga crimes eleitorais(corrupção, lavagem de dinheiro etc.)",
    respostas: {
      a: "FAZ",
      b: "NÃO FAZ"
    },
    respostaCorreta: "a",
    explicacao: "O plenário do STF ratificou a competência da Justiça Eleitoral para processar e julgar crimes comuns que apresentam conexão com crimes eleitorais. A Corte observou também que cabe à JE analisar, caso a caso, a existência de ligação de delitos comuns aos delitos eleitorais e, em não havendo, remeter os casos à Justiça competente. (STF INQ 4435)"
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
   
    document.getElementById('respostaCorreta').textContent = 'Acertou';
    document.getElementById('explicacao').textContent = pergunta.explicacao;
    document.getElementById('myModal').style.display = 'block';
    
  } else {
    erros++;
   
    document.getElementById('respostaCorreta').textContent = 'Errou';
    document.getElementById('explicacao').textContent =  pergunta.explicacao;   
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

document.getElementById('respostaA').addEventListener('click', function() {
verificarResposta('a');
});

document.getElementById('respostaB').addEventListener('click', function() {
verificarResposta('b');
});

document.getElementById('closeModal').addEventListener('click', function() {
fecharModal();
});



mostrarPergunta();
