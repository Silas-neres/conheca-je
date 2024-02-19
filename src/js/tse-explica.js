const titulos = [
  'Saiba a diferença entre recursos ordinário e especial',
  'Saiba como funciona o direito de resposta',
  'Recurso contra expedição de diploma pode afastar candidato eleito',
  'Confira como funciona a representação',
  // Adicione mais títulos conforme necessário
];

const subtitulos = [
  'Recursos jurídicos são acionados a partir da situação eleitoral de cada caso concreto',
  'Pedidos, que estão previstos em lei e cabem para afirmação caluniosa, difamatória, injuriosa ou sabidamente inverídica',
  'Recurso é cabível em caso de inelegibilidade superveniente',
  'Ação ajuizada contra propagação de notícias falsas cresceu muito na Justiça Eleitoral',
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
