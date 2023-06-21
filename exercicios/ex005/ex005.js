function iniciar() {
    window.alert("Seja bem-vindo(a) ao meu site!");
}

function calcular() {
    var numero = window.prompt("Digite um número:");
    var dobroNumero = Number(numero) * 2;
    var metadeNumero = Number(numero) / 2;
    var resultado = window.document.getElementById('res');
    resultado.innerHTML = `<p>O dobro de ${numero} é ${dobroNumero} e a metade é ${metadeNumero}!</p>`;
}