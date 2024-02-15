const titulos = [
  'Saiba a diferença entre recursos ordinário e especial',
  'Saiba como funciona o direito de resposta',
  'Recurso contra expedição de diploma pode afastar candidato eleito',
  'Confira como funciona a representação',
  // Adicione mais títulos conforme necessário
];

const subtitulos = [
  'Recursos Ordinários (ROs) e Recursos Especiais Eleitorais (Respes) são examinados com frequência pelo Plenário do Tribunal Superior Eleitoral (TSE). Eles são propostos a partir da publicação das decisões (acórdãos) proferidas pelos Tribunais Regionais Eleitorais (TREs). Apesar de apresentarem semelhanças na tramitação, as duas classes processuais trazem diferenças importantes quanto ao conteúdo do assunto de que tratam.',
  'Nesta quinta-feira (21), o Portal do Tribunal Superior Eleitoral (TSE) começa a publicar a série de reportagens  "TSE Explica", que tem o objetivo de esclarecer dúvidas de eleitores, candidatos e jornalistas sobre os mais diversos temas ligados ao processo eleitoral. Até a semana que vem, a temática abordada será "classes processuais", começando pelo direito de resposta, muito usado no período das eleições contra alegações feitas por adversários.',
  'O Recurso Contra Expedição de Diploma (RCED) pode ser proposto nos casos de inelegibilidade superveniente – que surge após o registro de candidatura – ou de natureza constitucional. O recurso também pode ser ajuizado nas hipóteses de falta de condição de elegibilidade de quem concorre a uma eleição.',
  'Durante a campanha eleitoral, qualquer partido político, coligação, federação partidária, candidata e candidato e o Ministério Público Eleitoral (MP Eleitoral) podem apresentar representações contra a propaganda eleitoral irregular (inclusive que contenham notícias falsas e desinformação). Nesse período de disputa política, as representações proliferam, e, inclusive, tramitam de maneira preferencial em relação aos demais processos que dão entrada na Justiça Eleitoral.',
  // Adicione mais subtítulos conforme necessário
];

const links = [
  'https://www.tse.jus.br/comunicacao/noticias/2022/Outubro/tse-explica-saiba-a-diferenca-entre-recursos-ordinario-e-especial',
  'https://www.tse.jus.br/comunicacao/noticias/2022/Outubro/tse-explica-saiba-como-funciona-o-direito-de-resposta',
  'https://www.tse.jus.br/comunicacao/noticias/2022/Outubro/tse-explica-recurso-contra-expedicao-de-diploma-pode-afastar-candidato-eleito',
  'https://www.tse.jus.br/comunicacao/noticias/2022/Outubro/tse-explica-confira-como-funciona-a-representacao',
]

let currentIndex = 0;

const tituloElement = document.querySelector(".conheca-je__glossario__fonte-titulo");
const subtituloElement = document.querySelector(".conheca-je__glossario__fonte-subtitulo");
const linksElement = document.querySelector(".conheca-je__glossario__fonte-link");

const botaoAnterior = document.getElementById("anterior");
const botaoProximo = document.getElementById("proximo");

botaoAnterior.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + titulos.length) % titulos.length;
  atualizarConteudoCard();
});

botaoProximo.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % titulos.length;
  atualizarConteudoCard();
});

function atualizarConteudoCard() {
  tituloElement.textContent = titulos[currentIndex];
  subtituloElement.textContent = subtitulos[currentIndex];
  linksElement.innerHTML = `<a href="${links[currentIndex]}" class="">Acesse a matéria completa<i class='bx bx-link-external text-xl text-blue-800'></i></a>`;

  // Adicionar overflow: hidden; para garantir que a altura seja restrita ao tamanho do conteúdo
  tituloElement.style.overflow = 'hidden';
  subtituloElement.style.overflow = 'hidden';
  linksElement.style.overflow = 'hidden';
}

atualizarConteudoCard();
