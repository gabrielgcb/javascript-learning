var resposta = window.document.getElementById('res');

function gerarNumero() {
    resposta.innerHTML += `<p>Acabei de pensar no número <mark>${Math.floor(Math.random() * 100) + 1}</mark>!</p>`;
}

function limpar() {
    resposta.innerHTML = null;
}