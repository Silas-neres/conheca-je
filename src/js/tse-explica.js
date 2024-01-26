const titulos = [
  "Mesário: importante ator para a transparência e a segurança nas eleições",
  "Representante do TSE destaca resultados de Missão de Observação das eleições regionais da Colômbia",
  "Saiba as diferenças entre as sessões jurisdicional e administrativa do TSE",
  "Mesário: importante ator para a transparência e a segurança nas eleições",
  "Representante do TSE destaca resultados de Missão de Observação das eleições regionais da Colômbia",
  "Saiba as diferenças entre as sessões jurisdicional e administrativa do TSE",
  // Adicione mais títulos conforme necessário
];

const subtitulos = [
  "Os mesários atuam na condução dos trabalhos na seção eleitoral e são peças fundamentais para garantir o sucesso de um lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aspernatur repudiandae consequuntur exercitationem quia ex sed quisquam repellat, ad quas expedita velit obcaecati assumenda modi impedit? Magnam placeat asperiores sunt!",
  "Eleitoras e eleitores da Colômbia foram às urnas no último domingo (29) eleger representantes aos cargos de governador,",
  "As sessões plenárias ordinárias do Tribunal Superior Eleitoral (TSE), realizadas sempre às terças, às 19h,",
  "Os mesários atuam na condução dos trabalhos na seção eleitoral e são peças fundamentais para garantir o sucesso de uma ",
  "Eleitoras e eleitores da Colômbia foram às urnas no último domingo (29) eleger representantes aos cargos de governador,",
  "As sessões plenárias ordinárias do Tribunal Superior Eleitoral (TSE), realizadas sempre às terças, às 19h,",
  // Adicione mais subtítulos conforme necessário
];

let currentIndex = 0;

const tituloElement = document.querySelector(".conheca-je__glossario__fonte-titulo");
const subtituloElement = document.querySelector(".conheca-je__glossario__fonte-subtitulo");

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

  // Adicionar overflow: hidden; para garantir que a altura seja restrita ao tamanho do conteúdo
  tituloElement.style.overflow = 'hidden';
  subtituloElement.style.overflow = 'hidden';
}

atualizarConteudoCard();
