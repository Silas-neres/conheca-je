document.addEventListener("DOMContentLoaded", function() {
    // Selecionando elementos das setas e da lista de links
    const rolarParaCima = document.querySelector(".rolar-up")
    const rolarParaBaixo = document.querySelector(".rolar-down")
    const listaLinks = document.querySelector(".conheca-je__historia__regioes--caixa")

    // Adicionando evento de clique para rolar para cima
    rolarParaCima.addEventListener("click", function() {
      // Rolando para cima
      listaLinks.scrollTop -= 100
    });

    // Adicionando evento de clique para rolar para baixo
    rolarParaBaixo.addEventListener("click", function() {
      // Rolando para baixo
      listaLinks.scrollTop += 100
    });
  });