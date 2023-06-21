var contador = 0;
var contagem = window.document.querySelector('section#situacao');

function incrementar() {
    contador += 1;
    contagem.innerHTML = `O contador está com <mark>${contador}</mark> clique(s).`;
}

function zerar() {
    contador = 0;
    contagem.innerHTML = null;
}