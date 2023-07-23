const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
  personagem.addEventListener('mouseenter', () => {

    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    removerSelecaoDoPersonagem();

    personagem.classList.add('selecionado');

    alterarImagemPersonagemSelecionado(personagem);

    const nomePersonagem = document.getElementById('nome-personagem');

    alterarNomePersonagemSelecionado(nomePersonagem, personagem);

  })
})
function alterarNomePersonagemSelecionado(nomePersonagem, personagem) {
  nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
  const imagemPersonagemGrande = document.querySelector('.personagem-grande');
  const idPersonagem = personagem.attributes.id.value;
  imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
  const personagemSelecionado = document.querySelector('.selecionado');
  personagemSelecionado.classList.remove('selecionado');
}