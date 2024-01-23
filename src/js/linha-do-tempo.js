const links2 = document.querySelectorAll(" .link2 ");
const tabs2 = document.querySelectorAll(" .tabs");

links2.forEach(link2 => {
  link2.addEventListener("click", (e) => {
    e.preventDefault();

    // Remove a classe ativa de todos os links
    links2.forEach(l => l.classList.remove("link2--ativo"));

    // Adiciona a classe ativa ao link clicado
    link2.classList.add("link2--ativo");

    // Obtém o valor do atributo "tab" do link clicado
    const tabId = link2.getAttribute("tab");

    // Remove a classe ativa de todas as abas de conteúdo
    tabs2.forEach(tab => tab.classList.remove("tab--ativo"));

    // Adiciona a classe ativa à aba de conteúdo correspondente
    const selectedTab = document.querySelector(`.tabs.tab-${tabId}`);
    if (selectedTab) {
      selectedTab.classList.add("tab--ativo");
    }
  });
});