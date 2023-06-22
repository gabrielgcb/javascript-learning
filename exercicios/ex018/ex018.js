var numeroGerado = Math.floor((Math.random() * 100) + 1);

function gerarNumero() {
    var palpite = Number(window.prompt("Qual é o seu palpite?"));
    var resposta = window.document.getElementById('res');
    var botao = window.document.getElementById('botao');
    
    if(palpite < numeroGerado) {
        resposta.innerHTML += `<p>Você falou ${palpite}. Meu número é <strong>MAIOR!</strong></p>`;
    } else if(palpite > numeroGerado) {
        resposta.innerHTML += `<p>Você falou ${palpite}. Meu número é <strong>MENOR!</strong></p>`;
    } else if(palpite === numeroGerado) {
        resposta.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${numeroGerado}!</p>`;
        botao.style.visibility = 'hidden';
    }
}

