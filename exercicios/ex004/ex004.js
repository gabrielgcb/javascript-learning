function exibir() {
    var nome = window.prompt("Qual é o seu nome?");
    var resultado = window.document.getElementById('res');
    resultado.innerHTML = `<p>Olá, <strong>${nome}!</strong> É um prazer te conhecer! ✌️</p>`;
}