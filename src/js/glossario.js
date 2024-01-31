
const links = document.querySelectorAll(" .link");
const tabs = document.querySelectorAll(" .tabs");

links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Remove a classe ativa de todos os links
    links.forEach(l => l.classList.remove("link--ativo"));

    // Adiciona a classe ativa ao link clicado
    link.classList.add("link--ativo");

    // Obtém o valor do atributo "tab" do link clicado
    const tabId = link.getAttribute("tab");

    // Remove a classe ativa de todas as abas de conteúdo
    tabs.forEach(tab => tab.classList.remove("tab--ativo"));

    // Adiciona a classe ativa à aba de conteúdo correspondente
    const selectedTab = document.querySelector(`.tabs.tab-${tabId}`);
    if (selectedTab) {
      selectedTab.classList.add("tab--ativo");
    }
  });
});                      